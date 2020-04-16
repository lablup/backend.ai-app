import{_ as e,p as t,c as i,d as s,e as o,I as n,a,b as l,i as r,a5 as c,h as d,t as h}from"./backend-ai-console-5bb4a440.js";import"./lablup-loading-indicator-f8b2025b.js";import"./iron-resizable-behavior-de55f964.js";import"./vaadin-progress-bar-1df69f2a.js";import"./vaadin-grid-4911f4dc.js";import"./iron-iconset-svg-9534ec82.js";import"./textfield-4a246811.js";import"./vaadin-grid-selection-column-674d4aac.js";import"./vaadin-grid-sorter-a00e6fad.js";import"./vaadin-grid-sort-column-7c57152f.js";import"./iconset-2efda350.js";import"./backend-ai-indicator-fbfe267f.js";import{J as p}from"./json_to_csv-0a6876b9.js";var u;!function(e){e[e.EOS=0]="EOS",e[e.Text=1]="Text",e[e.Incomplete=2]="Incomplete",e[e.ESC=3]="ESC",e[e.Unknown=4]="Unknown",e[e.SGR=5]="SGR",e[e.OSCURL=6]="OSCURL"}(u||(u={}));var g=function(){function e(){this.VERSION="4.0.3",this.setup_palettes(),this._use_classes=!1,this._escape_for_html=!0,this.bold=!1,this.fg=this.bg=null,this._buffer="",this._url_whitelist={http:1,https:1}}return Object.defineProperty(e.prototype,"use_classes",{get:function(){return this._use_classes},set:function(e){this._use_classes=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"escape_for_html",{get:function(){return this._escape_for_html},set:function(e){this._escape_for_html=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url_whitelist",{get:function(){return this._url_whitelist},set:function(e){this._url_whitelist=e},enumerable:!0,configurable:!0}),e.prototype.setup_palettes=function(){var e=this;this.ansi_colors=[[{rgb:[0,0,0],class_name:"ansi-black"},{rgb:[187,0,0],class_name:"ansi-red"},{rgb:[0,187,0],class_name:"ansi-green"},{rgb:[187,187,0],class_name:"ansi-yellow"},{rgb:[0,0,187],class_name:"ansi-blue"},{rgb:[187,0,187],class_name:"ansi-magenta"},{rgb:[0,187,187],class_name:"ansi-cyan"},{rgb:[255,255,255],class_name:"ansi-white"}],[{rgb:[85,85,85],class_name:"ansi-bright-black"},{rgb:[255,85,85],class_name:"ansi-bright-red"},{rgb:[0,255,0],class_name:"ansi-bright-green"},{rgb:[255,255,85],class_name:"ansi-bright-yellow"},{rgb:[85,85,255],class_name:"ansi-bright-blue"},{rgb:[255,85,255],class_name:"ansi-bright-magenta"},{rgb:[85,255,255],class_name:"ansi-bright-cyan"},{rgb:[255,255,255],class_name:"ansi-bright-white"}]],this.palette_256=[],this.ansi_colors.forEach((function(t){t.forEach((function(t){e.palette_256.push(t)}))}));for(var t=[0,95,135,175,215,255],i=0;i<6;++i)for(var s=0;s<6;++s)for(var o=0;o<6;++o){var n={rgb:[t[i],t[s],t[o]],class_name:"truecolor"};this.palette_256.push(n)}for(var a=8,l=0;l<24;++l,a+=10){var r={rgb:[a,a,a],class_name:"truecolor"};this.palette_256.push(r)}},e.prototype.escape_txt_for_html=function(e){return e.replace(/[&<>]/gm,(function(e){return"&"===e?"&amp;":"<"===e?"&lt;":">"===e?"&gt;":void 0}))},e.prototype.append_buffer=function(e){var t=this._buffer+e;this._buffer=t},e.prototype.__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},e.prototype.get_next_packet=function(){var e={kind:u.EOS,text:"",url:""},t=this._buffer.length;if(0==t)return e;var i=this._buffer.indexOf("");if(-1==i)return e.kind=u.Text,e.text=this._buffer,this._buffer="",e;if(i>0)return e.kind=u.Text,e.text=this._buffer.slice(0,i),this._buffer=this._buffer.slice(i),e;if(0==i){if(1==t)return e.kind=u.Incomplete,e;var s=this._buffer.charAt(1);if("["!=s&&"]"!=s)return e.kind=u.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;if("["==s){if(this._csi_regex||(this._csi_regex=_(this.__makeTemplateObject(["\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          [                      # CSI\n                          ([<-?]?)              # private-mode char\n                          ([d;]*)                    # any digits or semicolons\n                          ([ -/]?               # an intermediate modifier\n                          [@-~])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          [                      # CSI\n                          [ -~]*                # anything legal\n                          ([\0-:])              # anything illegal\n                        )\n                    "],["\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          \\x1b\\[                      # CSI\n                          ([\\x3c-\\x3f]?)              # private-mode char\n                          ([\\d;]*)                    # any digits or semicolons\n                          ([\\x20-\\x2f]?               # an intermediate modifier\n                          [\\x40-\\x7e])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          \\x1b\\[                      # CSI\n                          [\\x20-\\x7e]*                # anything legal\n                          ([\\x00-\\x1f:])              # anything illegal\n                        )\n                    "]))),null===(a=this._buffer.match(this._csi_regex)))return e.kind=u.Incomplete,e;if(a[4])return e.kind=u.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;""!=a[1]||"m"!=a[3]?e.kind=u.Unknown:e.kind=u.SGR,e.text=a[2];var o=a[0].length;return this._buffer=this._buffer.slice(o),e}if("]"==s){if(t<4)return e.kind=u.Incomplete,e;if("8"!=this._buffer.charAt(2)||";"!=this._buffer.charAt(3))return e.kind=u.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;this._osc_st||(this._osc_st=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var s=e.raw[0],o=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,n=s.replace(o,"");return new RegExp(n,"g")}(this.__makeTemplateObject(["\n                        (?:                         # legal sequence\n                          (\\)                    # ESC                           |                           # alternate\n                          ()                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\0-]                 # anything illegal\n                          |                           # alternate\n                          [\b-]                 # anything illegal\n                          |                           # alternate\n                          [-]                 # anything illegal\n                        )\n                    "],["\n                        (?:                         # legal sequence\n                          (\\x1b\\\\)                    # ESC \\\n                          |                           # alternate\n                          (\\x07)                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\\x00-\\x06]                 # anything illegal\n                          |                           # alternate\n                          [\\x08-\\x1a]                 # anything illegal\n                          |                           # alternate\n                          [\\x1c-\\x1f]                 # anything illegal\n                        )\n                    "]))),this._osc_st.lastIndex=0;var n=this._osc_st.exec(this._buffer);if(null===n)return e.kind=u.Incomplete,e;if(n[3])return e.kind=u.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;var a,l=this._osc_st.exec(this._buffer);if(null===l)return e.kind=u.Incomplete,e;if(l[3])return e.kind=u.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;if(this._osc_regex||(this._osc_regex=_(this.__makeTemplateObject(["\n                        ^                           # beginning of line\n                                                    #\n                        ]8;                    # OSC Hyperlink\n                        [ -:<-~]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([!-~]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                        ([!-~]+)              # TEXT capture\n                        ]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                    "],["\n                        ^                           # beginning of line\n                                                    #\n                        \\x1b\\]8;                    # OSC Hyperlink\n                        [\\x20-\\x3a\\x3c-\\x7e]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([\\x21-\\x7e]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                        ([\\x21-\\x7e]+)              # TEXT capture\n                        \\x1b\\]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                    "]))),null===(a=this._buffer.match(this._osc_regex)))return e.kind=u.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;e.kind=u.OSCURL,e.url=a[1],e.text=a[2];o=a[0].length;return this._buffer=this._buffer.slice(o),e}}},e.prototype.ansi_to_html=function(e){this.append_buffer(e);for(var t=[];;){var i=this.get_next_packet();if(i.kind==u.EOS||i.kind==u.Incomplete)break;i.kind!=u.ESC&&i.kind!=u.Unknown&&(i.kind==u.Text?t.push(this.transform_to_html(this.with_state(i))):i.kind==u.SGR?this.process_ansi(i):i.kind==u.OSCURL&&t.push(this.process_hyperlink(i)))}return t.join("")},e.prototype.with_state=function(e){return{bold:this.bold,fg:this.fg,bg:this.bg,text:e.text}},e.prototype.process_ansi=function(e){for(var t=e.text.split(";");t.length>0;){var i=t.shift(),s=parseInt(i,10);if(isNaN(s)||0===s)this.fg=this.bg=null,this.bold=!1;else if(1===s)this.bold=!0;else if(22===s)this.bold=!1;else if(39===s)this.fg=null;else if(49===s)this.bg=null;else if(s>=30&&s<38)this.fg=this.ansi_colors[0][s-30];else if(s>=40&&s<48)this.bg=this.ansi_colors[0][s-40];else if(s>=90&&s<98)this.fg=this.ansi_colors[1][s-90];else if(s>=100&&s<108)this.bg=this.ansi_colors[1][s-100];else if((38===s||48===s)&&t.length>0){var o=38===s,n=t.shift();if("5"===n&&t.length>0){var a=parseInt(t.shift(),10);a>=0&&a<=255&&(o?this.fg=this.palette_256[a]:this.bg=this.palette_256[a])}if("2"===n&&t.length>2){var l=parseInt(t.shift(),10),r=parseInt(t.shift(),10),c=parseInt(t.shift(),10);if(l>=0&&l<=255&&r>=0&&r<=255&&c>=0&&c<=255){var d={rgb:[l,r,c],class_name:"truecolor"};o?this.fg=d:this.bg=d}}}}},e.prototype.transform_to_html=function(e){var t=e.text;if(0===t.length)return t;if(this._escape_for_html&&(t=this.escape_txt_for_html(t)),!e.bold&&null===e.fg&&null===e.bg)return t;var i=[],s=[],o=e.fg,n=e.bg;e.bold&&i.push("font-weight:bold"),this._use_classes?(o&&("truecolor"!==o.class_name?s.push(o.class_name+"-fg"):i.push("color:rgb("+o.rgb.join(",")+")")),n&&("truecolor"!==n.class_name?s.push(n.class_name+"-bg"):i.push("background-color:rgb("+n.rgb.join(",")+")"))):(o&&i.push("color:rgb("+o.rgb.join(",")+")"),n&&i.push("background-color:rgb("+n.rgb+")"));var a="",l="";return s.length&&(a=' class="'+s.join(" ")+'"'),i.length&&(l=' style="'+i.join(";")+'"'),"<span"+l+a+">"+t+"</span>"},e.prototype.process_hyperlink=function(e){var t=e.url.split(":");return t.length<1?"":this._url_whitelist[t[0]]?'<a href="'+this.escape_txt_for_html(e.url)+'">'+this.escape_txt_for_html(e.text)+"</a>":""},e}();function _(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var s=e.raw[0],o=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,n=s.replace(o,"");return new RegExp(n)}let m=class extends s{constructor(){super(),this.active=!0,this.condition="running",this.jobs=Object(),this.compute_sessions=Array(),this.terminationQueue=Array(),this.filterAccessKey="",this.sessionNameField="session_name",this.appSupportList=Array(),this.appTemplate=Object(),this.imageInfo=Object(),this._selected_items=Array(),this._boundControlRenderer=this.controlRenderer.bind(this),this._boundUsageRenderer=this.usageRenderer.bind(this),this._boundSessionInfoRenderer=this.sessionInfoRenderer.bind(this),this._boundCheckboxRenderer=this.checkboxRenderer.bind(this),this._boundUserInfoRenderer=this.userInfoRenderer.bind(this),this._boundStatusRenderer=this.statusRenderer.bind(this),this.refreshing=!1,this.is_admin=!1,this.is_superadmin=!1,this._connectionMode="API",this._grid=Object(),this.notification=Object(),this.terminateSessionDialog=Object(),this.terminateSelectedSessionsDialog=Object(),this.exportToCsvDialog=Object(),this.enableScalingGroup=!1,this.loadingIndicator=Object(),this.refreshTimer=Object(),this.kernel_labels=Object(),this._defaultFileName="",this.statusColorTable=new Proxy({"idle-timeout":"green","user-requested":"green","failed-to-start":"red","creation-failed":"red","self-terminated":"green"},{get:(e,t)=>e.hasOwnProperty(t)?e[t]:"lightgrey"}),this.sshPort=0,this.vncPort=0,this.current_page=1,this.session_page_limit=50,this.total_session_count=0,this._APIMajorVersion=5}static get styles(){return[o,n,a,l`
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
          --icon-size: 16px;
        }

        wl-icon.pagination {
          color: var(--paper-grey-700);
        }

        wl-icon.warning {
          color: red;
        }

        img.indicator-icon {
          width: 16px;
          height: 16px;
          padding-right: 5px;
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

        wl-button.controls-running {
          --button-fab-size: 32px;
          --button-padding: 3px;
          margin-right: 5px;
        }

        mwc-icon-button.apps {
          --mdc-icon-button-size: 48px;
          --mdc-icon-size: 36px;
          padding: 3px;
          margin-right: 5px;
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
          #work-dialog,
          #work-dialog.mini_ui {
            left: 0;
            --dialog-width: 100%;
          }
        }

        @media screen and (min-width: 900px) {
          #work-dialog {
            left: 100px;
            --dialog-width: calc(100% - 220px);
          }

          #work-dialog.mini_ui {
            left: 40px;
            --dialog-width: calc(100% - 102px);
          }
        }

        #work-area {
          width: 100%;
          padding: 5px;
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

        div.configuration wl-icon {
          padding-right: 5px;
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

        wl-dialog wl-textfield {
          padding: 10px 0px;
          --input-font-family: Roboto, Noto, sans-serif;
          --input-font-size: 12px;
          --input-color-disabled: #bbbbbb;
          --input-label-color-disabled: #222222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #cccccc;
        }

        wl-label {
          width: 100%;
          background-color: color: var(--paper-grey-500);
          min-width: 60px;
          font-size: 12px;
          --label-font-family: Roboto, Noto, sans-serif;
        }

        wl-label.unlimited {
          margin: 12px 0px;
        }

        wl-label.warning {
          font-size: 10px;
          --label-color: var(--paper-red-600);
        }

        wl-checkbox#export-csv-checkbox {
          margin-right: 5px;
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

        div.filters #access-key-filter {
          --input-font-size: small;
          --input-label-font-size: small;
          --input-font-family: Roboto, Noto, sans-serif;
        }
      `]}get _isRunning(){return"running"===this.condition}_isPreparing(e){return-1!==["RESTARTING","PULLING"].indexOf(e)}firstUpdated(){this.loadingIndicator=this.shadowRoot.querySelector("#loading-indicator"),this._grid=this.shadowRoot.querySelector("#list-grid"),this._initializeAppTemplate(),this.refreshTimer=null,fetch("resources/image_metadata.json").then(e=>e.json()).then(e=>{this.imageInfo=e.imageInfo;for(let e in this.imageInfo)this.kernel_labels[e]=[],"label"in this.imageInfo[e]?this.kernel_labels[e]=this.imageInfo[e].label:this.kernel_labels[e]=[]}),this.notification=globalThis.lablupNotification,this.terminateSessionDialog=this.shadowRoot.querySelector("#terminate-session-dialog"),this.terminateSelectedSessionsDialog=this.shadowRoot.querySelector("#terminate-selected-sessions-dialog"),this.exportToCsvDialog=this.shadowRoot.querySelector("#export-to-csv"),this._defaultFileName=(new Date).toISOString().substring(0,10)+"_"+(new Date).toTimeString().slice(0,8).replace(/:/gi,"-"),document.addEventListener("backend-ai-group-changed",e=>this.refreshList(!0,!1)),document.addEventListener("backend-ai-ui-changed",e=>this._refreshWorkDialogUI(e)),this._refreshWorkDialogUI({detail:{"mini-ui":globalThis.mini_ui}}),document.addEventListener("backend-ai-csv-file-export-session",()=>{this._openExportToCsvDialog()})}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{globalThis.backendaiclient.is_admin?this.shadowRoot.querySelector("#access-key-filter").style.display="block":(this.shadowRoot.querySelector("#access-key-filter").parentNode.removeChild(this.shadowRoot.querySelector("#access-key-filter")),this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 200px)!important"),globalThis.backendaiclient.APIMajorVersion<5&&(this.sessionNameField="sess_id"),this.is_admin=globalThis.backendaiclient.is_admin,this.is_superadmin=globalThis.backendaiclient.is_superadmin,this._connectionMode=globalThis.backendaiclient._config._connectionMode,this.enableScalingGroup=globalThis.backendaiclient.supports("scaling-group"),this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._refreshJobData()},!0):(globalThis.backendaiclient.is_admin?this.shadowRoot.querySelector("#access-key-filter").style.display="block":(this.shadowRoot.querySelector("#access-key-filter").parentNode.removeChild(this.shadowRoot.querySelector("#access-key-filter")),this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 200px)!important"),globalThis.backendaiclient.APIMajorVersion<5&&(this.sessionNameField="sess_id"),this.is_admin=globalThis.backendaiclient.is_admin,this.is_superadmin=globalThis.backendaiclient.is_superadmin,this._connectionMode=globalThis.backendaiclient._config._connectionMode,this.enableScalingGroup=globalThis.backendaiclient.supports("scaling-group"),this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._refreshJobData()))}_initializeAppTemplate(){fetch("resources/app_template.json").then(e=>e.json()).then(e=>{this.appTemplate=e.appTemplate})}refreshList(e=!0,t=!0){return this._refreshJobData(e,t)}async _refreshJobData(e=!1,t=!0){if(await this.updateComplete,!0!==this.active)return;if(!0===this.refreshing)return;let i;switch(this.refreshing=!0,this.loadingIndicator.show(),i="RUNNING",this.condition){case"running":i=["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING"];break;case"finished":i=["TERMINATED","CANCELLED"];break;case"others":i=["TERMINATING","ERROR"];break;default:i=["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING"]}globalThis.backendaiclient.supports("detailed-session-states")&&(i=i.join(","));let s=["session_name","lang","created_at","terminated_at","status","status_info","service_ports","occupied_slots","cpu_used","io_read_bytes","io_write_bytes","access_key"];this.enableScalingGroup&&s.push("scaling_group"),"SESSION"===this._connectionMode&&s.push("user_email"),globalThis.backendaiclient.is_superadmin&&s.push("agent");let o=globalThis.backendaiclient.current_group_id();globalThis.backendaiclient.computeSession.list(s,i,this.filterAccessKey,this.session_page_limit,(this.current_page-1)*this.session_page_limit,o).then(i=>{this.loadingIndicator.hide(),this.total_session_count=i.compute_session_list.total_count,0===this.total_session_count&&(this.total_session_count=1);let s,o=i.compute_session_list.items;if(void 0!==o&&0!=o.length){let e=this.compute_sessions,t=[];Object.keys(e).map((i,s)=>{t.push(e[i][this.sessionNameField])}),Object.keys(o).map((e,t)=>{let i=o[e],s=JSON.parse(i.occupied_slots);const n=o[e].lang.split("/")[2]||o[e].lang.split("/")[1];o[e].cpu_slot=parseInt(s.cpu),o[e].mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(s.mem,"g")),o[e].mem_slot=o[e].mem_slot.toFixed(2),o[e].cpu_used_time=this._automaticScaledTime(o[e].cpu_used),o[e].elapsed=this._elapsed(o[e].created_at,o[e].terminated_at),o[e].created_at_hr=this._humanReadableTime(o[e].created_at),o[e].io_read_bytes_mb=this._byteToMB(o[e].io_read_bytes),o[e].io_write_bytes_mb=this._byteToMB(o[e].io_write_bytes);let a=JSON.parse(o[e].service_ports);!0===Array.isArray(a)?o[e].app_services=a.map(e=>e.name):o[e].app_services=[],0===o[e].app_services.length||"running"!=this.condition?o[e].appSupport=!1:o[e].appSupport=!0,"running"===this.condition?o[e].running=!0:o[e].running=!1,"cuda.device"in s&&(o[e].cuda_gpu_slot=parseInt(s["cuda.device"])),"rocm.device"in s&&(o[e].rocm_gpu_slot=parseInt(s["rocm.device"])),"tpu.device"in s&&(o[e].tpu_slot=parseInt(s["tpu.device"])),"cuda.shares"in s&&(o[e].cuda_fgpu_slot=parseFloat(s["cuda.shares"]).toFixed(2)),o[e].kernel_image=n,o[e].sessionTags=this._getKernelInfo(i.lang);const l=i.lang.split("/");let r=l[l.length-1].split(":")[1].split("-");void 0!==r[1]?(o[e].baseversion=r[0],o[e].baseimage=r[1],o[e].additional_reqs=r.slice(1,r.length).map(e=>e.toUpperCase())):o[e].baseversion=o[e].tag,this._selected_items.includes(o[e][this.sessionNameField])?o[e].checked=!0:o[e].checked=!1})}if(this.compute_sessions=o,this.refreshing=!1,!0===this.active){if(!0===e){var n=new CustomEvent("backend-ai-resource-refreshed",{detail:{}});document.dispatchEvent(n)}!0===t&&(s="running"===this.condition?5e3:3e4,this.refreshTimer=setTimeout(()=>{this._refreshJobData()},s))}}).catch(e=>{this.loadingIndicator.hide(),console.log(e),e&&e.message&&(this.notification.text=r.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_refreshWorkDialogUI(e){let t=this.shadowRoot.querySelector("#work-dialog");e.detail.hasOwnProperty("mini-ui")&&!0===e.detail["mini-ui"]?t.classList.add("mini_ui"):t.classList.remove("mini_ui")}_humanReadableTime(e){return(e=new Date(e)).toLocaleString()}_getKernelInfo(e){let t=[];if(void 0===e)return[];const i=e.split("/");let s=(i[2]||i[1]).split(":")[0];if(s in this.kernel_labels)t.push(this.kernel_labels[s]);else{const i=e.split("/");let s,o;3===i.length?(s=i[1],o=i[2]):(s="",o=i[1]),o=o.split(":")[0],o=s?s+"/"+o:o,t.push([{category:"Env",tag:`${o}`,color:"lightgrey"}])}return t}_byteToMB(e){return Math.floor(e/1e6)}_byteToGB(e){return Math.floor(e/1e9)}_MBToGB(e){return e/1024}_automaticScaledTime(e){let t=Object(),i=["D","H","M","S"],s=[864e5,36e5,6e4,1e3];for(let o=0;o<s.length;o++)Math.floor(e/s[o])>0&&(t[i[o]]=Math.floor(e/s[o]),e%=s[o]);return 0===Object.keys(t).length&&(t=e>0?{MS:e}:{NODATA:1}),t}_msecToSec(e){return Number(e/1e3).toFixed(0)}_elapsed(e,t){return globalThis.backendaiclient.utils.elapsedTime(e,t)}_indexRenderer(e,t,i){let s=i.index+1;c(d`
        <div>${s}</div>
      `,e)}async sendRequest(e){let t,i;try{"GET"==e.method&&(e.body=void 0),t=await fetch(e.uri,e);let s=t.headers.get("Content-Type");if(i=s.startsWith("application/json")||s.startsWith("application/problem+json")?await t.json():s.startsWith("text/")?await t.text():await t.blob(),!t.ok)throw i}catch(e){}return i}_terminateApp(e){let t=globalThis.backendaiclient._config.accessKey,i={method:"GET",uri:this._getProxyURL()+"proxy/"+t+"/"+e};return this.sendRequest(i).then(t=>{this.total_session_count-=1;let i=globalThis.backendaiclient._config.accessKey;if(void 0!==t&&404!==t.code){let t={method:"GET",uri:this._getProxyURL()+"proxy/"+i+"/"+e+"/delete"};return this.sendRequest(t)}return Promise.resolve(!0)}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=r.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_getProxyURL(){let e="http://127.0.0.1:5050/";return void 0!==globalThis.__local_proxy?e=globalThis.__local_proxy:void 0!==globalThis.backendaiclient._config.proxyURL&&(e=globalThis.backendaiclient._config.proxyURL),e}_showLogs(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"];globalThis.backendaiclient.getLogs(i,s).then(e=>{let t=(new g).ansi_to_html(e.result.logs);setTimeout(()=>{this.shadowRoot.querySelector("#work-title").innerHTML=`${i}`,this.shadowRoot.querySelector("#work-area").innerHTML=`<pre>${t}</pre>`||"No logs.",this.shadowRoot.querySelector("#work-dialog").show()},100)}).catch(e=>{e&&e.message?(this.notification.text=r.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=r.relieve(e.title),this.notification.show(!0,e))})}_showAppLauncher(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"],o=t["app-services"];this.appSupportList=[],o.forEach(e=>{e in this.appTemplate?("sshd"!==e||"sshd"===e&&globalThis.isElectron)&&this.appTemplate[e].forEach(e=>{this.appSupportList.push(e)}):["ttyd","ipython"].includes(e)||this.appSupportList.push({name:e,title:e,redirect:"",src:"./resources/icons/default_app.svg"})});let n=this.shadowRoot.querySelector("#app-dialog");n.setAttribute("session-name",i),n.setAttribute("access-key",s),n.positionTarget=e.target,this.shadowRoot.querySelector("#app-dialog").show()}_hideAppLauncher(){this.shadowRoot.querySelector("#app-dialog").hide()}async _open_wsproxy(e,t="jupyter"){if(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready)return!1;let i={endpoint:globalThis.backendaiclient._config.endpoint};if("SESSION"===globalThis.backendaiclient._config.connectionMode?(i.mode="SESSION",i.session=globalThis.backendaiclient._config._session_id):(i.mode="DEFAULT",i.access_key=globalThis.backendaiclient._config.accessKey,i.secret_key=globalThis.backendaiclient._config.secretKey),i.api_version=globalThis.backendaiclient.APIMajorVersion,globalThis.isElectron&&void 0===globalThis.__local_proxy)return this.shadowRoot.querySelector("#indicator").end(),this.notification.text="Proxy is not ready yet. Check proxy settings for detail.",this.notification.show(),Promise.resolve(!1);let s={method:"PUT",body:JSON.stringify(i),headers:{Accept:"application/json","Content-Type":"application/json"},uri:this._getProxyURL()+"conf"};this.shadowRoot.querySelector("#indicator").set(20,"Setting up proxy for the app...");try{let i=await this.sendRequest(s);if(void 0===i)return this.shadowRoot.querySelector("#indicator").end(),this.notification.text="Proxy configurator is not responding.",this.notification.show(),Promise.resolve(!1);let o=i.token;this.shadowRoot.querySelector("#indicator").set(50,"Adding kernel to socket queue...");let n={method:"GET",app:t,uri:this._getProxyURL()+"proxy/"+o+"/"+e+"/add?app="+t};return await this.sendRequest(n)}catch(e){throw e}}_runApp(e){const t=e.target;let i=t.closest("#app-dialog").getAttribute("session-name"),s=t["url-postfix"],o=t["app-name"];null!=o&&(null==s&&(s=""),void 0!==globalThis.backendaiwsproxy&&null!==globalThis.backendaiwsproxy||(this._hideAppLauncher(),this.shadowRoot.querySelector("#indicator").start(),this._open_wsproxy(i,o).then(e=>{"sshd"===o?(this.shadowRoot.querySelector("#indicator").set(100,"Prepared."),this.sshPort=e.port,this._readSSHKey(i),this._openSSHDialog(),setTimeout(()=>{this.shadowRoot.querySelector("#indicator").end()},1e3)):"vnc"===o?(this.shadowRoot.querySelector("#indicator").set(100,"Prepared."),this.vncPort=e.port,this._openVNCDialog(),setTimeout(()=>{this.shadowRoot.querySelector("#indicator").end()},1e3)):e.url&&(this.shadowRoot.querySelector("#indicator").set(100,"Prepared."),setTimeout(()=>{globalThis.open(e.url+s,"_blank"),this.shadowRoot.querySelector("#indicator").end(),console.log(o+" proxy loaded: "),console.log(i)},1e3))})))}async _readSSHKey(e){const t=this.shadowRoot.querySelector("#sshkey-download-link"),i=await globalThis.backendaiclient.download_single(e,"/home/work/id_container"),s=(await i.text()).indexOf("-----"),o=await i.slice(s,i.size,i.type);t.href=globalThis.URL.createObjectURL(o),t.download="id_container"}_runTerminal(e){const t=e.target.closest("#controls")["session-name"];null!=globalThis.backendaiwsproxy&&null!=globalThis.backendaiwsproxy||(this.shadowRoot.querySelector("#indicator").start(),this._open_wsproxy(t,"ttyd").then(e=>{e.url&&(this.shadowRoot.querySelector("#indicator").set(100,"Prepared."),setTimeout(()=>{globalThis.open(e.url,"_blank"),this.shadowRoot.querySelector("#indicator").end(),console.log("Terminal proxy loaded: "),console.log(t)},1e3))}))}_openTerminateSessionDialog(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"];this.terminateSessionDialog.sessionName=i,this.terminateSessionDialog.accessKey=s,this.terminateSessionDialog.show()}_openSSHDialog(){this.shadowRoot.querySelector("#ssh-dialog").show()}_openVNCDialog(){this.shadowRoot.querySelector("#vnc-dialog").show()}_terminateSession(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"];return this.terminationQueue.includes(i)?(this.notification.text="Already terminating the session.",this.notification.show(),!1):(this.notification.text="Terminating session...",this.notification.show(),this._terminateKernel(i,s))}_terminateSessionWithCheck(e){return this.terminationQueue.includes(this.terminateSessionDialog.sessionName)?(this.notification.text="Already terminating the session.",this.notification.show(),!1):(this.notification.text="Terminating session...",this.notification.show(),this._terminateKernel(this.terminateSessionDialog.sessionName,this.terminateSessionDialog.accessKey).then(e=>{this._selected_items=[],this._clearCheckboxes(),this.terminateSessionDialog.hide(),this.notification.text="Session terminated.",this.notification.show();let t=new CustomEvent("backend-ai-resource-refreshed",{detail:"running"});document.dispatchEvent(t)}).catch(e=>{this._selected_items=[],this._clearCheckboxes(),this.terminateSessionDialog.hide(),this.notification.text=r.relieve("Problem occurred during termination."),this.notification.show(!0,e);let t=new CustomEvent("backend-ai-resource-refreshed",{detail:"running"});document.dispatchEvent(t)}))}_openTerminateSelectedSessionsDialog(e){this.terminateSelectedSessionsDialog.show()}_clearCheckboxes(){[...this.shadowRoot.querySelectorAll("wl-checkbox.list-check")].forEach(e=>{e.removeAttribute("checked")})}_terminateSelectedSessionsWithCheck(){this.notification.text="Terminating sessions...",this.notification.show();let e=this._selected_items.map(e=>this._terminateKernel(e[this.sessionNameField],e.access_key));return this._selected_items=[],Promise.all(e).then(e=>{this.terminateSelectedSessionsDialog.hide(),this._clearCheckboxes(),this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none",this.notification.text="Sessions terminated.",this.notification.show()}).catch(e=>{this.terminateSelectedSessionsDialog.hide(),this._clearCheckboxes(),this.notification.text=r.relieve("Problem occurred during termination."),this.notification.show(!0,e)})}_terminateSelectedSessions(){this.notification.text="Terminating sessions...",this.notification.show();let e=this._selected_items.map(e=>this._terminateKernel(e[this.sessionNameField],e.access_key));return Promise.all(e).then(e=>{this._selected_items=[],this._clearCheckboxes(),this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none",this.notification.text="Sessions terminated.",this.notification.show()}).catch(e=>{this._selected_items=[],this._clearCheckboxes(),this.notification.text=r.relieve("Problem occurred during termination."),this.notification.show(!0,e)})}async _terminateKernel(e,t){return this.terminationQueue.push(e),this._terminateApp(e).then(()=>{globalThis.backendaiclient.destroyKernel(e,t).then(e=>{setTimeout(()=>{this.terminationQueue=[],this.refreshList(!0,!1)},1e3)}).catch(e=>{this.refreshList(!0,!1),this.notification.text=r.relieve("Problem occurred during termination."),this.notification.show(!0,e)})}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=r.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_hideDialog(e){let t=e.target.closest("wl-dialog");if(t.hide(),"ssh-dialog"===t.id){const e=this.shadowRoot.querySelector("#sshkey-download-link");globalThis.URL.revokeObjectURL(e.href)}}_updateFilterAccessKey(e){this.filterAccessKey=e.target.value,this.refreshTimer&&(clearTimeout(this.refreshTimer),this._refreshJobData())}_openExportToCsvDialog(){this.exportToCsvDialog.show()}sessionInfoRenderer(e,t,i){c(d`
        <div class="layout vertical start">
          <div>${i.item[this.sessionNameField]}</div>
          ${i.item.sessionTags?i.item.sessionTags.map(e=>d`
            ${e.map(e=>("Env"===e.category&&(e.category=e.tag),e.category&&i.item.baseversion&&(e.tag=i.item.baseversion),d`
                <lablup-shields app="${void 0===e.category?"":e.category}" color="${e.color}" description="${e.tag}"></lablup-shields>
              `))}
          `):d``}
          ${i.item.additional_reqs?d`
            <div class="layout horizontal center wrap">
              ${i.item.additional_reqs.map(e=>d`
                  <lablup-shields app="" color="green" description="${e}"></lablup-shields>
                `)}
            </div>
          `:d``}
        </div>
      `,e)}controlRenderer(e,t,i){c(d`
        <div id="controls" class="layout horizontal flex center"
             .session-name="${i.item[this.sessionNameField]}"
             .access-key="${i.item.access_key}"
             .kernel-image="${i.item.kernel_image}"
             .app-services="${i.item.app_services}">
          ${i.item.appSupport?d`
            <wl-button fab flat inverted class="fg controls-running green"
                               @click="${e=>this._showAppLauncher(e)}"
                               icon="vaadin:caret-right"><wl-icon>launch</wl-icon></wl-button>
            <wl-button fab flat inverted class="fg controls-running"
                               @click="${e=>this._runTerminal(e)}"
                               icon="vaadin:terminal"><wl-icon>keyboard_arrow_right</wl-icon></wl-button>
          `:d``}
          ${this._isRunning&&!this._isPreparing(i.item.status)||this._APIMajorVersion>4?d`
            <wl-button fab flat inverted class="fg red controls-running"
                               @click="${e=>this._openTerminateSessionDialog(e)}"
                               icon="delete"><wl-icon>delete</wl-icon></wl-button>
          `:d``}
          ${this._isRunning||this._APIMajorVersion>4?d`
            <wl-button fab flat inverted class="fg blue controls-running" icon="assignment"
                               @click="${e=>this._showLogs(e)}"
                               on-tap="_showLogs"><wl-icon>assignment</wl-icon></wl-button>
          `:d`
            <wl-button fab flat inverted disabled class="fg controls-running" icon="assignment"><wl-icon>assignment</wl-icon></wl-button>
          `}
        </div>
      `,e)}usageRenderer(e,t,i){c(d`
        <div class="layout horizontal center flex">
          <wl-icon class="fg blue indicator" style="margin-right:3px;">developer_board</wl-icon>
          ${i.item.cpu_used_time.D?d`
          <div class="vertical center-justified center layout">
            <span style="font-size:11px">${i.item.cpu_used_time.D}</span>
            <span class="indicator">day</span>
          </div>`:d``}
          ${i.item.cpu_used_time.H?d`
          <div class="vertical center-justified center layout">
            <span style="font-size:11px">${i.item.cpu_used_time.H}</span>
            <span class="indicator">hour</span>
          </div>`:d``}
          ${i.item.cpu_used_time.M?d`
          <div class="vertical start layout">
            <span style="font-size:11px">${i.item.cpu_used_time.M}</span>
            <span class="indicator">min.</span>
          </div>`:d``}
          ${i.item.cpu_used_time.S?d`
          <div class="vertical start layout">
            <span style="font-size:11px">${i.item.cpu_used_time.S}</span>
            <span class="indicator">sec.</span>
          </div>`:d``}
          ${i.item.cpu_used_time.MS?d`
          <div class="vertical start layout">
            <span style="font-size:11px">${i.item.cpu_used_time.MS}</span>
            <span class="indicator">msec.</span>
          </div>`:d``}
          ${i.item.cpu_used_time.NODATA?d`
          <div class="vertical start layout">
            <span style="font-size:11px">No data</span>
          </div>`:d``}
        </div>
        <div class="layout horizontal center flex">
          <wl-icon class="fg blue indicator" style="margin-right:3px;">device_hub</wl-icon>
          <div class="vertical start layout">
            <span style="font-size:9px">${i.item.io_read_bytes_mb}<span class="indicator">MB</span></span>
            <span class="indicator">READ</span>
          </div>
          <div class="vertical start layout">
            <span style="font-size:8px">${i.item.io_write_bytes_mb}<span class="indicator">MB</span></span>
            <span class="indicator">WRITE</span>
          </div>
        </div>`,e)}_toggleCheckbox(e){let t=this._selected_items.findIndex(t=>t[this.sessionNameField]==e[this.sessionNameField]);-1===t?this._selected_items.push(e):this._selected_items.splice(t,1),this._selected_items.length>0?this.shadowRoot.querySelector("#multiple-action-buttons").style.display="block":this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none"}_toggleDialogCheckbox(e){let t=e.target,i=this.shadowRoot.querySelector("#date-from"),s=this.shadowRoot.querySelector("#date-to");i.disabled=t.checked,s.disabled=t.checked}checkboxRenderer(e,t,i){c(d`
        <wl-checkbox class="list-check" style="--checkbox-size:12px;" ?checked="${!0===i.item.checked}" @click="${()=>this._toggleCheckbox(i.item)}"></wl-checkbox>
      `,e)}userInfoRenderer(e,t,i){c(d`
        <div class="layout vertical">
          <span class="indicator">${"API"===this._connectionMode?i.item.access_key:i.item.user_email}</span>
        </div>
      `,e)}statusRenderer(e,t,i){c(d`
        <span style="font-size: 12px;">${i.item.status}</span>
        ${i.item.status_info?d`
        <br />
        <lablup-shields app="" color="${this.statusColorTable[i.item.status_info]}" description="${i.item.status_info}"></lablup-shields>
        `:d``}
      `,e)}_getFirstDateOfMonth(){let e=new Date;return new Date(e.getFullYear(),e.getMonth(),2).toISOString().substring(0,10)}_getDefaultCSVFileName(){return(new Date).toISOString().substring(0,10)+"_"+(new Date).toTimeString().slice(0,8).replace(/:/gi,"-")}_validateDateRange(){let e=this.shadowRoot.querySelector("#date-to"),t=this.shadowRoot.querySelector("#date-from");if(e.value&&t.value){new Date(e.value).getTime()<new Date(t.value).getTime()&&(e.value=t.value)}}_exportToCSV(){let e=this.shadowRoot.querySelector("#export-file-name");if(!e.validity.valid)return;let t=globalThis.backendaiclient.current_group_id(),i=["session_name","lang","created_at","terminated_at","status","status_info","occupied_slots","cpu_used","io_read_bytes","io_write_bytes","access_key"];"SESSION"===this._connectionMode&&i.push("user_email"),globalThis.backendaiclient.is_superadmin&&i.push("agent"),globalThis.backendaiclient.computeSession.listAll(i,this.filterAccessKey,t).then(t=>{let i=t.compute_sessions;p.exportToCsv(e.value,i),this.notification.text="Downloading CSV file...",this.notification.show(),this.exportToCsvDialog.hide()})}render(){return d`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <div class="layout horizontal center filters">
        <div id="multiple-action-buttons" style="display:none;">
          <wl-button outlined class="multiple-action-button" @click="${()=>this._openTerminateSelectedSessionsDialog()}">
            <wl-icon style="--icon-size: 20px;">delete</wl-icon>
            ${h("session.Terminate")}
          </wl-button>
        </div>
        <span class="flex"></span>
        <wl-textfield id="access-key-filter" type="search" size=30
                     label="${h("general.AccessKey")}" no-label-float .value="${this.filterAccessKey}"
                     style="display:none"
                     on-change="_updateFilterAccessKey">
        </wl-textfield>
      </div>

      <vaadin-grid id="list-grid" theme="row-stripes column-borders compact" aria-label="Session list"
         .items="${this.compute_sessions}" height-by-rows>
        ${this._isRunning?d`
          <vaadin-grid-column width="40px" flex-grow="0" text-align="center" .renderer="${this._boundCheckboxRenderer}">
          </vaadin-grid-column>
        `:d``}
        <vaadin-grid-column width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>
        ${this.is_admin?d`
          <vaadin-grid-sort-column resizable width="130px" header="${"API"===this._connectionMode?"API Key":"User ID"}" flex-grow="0" path="access_key" .renderer="${this._boundUserInfoRenderer}">
          </vaadin-grid-sort-column>
        `:d``}
        <vaadin-grid-column width="150px" resizable header="${h("session.SessionInfo")}" .renderer="${this._boundSessionInfoRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="90px" flex-grow="0" header="${h("session.Status")}" resizable .renderer="${this._boundStatusRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="160px" flex-grow="0" header="${h("general.Control")}" .renderer="${this._boundControlRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="160px" flex-grow="0" header="${h("session.Configuration")}" resizable>
          <template>
            <template is="dom-if" if="[[item.scaling_group]]">
            <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <wl-icon class="fg green indicator">work</wl-icon>
                <span>[[item.scaling_group]]</span>
                <span class="indicator">RG</span>
              </div>
            </div>
            </template>
            <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <wl-icon class="fg green indicator">developer_board</wl-icon>
                <span>[[item.cpu_slot]]</span>
                <span class="indicator">${h("session.core")}</span>
              </div>
              <div class="layout horizontal configuration">
                <wl-icon class="fg green indicator">memory</wl-icon>
                <span>[[item.mem_slot]]</span>
                <span class="indicator">GB</span>
              </div>
            </div>
            <div class="layout horizontal center flex">
              <div class="layout horizontal configuration">
                <template is="dom-if" if="[[item.cuda_gpu_slot]]">
                  <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg" />
                  <span>[[item.cuda_gpu_slot]]</span>
                  <span class="indicator">GPU</span>
                </template>
                <template is="dom-if" if="[[!item.cuda_gpu_slot]]">
                  <template is="dom-if" if="[[item.cuda_fgpu_slot]]">
                    <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg" />
                    <span>[[item.cuda_fgpu_slot]]</span>
                    <span class="indicator">GPU</span>
                  </template>
                </template>
                <template is="dom-if" if="[[item.rocm_gpu_slot]]">
                  <img class="indicator-icon fg green" src="/resources/icons/ROCm.png" />
                  <span>[[item.rocm_gpu_slot]]</span>
                  <span class="indicator">GPU</span>
                </template>
                <template is="dom-if" if="[[item.tpu_slot]]">
                  <wl-icon class="fg green indicator">view_module</wl-icon>
                  <span>[[item.tpu_slot]]</span>
                  <span class="indicator">TPU</span>
                </template>
                <template is="dom-if" if="[[!item.cuda_gpu_slot]]">
                  <template is="dom-if" if="[[!item.cuda_fgpu_slot]]">
                    <template is="dom-if" if="[[!item.rocm_gpu_slot]]">
                      <template is="dom-if" if="[[!item.tpu_slot]]">
                        <wl-icon class="fg green indicator">view_module</wl-icon>
                        <span>-</span>
                        <span class="indicator">GPU</span>
                      </template>
                    </template>
                  </template>
                </template>
              </div>
              <div class="layout horizontal configuration">
                <wl-icon class="fg green indicator">cloud_queue</wl-icon>
                <!-- <wl-icon class="fg yellow" icon="device:storage"></wl-icon> -->
                <!-- <span>[[item.storage_capacity]]</span> -->
                <!-- <span class="indicator">[[item.storage_unit]]</span> -->
              </div>
            </div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="120px" flex-grow="0" resizable header="${h("session.Usage")}" .renderer="${this._boundUsageRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-sort-column resizable auto-width flex-grow="0" header="${h("session.Starts")}" path="created_at">
          <template>
            <div class="layout vertical">
              <span>[[item.created_at_hr]]</span>
            </div>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-column width="100px" flex-grow="0" resizable header="${h("session.Reservation")}">
          <template>
            <div class="layout vertical">
              <span>[[item.elapsed]]</span>
            </div>
          </template>
        </vaadin-grid-column>
        ${this.is_superadmin?d`
          <vaadin-grid-column auto-width flex-grow="0" resizable header="${h("session.Agent")}">
            <template>
              <div class="layout vertical">
                <span>[[item.agent]]</span>
              </div>
            </template>
          </vaadin-grid-column>
            `:d``}
      </vaadin-grid>
      <div class="horizontal center-justified layout flex" style="padding: 10px;">
        <wl-button class="pagination" id="previous-page"
                   ?disabled="${1===this.current_page}"
                   @click="${e=>{this._updateSessionPage(e)}}">
          <wl-icon class="pagination">navigate_before</wl-icon>
        </wl-button>
        <wl-label style="padding-top: 5px; width:auto; text-align:center;">
        ${this.current_page} / ${Math.ceil(this.total_session_count/this.session_page_limit)}</wl-label>
        <wl-button class="pagination" id="next-page"
                   ?disabled="${this.total_session_count<=this.session_page_limit*this.current_page}"
                   @click="${e=>{this._updateSessionPage(e)}}">
          <wl-icon class="pagination">navigate_next</wl-icon>
        </wl-button>
      </div>
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
          <div id="work-area" style="overflow:scroll;"></div>
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
          ${this.appSupportList.map(e=>d`
            <div class="vertical layout center center-justified app-icon">
              <mwc-icon-button class="fg apps green" .app="${e.name}" .app-name="${e.name}"
                                 .url-postfix="${e.redirect}"
                                 @click="${e=>this._runApp(e)}">
                <img src="${e.src}" />
              </mwc-icon-button>
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
            <h4>${h("session.ConnectionInformation")}</h4>
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
            <span>${h("session.VNCconnection")}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h4>
          <div style="padding:0 15px;" >${h("session.UseYourFavoriteSSHApp")}</div>
          <section class="vertical layout wrap start start-justified">
            <h4>${h("session.ConnectionInformation")}</h4>
            <div><span>VNC URL:</span> <a href="ssh://127.0.0.1:${this.vncPort}">vnc://127.0.0.1:${this.vncPort}</a></div>
          </section>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="terminate-session-dialog" fixed backdrop blockscrolling>
         <wl-title level="3" slot="header">${h("dialog.title.LetsDouble-Check")}</wl-title>
         <div slot="content">
            <p>${h("session.CheckAgainDialog")}</p>
         </div>
         <div slot="footer">
            <wl-button class="cancel" inverted flat @click="${e=>this._hideDialog(e)}">Cancel</wl-button>
            <wl-button class="ok" @click="${e=>this._terminateSessionWithCheck(e)}">Okay</wl-button>
         </div>
      </wl-dialog>
      <wl-dialog id="terminate-selected-sessions-dialog" fixed backdrop blockscrolling>
         <wl-title level="3" slot="header">Let's double-check</wl-title>
         <div slot="content">
            <p>${h("session.TerminatingSessionDialog")} ${h("session.CheckAgainDialog")}</p>
         </div>
         <div slot="footer">
            <wl-button class="cancel" inverted flat @click="${e=>this._hideDialog(e)}">${h("button.Cancel")}</wl-button>
            <wl-button class="ok" @click="${()=>this._terminateSelectedSessionsWithCheck()}">${h("button.Okay")}</wl-button>
         </div>
      </wl-dialog>
      <wl-dialog id="export-to-csv" fixed backdrop blockscrolling>
      <wl-card elevation="1" class="intro centered login-panel" style="margin:0;">
        <h3 class="horizontal center layout" style="padding:10px;">
          <span style="margin-left:10px;">${h("session.ExportSessionListToCSVFile")}</span>
          <div class="flex"></div>
          <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
            <wl-icon>close</wl-icon>
          </wl-button>
        </h3>
        <section style="padding: 10px;">
          <mwc-textfield id="export-file-name" label="File name" pattern="^[a-zA-Z0-9_-]+$"
                          validationMessage="Allows letters, numbers and -_."
                          value="${"session_"+this._defaultFileName}" required
                          style="margin-bottom:10px;"></mwc-textfield>
          <div class="horizontal center layout" style="display:none;">
            <wl-textfield id="date-from" label="From" type="date" style="margin-right:10px;"
                          value="${this._getFirstDateOfMonth()}" required
                          @change="${this._validateDateRange}">
              <wl-icon slot="before">date_range</wl-icon>
            </wl-textfield>
            <wl-textfield id="date-to" label="To" type="date"
                          value="${(new Date).toISOString().substring(0,10)}" required
                          @change="${this._validateDateRange}">
              <wl-icon slot="before">date_range</wl-icon>
            </wl-textfield>
          </div>
          <div class="horizontal center layout" style="display:none;">
            <wl-checkbox id="export-csv-checkbox" @change="${e=>this._toggleDialogCheckbox(e)}"></wl-checkbox>
            <wl-label class="unlimited" for="export-csv-checkbox">Export All-time data</wl-label>
          </div>
          <div class="horizontal center layout" style="margin-bottom:10px;">
            <wl-icon class="warning">warning</wl-icon>
            <wl-label class="warning" for="warning">${h("session.OnlyRecent100SessionExport")}</wl-label>
          </div>
          <div class="horizontal center layout">
            <wl-button class="fg green" type="button" inverted outlined style="width:100%;"
            @click="${this._exportToCSV}">
              <wl-icon>get_app</wl-icon>
              ${h("session.ExportCSVFile")}
            </wl-button>
          </div>
          </section>
        </wl-card>
      </wl-dialog>
      `}_updateSessionPage(e){let t=e.target;"button"!==t.role&&(t=e.target.closest("wl-button")),"previous-page"===t.id?this.current_page-=1:this.current_page+=1,this.refreshList()}};e([t({type:Boolean})],m.prototype,"active",void 0),e([t({type:String})],m.prototype,"condition",void 0),e([t({type:Object})],m.prototype,"jobs",void 0),e([t({type:Array})],m.prototype,"compute_sessions",void 0),e([t({type:Array})],m.prototype,"terminationQueue",void 0),e([t({type:String})],m.prototype,"filterAccessKey",void 0),e([t({type:String})],m.prototype,"sessionNameField",void 0),e([t({type:Array})],m.prototype,"appSupportList",void 0),e([t({type:Object})],m.prototype,"appTemplate",void 0),e([t({type:Object})],m.prototype,"imageInfo",void 0),e([t({type:Array})],m.prototype,"_selected_items",void 0),e([t({type:Object})],m.prototype,"_boundControlRenderer",void 0),e([t({type:Object})],m.prototype,"_boundUsageRenderer",void 0),e([t({type:Object})],m.prototype,"_boundSessionInfoRenderer",void 0),e([t({type:Object})],m.prototype,"_boundCheckboxRenderer",void 0),e([t({type:Object})],m.prototype,"_boundUserInfoRenderer",void 0),e([t({type:Object})],m.prototype,"_boundStatusRenderer",void 0),e([t({type:Boolean})],m.prototype,"refreshing",void 0),e([t({type:Boolean})],m.prototype,"is_admin",void 0),e([t({type:Boolean})],m.prototype,"is_superadmin",void 0),e([t({type:String})],m.prototype,"_connectionMode",void 0),e([t({type:Object})],m.prototype,"_grid",void 0),e([t({type:Object})],m.prototype,"notification",void 0),e([t({type:Object})],m.prototype,"terminateSessionDialog",void 0),e([t({type:Object})],m.prototype,"terminateSelectedSessionsDialog",void 0),e([t({type:Object})],m.prototype,"exportToCsvDialog",void 0),e([t({type:Boolean})],m.prototype,"enableScalingGroup",void 0),e([t({type:Object})],m.prototype,"loadingIndicator",void 0),e([t({type:Object})],m.prototype,"refreshTimer",void 0),e([t({type:Object})],m.prototype,"kernel_labels",void 0),e([t({type:Object})],m.prototype,"_defaultFileName",void 0),e([t({type:Proxy})],m.prototype,"statusColorTable",void 0),e([t({type:Number})],m.prototype,"sshPort",void 0),e([t({type:Number})],m.prototype,"vncPort",void 0),e([t({type:Number})],m.prototype,"current_page",void 0),e([t({type:Number})],m.prototype,"session_page_limit",void 0),e([t({type:Number})],m.prototype,"total_session_count",void 0),e([t({type:Number})],m.prototype,"_APIMajorVersion",void 0),m=e([i("backend-ai-session-list")],m);