import{g as e,f as t,_ as i,p as s,c as n,k as o,I as a,j as r,a as l,m as c,ae as d,h}from"./backend-ai-console-82521713.js";import{B as p}from"./backend-ai-page-ef800f72.js";import"./lablup-loading-indicator-c2458808.js";import"./paper-progress-65dae8f0.js";import"./radio-behavior-9735b631.js";import"./av-icons-412a9e3c.js";import{P as u}from"./paper-dialog-5ef6f083.js";import"./vaadin-grid-79cd4138.js";import"./vaadin-grid-selection-column-3d3cf852.js";import"./vaadin-grid-sorter-bf08a6c9.js";import"./vaadin-grid-sort-column-6aaeab8d.js";import"./backend-ai-indicator-bde910c3.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var g;e({_template:t`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(u)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}}),function(e){e[e.EOS=0]="EOS",e[e.Text=1]="Text",e[e.Incomplete=2]="Incomplete",e[e.ESC=3]="ESC",e[e.Unknown=4]="Unknown",e[e.SGR=5]="SGR",e[e.OSCURL=6]="OSCURL"}(g||(g={}));var m=function(){function e(){this.VERSION="4.0.3",this.setup_palettes(),this._use_classes=!1,this._escape_for_html=!0,this.bold=!1,this.fg=this.bg=null,this._buffer="",this._url_whitelist={http:1,https:1}}return Object.defineProperty(e.prototype,"use_classes",{get:function(){return this._use_classes},set:function(e){this._use_classes=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"escape_for_html",{get:function(){return this._escape_for_html},set:function(e){this._escape_for_html=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url_whitelist",{get:function(){return this._url_whitelist},set:function(e){this._url_whitelist=e},enumerable:!0,configurable:!0}),e.prototype.setup_palettes=function(){var e=this;this.ansi_colors=[[{rgb:[0,0,0],class_name:"ansi-black"},{rgb:[187,0,0],class_name:"ansi-red"},{rgb:[0,187,0],class_name:"ansi-green"},{rgb:[187,187,0],class_name:"ansi-yellow"},{rgb:[0,0,187],class_name:"ansi-blue"},{rgb:[187,0,187],class_name:"ansi-magenta"},{rgb:[0,187,187],class_name:"ansi-cyan"},{rgb:[255,255,255],class_name:"ansi-white"}],[{rgb:[85,85,85],class_name:"ansi-bright-black"},{rgb:[255,85,85],class_name:"ansi-bright-red"},{rgb:[0,255,0],class_name:"ansi-bright-green"},{rgb:[255,255,85],class_name:"ansi-bright-yellow"},{rgb:[85,85,255],class_name:"ansi-bright-blue"},{rgb:[255,85,255],class_name:"ansi-bright-magenta"},{rgb:[85,255,255],class_name:"ansi-bright-cyan"},{rgb:[255,255,255],class_name:"ansi-bright-white"}]],this.palette_256=[],this.ansi_colors.forEach((function(t){t.forEach((function(t){e.palette_256.push(t)}))}));for(var t=[0,95,135,175,215,255],i=0;i<6;++i)for(var s=0;s<6;++s)for(var n=0;n<6;++n){var o={rgb:[t[i],t[s],t[n]],class_name:"truecolor"};this.palette_256.push(o)}for(var a=8,r=0;r<24;++r,a+=10){var l={rgb:[a,a,a],class_name:"truecolor"};this.palette_256.push(l)}},e.prototype.escape_txt_for_html=function(e){return e.replace(/[&<>]/gm,(function(e){return"&"===e?"&amp;":"<"===e?"&lt;":">"===e?"&gt;":void 0}))},e.prototype.append_buffer=function(e){var t=this._buffer+e;this._buffer=t},e.prototype.__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},e.prototype.get_next_packet=function(){var e={kind:g.EOS,text:"",url:""},t=this._buffer.length;if(0==t)return e;var i=this._buffer.indexOf("");if(-1==i)return e.kind=g.Text,e.text=this._buffer,this._buffer="",e;if(i>0)return e.kind=g.Text,e.text=this._buffer.slice(0,i),this._buffer=this._buffer.slice(i),e;if(0==i){if(1==t)return e.kind=g.Incomplete,e;var s=this._buffer.charAt(1);if("["!=s&&"]"!=s)return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;if("["==s){if(this._csi_regex||(this._csi_regex=f(this.__makeTemplateObject(["\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          [                      # CSI\n                          ([<-?]?)              # private-mode char\n                          ([d;]*)                    # any digits or semicolons\n                          ([ -/]?               # an intermediate modifier\n                          [@-~])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          [                      # CSI\n                          [ -~]*                # anything legal\n                          ([\0-:])              # anything illegal\n                        )\n                    "],["\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          \\x1b\\[                      # CSI\n                          ([\\x3c-\\x3f]?)              # private-mode char\n                          ([\\d;]*)                    # any digits or semicolons\n                          ([\\x20-\\x2f]?               # an intermediate modifier\n                          [\\x40-\\x7e])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          \\x1b\\[                      # CSI\n                          [\\x20-\\x7e]*                # anything legal\n                          ([\\x00-\\x1f:])              # anything illegal\n                        )\n                    "]))),null===(a=this._buffer.match(this._csi_regex)))return e.kind=g.Incomplete,e;if(a[4])return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;""!=a[1]||"m"!=a[3]?e.kind=g.Unknown:e.kind=g.SGR,e.text=a[2];var n=a[0].length;return this._buffer=this._buffer.slice(n),e}if("]"==s){if(t<4)return e.kind=g.Incomplete,e;if("8"!=this._buffer.charAt(2)||";"!=this._buffer.charAt(3))return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;this._osc_st||(this._osc_st=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var s=e.raw[0],n=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,o=s.replace(n,"");return new RegExp(o,"g")}
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */(this.__makeTemplateObject(["\n                        (?:                         # legal sequence\n                          (\\)                    # ESC                           |                           # alternate\n                          ()                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\0-]                 # anything illegal\n                          |                           # alternate\n                          [\b-]                 # anything illegal\n                          |                           # alternate\n                          [-]                 # anything illegal\n                        )\n                    "],["\n                        (?:                         # legal sequence\n                          (\\x1b\\\\)                    # ESC \\\n                          |                           # alternate\n                          (\\x07)                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\\x00-\\x06]                 # anything illegal\n                          |                           # alternate\n                          [\\x08-\\x1a]                 # anything illegal\n                          |                           # alternate\n                          [\\x1c-\\x1f]                 # anything illegal\n                        )\n                    "]))),this._osc_st.lastIndex=0;var o=this._osc_st.exec(this._buffer);if(null===o)return e.kind=g.Incomplete,e;if(o[3])return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;var a,r=this._osc_st.exec(this._buffer);if(null===r)return e.kind=g.Incomplete,e;if(r[3])return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;if(this._osc_regex||(this._osc_regex=f(this.__makeTemplateObject(["\n                        ^                           # beginning of line\n                                                    #\n                        ]8;                    # OSC Hyperlink\n                        [ -:<-~]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([!-~]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                        ([!-~]+)              # TEXT capture\n                        ]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                    "],["\n                        ^                           # beginning of line\n                                                    #\n                        \\x1b\\]8;                    # OSC Hyperlink\n                        [\\x20-\\x3a\\x3c-\\x7e]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([\\x21-\\x7e]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                        ([\\x21-\\x7e]+)              # TEXT capture\n                        \\x1b\\]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                    "]))),null===(a=this._buffer.match(this._osc_regex)))return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;e.kind=g.OSCURL,e.url=a[1],e.text=a[2];n=a[0].length;return this._buffer=this._buffer.slice(n),e}}},e.prototype.ansi_to_html=function(e){this.append_buffer(e);for(var t=[];;){var i=this.get_next_packet();if(i.kind==g.EOS||i.kind==g.Incomplete)break;i.kind!=g.ESC&&i.kind!=g.Unknown&&(i.kind==g.Text?t.push(this.transform_to_html(this.with_state(i))):i.kind==g.SGR?this.process_ansi(i):i.kind==g.OSCURL&&t.push(this.process_hyperlink(i)))}return t.join("")},e.prototype.with_state=function(e){return{bold:this.bold,fg:this.fg,bg:this.bg,text:e.text}},e.prototype.process_ansi=function(e){for(var t=e.text.split(";");t.length>0;){var i=t.shift(),s=parseInt(i,10);if(isNaN(s)||0===s)this.fg=this.bg=null,this.bold=!1;else if(1===s)this.bold=!0;else if(22===s)this.bold=!1;else if(39===s)this.fg=null;else if(49===s)this.bg=null;else if(s>=30&&s<38)this.fg=this.ansi_colors[0][s-30];else if(s>=40&&s<48)this.bg=this.ansi_colors[0][s-40];else if(s>=90&&s<98)this.fg=this.ansi_colors[1][s-90];else if(s>=100&&s<108)this.bg=this.ansi_colors[1][s-100];else if((38===s||48===s)&&t.length>0){var n=38===s,o=t.shift();if("5"===o&&t.length>0){var a=parseInt(t.shift(),10);a>=0&&a<=255&&(n?this.fg=this.palette_256[a]:this.bg=this.palette_256[a])}if("2"===o&&t.length>2){var r=parseInt(t.shift(),10),l=parseInt(t.shift(),10),c=parseInt(t.shift(),10);if(r>=0&&r<=255&&l>=0&&l<=255&&c>=0&&c<=255){var d={rgb:[r,l,c],class_name:"truecolor"};n?this.fg=d:this.bg=d}}}}},e.prototype.transform_to_html=function(e){var t=e.text;if(0===t.length)return t;if(this._escape_for_html&&(t=this.escape_txt_for_html(t)),!e.bold&&null===e.fg&&null===e.bg)return t;var i=[],s=[],n=e.fg,o=e.bg;e.bold&&i.push("font-weight:bold"),this._use_classes?(n&&("truecolor"!==n.class_name?s.push(n.class_name+"-fg"):i.push("color:rgb("+n.rgb.join(",")+")")),o&&("truecolor"!==o.class_name?s.push(o.class_name+"-bg"):i.push("background-color:rgb("+o.rgb.join(",")+")"))):(n&&i.push("color:rgb("+n.rgb.join(",")+")"),o&&i.push("background-color:rgb("+o.rgb+")"));var a="",r="";return s.length&&(a=' class="'+s.join(" ")+'"'),i.length&&(r=' style="'+i.join(";")+'"'),"<span"+r+a+">"+t+"</span>"},e.prototype.process_hyperlink=function(e){var t=e.url.split(":");return t.length<1?"":this._url_whitelist[t[0]]?'<a href="'+this.escape_txt_for_html(e.url)+'">'+this.escape_txt_for_html(e.text)+"</a>":""},e}();function f(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var s=e.raw[0],n=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,o=s.replace(n,"");return new RegExp(o)}let _=class extends p{constructor(){super(),this.active=!0,this.condition="running",this.jobs=Object(),this.compute_sessions=Array(),this.terminationQueue=Array(),this.filterAccessKey="",this.sessionNameField="session_name",this.appSupportList=Array(),this.appTemplate=Object(),this.imageInfo=Object(),this._selected_items=Array(),this._boundControlRenderer=this.controlRenderer.bind(this),this._boundUsageRenderer=this.usageRenderer.bind(this),this._boundSessionInfoRenderer=this.sessionInfoRenderer.bind(this),this._boundCheckboxRenderer=this.checkboxRenderer.bind(this),this._boundUserInfoRenderer=this.userInfoRenderer.bind(this),this._boundStatusRenderer=this.statusRenderer.bind(this),this.refreshing=!1,this.is_admin=!1,this.is_superadmin=!1,this._connectionMode="API",this._grid=Object(),this.notification=Object(),this.terminateSessionDialog=Object(),this.terminateSelectedSessionsDialog=Object(),this.enableScalingGroup=!1,this.loadingIndicator=Object(),this.refreshTimer=Object(),this.kernel_labels=Object(),this.statusColorTable=new Proxy({"idle-timeout":"green","user-requested":"green","failed-to-start":"red","creation-failed":"red","self-terminated":"green"},{get:(e,t)=>e.hasOwnProperty(t)?e[t]:"lightgrey"}),this.sshPort=0,this.vncPort=0}static get styles(){return[o,a,r,l`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 240px);
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

        wl-button > wl-icon {
          --icon-size: 24px;
          padding: 0;
        }

        wl-icon {
          --icon-size: 16px;
          padding: 0;
        }

        paper-icon-button.controls-running {
          --paper-icon-button: {
            width: 25px;
            height: 25px;
            min-width: 25px;
            min-height: 25px;
            padding: 3px;
            margin-right: 5px;
          };
        }

        paper-icon-button.apps {
          --paper-icon-button: {
            width: 50px;
            height: 50px;
            min-width: 50px;
            min-height: 50px;
            padding: 3px;
            margin-right: 5px;
          };
        }

        #work-dialog {
          --dialog-height: calc(100vh - 130px);
          right: 0;
          top: 50px;
        }

        #app-dialog {
          --dialog-width: 330px;
        }

        #ssh-dialog {
          --dialog-width: 330px;
        }

        @media screen and (max-width: 899px) {
          #work-dialog {
            left: 0;
            --dialog-width: 100%;
          }
        }

        @media screen and (min-width: 900px) {
          #work-dialog {
            left: 100px;
            --dialog-width: calc(100% - 220px);
          }
        }

        #work-area {
          width: 100%;
          height: calc(100vh - 120px);
          background-color: #222222;
          color: #efefef;
        }

        div.indicator,
        span.indicator {
          font-size: 9px;
          margin-right: 5px;
        }

        div.label,
        span.label {
          font-size: 12px;
        }

        .app-icon {
          margin-left: 5px;
          margin-right: 5px;
        }

        div.configuration {
          width: 70px !important;
        }

        div.configuration iron-icon {
          padding-right: 5px;
        }

        paper-icon-button.apps {
          width: 48px;
          height: 48px;
        }

        .app-icon .label {
          display: block;
          width: 80px;
          text-align: center;
          height: 25px;
        }

        wl-button.multiple-action-button {
          --button-color: var(--paper-red-600);
          --button-color-active: red;
          --button-color-hover: red;
          --button-bg: var(--paper-red-50);
          --button-bg-hover: var(--paper-red-100);
          --button-bg-active: var(--paper-red-600);
          --button-bg-active-flat: var(--paper-red-600);
        }

        div.filters #access-key-filter {
          --paper-input-container-input: {
            font-size: small;
          };
          --paper-input-container-label: {
            font-size: small;
          };
        }
      `]}get _isRunning(){return"running"===this.condition}firstUpdated(){this.loadingIndicator=this.shadowRoot.querySelector("#loading-indicator"),this._grid=this.shadowRoot.querySelector("#list-grid"),this._initializeAppTemplate(),this.refreshTimer=null,fetch("resources/image_metadata.json").then(e=>e.json()).then(e=>{this.imageInfo=e.imageInfo;for(let e in this.imageInfo)this.kernel_labels[e]=[],"label"in this.imageInfo[e]?this.kernel_labels[e]=this.imageInfo[e].label:this.kernel_labels[e]=[]}),window.backendaiclient&&window.backendaiclient.is_admin||(this.shadowRoot.querySelector("#access-key-filter").parentNode.removeChild(this.shadowRoot.querySelector("#access-key-filter")),this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 200px)"),this.notification=window.lablupNotification,this.terminateSessionDialog=this.shadowRoot.querySelector("#terminate-session-dialog"),this.terminateSelectedSessionsDialog=this.shadowRoot.querySelector("#terminate-selected-sessions-dialog"),document.addEventListener("backend-ai-group-changed",e=>this.refreshList(!0,!1))}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{window.backendaiclient.APIMajorVersion<5&&(this.sessionNameField="sess_id"),this.is_admin=window.backendaiclient.is_admin,this.is_superadmin=window.backendaiclient.is_superadmin,this._connectionMode=window.backendaiclient._config._connectionMode,this.enableScalingGroup=window.backendaiclient.supports("scaling-group"),this._refreshJobData()},!0):(window.backendaiclient.APIMajorVersion<5&&(this.sessionNameField="sess_id"),this.is_admin=window.backendaiclient.is_admin,this.is_superadmin=window.backendaiclient.is_superadmin,this._connectionMode=window.backendaiclient._config._connectionMode,this.enableScalingGroup=window.backendaiclient.supports("scaling-group"),this._refreshJobData()))}_initializeAppTemplate(){fetch("resources/app_template.json").then(e=>e.json()).then(e=>{this.appTemplate=e.appTemplate})}refreshList(e=!0,t=!0){return this._refreshJobData(e,t)}async _refreshJobData(e=!1,t=!0){if(await this.updateComplete,!0!==this.active)return;if(!0===this.refreshing)return;let i;switch(this.refreshing=!0,this.loadingIndicator.show(),i="RUNNING",this.condition){case"running":i=["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING"];break;case"finished":i=["TERMINATED","CANCELLED"];break;case"others":i=["TERMINATING","ERROR"];break;default:i=["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING"]}window.backendaiclient.supports("detailed-session-states")&&(i=i.join(","));let s=["session_name","lang","created_at","terminated_at","status","status_info","service_ports","occupied_slots","cpu_used","io_read_bytes","io_write_bytes","access_key"];this.enableScalingGroup&&s.push("scaling_group"),"SESSION"===this._connectionMode&&s.push("user_email"),window.backendaiclient.is_superadmin&&s.push("agent");let n=window.backendaiclient.current_group_id();window.backendaiclient.computeSession.list(s,i,this.filterAccessKey,50,0,n).then(i=>{this.loadingIndicator.hide();let s,n=i.compute_session_list.items;if(void 0!==n&&0!=n.length){let e=this.compute_sessions,t=[];Object.keys(e).map((i,s)=>{t.push(e[i][this.sessionNameField])}),Object.keys(n).map((e,t)=>{let i=n[e],s=JSON.parse(i.occupied_slots);const o=n[e].lang.split("/")[2]||n[e].lang.split("/")[1];n[e].cpu_slot=parseInt(s.cpu),n[e].mem_slot=parseFloat(window.backendaiclient.utils.changeBinaryUnit(s.mem,"g")),n[e].mem_slot=n[e].mem_slot.toFixed(2),n[e].cpu_used_time=this._automaticScaledTime(n[e].cpu_used),n[e].elapsed=this._elapsed(n[e].created_at,n[e].terminated_at),n[e].created_at_hr=this._humanReadableTime(n[e].created_at),n[e].io_read_bytes_mb=this._byteToMB(n[e].io_read_bytes),n[e].io_write_bytes_mb=this._byteToMB(n[e].io_write_bytes);let a=JSON.parse(n[e].service_ports);!0===Array.isArray(a)?n[e].app_services=a.map(e=>e.name):n[e].app_services=[],0===n[e].app_services.length||"running"!=this.condition?n[e].appSupport=!1:n[e].appSupport=!0,"running"===this.condition?n[e].running=!0:n[e].running=!1,"cuda.device"in s&&(n[e].gpu_slot=parseInt(s["cuda.device"])),"cuda.shares"in s&&(n[e].fgpu_slot=parseFloat(s["cuda.shares"]).toFixed(2)),n[e].kernel_image=o,n[e].sessionTags=this._getKernelInfo(i.lang);const r=i.lang.split("/");let l=r[r.length-1].split(":")[1].split("-");void 0!==l[1]?(n[e].baseversion=l[0],n[e].baseimage=l[1],n[e].additional_reqs=l.slice(1,l.length).map(e=>e.toUpperCase())):n[e].baseversion=n[e].tag,this._selected_items.includes(n[e][this.sessionNameField])?n[e].checked=!0:n[e].checked=!1})}if(this.compute_sessions=n,this.refreshing=!1,!0===this.active){if(!0===e){var o=new CustomEvent("backend-ai-resource-refreshed",{detail:{}});document.dispatchEvent(o)}!0===t&&(s="running"===this.condition?5e3:3e4,this.refreshTimer=setTimeout(()=>{this._refreshJobData()},s))}}).catch(e=>{this.loadingIndicator.hide(),console.log(e),e&&e.message&&(this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_humanReadableTime(e){return(e=new Date(e)).toLocaleString()}_getKernelInfo(e){let t=[];if(void 0===e)return[];const i=e.split("/");let s=(i[2]||i[1]).split(":")[0];if(s in this.kernel_labels)t.push(this.kernel_labels[s]);else{const i=e.split("/");let s,n;3===i.length?(s=i[1],n=i[2]):(s="",n=i[1]),n=n.split(":")[0],n=s?s+"/"+n:n,t.push([{category:"Env",tag:`${n}`,color:"lightgrey"}])}return t}_byteToMB(e){return Math.floor(e/1e6)}_byteToGB(e){return Math.floor(e/1e9)}_MBToGB(e){return e/1024}_automaticScaledTime(e){let t=Object(),i=["D","H","M","S"],s=[864e5,36e5,6e4,1e3];for(let n=0;n<s.length;n++)Math.floor(e/s[n])>0&&(t[i[n]]=Math.floor(e/s[n]),e%=s[n]);return 0===Object.keys(t).length&&(t=e>0?{MS:e}:{NODATA:1}),t}_msecToSec(e){return Number(e/1e3).toFixed(0)}_elapsed(e,t){return window.backendaiclient.utils.elapsedTime(e,t)}_indexRenderer(e,t,i){let s=i.index+1;d(h`
        <div>${s}</div>
      `,e)}async sendRequest(e){let t,i;try{"GET"==e.method&&(e.body=void 0),t=await fetch(e.uri,e);let s=t.headers.get("Content-Type");if(i=s.startsWith("application/json")||s.startsWith("application/problem+json")?await t.json():s.startsWith("text/")?await t.text():await t.blob(),!t.ok)throw i}catch(e){}return i}_terminateApp(e){let t=window.backendaiclient._config.accessKey,i={method:"GET",uri:this._getProxyURL()+"proxy/"+t+"/"+e};return this.sendRequest(i).then(t=>{let i=window.backendaiclient._config.accessKey;if(void 0!==t&&404!==t.code){let t={method:"GET",uri:this._getProxyURL()+"proxy/"+i+"/"+e+"/delete"};return this.sendRequest(t)}return Promise.resolve(!0)}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_getProxyURL(){let e="http://127.0.0.1:5050/";return void 0!==window.__local_proxy?e=window.__local_proxy:void 0!==window.backendaiclient._config.proxyURL&&(e=window.backendaiclient._config.proxyURL),e}_showLogs(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"];window.backendaiclient.getLogs(i,s).then(e=>{let t=(new m).ansi_to_html(e.result.logs);setTimeout(()=>{this.shadowRoot.querySelector("#work-title").innerHTML=`${i}`,this.shadowRoot.querySelector("#work-area").innerHTML=`<pre>${t}</pre>`||"No logs.",this.shadowRoot.querySelector("#work-dialog").show()},100)}).catch(e=>{e&&e.message?(this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0)):e&&e.title&&(this.notification.text=c.relieve(e.title),this.notification.show(!0))})}_showAppLauncher(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"],n=t["app-services"];this.appSupportList=[],n.forEach(e=>{e in this.appTemplate?("sshd"!==e||"sshd"===e&&window.isElectron)&&this.appTemplate[e].forEach(e=>{this.appSupportList.push(e)}):["ttyd","ipython"].includes(e)||this.appSupportList.push({name:e,title:e,redirect:"",src:"./resources/icons/default_app.svg"})});let o=this.shadowRoot.querySelector("#app-dialog");o.setAttribute("session-name",i),o.setAttribute("access-key",s),o.positionTarget=e.target,this.shadowRoot.querySelector("#app-dialog").show()}_hideAppLauncher(){this.shadowRoot.querySelector("#app-dialog").hide()}async _open_wsproxy(e,t="jupyter"){if(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready)return!1;let i={endpoint:window.backendaiclient._config.endpoint};if("SESSION"===window.backendaiclient._config.connectionMode?(i.mode="SESSION",i.session=window.backendaiclient._config._session_id):(i.mode="DEFAULT",i.access_key=window.backendaiclient._config.accessKey,i.secret_key=window.backendaiclient._config.secretKey),i.api_version=window.backendaiclient.APIMajorVersion,window.isElectron&&void 0===window.__local_proxy)return this.shadowRoot.querySelector("#indicator").end(),this.notification.text="Proxy is not ready yet. Check proxy settings for detail.",this.notification.show(),Promise.resolve(!1);let s={method:"PUT",body:JSON.stringify(i),headers:{Accept:"application/json","Content-Type":"application/json"},uri:this._getProxyURL()+"conf"};this.shadowRoot.querySelector("#indicator").set(20,"Setting up proxy for the app...");try{let i=await this.sendRequest(s);if(void 0===i)return this.shadowRoot.querySelector("#indicator").end(),this.notification.text="Proxy configurator is not responding.",this.notification.show(),Promise.resolve(!1);let n=i.token;this.shadowRoot.querySelector("#indicator").set(50,"Adding kernel to socket queue...");let o={method:"GET",app:t,uri:this._getProxyURL()+"proxy/"+n+"/"+e+"/add?app="+t};return await this.sendRequest(o)}catch(e){throw e}}_runApp(e){const t=e.target;let i=t.closest("#app-dialog").getAttribute("session-name"),s=t["url-postfix"],n=t["app-name"];null!=n&&(null==s&&(s=""),void 0!==window.backendaiwsproxy&&null!==window.backendaiwsproxy||(this._hideAppLauncher(),this.shadowRoot.querySelector("#indicator").start(),this._open_wsproxy(i,n).then(e=>{"sshd"===n?(this.shadowRoot.querySelector("#indicator").set(100,"Prepared."),this.sshPort=e.port,this._readSSHKey(i),this._openSSHDialog(),setTimeout(()=>{this.shadowRoot.querySelector("#indicator").end()},1e3)):"vnc"===n?(this.shadowRoot.querySelector("#indicator").set(100,"Prepared."),this.vncPort=e.port,this._openVNCDialog(),setTimeout(()=>{this.shadowRoot.querySelector("#indicator").end()},1e3)):e.url&&(this.shadowRoot.querySelector("#indicator").set(100,"Prepared."),setTimeout(()=>{window.open(e.url+s,"_blank"),this.shadowRoot.querySelector("#indicator").end(),console.log(n+" proxy loaded: "),console.log(i)},1e3))})))}async _readSSHKey(e){const t=this.shadowRoot.querySelector("#sshkey-download-link"),i=await window.backendaiclient.download_single(e,"/home/work/id_container"),s=(await i.text()).indexOf("-----"),n=await i.slice(s,i.size,i.type);t.href=window.URL.createObjectURL(n),t.download="id_container"}_runTerminal(e){const t=e.target.closest("#controls")["session-name"];null!=window.backendaiwsproxy&&null!=window.backendaiwsproxy||(this.shadowRoot.querySelector("#indicator").start(),this._open_wsproxy(t,"ttyd").then(e=>{e.url&&(this.shadowRoot.querySelector("#indicator").set(100,"Prepared."),setTimeout(()=>{window.open(e.url,"_blank"),this.shadowRoot.querySelector("#indicator").end(),console.log("Terminal proxy loaded: "),console.log(t)},1e3))}))}_openTerminateSessionDialog(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"];this.terminateSessionDialog.sessionName=i,this.terminateSessionDialog.accessKey=s,this.terminateSessionDialog.show()}_openSSHDialog(){this.shadowRoot.querySelector("#ssh-dialog").show()}_openVNCDialog(){this.shadowRoot.querySelector("#vnc-dialog").show()}_terminateSession(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"];return this.terminationQueue.includes(i)?(this.notification.text="Already terminating the session.",this.notification.show(),!1):(this.notification.text="Terminating session...",this.notification.show(),this._terminateKernel(i,s))}_terminateSessionWithCheck(e){return this.terminationQueue.includes(this.terminateSessionDialog.sessionName)?(this.notification.text="Already terminating the session.",this.notification.show(),!1):(this.notification.text="Terminating session...",this.notification.show(),this._terminateKernel(this.terminateSessionDialog.sessionName,this.terminateSessionDialog.accessKey).then(e=>{this._selected_items=[],this._clearCheckboxes(),this.terminateSessionDialog.hide(),this.notification.text="Session terminated.",this.notification.show();let t=new CustomEvent("backend-ai-resource-refreshed",{detail:"running"});document.dispatchEvent(t)}).catch(e=>{this._selected_items=[],this._clearCheckboxes(),this.terminateSessionDialog.hide(),this.notification.text=c.relieve("Problem occurred during termination."),this.notification.show(!0);let t=new CustomEvent("backend-ai-resource-refreshed",{detail:"running"});document.dispatchEvent(t)}))}_openTerminateSelectedSessionsDialog(e){this.terminateSelectedSessionsDialog.show()}_clearCheckboxes(){[...this.shadowRoot.querySelectorAll("wl-checkbox.list-check")].forEach(e=>{e.removeAttribute("checked")})}_terminateSelectedSessionsWithCheck(){this.notification.text="Terminating sessions...",this.notification.show();let e=this._selected_items.map(e=>this._terminateKernel(e[this.sessionNameField],e.access_key));return this._selected_items=[],Promise.all(e).then(e=>{this.terminateSelectedSessionsDialog.hide(),this._clearCheckboxes(),this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none",this.notification.text="Sessions terminated.",this.notification.show()}).catch(e=>{this.terminateSelectedSessionsDialog.hide(),this._clearCheckboxes(),this.notification.text=c.relieve("Problem occurred during termination."),this.notification.show(!0)})}_terminateSelectedSessions(){this.notification.text="Terminating sessions...",this.notification.show();let e=this._selected_items.map(e=>this._terminateKernel(e[this.sessionNameField],e.access_key));return Promise.all(e).then(e=>{this._selected_items=[],this._clearCheckboxes(),this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none",this.notification.text="Sessions terminated.",this.notification.show()}).catch(e=>{this._selected_items=[],this._clearCheckboxes(),this.notification.text=c.relieve("Problem occurred during termination."),this.notification.show(!0)})}async _terminateKernel(e,t){return this.terminationQueue.push(e),this._terminateApp(e).then(()=>{window.backendaiclient.destroyKernel(e,t).then(e=>{setTimeout(()=>{this.terminationQueue=[],this.refreshList(!0,!1)},1e3)}).catch(e=>{this.refreshList(!0,!1),this.notification.text=c.relieve("Problem occurred during termination."),this.notification.show(!0)})}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=c.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0))})}_hideDialog(e){let t=e.target.closest("wl-dialog");if(t.hide(),"ssh-dialog"===t.id){const e=this.shadowRoot.querySelector("#sshkey-download-link");window.URL.revokeObjectURL(e.href)}}_updateFilterAccessKey(e){this.filterAccessKey=e.target.value,this.refreshTimer&&(clearTimeout(this.refreshTimer),this._refreshJobData())}sessionInfoRenderer(e,t,i){d(h`
        <div class="layout vertical start">
          <div>${i.item[this.sessionNameField]}</div>
          ${i.item.sessionTags?i.item.sessionTags.map(e=>h`
            ${e.map(e=>("Env"===e.category&&(e.category=e.tag,i.item.baseversion&&(e.tag=i.item.baseversion)),h`
                <lablup-shields app="${void 0===e.category?"":e.category}" color="${e.color}" description="${e.tag}"></lablup-shields>
              `))}
          `):h``}
          ${i.item.additional_reqs?h`
            <div class="layout horizontal center wrap">
              ${i.item.additional_reqs.map(e=>h`
                  <lablup-shields app="" color="green" description="${e}"></lablup-shields>
                `)}
            </div>
          `:h``}
        </div>
      `,e)}controlRenderer(e,t,i){d(h`
        <div id="controls" class="layout horizontal flex center"
             .session-name="${i.item[this.sessionNameField]}"
             .access-key="${i.item.access_key}"
             .kernel-image="${i.item.kernel_image}"
             .app-services="${i.item.app_services}">
             ${i.item.appSupport?h`
            <paper-icon-button class="fg controls-running green"
                               @click="${e=>this._showAppLauncher(e)}"
                               icon="vaadin:caret-right"></paper-icon-button>
            <paper-icon-button class="fg controls-running"
                               @click="${e=>this._runTerminal(e)}"
                               icon="vaadin:terminal"></paper-icon-button>
                               `:h``}
             ${"running"===this.condition?h`
            <paper-icon-button class="fg red controls-running"
                               @click="${e=>this._openTerminateSessionDialog(e)}"
                               icon="delete"></paper-icon-button>
                               `:h``}
             ${this._isRunning?h`
            <paper-icon-button class="fg blue controls-running" icon="assignment"
                               @click="${e=>this._showLogs(e)}"
                               on-tap="_showLogs"></paper-icon-button>
             `:h`
            <paper-icon-button disabled class="fg controls-running" icon="assignment"
            ></paper-icon-button>
             `}
        </div>`,e)}usageRenderer(e,t,i){d(h`
        <div class="layout horizontal center flex">
          <iron-icon class="fg blue" icon="hardware:developer-board" style="margin-right:3px;"></iron-icon>
          ${i.item.cpu_used_time.D?h`
          <div class="vertical center-justified center layout">
            <span style="font-size:11px">${i.item.cpu_used_time.D}</span>
            <span class="indicator">day</span>
          </div>`:h``}
          ${i.item.cpu_used_time.H?h`
          <div class="vertical center-justified center layout">
            <span style="font-size:11px">${i.item.cpu_used_time.H}</span>
            <span class="indicator">hour</span>
          </div>`:h``}
          ${i.item.cpu_used_time.M?h`
          <div class="vertical start layout">
            <span style="font-size:11px">${i.item.cpu_used_time.M}</span>
            <span class="indicator">min.</span>
          </div>`:h``}
          ${i.item.cpu_used_time.S?h`
          <div class="vertical start layout">
            <span style="font-size:11px">${i.item.cpu_used_time.S}</span>
            <span class="indicator">sec.</span>
          </div>`:h``}
          ${i.item.cpu_used_time.MS?h`
          <div class="vertical start layout">
            <span style="font-size:11px">${i.item.cpu_used_time.MS}</span>
            <span class="indicator">msec.</span>
          </div>`:h``}
          ${i.item.cpu_used_time.NODATA?h`
          <div class="vertical start layout">
            <span style="font-size:11px">No data</span>
          </div>`:h``}
        </div>
        <div class="layout horizontal center flex">
          <iron-icon class="fg blue" icon="hardware:device-hub" style="margin-right:3px;"></iron-icon>
          <div class="vertical start layout">
            <span style="font-size:9px">${i.item.io_read_bytes_mb}<span class="indicator">MB</span></span>
            <span class="indicator">READ</span>
          </div>
          <div class="vertical start layout">
            <span style="font-size:8px">${i.item.io_write_bytes_mb}<span class="indicator">MB</span></span>
            <span class="indicator">WRITE</span>
          </div>
        </div>`,e)}_toggleCheckbox(e){let t=this._selected_items.findIndex(t=>t[this.sessionNameField]==e[this.sessionNameField]);-1===t?this._selected_items.push(e):this._selected_items.splice(t,1),this._selected_items.length>0?this.shadowRoot.querySelector("#multiple-action-buttons").style.display="block":this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none"}checkboxRenderer(e,t,i){d(h`
        <wl-checkbox class="list-check" style="--checkbox-size:12px;" ?checked="${!0===i.item.checked}" @click="${()=>this._toggleCheckbox(i.item)}"></wl-checkbox>
      `,e)}userInfoRenderer(e,t,i){d(h`
        <div class="layout vertical">
          <span class="indicator">${"API"===this._connectionMode?i.item.access_key:i.item.user_email}</span>
        </div>
      `,e)}statusRenderer(e,t,i){d(h`
        <span style="font-size: 12px;">${i.item.status}</span>
        ${i.item.status_info?h`
        <br />
        <lablup-shields app="" color="${this.statusColorTable[i.item.status_info]}" description="${i.item.status_info}"></lablup-shields>
        `:h``}
      `,e)}render(){return h`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <div class="layout horizontal center filters">
        <div id="multiple-action-buttons" style="display:none;">
          <wl-button outlined class="multiple-action-button" @click="${()=>this._openTerminateSelectedSessionsDialog()}">
            <wl-icon style="--icon-size: 20px;">delete</wl-icon>
            terminate
          </wl-button>
        </div>
        <span class="flex"></span>
        <paper-input id="access-key-filter" type="search" size=30
                     label="access key" no-label-float .value="${this.filterAccessKey}"
                     on-change="_updateFilterAccessKey">
        </paper-input>
      </div>

      <vaadin-grid id="list-grid" theme="row-stripes column-borders compact" aria-label="Session list"
         .items="${this.compute_sessions}">
        ${"running"==this.condition?h`
        <vaadin-grid-column width="40px" flex-grow="0" text-align="center" .renderer="${this._boundCheckboxRenderer}">
        </vaadin-grid-column>
        `:h``}
        <vaadin-grid-column width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>
        ${this.is_admin?h`
          <vaadin-grid-sort-column resizable width="130px" header="${"API"===this._connectionMode?"API Key":"User ID"}" flex-grow="0" path="access_key" .renderer="${this._boundUserInfoRenderer}">
          </vaadin-grid-sort-column>
        `:h``}
        <vaadin-grid-column width="150px" resizable header="Session Info" .renderer="${this._boundSessionInfoRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="90px" flex-grow="0" header="Status" resizable .renderer="${this._boundStatusRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="160px" flex-grow="0" header="Control" .renderer="${this._boundControlRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="160px" flex-grow="0" header="Configuration" resizable>
          <template>
            <template is="dom-if" if="[[item.scaling_group]]">
            <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <iron-icon class="fg green" icon="icons:work"></iron-icon>
                <span>[[item.scaling_group]]</span>
                <span class="indicator">SG</span>
              </div>
            </div>
            </template>
            <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <iron-icon class="fg green" icon="hardware:developer-board"></iron-icon>
                <span>[[item.cpu_slot]]</span>
                <span class="indicator">core</span>
              </div>
              <div class="layout horizontal configuration">
                <iron-icon class="fg green" icon="hardware:memory"></iron-icon>
                <span>[[item.mem_slot]]</span>
                <span class="indicator">GB</span>
              </div>
            </div>
            <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <template is="dom-if" if="[[item.gpu_slot]]">
                  <iron-icon class="fg green" icon="icons:view-module"></iron-icon>
                  <span>[[item.gpu_slot]]</span>
                  <span class="indicator">GPU</span>
                </template>
                <template is="dom-if" if="[[!item.gpu_slot]]">
                  <template is="dom-if" if="[[item.fgpu_slot]]">
                    <iron-icon class="fg green" icon="icons:view-module"></iron-icon>
                    <span>[[item.fgpu_slot]]</span>
                    <span class="indicator">GPU</span>
                  </template>
                </template>
                <template is="dom-if" if="[[!item.gpu_slot]]">
                  <template is="dom-if" if="[[!item.fgpu_slot]]">
                    <iron-icon class="fg green" icon="icons:view-module"></iron-icon>
                    <span>-</span>
                    <span class="indicator">GPU</span>
                  </template>
                </template>
              </div>
              <div class="layout horizontal configuration">
                <iron-icon class="fg green" icon="icons:cloud-queue"></iron-icon>
                <!-- <iron-icon class="fg yellow" icon="device:storage"></iron-icon> -->
                <!-- <span>[[item.storage_capacity]]</span> -->
                <!-- <span class="indicator">[[item.storage_unit]]</span> -->
              </div>
            </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="120px" flex-grow="0" resizable header="Usage" .renderer="${this._boundUsageRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-sort-column resizable auto-width flex-grow="0" header="Starts" path="created_at">
          <template>
            <div class="layout vertical">
              <span>[[item.created_at_hr]]</span>
            </div>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-column width="100px" flex-grow="0" resizable header="Reservation">
          <template>
            <div class="layout vertical">
              <span>[[item.elapsed]]</span>
            </div>
          </template>
        </vaadin-grid-column>
        ${this.is_superadmin?h`
          <vaadin-grid-column auto-width flex-grow="0" resizable header="Agent">
            <template>
              <div class="layout vertical">
                <span>[[item.agent]]</span>
              </div>
            </template>
          </vaadin-grid-column>
            `:h``}
      </vaadin-grid>
      <backend-ai-indicator id="indicator"></backend-ai-indicator>
      <wl-dialog id="work-dialog" fixed blockscrolling scrollable
                    style="padding:0;">
        <wl-card elevation="1" class="intro" style="margin: 0; box-shadow: none; height: 100%;">
          <h3 class="horizontal center layout" style="font-weight:bold">
            <span id="work-title"></span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <paper-dialog-scrollable id="work-area" style="overflow:scroll;"></paper-dialog-scrollable>
          <iframe id="work-page" frameborder="0" border="0" cellspacing="0"
                  style="border-style: none;width: 100%;"></iframe>

        </wl-card>
      </wl-dialog>
      <wl-dialog id="app-dialog" fixed backdrop blockscrolling
                    style="padding:0;">
        <wl-card elevation="1" class="intro" style="margin: 0; height: 100%;">
          <h4 class="horizontal center layout" style="font-weight:bold">
            <span>App</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h4>
          <div style="padding:15px;" class="horizontal layout wrap center center-justified">
          ${this.appSupportList.map(e=>h`
            <div class="vertical layout center center-justified app-icon">
              <paper-icon-button class="fg apps green" .app="${e.name}" .app-name="${e.name}"
                                 .url-postfix="${e.redirect}"
                                 @click="${e=>this._runApp(e)}"
                                 src="${e.src}"></paper-icon-button>
              <span class="label">${e.title}</span>
            </div>
          `)}
           </div>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="ssh-dialog" fixed backdrop blockscrolling persistent
                 style="padding:0;">
        <wl-card elevation="1" class="intro" style="margin: 0; height: 100%;">
          <h4 class="horizontal center layout" style="font-weight:bold">
            <span>SSH / SFTP connection</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h4>
          <div style="padding:0 15px;" >Use your favorite SSH/SFTP application to connect.</div>
          <section class="vertical layout wrap start start-justified">
            <h4>Connection information</h4>
            <div><span>SSH URL:</span> <a href="ssh://127.0.0.1:${this.sshPort}">ssh://127.0.0.1:${this.sshPort}</a></div>
            <div><span>SFTP URL:</span> <a href="sftp://127.0.0.1:${this.sshPort}">sftp://127.0.0.1:${this.sshPort}</a></div>
            <div><span>Port:</span> ${this.sshPort}</div>
            <div><a id="sshkey-download-link" href="">Download SSH key file (id_container)</a></div>
          </section>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="vnc-dialog" fixed backdrop blockscrolling
                    style="padding:0;">
        <wl-card elevation="1" class="intro" style="margin: 0; height: 100%;">
          <h4 class="horizontal center layout" style="font-weight:bold">
            <span>VNC connection</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h4>
          <div style="padding:0 15px;" >Use your favorite SSH/SFTP application to connect.</div>
          <section class="vertical layout wrap start start-justified">
            <h4>Connection information</h4>
            <div><span>VNC URL:</span> <a href="ssh://127.0.0.1:${this.vncPort}">vnc://127.0.0.1:${this.vncPort}</a></div>
          </section>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="terminate-session-dialog" fixed backdrop blockscrolling>
         <wl-title level="3" slot="header">Let's double-check</wl-title>
         <div slot="content">
            <p>This action cannot be undone. Do you want to proceed?</p>
         </div>
         <div slot="footer">
            <wl-button class="cancel" inverted flat @click="${e=>this._hideDialog(e)}">Cancel</wl-button>
            <wl-button class="ok" @click="${e=>this._terminateSessionWithCheck(e)}">Okay</wl-button>
         </div>
      </wl-dialog>
      <wl-dialog id="terminate-selected-sessions-dialog" fixed backdrop blockscrolling>
         <wl-title level="3" slot="header">Let's double-check</wl-title>
         <div slot="content">
            <p>You are terminating multiple sessions. This action cannot be undone. Do you want to proceed?</p>
         </div>
         <div slot="footer">
            <wl-button class="cancel" inverted flat @click="${e=>this._hideDialog(e)}">Cancel</wl-button>
            <wl-button class="ok" @click="${()=>this._terminateSelectedSessionsWithCheck()}">Okay</wl-button>
         </div>
      </wl-dialog>

`}};i([s({type:Boolean})],_.prototype,"active",void 0),i([s({type:String})],_.prototype,"condition",void 0),i([s({type:Object})],_.prototype,"jobs",void 0),i([s({type:Array})],_.prototype,"compute_sessions",void 0),i([s({type:Array})],_.prototype,"terminationQueue",void 0),i([s({type:String})],_.prototype,"filterAccessKey",void 0),i([s({type:String})],_.prototype,"sessionNameField",void 0),i([s({type:Array})],_.prototype,"appSupportList",void 0),i([s({type:Object})],_.prototype,"appTemplate",void 0),i([s({type:Object})],_.prototype,"imageInfo",void 0),i([s({type:Array})],_.prototype,"_selected_items",void 0),i([s({type:Object})],_.prototype,"_boundControlRenderer",void 0),i([s({type:Object})],_.prototype,"_boundUsageRenderer",void 0),i([s({type:Object})],_.prototype,"_boundSessionInfoRenderer",void 0),i([s({type:Object})],_.prototype,"_boundCheckboxRenderer",void 0),i([s({type:Object})],_.prototype,"_boundUserInfoRenderer",void 0),i([s({type:Object})],_.prototype,"_boundStatusRenderer",void 0),i([s({type:Boolean})],_.prototype,"refreshing",void 0),i([s({type:Boolean})],_.prototype,"is_admin",void 0),i([s({type:Boolean})],_.prototype,"is_superadmin",void 0),i([s({type:String})],_.prototype,"_connectionMode",void 0),i([s({type:Object})],_.prototype,"_grid",void 0),i([s({type:Object})],_.prototype,"notification",void 0),i([s({type:Object})],_.prototype,"terminateSessionDialog",void 0),i([s({type:Object})],_.prototype,"terminateSelectedSessionsDialog",void 0),i([s({type:Boolean})],_.prototype,"enableScalingGroup",void 0),i([s({type:Object})],_.prototype,"loadingIndicator",void 0),i([s({type:Object})],_.prototype,"refreshTimer",void 0),i([s({type:Object})],_.prototype,"kernel_labels",void 0),i([s({type:Proxy})],_.prototype,"statusColorTable",void 0),i([s({type:Number})],_.prototype,"sshPort",void 0),i([s({type:Number})],_.prototype,"vncPort",void 0),_=i([n("backend-ai-session-list")],_);
