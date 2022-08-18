import{r as e,ae as t,f as i,_ as s,i as n,j as o,e as a,l as r,n as l,B as c,b as d,I as p,a as h,d as u,y as m,$ as g,g as b,t as _}from"./backend-ai-webui-29a04808.js";import{r as f,T as v,h as y,O as w,D as A,P as x}from"./vaadin-grid-324151db.js";import"./vaadin-grid-selection-column-ef5940fe.js";import"./vaadin-grid-sort-column-5a315bda.js";import"./vaadin-grid-filter-column-6c0e4354.js";import"./iconset-ca86c42e.js";import"./expansion-a141e6f0.js";import"./textfield-e939229b.js";import"./lablup-progress-bar-bafce280.js";f("vaadin-grid-tree-toggle",e`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      margin-left: calc(var(--lumo-space-s) * -1);
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const k=document.createElement("template");k.innerHTML="\n  <style>\n    @font-face {\n      font-family: \"vaadin-grid-tree-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(k.content);class S extends(v(A(x))){static get template(){return y`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",(e=>this._onClick(e)))}_onClick(e){this.leaf||w(e.target)||(e.preventDefault(),this.expanded=!this.expanded)}_levelChanged(e){const t=Number(e).toString();this.style.setProperty("---level",t)}}var $;customElements.define(S.is,S),function(e){e[e.EOS=0]="EOS",e[e.Text=1]="Text",e[e.Incomplete=2]="Incomplete",e[e.ESC=3]="ESC",e[e.Unknown=4]="Unknown",e[e.SGR=5]="SGR",e[e.OSCURL=6]="OSCURL"}($||($={}));var T=function(){function e(){this.VERSION="4.0.3",this.setup_palettes(),this._use_classes=!1,this._escape_for_html=!0,this.bold=!1,this.fg=this.bg=null,this._buffer="",this._url_whitelist={http:1,https:1}}return Object.defineProperty(e.prototype,"use_classes",{get:function(){return this._use_classes},set:function(e){this._use_classes=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"escape_for_html",{get:function(){return this._escape_for_html},set:function(e){this._escape_for_html=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url_whitelist",{get:function(){return this._url_whitelist},set:function(e){this._url_whitelist=e},enumerable:!0,configurable:!0}),e.prototype.setup_palettes=function(){var e=this;this.ansi_colors=[[{rgb:[0,0,0],class_name:"ansi-black"},{rgb:[187,0,0],class_name:"ansi-red"},{rgb:[0,187,0],class_name:"ansi-green"},{rgb:[187,187,0],class_name:"ansi-yellow"},{rgb:[0,0,187],class_name:"ansi-blue"},{rgb:[187,0,187],class_name:"ansi-magenta"},{rgb:[0,187,187],class_name:"ansi-cyan"},{rgb:[255,255,255],class_name:"ansi-white"}],[{rgb:[85,85,85],class_name:"ansi-bright-black"},{rgb:[255,85,85],class_name:"ansi-bright-red"},{rgb:[0,255,0],class_name:"ansi-bright-green"},{rgb:[255,255,85],class_name:"ansi-bright-yellow"},{rgb:[85,85,255],class_name:"ansi-bright-blue"},{rgb:[255,85,255],class_name:"ansi-bright-magenta"},{rgb:[85,255,255],class_name:"ansi-bright-cyan"},{rgb:[255,255,255],class_name:"ansi-bright-white"}]],this.palette_256=[],this.ansi_colors.forEach((function(t){t.forEach((function(t){e.palette_256.push(t)}))}));for(var t=[0,95,135,175,215,255],i=0;i<6;++i)for(var s=0;s<6;++s)for(var n=0;n<6;++n){var o={rgb:[t[i],t[s],t[n]],class_name:"truecolor"};this.palette_256.push(o)}for(var a=8,r=0;r<24;++r,a+=10){var l={rgb:[a,a,a],class_name:"truecolor"};this.palette_256.push(l)}},e.prototype.escape_txt_for_html=function(e){return e.replace(/[&<>]/gm,(function(e){return"&"===e?"&amp;":"<"===e?"&lt;":">"===e?"&gt;":void 0}))},e.prototype.append_buffer=function(e){var t=this._buffer+e;this._buffer=t},e.prototype.__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},e.prototype.get_next_packet=function(){var e={kind:$.EOS,text:"",url:""},t=this._buffer.length;if(0==t)return e;var i,s,n,o,a=this._buffer.indexOf("");if(-1==a)return e.kind=$.Text,e.text=this._buffer,this._buffer="",e;if(a>0)return e.kind=$.Text,e.text=this._buffer.slice(0,a),this._buffer=this._buffer.slice(a),e;if(0==a){if(1==t)return e.kind=$.Incomplete,e;var r=this._buffer.charAt(1);if("["!=r&&"]"!=r)return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;if("["==r){if(this._csi_regex||(this._csi_regex=C(this.__makeTemplateObject(["\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          [                      # CSI\n                          ([<-?]?)              # private-mode char\n                          ([d;]*)                    # any digits or semicolons\n                          ([ -/]?               # an intermediate modifier\n                          [@-~])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          [                      # CSI\n                          [ -~]*                # anything legal\n                          ([\0-:])              # anything illegal\n                        )\n                    "],["\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          \\x1b\\[                      # CSI\n                          ([\\x3c-\\x3f]?)              # private-mode char\n                          ([\\d;]*)                    # any digits or semicolons\n                          ([\\x20-\\x2f]?               # an intermediate modifier\n                          [\\x40-\\x7e])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          \\x1b\\[                      # CSI\n                          [\\x20-\\x7e]*                # anything legal\n                          ([\\x00-\\x1f:])              # anything illegal\n                        )\n                    "]))),null===(d=this._buffer.match(this._csi_regex)))return e.kind=$.Incomplete,e;if(d[4])return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;""!=d[1]||"m"!=d[3]?e.kind=$.Unknown:e.kind=$.SGR,e.text=d[2];var l=d[0].length;return this._buffer=this._buffer.slice(l),e}if("]"==r){if(t<4)return e.kind=$.Incomplete,e;if("8"!=this._buffer.charAt(2)||";"!=this._buffer.charAt(3))return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;this._osc_st||(this._osc_st=(i=this.__makeTemplateObject(["\n                        (?:                         # legal sequence\n                          (\\)                    # ESC                           |                           # alternate\n                          ()                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\0-]                 # anything illegal\n                          |                           # alternate\n                          [\b-]                 # anything illegal\n                          |                           # alternate\n                          [-]                 # anything illegal\n                        )\n                    "],["\n                        (?:                         # legal sequence\n                          (\\x1b\\\\)                    # ESC \\\n                          |                           # alternate\n                          (\\x07)                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\\x00-\\x06]                 # anything illegal\n                          |                           # alternate\n                          [\\x08-\\x1a]                 # anything illegal\n                          |                           # alternate\n                          [\\x1c-\\x1f]                 # anything illegal\n                        )\n                    "]),s=i.raw[0],n=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,o=s.replace(n,""),new RegExp(o,"g"))),this._osc_st.lastIndex=0;var c=this._osc_st.exec(this._buffer);if(null===c)return e.kind=$.Incomplete,e;if(c[3])return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;var d,p=this._osc_st.exec(this._buffer);if(null===p)return e.kind=$.Incomplete,e;if(p[3])return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;if(this._osc_regex||(this._osc_regex=C(this.__makeTemplateObject(["\n                        ^                           # beginning of line\n                                                    #\n                        ]8;                    # OSC Hyperlink\n                        [ -:<-~]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([!-~]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                        ([!-~]+)              # TEXT capture\n                        ]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                    "],["\n                        ^                           # beginning of line\n                                                    #\n                        \\x1b\\]8;                    # OSC Hyperlink\n                        [\\x20-\\x3a\\x3c-\\x7e]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([\\x21-\\x7e]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                        ([\\x21-\\x7e]+)              # TEXT capture\n                        \\x1b\\]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                    "]))),null===(d=this._buffer.match(this._osc_regex)))return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;e.kind=$.OSCURL,e.url=d[1],e.text=d[2];l=d[0].length;return this._buffer=this._buffer.slice(l),e}}},e.prototype.ansi_to_html=function(e){this.append_buffer(e);for(var t=[];;){var i=this.get_next_packet();if(i.kind==$.EOS||i.kind==$.Incomplete)break;i.kind!=$.ESC&&i.kind!=$.Unknown&&(i.kind==$.Text?t.push(this.transform_to_html(this.with_state(i))):i.kind==$.SGR?this.process_ansi(i):i.kind==$.OSCURL&&t.push(this.process_hyperlink(i)))}return t.join("")},e.prototype.with_state=function(e){return{bold:this.bold,fg:this.fg,bg:this.bg,text:e.text}},e.prototype.process_ansi=function(e){for(var t=e.text.split(";");t.length>0;){var i=t.shift(),s=parseInt(i,10);if(isNaN(s)||0===s)this.fg=this.bg=null,this.bold=!1;else if(1===s)this.bold=!0;else if(22===s)this.bold=!1;else if(39===s)this.fg=null;else if(49===s)this.bg=null;else if(s>=30&&s<38)this.fg=this.ansi_colors[0][s-30];else if(s>=40&&s<48)this.bg=this.ansi_colors[0][s-40];else if(s>=90&&s<98)this.fg=this.ansi_colors[1][s-90];else if(s>=100&&s<108)this.bg=this.ansi_colors[1][s-100];else if((38===s||48===s)&&t.length>0){var n=38===s,o=t.shift();if("5"===o&&t.length>0){var a=parseInt(t.shift(),10);a>=0&&a<=255&&(n?this.fg=this.palette_256[a]:this.bg=this.palette_256[a])}if("2"===o&&t.length>2){var r=parseInt(t.shift(),10),l=parseInt(t.shift(),10),c=parseInt(t.shift(),10);if(r>=0&&r<=255&&l>=0&&l<=255&&c>=0&&c<=255){var d={rgb:[r,l,c],class_name:"truecolor"};n?this.fg=d:this.bg=d}}}}},e.prototype.transform_to_html=function(e){var t=e.text;if(0===t.length)return t;if(this._escape_for_html&&(t=this.escape_txt_for_html(t)),!e.bold&&null===e.fg&&null===e.bg)return t;var i=[],s=[],n=e.fg,o=e.bg;e.bold&&i.push("font-weight:bold"),this._use_classes?(n&&("truecolor"!==n.class_name?s.push(n.class_name+"-fg"):i.push("color:rgb("+n.rgb.join(",")+")")),o&&("truecolor"!==o.class_name?s.push(o.class_name+"-bg"):i.push("background-color:rgb("+o.rgb.join(",")+")"))):(n&&i.push("color:rgb("+n.rgb.join(",")+")"),o&&i.push("background-color:rgb("+o.rgb+")"));var a="",r="";return s.length&&(a=' class="'+s.join(" ")+'"'),i.length&&(r=' style="'+i.join(";")+'"'),"<span"+r+a+">"+t+"</span>"},e.prototype.process_hyperlink=function(e){var t=e.url.split(":");return t.length<1?"":this._url_whitelist[t[0]]?'<a href="'+this.escape_txt_for_html(e.url)+'">'+this.escape_txt_for_html(e.text)+"</a>":""},e}();function C(e){var t=e.raw[0].replace(/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,"");return new RegExp(t)}let R=class extends t{renderContent(){return o` <wl-popover-card><slot></slot></wl-popover-card> `}};R.styles=[...t.styles,i(":host{--card-padding:var(--tooltip-padding,0.75rem);--card-color:var(--tooltip-color,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));--card-bg:var(--tooltip-bg,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))));--popover-card-arrow-fill:var(--tooltip-bg,hsl(var(--foreground,var(--foreground-hue,230),var(--foreground-saturation,70%),var(--foreground-lightness,5%))))}#backdrop,#content{pointer-events:none}")],R=s([n("wl-tooltip")],R);let I=class extends c{constructor(){super(),this.active=!0,this.condition="running",this.jobs=Object(),this.compute_sessions=[],this.filterAccessKey="",this.sessionNameField="name",this.appSupportList=[],this.appTemplate=Object(),this.imageInfo=Object(),this._boundControlRenderer=this.controlRenderer.bind(this),this._boundConfigRenderer=this.configRenderer.bind(this),this._boundUsageRenderer=this.usageRenderer.bind(this),this._boundReservationRenderer=this.reservationRenderer.bind(this),this._boundAgentRenderer=this.agentRenderer.bind(this),this._boundSessionInfoRenderer=this.sessionInfoRenderer.bind(this),this._boundArchitectureRenderer=this.architectureRenderer.bind(this),this._boundCheckboxRenderer=this.checkboxRenderer.bind(this),this._boundUserInfoRenderer=this.userInfoRenderer.bind(this),this._boundStatusRenderer=this.statusRenderer.bind(this),this._boundSessionTypeRenderer=this.sessionTypeRenderer.bind(this),this.refreshing=!1,this.is_admin=!1,this.is_superadmin=!1,this._connectionMode="API",this._grid=Object(),this.notification=Object(),this.terminateSessionDialog=Object(),this.terminateSelectedSessionsDialog=Object(),this.sessionStatusInfoDialog=Object(),this.enableScalingGroup=!1,this.spinner=Object(),this.refreshTimer=Object(),this.kernel_labels=Object(),this.kernel_icons=Object(),this.indicator=Object(),this.statusColorTable=new Proxy({"idle-timeout":"green","user-requested":"green",scheduled:"green","failed-to-start":"red","creation-failed":"red","self-terminated":"green"},{get:(e,t)=>e.hasOwnProperty(t)?e[t]:"lightgrey"}),this.sshPort=0,this.vncPort=0,this.current_page=1,this.session_page_limit=50,this.total_session_count=0,this._APIMajorVersion=5,this.selectedSessionStatus=Object(),this.isUserInfoMaskEnabled=!1,this._isContainerCommitEnabled=!1,this._selected_items=[],this.terminationQueue=[]}static get styles(){return[d,p,h,e`
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

        wl-expansion {
          --expansion-elevation: 0;
          --expansion-elevation-open: 0;
          --expansion-elevation-hover: 0;
          --expansion-margin-open: 0;
          --expansion-content-padding: 0;
          --expansion-header-padding: 5px;
          width: 100%;
        }

        wl-button.pagination {
          width: 15px;
          height: 15px;
          padding: 10px;
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

        wl-tooltip.log-disabled-msg {
          position: absolute;
          top: 80%;
          left: 100%;
          transform: translate(-50%, -50%);
          z-index: 1; /* used for overlay */
        }

        img.indicator-icon {
          width: 16px;
          height: 16px;
          padding-right: 5px;
        }

        mwc-icon {
          margin-right: 5px;
        }

        mwc-icon.status-check {
          --mdc-icon-size: 16px;
        }

        mwc-icon-button.apps {
          --mdc-icon-button-size: 48px;
          --mdc-icon-size: 36px;
          padding: 3px;
          margin-right: 5px;
        }

        mwc-icon-button.status {
          --mdc-icon-button-size: 36px;
          padding: 0;
        }

        mwc-list-item {
          --mdc-typography-body2-font-size: 12px;
          --mdc-list-item-graphic-margin: 10px;
        }

        mwc-textfield {
          width: 100%;
        }

        lablup-shields.right-below-margin {
          margin-right: 3px;
          margin-bottom: 3px;
        }

        #work-dialog {
          --component-width: calc(100% - 80px);
          --component-height: auto;
          right: 0;
          top: 50px;
        }

        #status-detail-dialog {
          --component-width: 375px;
        }

        #commit-session-dialog {
          --component-width: 390px;
        }

        @media screen and (max-width: 899px) {
          #work-dialog,
          #work-dialog.mini_ui {
            left: 0;
            --component-width: 95%;
          }
        }

        @media screen and (min-width: 900px) {
          #work-dialog {
            left: 100px;
          }

          #work-dialog.mini_ui {
            left: 40px;
          }
        }

        #work-area {
          width: 100%;
          padding: 5px;
          font-size:12px;
          line-height: 12px;
          height: calc(100vh - 120px);
          background-color: #222222;
          color: #efefef;
        }

        #work-area pre {
          white-space: pre-wrap;
          white-space: -moz-pre-wrap;
          white-space: -pre-wrap;
          white-space: -o-pre-wrap;
          word-wrap: break-word;
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
          width: 90px !important;
          height: 20px;
        }

        div.configuration wl-icon {
          padding-right: 5px;
        }

        span.subheading {
          color: #666;
          font-weight: bold;
        }

        mwc-list-item.commit-session-info {
          height: 100%;
        }

        mwc-list-item.predicate-check {
          height: 100%;
          margin-bottom: 5px;
        }

        .predicate-check-comment {
          white-space: pre-wrap;
        }

        .error-description {
          font-size: 0.8rem;
          word-break: break-word;
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

        wl-label {
          width: 100%;
          background-color: var(--paper-grey-500);
          min-width: 60px;
          font-size: 12px;
          --label-font-family: 'Ubuntu', Roboto;
        }

        lablup-progress-bar.usage {
          --progress-bar-height: 5px;
          --progress-bar-width: 60px;
          margin-bottom: 0;
        }

        div.filters #access-key-filter {
          --input-font-size: small;
          --input-label-font-size: small;
          --input-font-family: var(--general-font-family);
        }

        .mount-button,
        .status-button {
          border: none;
          background: none;
          padding: 0;
          outline-style: none;
        }

        .no-mount {
          color: var(--paper-grey-400);
        }

        span#access-key-filter-helper-text {
          margin-top: 3px;
          font-size: 10px;
          color: var(--general-menu-color-2);
        }
      `]}get _isRunning(){return["batch","interactive","running"].includes(this.condition)}get _isIntegratedCondition(){return["running","finished","others"].includes(this.condition)}_isPreparing(e){return-1!==["RESTARTING","PREPARING","PULLING"].indexOf(e)}_isError(e){return"ERROR"===e}_isPending(e){return"PENDING"===e}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this._grid=this.shadowRoot.querySelector("#list-grid"),this.refreshTimer=null,fetch("resources/image_metadata.json").then((e=>e.json())).then((e=>{this.imageInfo=e.imageInfo;for(const e in this.imageInfo)({}).hasOwnProperty.call(this.imageInfo,e)&&(this.kernel_labels[e]=[],"label"in this.imageInfo[e]?this.kernel_labels[e]=this.imageInfo[e].label:this.kernel_labels[e]=[],"icon"in this.imageInfo[e]?this.kernel_icons[e]=this.imageInfo[e].icon:this.kernel_icons[e]="")})),this.notification=globalThis.lablupNotification,this.indicator=globalThis.lablupIndicator,this.terminateSessionDialog=this.shadowRoot.querySelector("#terminate-session-dialog"),this.terminateSelectedSessionsDialog=this.shadowRoot.querySelector("#terminate-selected-sessions-dialog"),this.sessionStatusInfoDialog=this.shadowRoot.querySelector("#status-detail-dialog"),document.addEventListener("backend-ai-group-changed",(e=>this.refreshList(!0,!1))),document.addEventListener("backend-ai-ui-changed",(e=>this._refreshWorkDialogUI(e))),document.addEventListener("backend-ai-clear-timeout",(()=>{clearTimeout(this.refreshTimer)})),this._refreshWorkDialogUI({detail:{"mini-ui":globalThis.mini_ui}})}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{globalThis.backendaiclient.is_admin?this.shadowRoot.querySelector("#access-key-filter").style.display="block":(this.shadowRoot.querySelector("#access-key-filter").style.display="none",this.shadowRoot.querySelector("#access-key-filter-helper-text").style.display="none",this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 225px)!important"),globalThis.backendaiclient.APIMajorVersion<5&&(this.sessionNameField="sess_id"),this.is_admin=globalThis.backendaiclient.is_admin,this.is_superadmin=globalThis.backendaiclient.is_superadmin,this._connectionMode=globalThis.backendaiclient._config._connectionMode,this.enableScalingGroup=globalThis.backendaiclient.supports("scaling-group"),this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this.isUserInfoMaskEnabled=globalThis.backendaiclient._config.maskUserInfo,this._isContainerCommitEnabled=globalThis.backendaiclient._config.enableContainerCommit&&globalThis.backendaiclient.supports("image-commit"),this._refreshJobData()}),!0):(globalThis.backendaiclient.is_admin?(this.shadowRoot.querySelector("#access-key-filter").style.display="block",this.shadowRoot.querySelector("#access-key-filter-helper-text").style.display="block"):(this.shadowRoot.querySelector("#access-key-filter").style.display="none",this.shadowRoot.querySelector("#access-key-filter-helper-text").style.display="none",this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 225px)!important"),globalThis.backendaiclient.APIMajorVersion<5&&(this.sessionNameField="sess_id"),this.is_admin=globalThis.backendaiclient.is_admin,this.is_superadmin=globalThis.backendaiclient.is_superadmin,this._connectionMode=globalThis.backendaiclient._config._connectionMode,this.enableScalingGroup=globalThis.backendaiclient.supports("scaling-group"),this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this.isUserInfoMaskEnabled=globalThis.backendaiclient._config.maskUserInfo,this._isContainerCommitEnabled=globalThis.backendaiclient._config.enableContainerCommit&&globalThis.backendaiclient.supports("image-commit"),this._refreshJobData()))}async refreshList(e=!0,t=!0){return this._refreshJobData(e,t)}async _refreshJobData(e=!1,t=!0){if(await this.updateComplete,!0!==this.active)return;if(!0===this.refreshing)return;let i;switch(this.refreshing=!0,this.spinner.show(),i="RUNNING",this.condition){case"running":case"interactive":case"batch":default:i=["RUNNING","RESTARTING","TERMINATING","PENDING","SCHEDULED","PREPARING","PULLING"];break;case"finished":i=["TERMINATED","CANCELLED"];break;case"others":i=["TERMINATING","ERROR"]}!globalThis.backendaiclient.supports("avoid-hol-blocking")&&i.includes("SCHEDULED")&&(i=i.filter((e=>"SCHEDULED"!==e))),globalThis.backendaiclient.supports("detailed-session-states")&&(i=i.join(","));const s=["id","session_id","name","image","architecture","created_at","terminated_at","status","status_info","service_ports","mounts","occupied_slots","access_key","starts_at","type"];globalThis.backendaiclient.supports("multi-container")&&s.push("cluster_size"),globalThis.backendaiclient.supports("multi-node")&&s.push("cluster_mode"),globalThis.backendaiclient.supports("session-detail-status")&&s.push("status_data"),this.enableScalingGroup&&s.push("scaling_group"),"SESSION"===this._connectionMode&&s.push("user_email"),globalThis.backendaiclient.is_superadmin?s.push("containers {container_id agent occupied_slots live_stat last_stat}"):s.push("containers {container_id occupied_slots live_stat last_stat}");const n=globalThis.backendaiclient.current_group_id();this._isContainerCommitEnabled&&s.push("commit_status"),globalThis.backendaiclient.computeSession.list(s,i,this.filterAccessKey,this.session_page_limit,(this.current_page-1)*this.session_page_limit,n,1e4).then((i=>{this.spinner.hide(),this.total_session_count=i.compute_session_list.total_count,0===this.total_session_count&&(this.total_session_count=1);let s,n=i.compute_session_list.items;if(void 0!==n&&0!=n.length){const e=this.compute_sessions,t=[];Object.keys(e).map(((i,s)=>{t.push(e[i].session_id)})),Object.keys(n).map(((e,t)=>{const i=n[e],s=JSON.parse(i.occupied_slots),o=n[e].image.split("/")[2]||n[e].image.split("/")[1];if(n[e].cpu_slot=parseInt(s.cpu),n[e].mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(s.mem,"g")),n[e].mem_slot=n[e].mem_slot.toFixed(2),n[e].elapsed=this._elapsed(n[e].created_at,n[e].terminated_at),n[e].created_at_hr=this._humanReadableTime(n[e].created_at),n[e].starts_at_hr=n[e].starts_at?this._humanReadableTime(n[e].starts_at):"",n[e].containers&&n[e].containers.length>0){const t=n[e].containers[0],i=t.live_stat?JSON.parse(t.live_stat):null;n[e].agent=t.agent,i&&i.cpu_used?n[e].cpu_used_time=this._automaticScaledTime(i.cpu_used.current):n[e].cpu_used_time=this._automaticScaledTime(0),i&&i.cpu_util?n[e].cpu_util=i.cpu_util.current:n[e].cpu_util=0,i&&i.mem?n[e].mem_current=i.mem.current:n[e].mem_current=0,i&&i.io_read?n[e].io_read_bytes_mb=this._bytesToMB(i.io_read.current):n[e].io_read_bytes_mb=0,i&&i.io_write?n[e].io_write_bytes_mb=this._bytesToMB(i.io_write.current):n[e].io_write_bytes_mb=0,i&&i.cuda_util?n[e].cuda_util=i.cuda_util.current:n[e].cuda_util=0,i&&i.rocm_util?n[e].rocm_util=i.rocm_util:n[e].rocm_util=0,i&&i.tpu_util?n[e].tpu_util=i.tpu_util:n[e].tpu_util=0}const a=JSON.parse(n[e].service_ports);!0===Array.isArray(a)?(n[e].app_services=a.map((e=>e.name)),n[e].app_services_option={},a.forEach((t=>{"allowed_arguments"in t&&(n[e].app_services_option[t.name]=t.allowed_arguments)}))):(n[e].app_services=[],n[e].app_services_option={}),0!==n[e].app_services.length&&["batch","interactive","running"].includes(this.condition)?n[e].appSupport=!0:n[e].appSupport=!1,["batch","interactive","running"].includes(this.condition)?n[e].running=!0:n[e].running=!1,"cuda.device"in s&&(n[e].cuda_gpu_slot=parseInt(s["cuda.device"])),"rocm.device"in s&&(n[e].rocm_gpu_slot=parseInt(s["rocm.device"])),"tpu.device"in s&&(n[e].tpu_slot=parseInt(s["tpu.device"])),"cuda.shares"in s&&(n[e].cuda_fgpu_slot=parseFloat(s["cuda.shares"]).toFixed(2)),n[e].kernel_image=o,n[e].icon=this._getKernelIcon(i.image),n[e].sessionTags=this._getKernelInfo(i.image);const r=i.image.split("/");n[e].cluster_size=parseInt(n[e].cluster_size);const l=r[r.length-1].split(":")[1],c=l.split("-");void 0!==c[1]?(n[e].baseversion=c[0],n[e].baseimage=c[1],n[e].additional_reqs=c.slice(1,c.length).map((e=>e.toUpperCase()))):void 0!==n[e].tag?n[e].baseversion=n[e].tag:n[e].baseversion=l,this._selected_items.includes(n[e].session_id)?n[e].checked=!0:n[e].checked=!1}))}if(["batch","interactive"].includes(this.condition)){const e=n.reduce(((e,t)=>(e["BATCH"===t.type?"batch":"interactive"].push(t),e)),{batch:[],interactive:[]});n=e["batch"===this.condition?"batch":"interactive"]}if(this.compute_sessions=n,this.requestUpdate(),this.refreshing=!1,!0===this.active){if(!0===e){const e=new CustomEvent("backend-ai-resource-refreshed",{detail:{}});document.dispatchEvent(e)}!0===t&&(s=["batch","interactive","running"].includes(this.condition)?5e3:3e4,this.refreshTimer=setTimeout((()=>{this._refreshJobData()}),s))}})).catch((e=>{if(this.refreshing=!1,this.active&&t){const e=["batch","interactive","running"].includes(this.condition)?2e4:12e4;this.refreshTimer=setTimeout((()=>{this._refreshJobData()}),e)}this.spinner.hide(),console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_refreshWorkDialogUI(e){const t=this.shadowRoot.querySelector("#work-dialog");Object.prototype.hasOwnProperty.call(e.detail,"mini-ui")&&!0===e.detail["mini-ui"]?t.classList.add("mini_ui"):t.classList.remove("mini_ui")}_humanReadableTime(e){return(e=new Date(e)).toLocaleString()}_getKernelInfo(e){const t=[];if(void 0===e)return[];const i=e.split("/"),s=(i[2]||i[1]).split(":")[0];if(s in this.kernel_labels)t.push(this.kernel_labels[s]);else{const i=e.split("/");let s,n;3===i.length?(s=i[1],n=i[2]):i.length>3?(s=i.slice(2,i.length-1).join("/"),n=i[i.length-1]):(s="",n=i[1]),n=n.split(":")[0],n=s?s+"/"+n:n,t.push([{category:"Env",tag:`${n}`,color:"lightgrey"}])}return t}_getKernelIcon(e){if(void 0===e)return[];const t=e.split("/"),i=(t[2]||t[1]).split(":")[0];return i in this.kernel_icons?this.kernel_icons[i]:""}_byteToMB(e){return Math.floor(e/1e6)}_byteToGB(e){return Math.floor(e/1e9)}_MBToGB(e){return e/1024}_automaticScaledTime(e){let t=Object();const i=["D","H","M","S"],s=[864e5,36e5,6e4,1e3];for(let n=0;n<s.length;n++)Math.floor(e/s[n])>0&&(t[i[n]]=Math.floor(e/s[n]),e%=s[n]);return 0===Object.keys(t).length&&(t=e>0?{MS:e}:{NODATA:1}),t}_msecToSec(e){return Number(e/1e3).toFixed(0)}_bytesToMB(e){return Number(e/1048576).toFixed(1)}_elapsed(e,t){return globalThis.backendaiclient.utils.elapsedTime(e,t)}_indexRenderer(e,t,i){const s=i.index+1;m(g`
        <div>${s}</div>
      `,e)}async sendRequest(e){let t,i;try{"GET"==e.method&&(e.body=void 0),t=await fetch(e.uri,e);const s=t.headers.get("Content-Type");if(i=s.startsWith("application/json")||s.startsWith("application/problem+json")?await t.json():s.startsWith("text/")?await t.text():await t.blob(),!t.ok)throw i}catch(e){}return i}async _terminateApp(e){const t=globalThis.backendaiclient._config.accessKey,i=await globalThis.appLauncher._getProxyURL(e),s={method:"GET",uri:i+`proxy/${t}/${e}`};return this.sendRequest(s).then((s=>{if(this.total_session_count-=1,void 0!==s&&404!==s.code){const s={method:"GET",uri:i+`proxy/${t}/${e}/delete`,credentials:"include",mode:"cors"};return this.sendRequest(s)}return Promise.resolve(!0)})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_getProxyToken(){let e="local";return void 0!==globalThis.backendaiclient._config.proxyToken&&(e=globalThis.backendaiclient._config.proxyToken),e}_showLogs(e){const t=e.target.closest("#controls"),i=t["session-uuid"],s=t["session-name"],n=globalThis.backendaiclient.APIMajorVersion<5?s:i,o=t["access-key"];globalThis.backendaiclient.get_logs(n,o,15e3).then((e=>{const t=(new T).ansi_to_html(e.result.logs);setTimeout((()=>{this.shadowRoot.querySelector("#work-title").innerHTML=`${s} (${i})`,this.shadowRoot.querySelector("#work-area").innerHTML=`<pre>${t}</pre>`||b("session.NoLogs"),this.shadowRoot.querySelector("#work-dialog").sessionUuid=i,this.shadowRoot.querySelector("#work-dialog").sessionName=s,this.shadowRoot.querySelector("#work-dialog").accessKey=o,this.shadowRoot.querySelector("#work-dialog").show()}),100)})).catch((e=>{e&&e.message?(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=u.relieve(e.title),this.notification.show(!0,e))}))}_refreshLogs(){const e=this.shadowRoot.querySelector("#work-dialog").sessionUuid,t=this.shadowRoot.querySelector("#work-dialog").sessionName,i=globalThis.backendaiclient.APIMajorVersion<5?t:e,s=this.shadowRoot.querySelector("#work-dialog").accessKey;globalThis.backendaiclient.get_logs(i,s,15e3).then((e=>{const t=(new T).ansi_to_html(e.result.logs);this.shadowRoot.querySelector("#work-area").innerHTML=`<pre>${t}</pre>`||b("session.NoLogs")})).catch((e=>{e&&e.message?(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=u.relieve(e.title),this.notification.show(!0,e))}))}_showAppLauncher(e){const t=e.target.closest("#controls");return globalThis.appLauncher.showLauncher(t)}async _runTerminal(e){const t=e.target.closest("#controls")["session-uuid"];return globalThis.appLauncher.runTerminal(t)}async _getCommitSessionStatus(e=""){let t=!1;return""!==e&&globalThis.backendaiclient.computeSession.getCommitSessionStatus(e).then((e=>{t=e})).catch((e=>{console.log(e)})),t}async _requestCommitSession(e){try{const t=await globalThis.backendaiclient.computeSession.commitSession(e.session.name),i=Object.assign(e,{taskId:t.bgtask_id});this._addCommitSessionToTasker(t,i),this._applyContainerCommitAsBackgroundTask(i),this.notification.text=b("session.CommitOnGoing"),this.notification.show()}catch(e){console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}finally{this.commitSessionDialog.hide()}}_applyContainerCommitAsBackgroundTask(e){const t=globalThis.backendaiclient.maintenance.attach_background_task(e.taskId);t.addEventListener("bgtask_done",(i=>{this.notification.text=b("session.CommitFinished"),this.notification.show(),this._removeCommitSessionFromTasker(e.taskId),t.close()})),t.addEventListener("bgtask_failed",(i=>{throw this.notification.text=b("session.CommitFailed"),this.notification.show(!0),this._removeCommitSessionFromTasker(e.taskId),t.close(),new Error("Commit session request has been failed.")})),t.addEventListener("bgtask_cancelled",(i=>{throw this.notification.text=b("session.CommitFailed"),this.notification.show(!0),this._removeCommitSessionFromTasker(e.taskId),t.close(),new Error("Commit session request has been cancelled.")}))}_addCommitSessionToTasker(e=null,t){var i;globalThis.tasker.add(b("session.CommitSession")+t.session.name,null!==e&&"function"==typeof e?e:null,null!==(i=t.taskId)&&void 0!==i?i:"","commit","remove-later")}_removeCommitSessionFromTasker(e=""){globalThis.tasker.remove(e)}_getCurrentContainerCommitInfoListFromLocalStorage(){return JSON.parse(localStorage.getItem("backendaiwebui.settings.user.container_commit_sessions")||"[]")}_saveCurrentContainerCommitInfoToLocalStorage(e){const t=this._getCurrentContainerCommitInfoListFromLocalStorage();t.push(e),globalThis.backendaioptions.set("container_commit_sessions",JSON.stringify(t))}_removeFinishedContainerCommitInfoFromLocalStorage(e="",t=""){let i=this._getCurrentContainerCommitInfoListFromLocalStorage();i=i.filter((i=>i.session.id!==e&&i.taskId!==t)),globalThis.backendaioptions.set("container_commit_sessions",JSON.stringify(i))}_openCommitSessionDialog(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["session-uuid"],n=t["kernel-image"];this.commitSessionDialog.sessionName=i,this.commitSessionDialog.sessionId=s,this.commitSessionDialog.kernelImage=n,this.commitSessionDialog.show()}_openTerminateSessionDialog(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["session-uuid"],n=t["access-key"];this.terminateSessionDialog.sessionName=i,this.terminateSessionDialog.sessionId=s,this.terminateSessionDialog.accessKey=n,this.terminateSessionDialog.show()}_terminateSession(e){const t=e.target.closest("#controls"),i=t["session-uuid"],s=t["access-key"];return this.terminationQueue.includes(i)?(this.notification.text=b("session.AlreadyTerminatingSession"),this.notification.show(),!1):this._terminateKernel(i,s)}_terminateSessionWithCheck(e=!1){return this.terminationQueue.includes(this.terminateSessionDialog.sessionId)?(this.notification.text=b("session.AlreadyTerminatingSession"),this.notification.show(),!1):(this.spinner.show(),this._terminateKernel(this.terminateSessionDialog.sessionId,this.terminateSessionDialog.accessKey,e).then((e=>{this.spinner.hide(),this._selected_items=[],this._clearCheckboxes(),this.terminateSessionDialog.hide(),this.notification.text=b("session.SessionTerminated"),this.notification.show();const t=new CustomEvent("backend-ai-resource-refreshed",{detail:"running"});document.dispatchEvent(t)})).catch((e=>{this.spinner.hide(),this._selected_items=[],this._clearCheckboxes(),this.terminateSessionDialog.hide(),this.notification.text=u.relieve("Problem occurred during termination."),this.notification.show(!0,e);const t=new CustomEvent("backend-ai-resource-refreshed",{detail:"running"});document.dispatchEvent(t)})))}_openTerminateSelectedSessionsDialog(e){this.terminateSelectedSessionsDialog.show()}_clearCheckboxes(){[...this.shadowRoot.querySelectorAll("wl-checkbox.list-check")].forEach((e=>{e.removeAttribute("checked")}))}_terminateSelectedSessionsWithCheck(e=!1){this.spinner.show();const t=this._selected_items.map((t=>this._terminateKernel(t.session_id,t.access_key,e)));return this._selected_items=[],Promise.all(t).then((e=>{this.spinner.hide(),this.terminateSelectedSessionsDialog.hide(),this._clearCheckboxes(),this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none",this.notification.text=b("session.SessionsTerminated"),this.notification.show()})).catch((e=>{this.spinner.hide(),this.terminateSelectedSessionsDialog.hide(),this._clearCheckboxes(),this.notification.text=u.relieve("Problem occurred during termination."),this.notification.show(!0,e)}))}_terminateSelectedSessions(){this.spinner.show();const e=this._selected_items.map((e=>this._terminateKernel(e.session_id,e.access_key)));return Promise.all(e).then((e=>{this.spinner.hide(),this._selected_items=[],this._clearCheckboxes(),this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none",this.notification.text=b("session.SessionsTerminated"),this.notification.show()})).catch((e=>{this.spinner.hide(),this._selected_items=[],this._clearCheckboxes(),this.notification.text="description"in e?u.relieve(e.description):u.relieve("Problem occurred during termination."),this.notification.show(!0,e)}))}async _terminateKernel(e,t,i=!1){return this.terminationQueue.push(e),this._terminateApp(e).then((()=>{globalThis.backendaiclient.destroy(e,t,i).then((e=>{setTimeout((async()=>{this.terminationQueue=[];const e=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(e)}),1e3)})).catch((e=>{const t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),this.notification.text="description"in e?u.relieve(e.description):u.relieve("Problem occurred during termination."),this.notification.show(!0,e)}))})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_hideDialog(e){const t=e.target.closest("backend-ai-dialog");if(t.hide(),"ssh-dialog"===t.id){const e=this.shadowRoot.querySelector("#sshkey-download-link");globalThis.URL.revokeObjectURL(e.href)}}_updateFilterAccessKey(e){this.filterAccessKey=e.target.value,this.refreshTimer&&(clearTimeout(this.refreshTimer),this._refreshJobData())}_createMountedFolderDropdown(e,t){const i=e.target,s=document.createElement("mwc-menu");s.anchor=i,s.className="dropdown-menu",s.style.boxShadow="0 1px 1px rgba(0, 0, 0, 0.2)",s.setAttribute("open",""),s.setAttribute("fixed",""),s.setAttribute("x",10),s.setAttribute("y",15),t.length>=1&&(t.map(((e,i)=>{const n=document.createElement("mwc-list-item");n.style.height="25px",n.style.fontWeight="400",n.style.fontSize="14px",n.style.fontFamily="var(--general-font-family)",n.innerHTML=t.length>1?e:b("session.OnlyOneFolderAttached"),s.appendChild(n)})),document.body.appendChild(s))}_removeMountedFolderDropdown(){const e=document.getElementsByClassName("dropdown-menu");for(;e[0];)e[0].parentNode.removeChild(e[0])}_showTooltip(e=""){if(e){this.shadowRoot.querySelector(`#${e}`).open=!0}}_hideTooltip(e=""){if(e){this.shadowRoot.querySelector(`#${e}`).open=!1}}_renderStatusDetail(){var e,t,i,s,n,o,a,r;const l=JSON.parse(this.selectedSessionStatus.data);l.reserved_time=this.selectedSessionStatus.reserved_time;const c=this.shadowRoot.querySelector("#status-detail");if(c.innerHTML=`\n    <div class="vertical layout justified start">\n      <h3 style="width:100%;padding-left:15px;border-bottom:1px solid #ccc;">${b("session.Status")}</h3>\n      <lablup-shields color="${this.statusColorTable[this.selectedSessionStatus.info]}"\n          description="${this.selectedSessionStatus.info}" ui="round" style="padding-left:15px;"></lablup-shields>\n    </div>`,l.hasOwnProperty("kernel")||l.hasOwnProperty("session"))c.innerHTML+=`\n        <div class="vertical layout start flex" style="width:100%;">\n        <div style="width:100%;">\n          <h3 style="width:100%;padding-left:15px;border-bottom:1px solid #ccc;">${b("session.StatusDetail")}</h3>\n          <div class="vertical layout flex" style="width:100%;">\n            <mwc-list>\n              <mwc-list-item twoline noninteractive class="predicate-check">\n                <span class="subheading"><strong>Kernel Exit Code</strong></span>\n                <span class="monospace predicate-check-comment" slot="secondary">${null!==(t=null===(e=l.kernel)||void 0===e?void 0:e.exit_code)&&void 0!==t?t:"null"}</span>\n              </mwc-list-item>\n              <mwc-list-item twoline noninteractive class="predicate-check">\n                <span class="subheading">Session Status</span>\n                <span class="monospace predicate-check-comment" slot="secondary">${null===(i=l.session)||void 0===i?void 0:i.status}</span>\n              </mwc-list-item>\n            </mwc-list>\n          </div>\n        </div>\n      `;else if(l.hasOwnProperty("scheduler")){const e=null!==(n=null===(s=l.scheduler.failed_predicates)||void 0===s?void 0:s.length)&&void 0!==n?n:0,t=null!==(a=null===(o=l.scheduler.passed_predicates)||void 0===o?void 0:o.length)&&void 0!==a?a:0;c.innerHTML+=`\n        <div class="vertical layout start flex" style="width:100%;">\n          <div style="width:100%;">\n            <h3 style="width:100%;padding-left:15px;border-bottom:1px solid #ccc;">${b("session.StatusDetail")}</h3>\n            <div class="vertical layout flex" style="width:100%;">\n              <mwc-list>\n                <mwc-list-item twoline noninteractive class="predicate-check">\n                  <span class="subheading">${b("session.TotalRetries")}</span>\n                  <span class="monospace predicate-check-comment" slot="secondary">${l.scheduler.retries}</span>\n                </mwc-list-item>\n                <mwc-list-item twoline noninteractive class="predicate-check">\n                  <span class="subheading">${b("session.LastTry")}</span>\n                  <span class="monospace predicate-check-comment" slot="secondary">${this._humanReadableTime(l.scheduler.last_try)}</span>\n                </mwc-list-item>\n              </mwc-list>\n            </div>\n          </div>\n          <wl-expansion name="predicates" open>\n          <div slot="title" class="horizontal layout center start-justified">\n            ${e>0?'\n              <mwc-icon class="fg red">cancel</mwc-icon>\n              ':'\n              <mwc-icon class="fg green">check_circle</mwc-icon>\n            '}\n            Predicate Checks\n          </div>\n          <span slot="description">\n          ${e>0?" "+(e+" Failed, "):""}\n          ${t+" Passed"}\n          </span>\n          <mwc-list>\n          ${l.scheduler.failed_predicates.map((e=>`\n          ${"reserved_time"===e.name?`\n              <mwc-list-item twoline graphic="icon" noninteractive class="predicate-check">\n                <span>${e.name}</span>\n                <span slot="secondary" class="predicate-check-comment">${e.msg+": "+l.reserved_time}</span>\n                <mwc-icon slot="graphic" class="fg red inverted status-check">close</mwc-icon>\n              </mwc-list-item>`:`\n              <mwc-list-item twoline graphic="icon" noninteractive class="predicate-check">\n                <span>${e.name}</span>\n                <span slot="secondary" class="predicate-check-comment">${e.msg}</span>\n                <mwc-icon slot="graphic" class="fg red inverted status-check">close</mwc-icon>\n              </mwc-list-item>`}\n              <li divider role="separator"></li>\n              `)).join("")}\n          ${l.scheduler.passed_predicates.map((e=>`\n                <mwc-list-item graphic="icon" noninteractive>\n                  <span style="padding-left:3px;">${e.name}</span>\n                  <mwc-icon slot="graphic" class="fg green inverted status-check" style="padding-left:5px;">checked</mwc-icon>\n                </mwc-list-item>\n                <li divider role="separator"></li>\n                `)).join("")}\n          </mwc-list>\n        </wl-expansion>\n        </div>\n    `}else if(l.hasOwnProperty("error")){const e=e=>null!==e.match(/'(.*?)'/g)?e.match(/'(.*?)'/g)[0].replace(/'/g,""):t(e),t=e=>e.replace(/[\u00A0-\u9999<>\&]/gim,(e=>"&#"+e.charCodeAt(0)+";")),i=null!==(r=l.error.collection)&&void 0!==r?r:[l.error];c.innerHTML+=`\n      <div class="vertical layout start flex" style="width:100%;">\n        <div style="width:100%;">\n          <h3 style="width:100%;padding-left:15px;border-bottom:1px solid #ccc;">${b("session.StatusDetail")}</h3>\n            ${i.map((t=>`\n              <div style="border-radius: 4px;background-color:var(--paper-grey-300);padding:10px;margin:10px;">\n                <div class="vertical layout start">\n                  <span class="subheading">Error</span>\n                  <lablup-shields color="red" description=${t.name} ui="round"></lablup-shields>\n                </div>\n                ${this.is_superadmin&&t.agent_id?`\n                  <div class="vertical layout start">\n                    <span class="subheading">Agent ID</span>\n                    <span>${t.agent_id}</span>\n                  </div>\n                `:""}\n                <div class="vertical layout start">\n                  <span class="subheading">Message</span>\n                  <span class="error-description">${e(t.repr)}</span>\n                </div>\n              </div>\n              `)).join("")}\n        </div>\n      </div>\n      `}else c.innerHTML+='\n        <div class="vertical layout start flex" style="width:100%;">\n        <h3 style="width:100%;padding-left:15px;border-bottom:1px solid #ccc;">Detail</h3>\n        <span style="margin:20px;">No Details.</span>\n        </div>\n      '}_openStatusDetailDialog(e,t,i){this.selectedSessionStatus={info:e,data:t,reserved_time:i},this._renderStatusDetail(),this.sessionStatusInfoDialog.show()}_validateSessionName(e){const t=this.compute_sessions.map((e=>e[this.sessionNameField])),i=e.target.parentNode,s=i.querySelector("#session-name-field").innerText,n=i.querySelector("#session-rename-field");n.validityTransform=(e,i)=>{if(i.valid){const i=!t.includes(e)||e===s;return i||(n.validationMessage=b("session.Validation.SessionNameAlreadyExist")),{valid:i,customError:!i}}return i.valueMissing?(n.validationMessage=b("session.Validation.SessionNameRequired"),{valid:i.valid,valueMissing:!i.valid}):i.patternMismatch?(n.validationMessage=b("session.Validation.SluggedStrings"),{valid:i.valid,patternMismatch:!i.valid}):(n.validationMessage=b("session.Validation.EnterValidSessionName"),{valid:i.valid,customError:!i.valid})}}_renameSessionName(e,t){const i=t.target.parentNode,s=i.querySelector("#session-name-field"),n=i.querySelector("#session-rename-field"),o=i.querySelector("#session-rename-icon");if("none"===s.style.display){if(!n.checkValidity())return n.reportValidity(),void(o.on=!0);{const t=globalThis.backendaiclient.APIMajorVersion<5?s.value:e;globalThis.backendaiclient.rename(t,n.value).then((e=>{this.refreshList(),this.notification.text=b("session.SessionRenamed"),this.notification.show()})).catch((e=>{n.value=s.innerText,e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})).finally((()=>{this._toggleSessionNameField(s,n)}))}}else this._toggleSessionNameField(s,n)}_toggleSessionNameField(e,t){"block"===t.style.display?(e.style.display="block",t.style.display="none"):(e.style.display="none",t.style.display="block",t.focus())}sessionTypeRenderer(e,t,i){m(g`
        <div class="layout vertical start">
          <span style="font-size: 12px;">${i.item.type}</span>
        </div>
      `,e)}sessionInfoRenderer(e,t,i){m(g`
        <style>
          #session-name-field {
            display: block;
            margin-left: 16px;
            white-space: pre-wrap;
            word-break: break-all;
          }
          #session-rename-field {
            display: none;
            white-space: normal;
            word-break: break-word;
            font-family: var(--general-monospace-font-family);
            --mdc-ripple-color: transparent;
            --mdc-text-field-fill-color: transparent;
            --mdc-text-field-disabled-fill-color: transparent;
            --mdc-typography-font-family: var(--general-monospace-font-family);
            --mdc-typography-subtitle1-font-family: var(--general-monospace-font-family);
          }
          #session-rename-icon {
            --mdc-icon-size: 20px;
          }
        </style>
        <div class="layout vertical start">
          <div class="horizontal center center-justified layout">
            <pre id="session-name-field">${i.item[this.sessionNameField]}</pre>
            ${this._isRunning&&!this._isPreparing(i.item.status)&&globalThis.backendaiclient.email==i.item.user_email?g`
            <mwc-textfield id="session-rename-field" required autoValidate
                             pattern="^(?:[a-zA-Z0-9][a-zA-Z0-9._-]{2,}[a-zA-Z0-9])?$" maxLength="64"
                             validationMessage="${b("session.Validation.EnterValidSessionName")}"
                             value="${i.item[this.sessionNameField]}"
                             @input="${e=>this._validateSessionName(e)}"></mwc-textfield>
              <mwc-icon-button-toggle id="session-rename-icon" onIcon="done" offIcon="edit"
                                      @click="${e=>this._renameSessionName(i.item.session_id,e)}"></mwc-icon-button-toggle>
            `:g`
            `}
          </div>
          <div class="horizontal center center-justified layout">
          ${i.item.icon?g`
            <img src="resources/icons/${i.item.icon}" style="width:32px;height:32px;margin-right:10px;" />
          `:g`
          `}
            <div class="vertical start layout">
              ${i.item.sessionTags?i.item.sessionTags.map((e=>g`
              <div class="horizontal center layout">
                ${e.map((e=>("Env"===e.category&&(e.category=e.tag),e.category&&i.item.baseversion&&(e.tag=i.item.baseversion),g`
                <lablup-shields app="${void 0===e.category?"":e.category}"
                                color="${e.color}"
                                description="${e.tag}"
                                ui="round"
                                class="right-below-margin"></lablup-shields>
                    `)))}
              </div>`)):g``}
              ${i.item.additional_reqs?g`
                <div class="layout horizontal center wrap">
                  ${i.item.additional_reqs.map((e=>g`
                      <lablup-shields app=""
                                      color="green"
                                      description="${e}"
                                      ui="round"
                                      class="right-below-margin"></lablup-shields>
                    `))}
                </div>
              `:g``}
              ${i.item.cluster_size>1?g`
                <div class="layout horizontal center wrap">
                  <lablup-shields app="${"single-node"===i.item.cluster_mode?"Multi-container":"Multi-node"}"
                                  color="blue"
                                  description="${"X "+i.item.cluster_size}"
                                  ui="round"
                                  class="right-below-margin"></lablup-shields>
                </div>
              `:g``}
            </div>
          </div>
        </div>
      `,e)}architectureRenderer(e,t,i){m(g`
        <lablup-shields app=""
                        color="lightgreen"
                        description="${i.item.architecture}"
                        ui="round"></lablup-shields>
      `,e)}controlRenderer(e,t,i){var s;let n=!0;n="API"===this._connectionMode&&i.item.access_key===globalThis.backendaiclient._config._accessKey||i.item.user_email===globalThis.backendaiclient.email,m(g`
        <div id="controls" class="layout horizontal flex center"
             .session-uuid="${i.item.session_id}"
             .session-name="${i.item[this.sessionNameField]}"
             .access-key="${i.item.access_key}"
             .kernel-image="${i.item.kernel_image}"
             .app-services="${i.item.app_services}"
             .app-services-option="${i.item.app_services_option}">
          ${i.item.appSupport?g`
            <mwc-icon-button class="fg controls-running green"
                               @click="${e=>this._showAppLauncher(e)}"
                               ?disabled="${!n||"BATCH"===i.item.type}"
                               icon="apps"></mwc-icon-button>
            <mwc-icon-button class="fg controls-running"
                               ?disabled="${!n}"
                               @click="${e=>this._runTerminal(e)}">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 width="471.362px" height="471.362px" viewBox="0 0 471.362 471.362" style="enable-background:new 0 0 471.362 471.362;"
                 xml:space="preserve">
              <g>
                <g>
                  <path d="M468.794,355.171c-1.707-1.718-3.897-2.57-6.563-2.57H188.145c-2.664,0-4.854,0.853-6.567,2.57
                    c-1.711,1.711-2.565,3.897-2.565,6.563v18.274c0,2.662,0.854,4.853,2.565,6.563c1.713,1.712,3.903,2.57,6.567,2.57h274.086
                    c2.666,0,4.856-0.858,6.563-2.57c1.711-1.711,2.567-3.901,2.567-6.563v-18.274C471.365,359.068,470.513,356.882,468.794,355.171z"
                    />
                  <path d="M30.259,85.075c-1.903-1.903-4.093-2.856-6.567-2.856s-4.661,0.953-6.563,2.856L2.852,99.353
                    C0.95,101.255,0,103.442,0,105.918c0,2.478,0.95,4.664,2.852,6.567L115.06,224.69L2.852,336.896C0.95,338.799,0,340.989,0,343.46
                    c0,2.478,0.95,4.665,2.852,6.567l14.276,14.273c1.903,1.906,4.089,2.854,6.563,2.854s4.665-0.951,6.567-2.854l133.048-133.045
                    c1.903-1.902,2.853-4.096,2.853-6.57c0-2.473-0.95-4.663-2.853-6.565L30.259,85.075z"/>
                </g>
              </g>
            </svg>
            </mwc-icon-button>
          `:g``}
          ${this._isRunning&&!this._isPreparing(i.item.status)||this._isError(i.item.status)?g`
            <mwc-icon-button class="fg red controls-running" ?disabled=${!this._isPending(i.item.status)&&"duplicated"===(null===(s=i.item)||void 0===s?void 0:s.commit_status)}
                               icon="power_settings_new" @click="${e=>this._openTerminateSessionDialog(e)}"></mwc-icon-button>
          `:g``}
          ${(this._isRunning&&!this._isPreparing(i.item.status)||this._APIMajorVersion>4)&&!this._isPending(i.item.status)?g`
            <mwc-icon-button class="fg blue controls-running" icon="assignment"
                               @click="${e=>this._showLogs(e)}"></mwc-icon-button>
          `:g`
            <div @mouseenter="${()=>this._showTooltip("tooltip-"+i.item.session_id)}" @mouseleave="${()=>this._hideTooltip("tooltip-"+i.item.session_id)}">
              <mwc-icon-button fab flat inverted disabled class="fg controls-running" icon="assignment"></mwc-icon-button>
            </div>
            <wl-tooltip class="log-disabled-msg" id="tooltip-${i.item.session_id}">${_("session.NoLogMsgAvailable")}</wl-tooltip>
          `}
          ${this._isContainerCommitEnabled?g`
            <mwc-icon-button class="fg blue controls-running"
                             ?disabled=${this._isPending(i.item.status)||this._isPreparing(i.item.status)||this._isError(i.item.status)||"duplicated"===i.item.commit_status}
                             icon="archive" @click="${e=>this._openCommitSessionDialog(e)}"></mwc-icon-button>
          `:g``}
        </div>
      `,e)}configRenderer(e,t,i){const s=i.item.mounts.map((e=>e.startsWith("[")?JSON.parse(e.replace(/'/g,'"'))[0]:e));m(g`
        <div class="layout horizontal center flex">
          <div class="layout horizontal center configuration">
            ${i.item.mounts.length>0?g`
              <wl-icon class="fg green indicator">folder_open</wl-icon>
              <button class="mount-button"
                @mouseenter="${e=>this._createMountedFolderDropdown(e,s)}"
                @mouseleave="${()=>this._removeMountedFolderDropdown()}">
                ${s.join(", ")}
              </button>
            `:g`
            <wl-icon class="indicator no-mount">folder_open</wl-icon>
            <span class="no-mount">No mount</span>
            `}
          </div>
        </div>
        ${i.item.scaling_group?g`
        <div class="layout horizontal center flex">
          <div class="layout horizontal center configuration">
            <wl-icon class="fg green indicator">work</wl-icon>
            <span>${i.item.scaling_group}</span>
            <span class="indicator">RG</span>
          </div>
        </div>`:g``}
        <div class="layout vertical flex" style="padding-left: 25px">
          <div class="layout horizontal center configuration">
            <wl-icon class="fg green indicator">developer_board</wl-icon>
            <span>${i.item.cpu_slot}</span>
            <span class="indicator">${_("session.core")}</span>
          </div>
          <div class="layout horizontal center configuration">
            <wl-icon class="fg green indicator">memory</wl-icon>
            <span>${i.item.mem_slot}</span>
            <span class="indicator">GB</span>
          </div>
          <div class="layout horizontal center configuration">
            ${i.item.cuda_gpu_slot?g`
              <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg" />
              <span>${i.item.cuda_gpu_slot}</span>
              <span class="indicator">GPU</span>
              `:g``}
            ${!i.item.cuda_gpu_slot&&i.item.cuda_fgpu_slot?g`
              <img class="indicator-icon fg green" src="/resources/icons/file_type_cuda.svg" />
              <span>${i.item.cuda_fgpu_slot}</span>
              <span class="indicator">GPU</span>
              `:g``}
            ${i.item.rocm_gpu_slot?g`
              <img class="indicator-icon fg green" src="/resources/icons/ROCm.png" />
              <span>${i.item.rocm_gpu_slot}</span>
              <span class="indicator">GPU</span>
              `:g``}
            ${i.item.tpu_slot?g`
              <wl-icon class="fg green indicator">view_module</wl-icon>
              <span>${i.item.tpu_slot}</span>
              <span class="indicator">TPU</span>
              `:g``}
            ${i.item.cuda_gpu_slot||i.item.cuda_fgpu_slot||i.item.rocm_gpu_slot||i.item.tpu_slot?g``:g`
              <wl-icon class="fg green indicator">view_module</wl-icon>
              <span>-</span>
              <span class="indicator">GPU</span>
              `}
          </div>
        </div>
     `,e)}usageRenderer(e,t,i){["batch","interactive","running"].includes(this.condition)?m(g`
        <div class="vertical start start-justified layout">
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">CPU</div>
            <div class="horizontal start-justified center layout">
              <lablup-progress-bar class="usage"
                progress="${i.item.cpu_util/(100*i.item.cpu_slot)}"
                description=""
              ></lablup-progress-bar>
            </div>
          </div>
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">RAM</div>
            <div class="horizontal start-justified center layout">
              <lablup-progress-bar class="usage"
                progress="${i.item.mem_current/(1e9*i.item.mem_slot)}"
                description=""
              ></lablup-progress-bar>
            </div>
          </div>
          ${i.item.cuda_gpu_slot&&parseInt(i.item.cuda_gpu_slot)>0?g`
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">GPU</div>
            <div class="horizontal start-justified center layout">
              <lablup-progress-bar class="usage"
                progress="${i.item.cuda_util/(100*i.item.cuda_gpu_slot)}"
                description=""
              ></lablup-progress-bar>
            </div>
          </div>`:g``}
          ${i.item.cuda_fgpu_slot&&parseFloat(i.item.cuda_fgpu_slot)>0?g`
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">GPU</div>
            <div class="horizontal start-justified center layout">
              <lablup-progress-bar class="usage"
                progress="${i.item.cuda_util/(100*i.item.cuda_fgpu_slot)}"
                description=""
              ></lablup-progress-bar>
            </div>
          </div>`:g``}
          ${i.item.rocm_gpu_slot&&parseFloat(i.item.cuda_rocm_gpu_slot)>0?g`
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">GPU</div>
            <div class="horizontal start-justified center layout">
              <lablup-progress-bar class="usage"
                progress="${i.item.rocm_util/(100*i.item.rocm_gpu_slot)}"
                description=""
              ></lablup-progress-bar>
            </div>
          </div>`:g``}
          ${i.item.tpu_slot&&parseFloat(i.item.tpu_slot)>0?g`
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">TPU</div>
            <div class="horizontal start-justified center layout">
              <lablup-progress-bar class="usage"
                progress="${i.item.tpu_util/(100*i.item.tpu_slot)}"
                description=""
              ></lablup-progress-bar>
            </div>
          </div>`:g``}
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">I/O</div>
            <div style="font-size:8px;" class="horizontal start-justified center layout">
            R: ${i.item.io_read_bytes_mb}MB /
            W: ${i.item.io_write_bytes_mb}MB
            </div>
          </div>
       </div>
        `,e):"finished"===this.condition&&m(g`
        <div class="layout horizontal center flex">
          <wl-icon class="fg blue indicator" style="margin-right:3px;">developer_board</wl-icon>
          ${i.item.cpu_used_time.D?g`
          <div class="vertical center-justified center layout">
            <span style="font-size:11px">${i.item.cpu_used_time.D}</span>
            <span class="indicator">day</span>
          </div>`:g``}
          ${i.item.cpu_used_time.H?g`
          <div class="vertical center-justified center layout">
            <span style="font-size:11px">${i.item.cpu_used_time.H}</span>
            <span class="indicator">hour</span>
          </div>`:g``}
          ${i.item.cpu_used_time.M?g`
          <div class="vertical start layout">
            <span style="font-size:11px">${i.item.cpu_used_time.M}</span>
            <span class="indicator">min.</span>
          </div>`:g``}
          ${i.item.cpu_used_time.S?g`
          <div class="vertical start layout">
            <span style="font-size:11px">${i.item.cpu_used_time.S}</span>
            <span class="indicator">sec.</span>
          </div>`:g``}
          ${i.item.cpu_used_time.MS?g`
          <div class="vertical start layout">
            <span style="font-size:11px">${i.item.cpu_used_time.MS}</span>
            <span class="indicator">msec.</span>
          </div>`:g``}
          ${i.item.cpu_used_time.NODATA?g`
          <div class="vertical start layout">
            <span style="font-size:11px">No data</span>
          </div>`:g``}
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
        </div>`,e)}reservationRenderer(e,t,i){m(g`
        <div class="layout vertical">
          <span>${i.item.created_at_hr}</span>
          <span>(${i.item.elapsed})</span>
        </div>
      `,e)}agentRenderer(e,t,i){m(g`
        <div class="layout vertical">
          <span>${i.item.agent}</span>
        </div>
      `,e)}_toggleCheckbox(e){const t=this._selected_items.findIndex((t=>t.session_id==e.session_id));-1===t?this._selected_items.push(e):this._selected_items.splice(t,1),this._selected_items.length>0?this.shadowRoot.querySelector("#multiple-action-buttons").style.display="block":this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none"}checkboxRenderer(e,t,i){this._isRunning&&!this._isPreparing(i.item.status)||this._APIMajorVersion>4?m(g`
            <wl-checkbox class="list-check" style="--checkbox-size:12px;" ?checked="${!0===i.item.checked}" @click="${()=>this._toggleCheckbox(i.item)}"></wl-checkbox>
        `,e):m(g``,e)}userInfoRenderer(e,t,i){const s="API"===this._connectionMode?i.item.access_key:i.item.user_email;m(g`
        <div class="layout vertical">
          <span class="indicator">${this._getUserId(s)}</span>
        </div>
      `,e)}statusRenderer(e,t,i){var s;m(g`
        <div class="horizontal layout center">
          <span style="font-size: 12px;">${i.item.status}</span>
          ${i.item.status_data&&"{}"!==i.item.status_data?g`
            <mwc-icon-button class="fg green status" icon="help"
                @click="${()=>{var e;return this._openStatusDetailDialog(null!==(e=i.item.status_info)&&void 0!==e?e:"",i.item.status_data,i.item.starts_at_hr)}}"></mwc-icon-button>
          `:g``}
        </div>
        ${i.item.status_info?g`
          <div class="layout horizontal">
            <lablup-shields id="${i.item.name}" app="" color="${this.statusColorTable[i.item.status_info]}"
                  description="${i.item.status_info}" ui="round"></lablup-shields>
          </div>
        `:g``}
        ${this._isContainerCommitEnabled&&void 0!==(null===(s=i.item)||void 0===s?void 0:s.commit_status)?g`
          <lablup-shields app="" color="${this._setColorOfStatusInformation(i.item.commit_status)}" class="right-below-margin"
                          description=${"ongoing"===i.item.commit_status?"commit on-going":""}></lablup-shields>
        `:g``}
      `,e)}_setColorOfStatusInformation(e="ready"){return"ready"===e?"green":"lightgrey"}_getUserId(e=""){if(e&&this.isUserInfoMaskEnabled){const t=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e),i=t?2:0,s=t?e.split("@")[0].length-i:0;e=globalThis.backendaiutils._maskString(e,"*",i,s)}return e}_renderCommitSessionConfirmationDialog(e){var t,i,s;return g`
      <backend-ai-dialog id="commit-session-dialog" fixed backdrop>
        <span slot="title">${_("session.CommitSession")}</span>
        <div slot="content" class="vertical layout center flex">
          <span style="font-size:14px;margin:auto 20px;">${_("session.DescCommitSession")}</span>
          <mwc-list style="width:100%">
            <mwc-list-item twoline noninteractive class="commit-session-info">
                <span class="subheading">Session Name</span>
                <span class="monospace" slot="secondary">
                  ${(null===(t=null==e?void 0:e.session)||void 0===t?void 0:t.name)?e.session.name:"-"}
                </span>
            </mwc-list-item>
            <mwc-list-item twoline noninteractive class="commit-session-info">
                <span class="subheading">Session Id</span>
                <span class="monospace" slot="secondary">
                  ${(null===(i=null==e?void 0:e.session)||void 0===i?void 0:i.id)?e.session.id:"-"}
                </span>
            </mwc-list-item>
            <mwc-list-item twoline noninteractive class="commit-session-info">
              <span class="subheading"><strong>Environment and Version</strong></span>
              <span class="monospace" slot="secondary">
                ${e?g`
                  <lablup-shields app="${""===e.environment?"-":e.environment}"
                    color="blue"
                    description="${""===e.version?"-":e.version}"
                    ui="round"
                    class="right-below-margin"></lablup-shields>
                    `:g``}
              </span>
            </mwc-list-item>
            <mwc-list-item twoline noninteractive class="commit-session-info">
              <span class="subheading">Tags</span>
              <span class="monospace horizontal layout" slot="secondary">
                ${e?null===(s=null==e?void 0:e.tags)||void 0===s?void 0:s.map((e=>g`
                    <lablup-shields app=""
                      color="green"
                      description="${e}"
                      ui="round"
                      class="right-below-margin"></lablup-shields>
                  `)):g`
                    <lablup-shields app=""
                      color="green"
                      description="-"
                      ui="round"
                      style="right-below-margin"></lablup-shields>`}
              </span>
            </mwc-list-item>
          </mwc-list>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <mwc-button
              unelevated
              class="ok"
              ?disabled="${""===(null==e?void 0:e.environment)}"
              @click=${()=>this._requestCommitSession(e)}
              label="${_("button.Commit")}"></mwc-button>
        </div>
      </backend-ai-dialog>
    `}_parseSessionInfoToCommitSessionInfo(e="",t="",i=""){const s=["",""],[n,o]=e?e.split(":"):s,[a,...r]=o?o.split("-"):s;return{environment:n,version:a,tags:r,session:{name:t,id:i}}}render(){var e,t,i;return g`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <div class="layout horizontal center filters">
        <div id="multiple-action-buttons" style="display:none;">
          <wl-button outlined class="multiple-action-button" style="margin:8px;--button-shadow-color:0;--button-shadow-color-hover:0;" @click="${()=>this._openTerminateSelectedSessionsDialog()}">
            <wl-icon style="--icon-size: 20px;">delete</wl-icon>
            ${_("session.Terminate")}
          </wl-button>
        </div>
        <span class="flex"></span>
        <div class="vertical layout">
          <wl-textfield id="access-key-filter" type="search" maxLength="64"
                      label="${_("general.AccessKey")}" no-label-float .value="${this.filterAccessKey}"
                      style="display:none;margin-right:20px;"
                      @change="${e=>this._updateFilterAccessKey(e)}">
          </wl-textfield>
          <span id="access-key-filter-helper-text">${_("maxLength.64chars")}</span>
        </div>
      </div>

      <vaadin-grid id="list-grid" theme="row-stripes column-borders compact" aria-label="Session list"
         .items="${this.compute_sessions}" height-by-rows>
        ${this._isRunning?g`
          <vaadin-grid-column frozen width="40px" flex-grow="0" text-align="center" .renderer="${this._boundCheckboxRenderer}">
          </vaadin-grid-column>
        `:g``}
        <vaadin-grid-column frozen width="40px" flex-grow="0" header="#" .renderer="${this._indexRenderer}"></vaadin-grid-column>
        ${this.is_admin?g`
          <vaadin-grid-filter-column frozen path="${"API"===this._connectionMode?"access_key":"user_email"}"
                                     header="${"API"===this._connectionMode?"API Key":"User ID"}" resizable
                                     .renderer="${this._boundUserInfoRenderer}">
          </vaadin-grid-filter-column>
        `:g``}
        <vaadin-grid-filter-column frozen path="${this.sessionNameField}" auto-width header="${_("session.SessionInfo")}" resizable
                                   .renderer="${this._boundSessionInfoRenderer}">
        </vaadin-grid-filter-column>
        <vaadin-grid-filter-column width="120px" path="status" header="${_("session.Status")}" resizable
                                   .renderer="${this._boundStatusRenderer}">
        </vaadin-grid-filter-column>
        <vaadin-grid-column width="260px" resizable header="${_("general.Control")}"
                            .renderer="${this._boundControlRenderer}"></vaadin-grid-column>
        <vaadin-grid-column auto-width flex-grow="0" resizable header="${_("session.Configuration")}"
                            .renderer="${this._boundConfigRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="120px" flex-grow="0" resizable header="${_("session.Usage")}"
                            .renderer="${this._boundUsageRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-sort-column resizable auto-width flex-grow="0" header="${_("session.Reservation")}"
                                 path="created_at" .renderer="${this._boundReservationRenderer}">
        </vaadin-grid-sort-column>
        <vaadin-grid-filter-column width="110px" path="architecture" header="${_("session.Architecture")}" resizable
                                   .renderer="${this._boundArchitectureRenderer}">
        </vaadin-grid-filter-column>
        ${this._isIntegratedCondition?g`
          <vaadin-grid-filter-column path="type" width="120px" flex-grow="0" text-align="center" header="${_("session.launcher.SessionType")}" resizable .renderer="${this._boundSessionTypeRenderer}"></vaadin-grid-filter-column>
        `:g``}
        ${this.is_superadmin?g`
          <vaadin-grid-column auto-width flex-grow="0" resizable header="${_("session.Agent")}"
                              .renderer="${this._boundAgentRenderer}">
          </vaadin-grid-column>
        `:g``}
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
          <mwc-icon-button fab flat inverted icon="refresh" @click="${e=>this._refreshLogs()}">
          </mwc-icon-button>
        </div>
        <div slot="content" id="work-area" style="overflow:scroll;"></div>
        <iframe id="work-page" frameborder="0" border="0" cellspacing="0"
                style="border-style: none;display: none;width: 100%;"></iframe>
      </backend-ai-dialog>
      <backend-ai-dialog id="terminate-session-dialog" fixed backdrop>
        <span slot="title">${_("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${_("usersettings.SessionTerminationDialog")}</p>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <wl-button class="warning fg red" inverted flat @click="${()=>this._terminateSessionWithCheck(!0)}">
            ${_("button.ForceTerminate")}
          </wl-button>
          <span class="flex"></span>
          <wl-button class="cancel" inverted flat @click="${e=>this._hideDialog(e)}">${_("button.Cancel")}
          </wl-button>
          <wl-button class="ok" @click="${()=>this._terminateSessionWithCheck()}">${_("button.Okay")}</wl-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="terminate-selected-sessions-dialog" fixed backdrop>
        <span slot="title">${_("dialog.title.LetsDouble-Check")}</span>
        <div slot="content">
          <p>${_("usersettings.SessionTerminationDialog")}</p>
        </div>
        <div slot="footer" class="horizontal end-justified flex layout">
          <wl-button class="warning fg red" inverted flat
                      @click="${()=>this._terminateSelectedSessionsWithCheck(!0)}">${_("button.ForceTerminate")}
          </wl-button>
          <span class="flex"></span>
          <wl-button class="cancel" inverted flat @click="${e=>this._hideDialog(e)}">${_("button.Cancel")}
          </wl-button>
          <wl-button class="ok" @click="${()=>this._terminateSelectedSessionsWithCheck()}">${_("button.Okay")}
          </wl-button>
        </div>
      </backend-ai-dialog>
      <backend-ai-dialog id="status-detail-dialog" narrowLayout fixed backdrop>
        <span slot="title">${_("session.StatusInfo")}</span>
        <div slot="content" id="status-detail"></div>
      </backend-ai-dialog>
      ${this._renderCommitSessionConfirmationDialog(this._parseSessionInfoToCommitSessionInfo(null===(e=this.commitSessionDialog)||void 0===e?void 0:e.kernelImage,null===(t=this.commitSessionDialog)||void 0===t?void 0:t.sessionName,null===(i=this.commitSessionDialog)||void 0===i?void 0:i.sessionId))}
    `}_updateSessionPage(e){"previous-page"===e.target.id?this.current_page-=1:this.current_page+=1,this.refreshList()}};s([a({type:Boolean})],I.prototype,"active",void 0),s([a({type:String})],I.prototype,"condition",void 0),s([a({type:Object})],I.prototype,"jobs",void 0),s([a({type:Array})],I.prototype,"compute_sessions",void 0),s([a({type:Array})],I.prototype,"terminationQueue",void 0),s([a({type:String})],I.prototype,"filterAccessKey",void 0),s([a({type:String})],I.prototype,"sessionNameField",void 0),s([a({type:Array})],I.prototype,"appSupportList",void 0),s([a({type:Object})],I.prototype,"appTemplate",void 0),s([a({type:Object})],I.prototype,"imageInfo",void 0),s([a({type:Array})],I.prototype,"_selected_items",void 0),s([a({type:Object})],I.prototype,"_boundControlRenderer",void 0),s([a({type:Object})],I.prototype,"_boundConfigRenderer",void 0),s([a({type:Object})],I.prototype,"_boundUsageRenderer",void 0),s([a({type:Object})],I.prototype,"_boundReservationRenderer",void 0),s([a({type:Object})],I.prototype,"_boundAgentRenderer",void 0),s([a({type:Object})],I.prototype,"_boundSessionInfoRenderer",void 0),s([a({type:Object})],I.prototype,"_boundArchitectureRenderer",void 0),s([a({type:Object})],I.prototype,"_boundCheckboxRenderer",void 0),s([a({type:Object})],I.prototype,"_boundUserInfoRenderer",void 0),s([a({type:Object})],I.prototype,"_boundStatusRenderer",void 0),s([a({type:Object})],I.prototype,"_boundSessionTypeRenderer",void 0),s([a({type:Boolean})],I.prototype,"refreshing",void 0),s([a({type:Boolean})],I.prototype,"is_admin",void 0),s([a({type:Boolean})],I.prototype,"is_superadmin",void 0),s([a({type:String})],I.prototype,"_connectionMode",void 0),s([a({type:Object})],I.prototype,"_grid",void 0),s([a({type:Object})],I.prototype,"notification",void 0),s([a({type:Object})],I.prototype,"terminateSessionDialog",void 0),s([a({type:Object})],I.prototype,"terminateSelectedSessionsDialog",void 0),s([a({type:Object})],I.prototype,"sessionStatusInfoDialog",void 0),s([a({type:Boolean})],I.prototype,"enableScalingGroup",void 0),s([a({type:Object})],I.prototype,"spinner",void 0),s([a({type:Object})],I.prototype,"refreshTimer",void 0),s([a({type:Object})],I.prototype,"kernel_labels",void 0),s([a({type:Object})],I.prototype,"kernel_icons",void 0),s([a({type:Object})],I.prototype,"indicator",void 0),s([a({type:Proxy})],I.prototype,"statusColorTable",void 0),s([a({type:Number})],I.prototype,"sshPort",void 0),s([a({type:Number})],I.prototype,"vncPort",void 0),s([a({type:Number})],I.prototype,"current_page",void 0),s([a({type:Number})],I.prototype,"session_page_limit",void 0),s([a({type:Number})],I.prototype,"total_session_count",void 0),s([a({type:Number})],I.prototype,"_APIMajorVersion",void 0),s([a({type:Object})],I.prototype,"selectedSessionStatus",void 0),s([a({type:Boolean})],I.prototype,"isUserInfoMaskEnabled",void 0),s([r("#commit-session-dialog")],I.prototype,"commitSessionDialog",void 0),s([r("#commit-current-session-path-input")],I.prototype,"commitSessionInput",void 0),I=s([l("backend-ai-session-list")],I);
