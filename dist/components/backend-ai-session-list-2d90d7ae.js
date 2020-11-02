import{_ as e,p as t,c as i,B as s,d as n,I as o,a,b as r,f as l,W as c,g as d,h,t as p}from"./backend-ai-console-125e4b92.js";import"./vaadin-grid-sorter-f0db9e83.js";import"./vaadin-grid-selection-column-056a9949.js";import"./vaadin-grid-sort-column-cab34161.js";import"./iconset-a5679453.js";import{J as u}from"./json_to_csv-f333d031.js";var g;!function(e){e[e.EOS=0]="EOS",e[e.Text=1]="Text",e[e.Incomplete=2]="Incomplete",e[e.ESC=3]="ESC",e[e.Unknown=4]="Unknown",e[e.SGR=5]="SGR",e[e.OSCURL=6]="OSCURL"}(g||(g={}));var _=function(){function e(){this.VERSION="4.0.3",this.setup_palettes(),this._use_classes=!1,this._escape_for_html=!0,this.bold=!1,this.fg=this.bg=null,this._buffer="",this._url_whitelist={http:1,https:1}}return Object.defineProperty(e.prototype,"use_classes",{get:function(){return this._use_classes},set:function(e){this._use_classes=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"escape_for_html",{get:function(){return this._escape_for_html},set:function(e){this._escape_for_html=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url_whitelist",{get:function(){return this._url_whitelist},set:function(e){this._url_whitelist=e},enumerable:!0,configurable:!0}),e.prototype.setup_palettes=function(){var e=this;this.ansi_colors=[[{rgb:[0,0,0],class_name:"ansi-black"},{rgb:[187,0,0],class_name:"ansi-red"},{rgb:[0,187,0],class_name:"ansi-green"},{rgb:[187,187,0],class_name:"ansi-yellow"},{rgb:[0,0,187],class_name:"ansi-blue"},{rgb:[187,0,187],class_name:"ansi-magenta"},{rgb:[0,187,187],class_name:"ansi-cyan"},{rgb:[255,255,255],class_name:"ansi-white"}],[{rgb:[85,85,85],class_name:"ansi-bright-black"},{rgb:[255,85,85],class_name:"ansi-bright-red"},{rgb:[0,255,0],class_name:"ansi-bright-green"},{rgb:[255,255,85],class_name:"ansi-bright-yellow"},{rgb:[85,85,255],class_name:"ansi-bright-blue"},{rgb:[255,85,255],class_name:"ansi-bright-magenta"},{rgb:[85,255,255],class_name:"ansi-bright-cyan"},{rgb:[255,255,255],class_name:"ansi-bright-white"}]],this.palette_256=[],this.ansi_colors.forEach((function(t){t.forEach((function(t){e.palette_256.push(t)}))}));for(var t=[0,95,135,175,215,255],i=0;i<6;++i)for(var s=0;s<6;++s)for(var n=0;n<6;++n){var o={rgb:[t[i],t[s],t[n]],class_name:"truecolor"};this.palette_256.push(o)}for(var a=8,r=0;r<24;++r,a+=10){var l={rgb:[a,a,a],class_name:"truecolor"};this.palette_256.push(l)}},e.prototype.escape_txt_for_html=function(e){return e.replace(/[&<>]/gm,(function(e){return"&"===e?"&amp;":"<"===e?"&lt;":">"===e?"&gt;":void 0}))},e.prototype.append_buffer=function(e){var t=this._buffer+e;this._buffer=t},e.prototype.__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},e.prototype.get_next_packet=function(){var e={kind:g.EOS,text:"",url:""},t=this._buffer.length;if(0==t)return e;var i=this._buffer.indexOf("");if(-1==i)return e.kind=g.Text,e.text=this._buffer,this._buffer="",e;if(i>0)return e.kind=g.Text,e.text=this._buffer.slice(0,i),this._buffer=this._buffer.slice(i),e;if(0==i){if(1==t)return e.kind=g.Incomplete,e;var s=this._buffer.charAt(1);if("["!=s&&"]"!=s)return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;if("["==s){if(this._csi_regex||(this._csi_regex=m(this.__makeTemplateObject(["\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          [                      # CSI\n                          ([<-?]?)              # private-mode char\n                          ([d;]*)                    # any digits or semicolons\n                          ([ -/]?               # an intermediate modifier\n                          [@-~])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          [                      # CSI\n                          [ -~]*                # anything legal\n                          ([\0-:])              # anything illegal\n                        )\n                    "],["\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          \\x1b\\[                      # CSI\n                          ([\\x3c-\\x3f]?)              # private-mode char\n                          ([\\d;]*)                    # any digits or semicolons\n                          ([\\x20-\\x2f]?               # an intermediate modifier\n                          [\\x40-\\x7e])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          \\x1b\\[                      # CSI\n                          [\\x20-\\x7e]*                # anything legal\n                          ([\\x00-\\x1f:])              # anything illegal\n                        )\n                    "]))),null===(a=this._buffer.match(this._csi_regex)))return e.kind=g.Incomplete,e;if(a[4])return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;""!=a[1]||"m"!=a[3]?e.kind=g.Unknown:e.kind=g.SGR,e.text=a[2];var n=a[0].length;return this._buffer=this._buffer.slice(n),e}if("]"==s){if(t<4)return e.kind=g.Incomplete,e;if("8"!=this._buffer.charAt(2)||";"!=this._buffer.charAt(3))return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;this._osc_st||(this._osc_st=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var s=e.raw[0],n=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,o=s.replace(n,"");return new RegExp(o,"g")}(this.__makeTemplateObject(["\n                        (?:                         # legal sequence\n                          (\\)                    # ESC                           |                           # alternate\n                          ()                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\0-]                 # anything illegal\n                          |                           # alternate\n                          [\b-]                 # anything illegal\n                          |                           # alternate\n                          [-]                 # anything illegal\n                        )\n                    "],["\n                        (?:                         # legal sequence\n                          (\\x1b\\\\)                    # ESC \\\n                          |                           # alternate\n                          (\\x07)                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\\x00-\\x06]                 # anything illegal\n                          |                           # alternate\n                          [\\x08-\\x1a]                 # anything illegal\n                          |                           # alternate\n                          [\\x1c-\\x1f]                 # anything illegal\n                        )\n                    "]))),this._osc_st.lastIndex=0;var o=this._osc_st.exec(this._buffer);if(null===o)return e.kind=g.Incomplete,e;if(o[3])return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;var a,r=this._osc_st.exec(this._buffer);if(null===r)return e.kind=g.Incomplete,e;if(r[3])return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;if(this._osc_regex||(this._osc_regex=m(this.__makeTemplateObject(["\n                        ^                           # beginning of line\n                                                    #\n                        ]8;                    # OSC Hyperlink\n                        [ -:<-~]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([!-~]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                        ([!-~]+)              # TEXT capture\n                        ]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                    "],["\n                        ^                           # beginning of line\n                                                    #\n                        \\x1b\\]8;                    # OSC Hyperlink\n                        [\\x20-\\x3a\\x3c-\\x7e]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([\\x21-\\x7e]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                        ([\\x21-\\x7e]+)              # TEXT capture\n                        \\x1b\\]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                    "]))),null===(a=this._buffer.match(this._osc_regex)))return e.kind=g.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;e.kind=g.OSCURL,e.url=a[1],e.text=a[2];n=a[0].length;return this._buffer=this._buffer.slice(n),e}}},e.prototype.ansi_to_html=function(e){this.append_buffer(e);for(var t=[];;){var i=this.get_next_packet();if(i.kind==g.EOS||i.kind==g.Incomplete)break;i.kind!=g.ESC&&i.kind!=g.Unknown&&(i.kind==g.Text?t.push(this.transform_to_html(this.with_state(i))):i.kind==g.SGR?this.process_ansi(i):i.kind==g.OSCURL&&t.push(this.process_hyperlink(i)))}return t.join("")},e.prototype.with_state=function(e){return{bold:this.bold,fg:this.fg,bg:this.bg,text:e.text}},e.prototype.process_ansi=function(e){for(var t=e.text.split(";");t.length>0;){var i=t.shift(),s=parseInt(i,10);if(isNaN(s)||0===s)this.fg=this.bg=null,this.bold=!1;else if(1===s)this.bold=!0;else if(22===s)this.bold=!1;else if(39===s)this.fg=null;else if(49===s)this.bg=null;else if(s>=30&&s<38)this.fg=this.ansi_colors[0][s-30];else if(s>=40&&s<48)this.bg=this.ansi_colors[0][s-40];else if(s>=90&&s<98)this.fg=this.ansi_colors[1][s-90];else if(s>=100&&s<108)this.bg=this.ansi_colors[1][s-100];else if((38===s||48===s)&&t.length>0){var n=38===s,o=t.shift();if("5"===o&&t.length>0){var a=parseInt(t.shift(),10);a>=0&&a<=255&&(n?this.fg=this.palette_256[a]:this.bg=this.palette_256[a])}if("2"===o&&t.length>2){var r=parseInt(t.shift(),10),l=parseInt(t.shift(),10),c=parseInt(t.shift(),10);if(r>=0&&r<=255&&l>=0&&l<=255&&c>=0&&c<=255){var d={rgb:[r,l,c],class_name:"truecolor"};n?this.fg=d:this.bg=d}}}}},e.prototype.transform_to_html=function(e){var t=e.text;if(0===t.length)return t;if(this._escape_for_html&&(t=this.escape_txt_for_html(t)),!e.bold&&null===e.fg&&null===e.bg)return t;var i=[],s=[],n=e.fg,o=e.bg;e.bold&&i.push("font-weight:bold"),this._use_classes?(n&&("truecolor"!==n.class_name?s.push(n.class_name+"-fg"):i.push("color:rgb("+n.rgb.join(",")+")")),o&&("truecolor"!==o.class_name?s.push(o.class_name+"-bg"):i.push("background-color:rgb("+o.rgb.join(",")+")"))):(n&&i.push("color:rgb("+n.rgb.join(",")+")"),o&&i.push("background-color:rgb("+o.rgb+")"));var a="",r="";return s.length&&(a=' class="'+s.join(" ")+'"'),i.length&&(r=' style="'+i.join(";")+'"'),"<span"+r+a+">"+t+"</span>"},e.prototype.process_hyperlink=function(e){var t=e.url.split(":");return t.length<1?"":this._url_whitelist[t[0]]?'<a href="'+this.escape_txt_for_html(e.url)+'">'+this.escape_txt_for_html(e.text)+"</a>":""},e}();function m(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var s=e.raw[0],n=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,o=s.replace(n,"");return new RegExp(o)}let b=class extends s{constructor(){super(),this.active=!0,this.condition="running",this.jobs=Object(),this.compute_sessions=Array(),this.terminationQueue=Array(),this.filterAccessKey="",this.sessionNameField="name",this.appSupportList=Array(),this.appTemplate=Object(),this.imageInfo=Object(),this._selected_items=Array(),this._boundControlRenderer=this.controlRenderer.bind(this),this._boundConfigRenderer=this.configRenderer.bind(this),this._boundUsageRenderer=this.usageRenderer.bind(this),this._boundSessionInfoRenderer=this.sessionInfoRenderer.bind(this),this._boundCheckboxRenderer=this.checkboxRenderer.bind(this),this._boundUserInfoRenderer=this.userInfoRenderer.bind(this),this._boundStatusRenderer=this.statusRenderer.bind(this),this.refreshing=!1,this.is_admin=!1,this.is_superadmin=!1,this._connectionMode="API",this._grid=Object(),this.notification=Object(),this.terminateSessionDialog=Object(),this.terminateSelectedSessionsDialog=Object(),this.exportToCsvDialog=Object(),this.enableScalingGroup=!1,this.spinner=Object(),this.refreshTimer=Object(),this.kernel_labels=Object(),this.indicator=Object(),this._defaultFileName="",this.statusColorTable=new Proxy({"idle-timeout":"green","user-requested":"green","failed-to-start":"red","creation-failed":"red","self-terminated":"green"},{get:(e,t)=>e.hasOwnProperty(t)?e[t]:"lightgrey"}),this.sshPort=0,this.vncPort=0,this.current_page=1,this.session_page_limit=50,this.total_session_count=0,this._APIMajorVersion=5}static get styles(){return[n,o,a,r`
        vaadin-grid {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 265px);
        }

        wl-icon.indicator {
          --icon-size: 16px;
        }

        wl-icon.pagination {
          color: var(--paper-grey-700);
        }

        wl-button.pagination[disabled] wl-icon.pagination {
          color: var(--paper-grey-300);
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
          --button-bg-disabled: var(--paper-grey-50);
          --button-color-disabled: var(--paper-grey-200);
        }

        wl-button.pagination[disabled] {
          --button-shadow-color: transparent;
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
          --component-height: calc(100vh - 50px);
          right: 0;
          top: 50px;
        }

        @media screen and (max-width: 899px) {
          #work-dialog,
          #work-dialog.mini_ui {
            --left: 0;
            --component-width: 100%;
          }
        }

        @media screen and (min-width: 900px) {
          #work-dialog {
            --left: 100px;
            --component-width: calc(100% - 50px);
          }

          #work-dialog.mini_ui {
            --left: 40px;
            --component-width: calc(100% - 50px);
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

        div.configuration {
          width: 70px !important;
        }

        div.configuration wl-icon {
          padding-right: 5px;
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

        backend-ai-dialog wl-textfield {
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

        .mount-button {
          border: none;
          background: none;
          padding: 0;
          outline-style: none;
        }
      `]}get _isRunning(){return"running"===this.condition}_isPreparing(e){return-1!==["RESTARTING","PREPARING","PULLING"].indexOf(e)}_isError(e){return"ERROR"===e}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this._grid=this.shadowRoot.querySelector("#list-grid"),this._initializeAppTemplate(),this.refreshTimer=null,fetch("resources/image_metadata.json").then((e=>e.json())).then((e=>{this.imageInfo=e.imageInfo;for(let e in this.imageInfo)this.kernel_labels[e]=[],"label"in this.imageInfo[e]?this.kernel_labels[e]=this.imageInfo[e].label:this.kernel_labels[e]=[]})),this.notification=globalThis.lablupNotification,this.terminateSessionDialog=this.shadowRoot.querySelector("#terminate-session-dialog"),this.terminateSelectedSessionsDialog=this.shadowRoot.querySelector("#terminate-selected-sessions-dialog"),this.exportToCsvDialog=this.shadowRoot.querySelector("#export-to-csv"),document.addEventListener("backend-ai-group-changed",(e=>this.refreshList(!0,!1))),document.addEventListener("backend-ai-ui-changed",(e=>this._refreshWorkDialogUI(e))),this._refreshWorkDialogUI({detail:{"mini-ui":globalThis.mini_ui}}),document.addEventListener("backend-ai-csv-file-export-session",(()=>{this._openExportToCsvDialog()}))}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{globalThis.backendaiclient.is_admin?this.shadowRoot.querySelector("#access-key-filter").style.display="block":(this.shadowRoot.querySelector("#access-key-filter").parentNode.removeChild(this.shadowRoot.querySelector("#access-key-filter")),this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 225px)!important"),globalThis.backendaiclient.APIMajorVersion<5&&(this.sessionNameField="sess_id"),this.is_admin=globalThis.backendaiclient.is_admin,this.is_superadmin=globalThis.backendaiclient.is_superadmin,this._connectionMode=globalThis.backendaiclient._config._connectionMode,this.enableScalingGroup=globalThis.backendaiclient.supports("scaling-group"),this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._refreshJobData()}),!0):(globalThis.backendaiclient.is_admin?this.shadowRoot.querySelector("#access-key-filter").style.display="block":(this.shadowRoot.querySelector("#access-key-filter").parentNode.removeChild(this.shadowRoot.querySelector("#access-key-filter")),this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 225px)!important"),globalThis.backendaiclient.APIMajorVersion<5&&(this.sessionNameField="sess_id"),this.is_admin=globalThis.backendaiclient.is_admin,this.is_superadmin=globalThis.backendaiclient.is_superadmin,this._connectionMode=globalThis.backendaiclient._config._connectionMode,this.enableScalingGroup=globalThis.backendaiclient.supports("scaling-group"),this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._refreshJobData()))}_initializeAppTemplate(){fetch("resources/app_template.json").then((e=>e.json())).then((e=>{this.appTemplate=e.appTemplate}))}async refreshList(e=!0,t=!0){return this._refreshJobData(e,t)}async _refreshJobData(e=!1,t=!0){if(await this.updateComplete,!0!==this.active)return;if(!0===this.refreshing)return;let i;switch(this.refreshing=!0,this.spinner.show(),i="RUNNING",this.condition){case"running":i=["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING"];break;case"finished":i=["TERMINATED","CANCELLED"];break;case"others":i=["TERMINATING","ERROR"];break;default:i=["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING"]}globalThis.backendaiclient.supports("detailed-session-states")&&(i=i.join(","));let s=["id","name","image","created_at","terminated_at","status","status_info","service_ports","mounts","occupied_slots","access_key"];this.enableScalingGroup&&s.push("scaling_group"),"SESSION"===this._connectionMode&&s.push("user_email"),globalThis.backendaiclient.is_superadmin?s.push("containers {container_id agent occupied_slots live_stat last_stat}"):s.push("containers {container_id occupied_slots live_stat last_stat}");let n=globalThis.backendaiclient.current_group_id();globalThis.backendaiclient.computeSession.list(s,i,this.filterAccessKey,this.session_page_limit,(this.current_page-1)*this.session_page_limit,n).then((i=>{this.spinner.hide(),this.total_session_count=i.compute_session_list.total_count,0===this.total_session_count&&(this.total_session_count=1);let s,n=i.compute_session_list.items;if(void 0!==n&&0!=n.length){const e=this.compute_sessions,t=[];Object.keys(e).map(((i,s)=>{t.push(e[i][this.sessionNameField])})),Object.keys(n).map(((e,t)=>{let i=n[e],s=JSON.parse(i.occupied_slots);const o=n[e].image.split("/")[2]||n[e].image.split("/")[1];if(n[e].cpu_slot=parseInt(s.cpu),n[e].mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(s.mem,"g")),n[e].mem_slot=n[e].mem_slot.toFixed(2),n[e].elapsed=this._elapsed(n[e].created_at,n[e].terminated_at),n[e].created_at_hr=this._humanReadableTime(n[e].created_at),n[e].containers&&n[e].containers.length>0){const t=n[e].containers[0],i=t.live_stat?JSON.parse(t.live_stat):null;n[e].agent=t.agent,i&&i.cpu_used?n[e].cpu_used_time=this._automaticScaledTime(i.cpu_used.capacity):n[e].cpu_used_time=this._automaticScaledTime(0),i&&i.io_read?n[e].io_read_bytes_mb=this._bytesToMB(i.io_read.current):n[e].io_read_bytes_mb=0,i&&i.io_write?n[e].io_write_bytes_mb=this._bytesToMB(i.io_write.current):n[e].io_write_bytes_mb=0}let a=JSON.parse(n[e].service_ports);!0===Array.isArray(a)?n[e].app_services=a.map((e=>e.name)):n[e].app_services=[],0===n[e].app_services.length||"running"!=this.condition?n[e].appSupport=!1:n[e].appSupport=!0,"running"===this.condition?n[e].running=!0:n[e].running=!1,"cuda.device"in s&&(n[e].cuda_gpu_slot=parseInt(s["cuda.device"])),"rocm.device"in s&&(n[e].rocm_gpu_slot=parseInt(s["rocm.device"])),"tpu.device"in s&&(n[e].tpu_slot=parseInt(s["tpu.device"])),"cuda.shares"in s&&(n[e].cuda_fgpu_slot=parseFloat(s["cuda.shares"]).toFixed(2)),n[e].kernel_image=o,n[e].sessionTags=this._getKernelInfo(i.image);const r=i.image.split("/");let l=r[r.length-1].split(":")[1].split("-");void 0!==l[1]?(n[e].baseversion=l[0],n[e].baseimage=l[1],n[e].additional_reqs=l.slice(1,l.length).map((e=>e.toUpperCase()))):n[e].baseversion=n[e].tag,this._selected_items.includes(n[e][this.sessionNameField])?n[e].checked=!0:n[e].checked=!1}))}if(this.compute_sessions=n,this.refreshing=!1,!0===this.active){if(!0===e){var o=new CustomEvent("backend-ai-resource-refreshed",{detail:{}});document.dispatchEvent(o)}!0===t&&(s="running"===this.condition?5e3:3e4,this.refreshTimer=setTimeout((()=>{this._refreshJobData()}),s))}})).catch((e=>{this.spinner.hide(),console.log(e),e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_refreshWorkDialogUI(e){let t=this.shadowRoot.querySelector("#work-dialog");e.detail.hasOwnProperty("mini-ui")&&!0===e.detail["mini-ui"]?t.classList.add("mini_ui"):t.classList.remove("mini_ui")}_humanReadableTime(e){return(e=new Date(e)).toLocaleString()}_getKernelInfo(e){let t=[];if(void 0===e)return[];const i=e.split("/");let s=(i[2]||i[1]).split(":")[0];if(s in this.kernel_labels)t.push(this.kernel_labels[s]);else{const i=e.split("/");let s,n;3===i.length?(s=i[1],n=i[2]):(s="",n=i[1]),n=n.split(":")[0],n=s?s+"/"+n:n,t.push([{category:"Env",tag:""+n,color:"lightgrey"}])}return t}_byteToMB(e){return Math.floor(e/1e6)}_byteToGB(e){return Math.floor(e/1e9)}_MBToGB(e){return e/1024}_automaticScaledTime(e){let t=Object(),i=["D","H","M","S"],s=[864e5,36e5,6e4,1e3];for(let n=0;n<s.length;n++)Math.floor(e/s[n])>0&&(t[i[n]]=Math.floor(e/s[n]),e%=s[n]);return 0===Object.keys(t).length&&(t=e>0?{MS:e}:{NODATA:1}),t}_msecToSec(e){return Number(e/1e3).toFixed(0)}_bytesToMB(e){return Number(e/1048576).toFixed(1)}_elapsed(e,t){return globalThis.backendaiclient.utils.elapsedTime(e,t)}_indexRenderer(e,t,i){let s=i.index+1;c(h`
        <div>${s}</div>
      `,e)}async sendRequest(e){let t,i;try{"GET"==e.method&&(e.body=void 0),t=await fetch(e.uri,e);let s=t.headers.get("Content-Type");if(i=s.startsWith("application/json")||s.startsWith("application/problem+json")?await t.json():s.startsWith("text/")?await t.text():await t.blob(),!t.ok)throw i}catch(e){}return i}_terminateApp(e){let t=globalThis.backendaiclient._config.accessKey,i={method:"GET",uri:this._getProxyURL()+"proxy/"+t+"/"+e};return this.sendRequest(i).then((t=>{this.total_session_count-=1;let i=globalThis.backendaiclient._config.accessKey;if(void 0!==t&&404!==t.code){let t={method:"GET",uri:this._getProxyURL()+"proxy/"+i+"/"+e+"/delete"};return this.sendRequest(t)}return Promise.resolve(!0)})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_getProxyURL(){let e="http://127.0.0.1:5050/";return void 0!==globalThis.__local_proxy?e=globalThis.__local_proxy:void 0!==globalThis.backendaiclient._config.proxyURL&&(e=globalThis.backendaiclient._config.proxyURL),e}_showLogs(e){const t=e.target.closest("#controls"),i=t["session-uuid"],s=t["session-name"],n=globalThis.backendaiclient.APIMajorVersion<5?s:i,o=t["access-key"];globalThis.backendaiclient.get_logs(n,o).then((e=>{let t=(new _).ansi_to_html(e.result.logs);setTimeout((()=>{this.shadowRoot.querySelector("#work-title").innerHTML=`${s} (${i})`,this.shadowRoot.querySelector("#work-area").innerHTML=`<pre>${t}</pre>`||d("session.NoLogs"),this.shadowRoot.querySelector("#work-dialog").sessionUuid=i,this.shadowRoot.querySelector("#work-dialog").sessionName=s,this.shadowRoot.querySelector("#work-dialog").accessKey=o,this.shadowRoot.querySelector("#work-dialog").show()}),100)})).catch((e=>{e&&e.message?(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=l.relieve(e.title),this.notification.show(!0,e))}))}_refreshLogs(){const e=this.shadowRoot.querySelector("#work-dialog").sessionUuid,t=this.shadowRoot.querySelector("#work-dialog").sessionName,i=globalThis.backendaiclient.APIMajorVersion<5?t:e,s=this.shadowRoot.querySelector("#work-dialog").accessKey;globalThis.backendaiclient.getLogs(i,s).then((e=>{const t=(new _).ansi_to_html(e.result.logs);this.shadowRoot.querySelector("#work-area").innerHTML=`<pre>${t}</pre>`||d("session.NoLogs")})).catch((e=>{e&&e.message?(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=l.relieve(e.title),this.notification.show(!0,e))}))}_showAppLauncher(e){const t=e.target.closest("#controls");return globalThis.appLauncher.showLauncher(t)}async _runTerminal(e){const t=e.target.closest("#controls")["session-uuid"];return globalThis.appLauncher.runTerminal(t)}_openTerminateSessionDialog(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"];this.terminateSessionDialog.sessionName=i,this.terminateSessionDialog.accessKey=s,this.terminateSessionDialog.show()}_terminateSession(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"];return this.terminationQueue.includes(i)?(this.notification.text="Already terminating the session.",this.notification.show(),!1):(this.notification.text="Terminating session...",this.notification.show(),this._terminateKernel(i,s))}_terminateSessionWithCheck(e){return this.terminationQueue.includes(this.terminateSessionDialog.sessionName)?(this.notification.text="Already terminating the session.",this.notification.show(),!1):(this.notification.text="Terminating session...",this.notification.show(),this._terminateKernel(this.terminateSessionDialog.sessionName,this.terminateSessionDialog.accessKey).then((e=>{this._selected_items=[],this._clearCheckboxes(),this.terminateSessionDialog.hide(),this.notification.text="Session terminated.",this.notification.show();let t=new CustomEvent("backend-ai-resource-refreshed",{detail:"running"});document.dispatchEvent(t)})).catch((e=>{this._selected_items=[],this._clearCheckboxes(),this.terminateSessionDialog.hide(),this.notification.text=l.relieve("Problem occurred during termination."),this.notification.show(!0,e);let t=new CustomEvent("backend-ai-resource-refreshed",{detail:"running"});document.dispatchEvent(t)})))}_openTerminateSelectedSessionsDialog(e){this.terminateSelectedSessionsDialog.show()}_clearCheckboxes(){[...this.shadowRoot.querySelectorAll("wl-checkbox.list-check")].forEach((e=>{e.removeAttribute("checked")}))}_terminateSelectedSessionsWithCheck(){this.notification.text="Terminating sessions...",this.notification.show();let e=this._selected_items.map((e=>this._terminateKernel(e[this.sessionNameField],e.access_key)));return this._selected_items=[],Promise.all(e).then((e=>{this.terminateSelectedSessionsDialog.hide(),this._clearCheckboxes(),this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none",this.notification.text="Sessions terminated.",this.notification.show()})).catch((e=>{this.terminateSelectedSessionsDialog.hide(),this._clearCheckboxes(),this.notification.text=l.relieve("Problem occurred during termination."),this.notification.show(!0,e)}))}_terminateSelectedSessions(){this.notification.text="Terminating sessions...",this.notification.show();let e=this._selected_items.map((e=>this._terminateKernel(e[this.sessionNameField],e.access_key)));return Promise.all(e).then((e=>{this._selected_items=[],this._clearCheckboxes(),this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none",this.notification.text="Sessions terminated.",this.notification.show()})).catch((e=>{this._selected_items=[],this._clearCheckboxes(),this.notification.text=l.relieve("Problem occurred during termination."),this.notification.show(!0,e)}))}async _terminateKernel(e,t){return this.terminationQueue.push(e),this._terminateApp(e).then((()=>{globalThis.backendaiclient.destroyKernel(e,t).then((e=>{setTimeout((async()=>{this.terminationQueue=[];let e=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(e)}),1e3)})).catch((e=>{let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),this.notification.text=l.relieve("Problem occurred during termination."),this.notification.show(!0,e)}))})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_hideDialog(e){let t=e.target.closest("backend-ai-dialog");if(t.hide(),"ssh-dialog"===t.id){const e=this.shadowRoot.querySelector("#sshkey-download-link");globalThis.URL.revokeObjectURL(e.href)}}_updateFilterAccessKey(e){this.filterAccessKey=e.target.value,this.refreshTimer&&(clearTimeout(this.refreshTimer),this._refreshJobData())}_openExportToCsvDialog(){this._defaultFileName=this._getDefaultCSVFileName(),this.exportToCsvDialog.show()}_createMountedFolderDropdown(e,t){const i=e.target,s=document.createElement("mwc-menu"),n=/[\[\]\,\'\"]/g;s.anchor=i,s.className="dropdown-menu",s.style.boxShadow="0 1px 1px rgba(0, 0, 0, 0.2)",s.setAttribute("open",""),s.setAttribute("fixed",""),s.setAttribute("x",10),s.setAttribute("y",15),t.length>1&&t.map(((e,t)=>{if(t>0){let t=document.createElement("mwc-list-item");t.innerHTML=e.replace(n,"").split(" ")[0],t.style.height="25px",t.style.fontWeight="400",t.style.fontSize="14px",t.style.fontFamily="var(--general-font-family)",s.appendChild(t)}})),document.body.appendChild(s)}_removeMountedFolderDropdown(){const e=document.getElementsByClassName("dropdown-menu");for(;e[0];)e[0].parentNode.removeChild(e[0])}sessionInfoRenderer(e,t,i){c(h`
        <div class="layout vertical start">
          <div>${i.item[this.sessionNameField]}</div>
          ${i.item.sessionTags?i.item.sessionTags.map((e=>h`
            ${e.map((e=>("Env"===e.category&&(e.category=e.tag),e.category&&i.item.baseversion&&(e.tag=i.item.baseversion),h`
                <lablup-shields app="${void 0===e.category?"":e.category}" color="${e.color}" description="${e.tag}" ui="round"></lablup-shields>
              `)))}
          `)):h``}
          ${i.item.additional_reqs?h`
            <div class="layout horizontal center wrap">
              ${i.item.additional_reqs.map((e=>h`
                  <lablup-shields app="" color="green" description="${e}" ui="round"></lablup-shields>
                `))}
            </div>
          `:h``}
        </div>
      `,e)}controlRenderer(e,t,i){c(h`
        <div id="controls" class="layout horizontal flex center"
             .session-uuid="${i.item.id}"
             .session-name="${i.item[this.sessionNameField]}"
             .access-key="${i.item.access_key}"
             .kernel-image="${i.item.kernel_image}"
             .app-services="${i.item.app_services}">
          ${i.item.appSupport?h`
            <wl-button fab flat inverted class="fg controls-running green"
                               @click="${e=>this._showAppLauncher(e)}"
                               icon="vaadin:caret-right"><wl-icon>launch</wl-icon></wl-button>
            <wl-button fab flat inverted class="fg controls-running"
                               @click="${e=>this._runTerminal(e)}"><wl-icon>keyboard_arrow_right</wl-icon></wl-button>
          `:h``}
          ${this._isRunning&&!this._isPreparing(i.item.status)||this._isError(i.item.status)?h`
            <wl-button fab flat inverted class="fg red controls-running"
                               @click="${e=>this._openTerminateSessionDialog(e)}"><wl-icon>power_settings_new</wl-icon></wl-button>
          `:h``}
          ${this._isRunning&&!this._isPreparing(i.item.status)||this._APIMajorVersion>4?h`
            <wl-button fab flat inverted class="fg blue controls-running" icon="assignment"
                               @click="${e=>this._showLogs(e)}"
                               on-tap="_showLogs"><wl-icon>assignment</wl-icon></wl-button>
          `:h`
            <wl-button fab flat inverted disabled class="fg controls-running" icon="assignment"><wl-icon>assignment</wl-icon></wl-button>
          `}
        </div>
      `,e)}configRenderer(e,t,i){c(h`
        ${i.item.scaling_group?h`
        <div class="layout horizontal center flex">
          <div class="layout horizontal configuration">
            <wl-icon class="fg green indicator">work</wl-icon>
            <span>${i.item.scaling_group}</span>
            <span class="indicator">RG</span>
          </div>
        </div>`:h``}
        <div class="layout horizontal center flex">
          <div class="layout horizontal configuration">
            <wl-icon class="fg green indicator">developer_board</wl-icon>
            <span>${i.item.cpu_slot}</span>
            <span class="indicator">${p("session.core")}</span>
          </div>
          <div class="layout horizontal configuration">
            <wl-icon class="fg green indicator">memory</wl-icon>
            <span>${i.item.mem_slot}</span>
            <span class="indicator">GB</span>
          </div>
        </div>
        <div class="layout horizontal center flex">
          <div class="layout horizontal configuration">
            ${i.item.cuda_gpu_slot?h`
              <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg" />
              <span>${i.item.cuda_gpu_slot}</span>
              <span class="indicator">GPU</span>
              `:h``}
            ${!i.item.cuda_gpu_slot&&i.item.cuda_fgpu_slot?h`
              <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg" />
              <span>${i.item.cuda_fgpu_slot}</span>
              <span class="indicator">GPU</span>
              `:h``}
            ${i.item.rocm_gpu_slot?h`
              <img class="indicator-icon fg green" src="/resources/icons/ROCm.png" />
              <span>${i.item.rocm_gpu_slot}</span>
              <span class="indicator">GPU</span>
              `:h``}
            ${i.item.tpu_slot?h`
              <wl-icon class="fg green indicator">view_module</wl-icon>
              <span>${i.item.tpu_slot}</span>
              <span class="indicator">TPU</span>
              `:h``}
            ${i.item.cuda_gpu_slot||i.item.cuda_fgpu_slot||i.item.rocm_gpu_slot||i.item.tpu_slot?h``:h`
              <wl-icon class="fg green indicator">view_module</wl-icon>
              <span>-</span>
              <span class="indicator">GPU</span>
              `}
          </div>
          <div class="layout horizontal configuration">
            <wl-icon class="fg green indicator">folder_open</wl-icon>
              ${i.item.mounts.length>0?h`
                <button class="mount-button"
                  @mouseenter="${e=>this._createMountedFolderDropdown(e,i.item.mounts)}"
                  @mouseleave="${()=>this._removeMountedFolderDropdown()}"
                >
                  ${i.item.mounts[0].replace(/[\[\]\,\'\"]/g,"").split(" ")[0]}
                </button>
              `:h``}
            <!-- <span>${i.item.storage_capacity}</span> -->
            <!-- <span class="indicator">${i.item.storage_unit}</span> -->
          </div>
        </div>
     `,e)}usageRenderer(e,t,i){c(h`
        <div class="layout horizontal center flex">
          <wl-icon class="fg blue indicator" style="margin-right:3px;">developer_board</wl-icon>
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
          <wl-icon class="fg blue indicator" style="margin-right:3px;">device_hub</wl-icon>
          <div class="vertical start layout">
            <span style="font-size:9px">${i.item.io_read_bytes_mb}<span class="indicator">MB</span></span>
            <span class="indicator">READ</span>
          </div>
          <div class="vertical start layout">
            <span style="font-size:8px">${i.item.io_write_bytes_mb}<span class="indicator">MB</span></span>
            <span class="indicator">WRITE</span>
          </div>
        </div>`,e)}_toggleCheckbox(e){let t=this._selected_items.findIndex((t=>t[this.sessionNameField]==e[this.sessionNameField]));-1===t?this._selected_items.push(e):this._selected_items.splice(t,1),this._selected_items.length>0?this.shadowRoot.querySelector("#multiple-action-buttons").style.display="block":this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none"}_toggleDialogCheckbox(e){let t=e.target,i=this.shadowRoot.querySelector("#date-from"),s=this.shadowRoot.querySelector("#date-to");i.disabled=t.checked,s.disabled=t.checked}checkboxRenderer(e,t,i){this._isRunning&&!this._isPreparing(i.item.status)||this._APIMajorVersion>4?c(h`
            <wl-checkbox class="list-check" style="--checkbox-size:12px;" ?checked="${!0===i.item.checked}" @click="${()=>this._toggleCheckbox(i.item)}"></wl-checkbox>
        `,e):c(h``,e)}userInfoRenderer(e,t,i){c(h`
        <div class="layout vertical">
          <span class="indicator">${"API"===this._connectionMode?i.item.access_key:i.item.user_email}</span>
        </div>
      `,e)}statusRenderer(e,t,i){c(h`
        <span style="font-size: 12px;">${i.item.status}</span>
        ${i.item.status_info?h`
        <br />
        <lablup-shields app="" color="${this.statusColorTable[i.item.status_info]}" description="${i.item.status_info}" ui="round"></lablup-shields>
        `:h``}
      `,e)}_getFirstDateOfMonth(){let e=new Date;return new Date(e.getFullYear(),e.getMonth(),2).toISOString().substring(0,10)}_getDefaultCSVFileName(){return(new Date).toISOString().substring(0,10)+"_"+(new Date).toTimeString().slice(0,8).replace(/:/gi,"-")}_validateDateRange(){let e=this.shadowRoot.querySelector("#date-to"),t=this.shadowRoot.querySelector("#date-from");if(e.value&&t.value){new Date(e.value).getTime()<new Date(t.value).getTime()&&(e.value=t.value)}}_exportToCSV(){const e=this.shadowRoot.querySelector("#export-file-name");if(!e.validity.valid)return;const t=[];let i=["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING","TERMINATED","CANCELLED","ERROR"];globalThis.backendaiclient.supports("detailed-session-states")&&(i=i.join(","));const s=["id","name","image","created_at","terminated_at","status","status_info","access_key"];"SESSION"===this._connectionMode&&s.push("user_email"),globalThis.backendaiclient.is_superadmin?s.push("containers {container_id agent occupied_slots live_stat last_stat}"):s.push("containers {container_id occupied_slots live_stat last_stat}");const n=globalThis.backendaiclient.current_group_id();globalThis.backendaiclient.computeSession.listAll(s,i,this.filterAccessKey,100,0,n).then((i=>{const s=i;if(0===s.length)return this.notification.text="No sessions",this.notification.show(),void this.exportToCsvDialog.hide();s.forEach((e=>{const i={};if(i.id=e.id,i.name=e.name,i.image=e.image.split("/")[2]||e.image.split("/")[1],i.status=e.status,i.status_info=e.status_info,i.access_key=e.access_key,i.created_at=e.created_at,i.terminated_at=e.terminated_at,e.containers&&e.containers.length>0){const t=e.containers[0];i.container_id=t.container_id;const s=t.occupied_slots?JSON.parse(t.occupied_slots):null;s&&(i.cpu_slot=parseInt(s.cpu),i.mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(s.mem,"g")).toFixed(2),s["cuda.shares"]&&(i.cuda_shares=s["cuda.shares"]),s["cuda.device"]&&(i.cuda_device=s["cuda.device"]),s["tpu.device"]&&(i.tpu_device=s["tpu.device"]),s["rocm.device"]&&(i.rocm_device=s["rocm.device"]));const n=t.live_stat?JSON.parse(t.live_stat):null;n&&(n.cpu_used&&n.cpu_used.capacity?i.cpu_used_time=this._automaticScaledTime(n.cpu_used.capacity):i.cpu_used_time=0,n.io_read?i.io_read_bytes_mb=this._bytesToMB(n.io_read.current):i.io_read_bytes_mb=0,n.io_write?i.io_write_bytes_mb=this._bytesToMB(n.io_write.current):i.io_write_bytes_mb=0),t.agent&&(i.agent=t.agent)}t.push(i)})),u.exportToCsv(e.value,t),this.notification.text="Downloading CSV file...",this.notification.show(),this.exportToCsvDialog.hide()}))}render(){return h`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <div class="layout horizontal center filters">
        <div id="multiple-action-buttons" style="display:none;">
          <wl-button outlined class="multiple-action-button" @click="${()=>this._openTerminateSelectedSessionsDialog()}">
            <wl-icon style="--icon-size: 20px;">delete</wl-icon>
            ${p("session.Terminate")}
          </wl-button>
        </div>
        <span class="flex"></span>
        <wl-textfield id="access-key-filter" type="search" size=30
                     label="${p("general.AccessKey")}" no-label-float .value="${this.filterAccessKey}"
                     style="display:none"
                     on-change="_updateFilterAccessKey">
        </wl-textfield>
      </div>

      <vaadin-grid id="list-grid" theme="row-stripes column-borders compact" aria-label="Session list"
         .items="${this.compute_sessions}" height-by-rows>
        ${this._isRunning?h`
          <vaadin-grid-column width="40px" flex-grow="0" text-align="center" .renderer="${this._boundCheckboxRenderer}">
          </vaadin-grid-column>
        `:h``}
        <vaadin-grid-column width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>
        ${this.is_admin?h`
          <vaadin-grid-sort-column resizable width="130px" header="${"API"===this._connectionMode?"API Key":"User ID"}" flex-grow="0" path="access_key" .renderer="${this._boundUserInfoRenderer}">
          </vaadin-grid-sort-column>
        `:h``}
        <vaadin-grid-column width="150px" resizable header="${p("session.SessionInfo")}" .renderer="${this._boundSessionInfoRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="90px" flex-grow="0" header="${p("session.Status")}" resizable .renderer="${this._boundStatusRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-column width="160px" flex-grow="0" header="${p("general.Control")}" .renderer="${this._boundControlRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="160px" flex-grow="0" resizable header="${p("session.Configuration")}" .renderer="${this._boundConfigRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="120px" flex-grow="0" resizable header="${p("session.Usage")}" .renderer="${this._boundUsageRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-sort-column resizable auto-width flex-grow="0" header="${p("session.Starts")}" path="created_at">
          <template>
            <div class="layout vertical">
              <span>[[item.created_at_hr]]</span>
            </div>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-column width="100px" flex-grow="0" resizable header="${p("session.Reservation")}">
          <template>
            <div class="layout vertical">
              <span>[[item.elapsed]]</span>
            </div>
          </template>
        </vaadin-grid-column>
        ${this.is_superadmin?h`
          <vaadin-grid-column auto-width flex-grow="0" resizable header="${p("session.Agent")}">
            <template>
              <div class="layout vertical">
                <span>[[item.agent]]</span>
              </div>
            </template>
          </vaadin-grid-column>
            `:h``}
      </vaadin-grid>
      <div class="horizontal center-justified layout flex" style="padding: 10px;">
      <mwc-icon-button
      class="pagination"
      id="previous-page"
      icon="navigate_before"
      ?disabled="${1===this.current_page}"
      @click="${e=>this._updateSessionPage(e)}"></mwc-icon-button>
        <wl-label style="padding-top: 5px; width:auto; text-align:center;">
        ${this.current_page} / ${Math.ceil(this.total_session_count/this.session_page_limit)}</wl-label>
        <mwc-icon-button
        class="pagination"
        id="next-page"
        icon="navigate_next"
        ?disabled="${this.total_session_count<=this.session_page_limit*this.current_page}"
        @click="${e=>this._updateSessionPage(e)}"></mwc-icon-button>
      </div>
      <backend-ai-dialog id="work-dialog" narrowLayout scrollable fixed backdrop>
        <span slot="title" id="work-title"></span>
        <div slot="action">
          <wl-button fab flat inverted @click="${e=>this._refreshLogs()}">
            <wl-icon>refresh</wl-icon>
          </wl-button>
        </div>
        <div slot="content" id="work-area" style="overflow:scroll;"></div>
        <iframe id="work-page" frameborder="0" border="0" cellspacing="0"
                style="border-style: none;width: 100%;"></iframe>
      </backend-ai-dialog>
      <backend-ai-dialog id="terminate-session-dialog" fixed backdrop>
         <span slot="title">${p("dialog.title.LetsDouble-Check")}</span>
         <div slot="content">
            <p>${p("usersettings.SessionTerminationDialog")}</p>
         </div>
         <div slot="footer" class="horizontal end-justified flex layout">
            <wl-button class="cancel" inverted flat @click="${e=>this._hideDialog(e)}">${p("button.Cancel")}</wl-button>
            <wl-button class="ok" @click="${e=>this._terminateSessionWithCheck(e)}">${p("button.Okay")}</wl-button>
         </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="terminate-selected-sessions-dialog" fixed backdrop>
         <span slot="title">${p("dialog.title.LetsDouble-Check")}</span>
         <div slot="content">
            <p>${p("usersettings.SessionTerminationDialog")}</p>
         </div>
         <div slot="footer" class="horizontal end-justified flex layout">
            <wl-button class="cancel" inverted flat @click="${e=>this._hideDialog(e)}">${p("button.Cancel")}</wl-button>
            <wl-button class="ok" @click="${()=>this._terminateSelectedSessionsWithCheck()}">${p("button.Okay")}</wl-button>
         </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="export-to-csv" fixed backdrop>
        <span slot="title">${p("session.ExportSessionListToCSVFile")}</span>
        <div slot="content">
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
            <wl-label class="warning" for="warning">${p("session.OnlyRecent100SessionExport")}</wl-label>
          </div>
          <div class="horizontal center layout">
            <wl-button class="fg green" type="button" inverted outlined style="width:100%;"
            @click="${this._exportToCSV}">
              <wl-icon>get_app</wl-icon>
              ${p("session.ExportCSVFile")}
            </wl-button>
          </div>
        </div>
      </backend-ai-dialog>
      `}_updateSessionPage(e){"previous-page"===e.target.id?this.current_page-=1:this.current_page+=1,this.refreshList()}};e([t({type:Boolean})],b.prototype,"active",void 0),e([t({type:String})],b.prototype,"condition",void 0),e([t({type:Object})],b.prototype,"jobs",void 0),e([t({type:Array})],b.prototype,"compute_sessions",void 0),e([t({type:Array})],b.prototype,"terminationQueue",void 0),e([t({type:String})],b.prototype,"filterAccessKey",void 0),e([t({type:String})],b.prototype,"sessionNameField",void 0),e([t({type:Array})],b.prototype,"appSupportList",void 0),e([t({type:Object})],b.prototype,"appTemplate",void 0),e([t({type:Object})],b.prototype,"imageInfo",void 0),e([t({type:Array})],b.prototype,"_selected_items",void 0),e([t({type:Object})],b.prototype,"_boundControlRenderer",void 0),e([t({type:Object})],b.prototype,"_boundConfigRenderer",void 0),e([t({type:Object})],b.prototype,"_boundUsageRenderer",void 0),e([t({type:Object})],b.prototype,"_boundSessionInfoRenderer",void 0),e([t({type:Object})],b.prototype,"_boundCheckboxRenderer",void 0),e([t({type:Object})],b.prototype,"_boundUserInfoRenderer",void 0),e([t({type:Object})],b.prototype,"_boundStatusRenderer",void 0),e([t({type:Boolean})],b.prototype,"refreshing",void 0),e([t({type:Boolean})],b.prototype,"is_admin",void 0),e([t({type:Boolean})],b.prototype,"is_superadmin",void 0),e([t({type:String})],b.prototype,"_connectionMode",void 0),e([t({type:Object})],b.prototype,"_grid",void 0),e([t({type:Object})],b.prototype,"notification",void 0),e([t({type:Object})],b.prototype,"terminateSessionDialog",void 0),e([t({type:Object})],b.prototype,"terminateSelectedSessionsDialog",void 0),e([t({type:Object})],b.prototype,"exportToCsvDialog",void 0),e([t({type:Boolean})],b.prototype,"enableScalingGroup",void 0),e([t({type:Object})],b.prototype,"spinner",void 0),e([t({type:Object})],b.prototype,"refreshTimer",void 0),e([t({type:Object})],b.prototype,"kernel_labels",void 0),e([t({type:Object})],b.prototype,"indicator",void 0),e([t({type:Object})],b.prototype,"_defaultFileName",void 0),e([t({type:Proxy})],b.prototype,"statusColorTable",void 0),e([t({type:Number})],b.prototype,"sshPort",void 0),e([t({type:Number})],b.prototype,"vncPort",void 0),e([t({type:Number})],b.prototype,"current_page",void 0),e([t({type:Number})],b.prototype,"session_page_limit",void 0),e([t({type:Number})],b.prototype,"total_session_count",void 0),e([t({type:Number})],b.prototype,"_APIMajorVersion",void 0),b=e([i("backend-ai-session-list")],b);
