import{_ as e,p as t,c as i,B as s,d as o,I as n,a,b as r,f as l,a3 as c,g as d,h,t as p,n as u,e as g}from"./backend-ai-console-bf343de1.js";import"./backend-ai-session-launcher-0b6c49f9.js";import{h as m,T as b,D as _,P as f,i as v,a as y,m as w,G as x}from"./vaadin-grid-sorter-19260d21.js";import"./vaadin-grid-selection-column-1d9252c1.js";import"./vaadin-grid-sort-column-a9880cbe.js";import"./iconset-f2694bf1.js";import"./textfield-67e7f371.js";import"./lablup-progress-bar-079f88df.js";import"./mwc-tab-bar-58fe4f29.js";import"./lablup-activity-panel-ffd4d5dd.js";import{J as A}from"./json_to_csv-7924e43a.js";import"./mwc-switch-cafd197d.js";import"./input-behavior-023cba33.js";import"./unsafe-html-4880aecc.js";import"./expansion-74e96040.js";import"./radio-behavior-e101265b.js";import"./mwc-slider-90480cbf.js";const k=m`<dom-module id="lumo-grid-tree-toggle" theme-for="vaadin-grid-tree-toggle">
  <template>
    <style>
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

      [part="toggle"] {
        display: inline-block;
        font-size: 1.5em;
        line-height: 1;
        width: 1em;
        height: 1em;
        text-align: center;
        color: var(--lumo-contrast-50pct);
        /* Increase touch target area */
        padding: calc(1em / 3);
        margin: calc(1em / -3);
      }

      :host(:not([dir="rtl"])) [part="toggle"] {
        margin-right: 0;
      }

      @media (hover: hover) {
        :host(:hover) [part="toggle"] {
          color: var(--lumo-contrast-80pct);
        }
      }

      [part="toggle"]::before {
        font-family: "lumo-icons";
        display: inline-block;
        height: 100%;
      }

      :host(:not([expanded])) [part="toggle"]::before {
        content: var(--lumo-icons-angle-right);
      }

      :host([expanded]) [part="toggle"]::before {
        content: var(--lumo-icons-angle-right);
        transform: rotate(90deg);
      }

      /* Experimental support for hierarchy connectors, using an unsupported selector */
      :host([theme~="connectors"]) #level-spacer {
        position: relative;
        z-index: -1;
        font-size: 1em;
        height: 1.5em;
      }

      :host([theme~="connectors"]) #level-spacer::before {
        display: block;
        content: "";
        margin-top: calc(var(--lumo-space-m) * -1);
        height: calc(var(--lumo-space-m) + 3em);
        background-image: linear-gradient(to right, transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px), var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px));
        background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
        background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) {
        margin-left: 0;
        margin-right: calc(var(--lumo-space-s) * -1);
      }

      :host([dir="rtl"]) [part="toggle"] {
        margin-left: 0;
      }

      :host([dir="rtl"][expanded]) [part="toggle"]::before {
        transform: rotate(-90deg);
      }

      :host([dir="rtl"][theme~="connectors"]) #level-spacer::before {
        background-image: linear-gradient(to left, transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px), var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px));
        background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
      }

      :host([dir="rtl"]:not([expanded])) [part="toggle"]::before,
      :host([dir="rtl"][expanded]) [part="toggle"]::before {
        content: var(--lumo-icons-angle-left);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(k.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const S=document.createElement("template");S.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: \"vaadin-grid-tree-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(S.content);class T extends(b(_(f))){static get template(){return m`
    <style>
      :host {
        display: inline-flex;
        align-items: baseline;

        /* CSS API for :host */
        --vaadin-grid-tree-toggle-level-offset: 1em;

        /*
          ShadyCSS seems to polyfill :dir(rtl) only for :host, thus using
          a host custom CSS property for ltr/rtl toggle icon choice.
         */
        ---collapsed-icon: "\\e7be\\00a0";
      }

      :host(:dir(rtl)) {
        ---collapsed-icon: "\\e7bd\\00a0";
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:not([leaf])) {
        cursor: pointer;
      }

      #level-spacer,
      [part="toggle"] {
        flex: none;
      }

      #level-spacer {
        display: inline-block;
        width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
      }

      [part="toggle"]::before {
        font-family: "vaadin-grid-tree-icons";
        line-height: 1em; /* make icon font metrics not affect baseline */
      }

      :host(:not([expanded])) [part="toggle"]::before {
        content: var(---collapsed-icon);
      }

      :host([expanded]) [part="toggle"]::before {
        content: "\\e7bc\\00a0"; /* icon glyph + single non-breaking space */
      }

      :host([leaf]) [part="toggle"] {
        visibility: hidden;
      }
    </style>

    <span id="level-spacer"></span>
    <span part="toggle"></span>
    <slot></slot>
`}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",(e=>this._onClick(e)))}_onClick(e){this.leaf||v(e.target)||(e.preventDefault(),this.expanded=!this.expanded)}_levelChanged(e){const t=Number(e).toString();this.style["---level"]=t,this._debouncerUpdateLevel=y.debounce(this._debouncerUpdateLevel,w,(()=>this.updateStyles({"---level":t})))}}customElements.define(T.is,T);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class R extends x{static get template(){return m`
    <template id="template">
      <vaadin-grid-tree-toggle leaf="[[__isLeafItem(item, itemHasChildrenPath)]]" expanded="{{expanded}}" level="[[level]]">
        [[__getToggleContent(path, item)]]
      </vaadin-grid-tree-toggle>
    </template>
`}static get is(){return"vaadin-grid-tree-column"}static get properties(){return{path:String,itemHasChildrenPath:{type:String,value:"children"}}}_prepareBodyTemplate(){const e=this._prepareTemplatizer(this.$.template);return e.templatizer.dataHost=this,e}__isLeafItem(e,t){return!(e&&e[t])}__getToggleContent(e,t){return e&&this.get(e,t)}}var $;customElements.define(R.is,R),function(e){e[e.EOS=0]="EOS",e[e.Text=1]="Text",e[e.Incomplete=2]="Incomplete",e[e.ESC=3]="ESC",e[e.Unknown=4]="Unknown",e[e.SGR=5]="SGR",e[e.OSCURL=6]="OSCURL"}($||($={}));var C=function(){function e(){this.VERSION="4.0.3",this.setup_palettes(),this._use_classes=!1,this._escape_for_html=!0,this.bold=!1,this.fg=this.bg=null,this._buffer="",this._url_whitelist={http:1,https:1}}return Object.defineProperty(e.prototype,"use_classes",{get:function(){return this._use_classes},set:function(e){this._use_classes=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"escape_for_html",{get:function(){return this._escape_for_html},set:function(e){this._escape_for_html=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url_whitelist",{get:function(){return this._url_whitelist},set:function(e){this._url_whitelist=e},enumerable:!0,configurable:!0}),e.prototype.setup_palettes=function(){var e=this;this.ansi_colors=[[{rgb:[0,0,0],class_name:"ansi-black"},{rgb:[187,0,0],class_name:"ansi-red"},{rgb:[0,187,0],class_name:"ansi-green"},{rgb:[187,187,0],class_name:"ansi-yellow"},{rgb:[0,0,187],class_name:"ansi-blue"},{rgb:[187,0,187],class_name:"ansi-magenta"},{rgb:[0,187,187],class_name:"ansi-cyan"},{rgb:[255,255,255],class_name:"ansi-white"}],[{rgb:[85,85,85],class_name:"ansi-bright-black"},{rgb:[255,85,85],class_name:"ansi-bright-red"},{rgb:[0,255,0],class_name:"ansi-bright-green"},{rgb:[255,255,85],class_name:"ansi-bright-yellow"},{rgb:[85,85,255],class_name:"ansi-bright-blue"},{rgb:[255,85,255],class_name:"ansi-bright-magenta"},{rgb:[85,255,255],class_name:"ansi-bright-cyan"},{rgb:[255,255,255],class_name:"ansi-bright-white"}]],this.palette_256=[],this.ansi_colors.forEach((function(t){t.forEach((function(t){e.palette_256.push(t)}))}));for(var t=[0,95,135,175,215,255],i=0;i<6;++i)for(var s=0;s<6;++s)for(var o=0;o<6;++o){var n={rgb:[t[i],t[s],t[o]],class_name:"truecolor"};this.palette_256.push(n)}for(var a=8,r=0;r<24;++r,a+=10){var l={rgb:[a,a,a],class_name:"truecolor"};this.palette_256.push(l)}},e.prototype.escape_txt_for_html=function(e){return e.replace(/[&<>]/gm,(function(e){return"&"===e?"&amp;":"<"===e?"&lt;":">"===e?"&gt;":void 0}))},e.prototype.append_buffer=function(e){var t=this._buffer+e;this._buffer=t},e.prototype.__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},e.prototype.get_next_packet=function(){var e={kind:$.EOS,text:"",url:""},t=this._buffer.length;if(0==t)return e;var i=this._buffer.indexOf("");if(-1==i)return e.kind=$.Text,e.text=this._buffer,this._buffer="",e;if(i>0)return e.kind=$.Text,e.text=this._buffer.slice(0,i),this._buffer=this._buffer.slice(i),e;if(0==i){if(1==t)return e.kind=$.Incomplete,e;var s=this._buffer.charAt(1);if("["!=s&&"]"!=s)return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;if("["==s){if(this._csi_regex||(this._csi_regex=j(this.__makeTemplateObject(["\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          [                      # CSI\n                          ([<-?]?)              # private-mode char\n                          ([d;]*)                    # any digits or semicolons\n                          ([ -/]?               # an intermediate modifier\n                          [@-~])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          [                      # CSI\n                          [ -~]*                # anything legal\n                          ([\0-:])              # anything illegal\n                        )\n                    "],["\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          \\x1b\\[                      # CSI\n                          ([\\x3c-\\x3f]?)              # private-mode char\n                          ([\\d;]*)                    # any digits or semicolons\n                          ([\\x20-\\x2f]?               # an intermediate modifier\n                          [\\x40-\\x7e])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          \\x1b\\[                      # CSI\n                          [\\x20-\\x7e]*                # anything legal\n                          ([\\x00-\\x1f:])              # anything illegal\n                        )\n                    "]))),null===(a=this._buffer.match(this._csi_regex)))return e.kind=$.Incomplete,e;if(a[4])return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;""!=a[1]||"m"!=a[3]?e.kind=$.Unknown:e.kind=$.SGR,e.text=a[2];var o=a[0].length;return this._buffer=this._buffer.slice(o),e}if("]"==s){if(t<4)return e.kind=$.Incomplete,e;if("8"!=this._buffer.charAt(2)||";"!=this._buffer.charAt(3))return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;this._osc_st||(this._osc_st=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var s=e.raw[0],o=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,n=s.replace(o,"");return new RegExp(n,"g")}(this.__makeTemplateObject(["\n                        (?:                         # legal sequence\n                          (\\)                    # ESC                           |                           # alternate\n                          ()                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\0-]                 # anything illegal\n                          |                           # alternate\n                          [\b-]                 # anything illegal\n                          |                           # alternate\n                          [-]                 # anything illegal\n                        )\n                    "],["\n                        (?:                         # legal sequence\n                          (\\x1b\\\\)                    # ESC \\\n                          |                           # alternate\n                          (\\x07)                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\\x00-\\x06]                 # anything illegal\n                          |                           # alternate\n                          [\\x08-\\x1a]                 # anything illegal\n                          |                           # alternate\n                          [\\x1c-\\x1f]                 # anything illegal\n                        )\n                    "]))),this._osc_st.lastIndex=0;var n=this._osc_st.exec(this._buffer);if(null===n)return e.kind=$.Incomplete,e;if(n[3])return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;var a,r=this._osc_st.exec(this._buffer);if(null===r)return e.kind=$.Incomplete,e;if(r[3])return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;if(this._osc_regex||(this._osc_regex=j(this.__makeTemplateObject(["\n                        ^                           # beginning of line\n                                                    #\n                        ]8;                    # OSC Hyperlink\n                        [ -:<-~]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([!-~]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                        ([!-~]+)              # TEXT capture\n                        ]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                    "],["\n                        ^                           # beginning of line\n                                                    #\n                        \\x1b\\]8;                    # OSC Hyperlink\n                        [\\x20-\\x3a\\x3c-\\x7e]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([\\x21-\\x7e]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                        ([\\x21-\\x7e]+)              # TEXT capture\n                        \\x1b\\]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                    "]))),null===(a=this._buffer.match(this._osc_regex)))return e.kind=$.ESC,e.text=this._buffer.slice(0,1),this._buffer=this._buffer.slice(1),e;e.kind=$.OSCURL,e.url=a[1],e.text=a[2];o=a[0].length;return this._buffer=this._buffer.slice(o),e}}},e.prototype.ansi_to_html=function(e){this.append_buffer(e);for(var t=[];;){var i=this.get_next_packet();if(i.kind==$.EOS||i.kind==$.Incomplete)break;i.kind!=$.ESC&&i.kind!=$.Unknown&&(i.kind==$.Text?t.push(this.transform_to_html(this.with_state(i))):i.kind==$.SGR?this.process_ansi(i):i.kind==$.OSCURL&&t.push(this.process_hyperlink(i)))}return t.join("")},e.prototype.with_state=function(e){return{bold:this.bold,fg:this.fg,bg:this.bg,text:e.text}},e.prototype.process_ansi=function(e){for(var t=e.text.split(";");t.length>0;){var i=t.shift(),s=parseInt(i,10);if(isNaN(s)||0===s)this.fg=this.bg=null,this.bold=!1;else if(1===s)this.bold=!0;else if(22===s)this.bold=!1;else if(39===s)this.fg=null;else if(49===s)this.bg=null;else if(s>=30&&s<38)this.fg=this.ansi_colors[0][s-30];else if(s>=40&&s<48)this.bg=this.ansi_colors[0][s-40];else if(s>=90&&s<98)this.fg=this.ansi_colors[1][s-90];else if(s>=100&&s<108)this.bg=this.ansi_colors[1][s-100];else if((38===s||48===s)&&t.length>0){var o=38===s,n=t.shift();if("5"===n&&t.length>0){var a=parseInt(t.shift(),10);a>=0&&a<=255&&(o?this.fg=this.palette_256[a]:this.bg=this.palette_256[a])}if("2"===n&&t.length>2){var r=parseInt(t.shift(),10),l=parseInt(t.shift(),10),c=parseInt(t.shift(),10);if(r>=0&&r<=255&&l>=0&&l<=255&&c>=0&&c<=255){var d={rgb:[r,l,c],class_name:"truecolor"};o?this.fg=d:this.bg=d}}}}},e.prototype.transform_to_html=function(e){var t=e.text;if(0===t.length)return t;if(this._escape_for_html&&(t=this.escape_txt_for_html(t)),!e.bold&&null===e.fg&&null===e.bg)return t;var i=[],s=[],o=e.fg,n=e.bg;e.bold&&i.push("font-weight:bold"),this._use_classes?(o&&("truecolor"!==o.class_name?s.push(o.class_name+"-fg"):i.push("color:rgb("+o.rgb.join(",")+")")),n&&("truecolor"!==n.class_name?s.push(n.class_name+"-bg"):i.push("background-color:rgb("+n.rgb.join(",")+")"))):(o&&i.push("color:rgb("+o.rgb.join(",")+")"),n&&i.push("background-color:rgb("+n.rgb+")"));var a="",r="";return s.length&&(a=' class="'+s.join(" ")+'"'),i.length&&(r=' style="'+i.join(";")+'"'),"<span"+r+a+">"+t+"</span>"},e.prototype.process_hyperlink=function(e){var t=e.url.split(":");return t.length<1?"":this._url_whitelist[t[0]]?'<a href="'+this.escape_txt_for_html(e.url)+'">'+this.escape_txt_for_html(e.text)+"</a>":""},e}();function j(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var s=e.raw[0],o=/^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm,n=s.replace(o,"");return new RegExp(n)}let I=class extends s{constructor(){super(),this.active=!0,this.condition="running",this.jobs=Object(),this.compute_sessions=Array(),this.terminationQueue=Array(),this.filterAccessKey="",this.sessionNameField="name",this.appSupportList=Array(),this.appTemplate=Object(),this.imageInfo=Object(),this._selected_items=Array(),this._boundControlRenderer=this.controlRenderer.bind(this),this._boundConfigRenderer=this.configRenderer.bind(this),this._boundUsageRenderer=this.usageRenderer.bind(this),this._boundSessionInfoRenderer=this.sessionInfoRenderer.bind(this),this._boundCheckboxRenderer=this.checkboxRenderer.bind(this),this._boundUserInfoRenderer=this.userInfoRenderer.bind(this),this._boundStatusRenderer=this.statusRenderer.bind(this),this.refreshing=!1,this.is_admin=!1,this.is_superadmin=!1,this._connectionMode="API",this._grid=Object(),this.notification=Object(),this.terminateSessionDialog=Object(),this.terminateSelectedSessionsDialog=Object(),this.enableScalingGroup=!1,this.spinner=Object(),this.refreshTimer=Object(),this.kernel_labels=Object(),this.kernel_icons=Object(),this.indicator=Object(),this.statusColorTable=new Proxy({"idle-timeout":"green","user-requested":"green","failed-to-start":"red","creation-failed":"red","self-terminated":"green"},{get:(e,t)=>e.hasOwnProperty(t)?e[t]:"lightgrey"}),this.sshPort=0,this.vncPort=0,this.current_page=1,this.session_page_limit=50,this.total_session_count=0,this._APIMajorVersion=5}static get styles(){return[o,n,a,r`
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
            left: 0;
            --component-width: 100%;
          }
        }

        @media screen and (min-width: 900px) {
          #work-dialog {
            left: 100px;
            --component-width: calc(100% - 50px);
          }

          #work-dialog.mini_ui {
            left: 40px;
            --component-width: calc(100% - 50px);
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

        wl-label {
          width: 100%;
          background-color: color: var(--paper-grey-500);
          min-width: 60px;
          font-size: 12px;
          --label-font-family: Roboto, Noto, sans-serif;
        }

        lablup-progress-bar.usage {
          --progress-bar-height: 5px;
          --progress-bar-width: 60px;
          margin-bottom: 0;
        }

        div.filters #access-key-filter {
          --input-font-size: small;
          --input-label-font-size: small;
          --input-font-family: Roboto, Noto, sans-serif;
        }

        .mount-button,
        .status-button {
          border: none;
          background: none;
          padding: 0;
          outline-style: none;
        }

        span#access-key-filter-helper-text {
          margin-top: 3px;
          font-size: 10px;
          color: var(--general-menu-color-2);
        }
      `]}get _isRunning(){return"running"===this.condition}_isPreparing(e){return-1!==["RESTARTING","PREPARING","PULLING"].indexOf(e)}_isError(e){return"ERROR"===e}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this._grid=this.shadowRoot.querySelector("#list-grid"),this.refreshTimer=null,fetch("resources/image_metadata.json").then((e=>e.json())).then((e=>{this.imageInfo=e.imageInfo;for(let e in this.imageInfo)this.kernel_labels[e]=[],"label"in this.imageInfo[e]?this.kernel_labels[e]=this.imageInfo[e].label:this.kernel_labels[e]=[],"icon"in this.imageInfo[e]?this.kernel_icons[e]=this.imageInfo[e].icon:this.kernel_icons[e]=""})),this.notification=globalThis.lablupNotification,this.terminateSessionDialog=this.shadowRoot.querySelector("#terminate-session-dialog"),this.terminateSelectedSessionsDialog=this.shadowRoot.querySelector("#terminate-selected-sessions-dialog"),document.addEventListener("backend-ai-group-changed",(e=>this.refreshList(!0,!1))),document.addEventListener("backend-ai-ui-changed",(e=>this._refreshWorkDialogUI(e))),this._refreshWorkDialogUI({detail:{"mini-ui":globalThis.mini_ui}})}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{globalThis.backendaiclient.is_admin?this.shadowRoot.querySelector("#access-key-filter").style.display="block":(this.shadowRoot.querySelector("#access-key-filter").style.display="none",this.shadowRoot.querySelector("#access-key-filter-helper-text").style.display="none",this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 225px)!important"),globalThis.backendaiclient.APIMajorVersion<5&&(this.sessionNameField="sess_id"),this.is_admin=globalThis.backendaiclient.is_admin,this.is_superadmin=globalThis.backendaiclient.is_superadmin,this._connectionMode=globalThis.backendaiclient._config._connectionMode,this.enableScalingGroup=globalThis.backendaiclient.supports("scaling-group"),this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._refreshJobData()}),!0):(globalThis.backendaiclient.is_admin?(this.shadowRoot.querySelector("#access-key-filter").style.display="block",this.shadowRoot.querySelector("#access-key-filter-helper-text").style.display="block"):(this.shadowRoot.querySelector("#access-key-filter").style.display="none",this.shadowRoot.querySelector("#access-key-filter-helper-text").style.display="none",this.shadowRoot.querySelector("vaadin-grid").style.height="calc(100vh - 225px)!important"),globalThis.backendaiclient.APIMajorVersion<5&&(this.sessionNameField="sess_id"),this.is_admin=globalThis.backendaiclient.is_admin,this.is_superadmin=globalThis.backendaiclient.is_superadmin,this._connectionMode=globalThis.backendaiclient._config._connectionMode,this.enableScalingGroup=globalThis.backendaiclient.supports("scaling-group"),this._APIMajorVersion=globalThis.backendaiclient.APIMajorVersion,this._refreshJobData()))}async refreshList(e=!0,t=!0){return this._refreshJobData(e,t)}async _refreshJobData(e=!1,t=!0){if(await this.updateComplete,!0!==this.active)return;if(!0===this.refreshing)return;let i;switch(this.refreshing=!0,this.spinner.show(),i="RUNNING",this.condition){case"running":i=["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING"];break;case"finished":i=["TERMINATED","CANCELLED"];break;case"others":i=["TERMINATING","ERROR"];break;default:i=["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING"]}globalThis.backendaiclient.supports("detailed-session-states")&&(i=i.join(","));let s=["id","name","image","created_at","terminated_at","status","status_info","service_ports","mounts","occupied_slots","access_key"];globalThis.backendaiclient.supports("multi-container")&&s.push("cluster_size"),globalThis.backendaiclient.supports("multi-node")&&s.push("cluster_mode"),globalThis.backendaiclient.supports("session-detail-status")&&s.push("status_data"),this.enableScalingGroup&&s.push("scaling_group"),"SESSION"===this._connectionMode&&s.push("user_email"),globalThis.backendaiclient.is_superadmin?s.push("containers {container_id agent occupied_slots live_stat last_stat}"):s.push("containers {container_id occupied_slots live_stat last_stat}");let o=globalThis.backendaiclient.current_group_id();globalThis.backendaiclient.computeSession.list(s,i,this.filterAccessKey,this.session_page_limit,(this.current_page-1)*this.session_page_limit,o,1e4).then((i=>{this.spinner.hide(),this.total_session_count=i.compute_session_list.total_count,0===this.total_session_count&&(this.total_session_count=1);let s,o=i.compute_session_list.items;if(void 0!==o&&0!=o.length){const e=this.compute_sessions,t=[];Object.keys(e).map(((i,s)=>{t.push(e[i][this.sessionNameField])})),Object.keys(o).map(((e,t)=>{let i=o[e],s=JSON.parse(i.occupied_slots);const n=o[e].image.split("/")[2]||o[e].image.split("/")[1];if(o[e].cpu_slot=parseInt(s.cpu),o[e].mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(s.mem,"g")),o[e].mem_slot=o[e].mem_slot.toFixed(2),o[e].elapsed=this._elapsed(o[e].created_at,o[e].terminated_at),o[e].created_at_hr=this._humanReadableTime(o[e].created_at),o[e].containers&&o[e].containers.length>0){const t=o[e].containers[0],i=t.live_stat?JSON.parse(t.live_stat):null;o[e].agent=t.agent,i&&i.cpu_used?o[e].cpu_used_time=this._automaticScaledTime(i.cpu_used.current):o[e].cpu_used_time=this._automaticScaledTime(0),i&&i.cpu_util?o[e].cpu_util=i.cpu_util.current:o[e].cpu_util=0,i&&i.mem?o[e].mem_current=i.mem.current:o[e].mem_current=0,i&&i.io_read?o[e].io_read_bytes_mb=this._bytesToMB(i.io_read.current):o[e].io_read_bytes_mb=0,i&&i.io_write?o[e].io_write_bytes_mb=this._bytesToMB(i.io_write.current):o[e].io_write_bytes_mb=0,i&&i.cuda_util?o[e].cuda_util=i.cuda_util.current:o[e].cuda_util=0,i&&i.rocm_util?o[e].rocm_util=i.rocm_util:o[e].rocm_util=0,i&&i.tpu_util?o[e].tpu_util=i.tpu_util:o[e].tpu_util=0}let a=JSON.parse(o[e].service_ports);!0===Array.isArray(a)?o[e].app_services=a.map((e=>e.name)):o[e].app_services=[],0===o[e].app_services.length||"running"!=this.condition?o[e].appSupport=!1:o[e].appSupport=!0,"running"===this.condition?o[e].running=!0:o[e].running=!1,"cuda.device"in s&&(o[e].cuda_gpu_slot=parseInt(s["cuda.device"])),"rocm.device"in s&&(o[e].rocm_gpu_slot=parseInt(s["rocm.device"])),"tpu.device"in s&&(o[e].tpu_slot=parseInt(s["tpu.device"])),"cuda.shares"in s&&(o[e].cuda_fgpu_slot=parseFloat(s["cuda.shares"]).toFixed(2)),o[e].kernel_image=n,o[e].icon=this._getKernelIcon(i.image),o[e].sessionTags=this._getKernelInfo(i.image);const r=i.image.split("/");o[e].cluster_size=parseInt(o[e].cluster_size);let l=r[r.length-1].split(":")[1].split("-");void 0!==l[1]?(o[e].baseversion=l[0],o[e].baseimage=l[1],o[e].additional_reqs=l.slice(1,l.length).map((e=>e.toUpperCase()))):o[e].baseversion=o[e].tag,this._selected_items.includes(o[e][this.sessionNameField])?o[e].checked=!0:o[e].checked=!1}))}if(this.compute_sessions=o,this.requestUpdate(),this.refreshing=!1,!0===this.active){if(!0===e){var n=new CustomEvent("backend-ai-resource-refreshed",{detail:{}});document.dispatchEvent(n)}!0===t&&(s="running"===this.condition?5e3:3e4,this.refreshTimer=setTimeout((()=>{this._refreshJobData()}),s))}})).catch((e=>{if(this.refreshing=!1,this.active&&t){const e="running"===this.condition?2e4:12e4;this.refreshTimer=setTimeout((()=>{this._refreshJobData()}),e)}this.spinner.hide(),console.log(e),e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_refreshWorkDialogUI(e){let t=this.shadowRoot.querySelector("#work-dialog");e.detail.hasOwnProperty("mini-ui")&&!0===e.detail["mini-ui"]?t.classList.add("mini_ui"):t.classList.remove("mini_ui")}_humanReadableTime(e){return(e=new Date(e)).toLocaleString()}_getKernelInfo(e){let t=[];if(void 0===e)return[];const i=e.split("/");let s=(i[2]||i[1]).split(":")[0];if(s in this.kernel_labels)t.push(this.kernel_labels[s]);else{const i=e.split("/");let s,o;3===i.length?(s=i[1],o=i[2]):(s="",o=i[1]),o=o.split(":")[0],o=s?s+"/"+o:o,t.push([{category:"Env",tag:""+o,color:"lightgrey"}])}return t}_getKernelIcon(e){if(void 0===e)return[];const t=e.split("/");let i=(t[2]||t[1]).split(":")[0];return i in this.kernel_icons?this.kernel_icons[i]:""}_byteToMB(e){return Math.floor(e/1e6)}_byteToGB(e){return Math.floor(e/1e9)}_MBToGB(e){return e/1024}_automaticScaledTime(e){let t=Object(),i=["D","H","M","S"],s=[864e5,36e5,6e4,1e3];for(let o=0;o<s.length;o++)Math.floor(e/s[o])>0&&(t[i[o]]=Math.floor(e/s[o]),e%=s[o]);return 0===Object.keys(t).length&&(t=e>0?{MS:e}:{NODATA:1}),t}_msecToSec(e){return Number(e/1e3).toFixed(0)}_bytesToMB(e){return Number(e/1048576).toFixed(1)}_elapsed(e,t){return globalThis.backendaiclient.utils.elapsedTime(e,t)}_indexRenderer(e,t,i){let s=i.index+1;c(h`
        <div>${s}</div>
      `,e)}async sendRequest(e){let t,i;try{"GET"==e.method&&(e.body=void 0),t=await fetch(e.uri,e);let s=t.headers.get("Content-Type");if(i=s.startsWith("application/json")||s.startsWith("application/problem+json")?await t.json():s.startsWith("text/")?await t.text():await t.blob(),!t.ok)throw i}catch(e){}return i}_terminateApp(e){let t=globalThis.backendaiclient._config.accessKey,i={method:"GET",uri:this._getProxyURL()+"proxy/"+t+"/"+e};return this.sendRequest(i).then((t=>{this.total_session_count-=1;let i=globalThis.backendaiclient._config.accessKey;if(void 0!==t&&404!==t.code){let t={method:"GET",uri:this._getProxyURL()+"proxy/"+i+"/"+e+"/delete"};return this.sendRequest(t)}return Promise.resolve(!0)})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_getProxyURL(){let e="http://127.0.0.1:5050/";return void 0!==globalThis.__local_proxy?e=globalThis.__local_proxy:void 0!==globalThis.backendaiclient._config.proxyURL&&(e=globalThis.backendaiclient._config.proxyURL),e}_showLogs(e){const t=e.target.closest("#controls"),i=t["session-uuid"],s=t["session-name"],o=globalThis.backendaiclient.APIMajorVersion<5?s:i,n=t["access-key"];globalThis.backendaiclient.get_logs(o,n,15e3).then((e=>{let t=(new C).ansi_to_html(e.result.logs);setTimeout((()=>{this.shadowRoot.querySelector("#work-title").innerHTML=`${s} (${i})`,this.shadowRoot.querySelector("#work-area").innerHTML=`<pre>${t}</pre>`||d("session.NoLogs"),this.shadowRoot.querySelector("#work-dialog").sessionUuid=i,this.shadowRoot.querySelector("#work-dialog").sessionName=s,this.shadowRoot.querySelector("#work-dialog").accessKey=n,this.shadowRoot.querySelector("#work-dialog").show()}),100)})).catch((e=>{e&&e.message?(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=l.relieve(e.title),this.notification.show(!0,e))}))}_refreshLogs(){const e=this.shadowRoot.querySelector("#work-dialog").sessionUuid,t=this.shadowRoot.querySelector("#work-dialog").sessionName,i=globalThis.backendaiclient.APIMajorVersion<5?t:e,s=this.shadowRoot.querySelector("#work-dialog").accessKey;globalThis.backendaiclient.get_logs(i,s,15e3).then((e=>{const t=(new C).ansi_to_html(e.result.logs);this.shadowRoot.querySelector("#work-area").innerHTML=`<pre>${t}</pre>`||d("session.NoLogs")})).catch((e=>{e&&e.message?(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)):e&&e.title&&(this.notification.text=l.relieve(e.title),this.notification.show(!0,e))}))}_showAppLauncher(e){const t=e.target.closest("#controls");return globalThis.appLauncher.showLauncher(t)}async _runTerminal(e){const t=e.target.closest("#controls")["session-uuid"];return globalThis.appLauncher.runTerminal(t)}_openTerminateSessionDialog(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"];this.terminateSessionDialog.sessionName=i,this.terminateSessionDialog.accessKey=s,this.terminateSessionDialog.show()}_terminateSession(e){const t=e.target.closest("#controls"),i=t["session-name"],s=t["access-key"];return this.terminationQueue.includes(i)?(this.notification.text="Already terminating the session.",this.notification.show(),!1):this._terminateKernel(i,s)}_terminateSessionWithCheck(e){return this.terminationQueue.includes(this.terminateSessionDialog.sessionName)?(this.notification.text="Already terminating the session.",this.notification.show(),!1):(this.spinner.show(),this._terminateKernel(this.terminateSessionDialog.sessionName,this.terminateSessionDialog.accessKey).then((e=>{this.spinner.hide(),this._selected_items=[],this._clearCheckboxes(),this.terminateSessionDialog.hide(),this.notification.text=d("session.SessionTerminated"),this.notification.show();let t=new CustomEvent("backend-ai-resource-refreshed",{detail:"running"});document.dispatchEvent(t)})).catch((e=>{this.spinner.hide(),this._selected_items=[],this._clearCheckboxes(),this.terminateSessionDialog.hide(),this.notification.text=l.relieve("Problem occurred during termination."),this.notification.show(!0,e);let t=new CustomEvent("backend-ai-resource-refreshed",{detail:"running"});document.dispatchEvent(t)})))}_openTerminateSelectedSessionsDialog(e){this.terminateSelectedSessionsDialog.show()}_clearCheckboxes(){[...this.shadowRoot.querySelectorAll("wl-checkbox.list-check")].forEach((e=>{e.removeAttribute("checked")}))}_terminateSelectedSessionsWithCheck(){this.spinner.show();let e=this._selected_items.map((e=>this._terminateKernel(e[this.sessionNameField],e.access_key)));return this._selected_items=[],Promise.all(e).then((e=>{this.spinner.hide(),this.terminateSelectedSessionsDialog.hide(),this._clearCheckboxes(),this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none",this.notification.text=d("session.SessionsTerminated"),this.notification.show()})).catch((e=>{this.spinner.hide(),this.terminateSelectedSessionsDialog.hide(),this._clearCheckboxes(),this.notification.text=l.relieve("Problem occurred during termination."),this.notification.show(!0,e)}))}_terminateSelectedSessions(){this.spinner.show();let e=this._selected_items.map((e=>this._terminateKernel(e[this.sessionNameField],e.access_key)));return Promise.all(e).then((e=>{this.spinner.hide(),this._selected_items=[],this._clearCheckboxes(),this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none",this.notification.text=d("session.SessionsTerminated"),this.notification.show()})).catch((e=>{this.spinner.hide(),this._selected_items=[],this._clearCheckboxes(),this.notification.text="description"in e?l.relieve(e.description):l.relieve("Problem occurred during termination."),this.notification.show(!0,e)}))}async _terminateKernel(e,t){return this.terminationQueue.push(e),this._terminateApp(e).then((()=>{globalThis.backendaiclient.destroy(e,t).then((e=>{setTimeout((async()=>{this.terminationQueue=[];let e=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(e)}),1e3)})).catch((e=>{let t=new CustomEvent("backend-ai-session-list-refreshed",{detail:"running"});document.dispatchEvent(t),this.notification.text="description"in e?l.relieve(e.description):l.relieve("Problem occurred during termination."),this.notification.show(!0,e)}))})).catch((e=>{console.log(e),e&&e.message&&(this.notification.text=l.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}))}_hideDialog(e){let t=e.target.closest("backend-ai-dialog");if(t.hide(),"ssh-dialog"===t.id){const e=this.shadowRoot.querySelector("#sshkey-download-link");globalThis.URL.revokeObjectURL(e.href)}}_updateFilterAccessKey(e){this.filterAccessKey=e.target.value,this.refreshTimer&&(clearTimeout(this.refreshTimer),this._refreshJobData())}_createMountedFolderDropdown(e,t){const i=e.target,s=document.createElement("mwc-menu"),o=/[\[\]\,\'\"]/g;s.anchor=i,s.className="dropdown-menu",s.style.boxShadow="0 1px 1px rgba(0, 0, 0, 0.2)",s.setAttribute("open",""),s.setAttribute("fixed",""),s.setAttribute("x",10),s.setAttribute("y",15),t.length>1&&t.map(((e,t)=>{if(t>0){let t=document.createElement("mwc-list-item");t.innerHTML=e.replace(o,"").split(" ")[0],t.style.height="25px",t.style.fontWeight="400",t.style.fontSize="14px",t.style.fontFamily="var(--general-font-family)",s.appendChild(t)}})),document.body.appendChild(s)}_removeMountedFolderDropdown(){const e=document.getElementsByClassName("dropdown-menu");for(;e[0];)e[0].parentNode.removeChild(e[0])}_createStatusDetailDropdown(e,t){console.log(t);const i=e.target,s=document.createElement("mwc-menu");s.anchor=i,s.className="dropdown-menu-status-detail",s.style.boxShadow="0 1px 1px rgba(0, 0, 0, 0.2)",s.setAttribute("open",""),s.setAttribute("fixed",""),s.setAttribute("x",10),s.setAttribute("y",15);let o=document.createElement("mwc-list-item");o.innerHTML=t.status_info,o.style.height="25px",o.style.fontWeight="400",o.style.fontStyle="oblique",o.style.fontSize="14px",o.style.fontFamily="var(--general-font-family)",s.appendChild(o),document.body.appendChild(s)}_removeStatusDetailDropdown(){const e=document.getElementsByClassName("dropdown-menu-status-detail");for(;e[0];)e[0].parentNode.removeChild(e[0])}sessionInfoRenderer(e,t,i){c(h`
        <div class="layout vertical start">
          <div>${i.item[this.sessionNameField]}</div>
          <div class="horizontal center center-justified layout">
          ${i.item.icon?h`
            <img src="resources/icons/${i.item.icon}" style="width:32px;height:32px;margin-right:10px;" />
          `:h`
          `}
            <div class="vertical start layout">
              ${i.item.sessionTags?i.item.sessionTags.map((e=>h`
              <div class="horizontal center layout">
                ${e.map((e=>("Env"===e.category&&(e.category=e.tag),e.category&&i.item.baseversion&&(e.tag=i.item.baseversion),h`
                <lablup-shields app="${void 0===e.category?"":e.category}"
                                color="${e.color}"
                                description="${e.tag}"
                                ui="round"
                                style="margin-top:3px;margin-right:3px;"></lablup-shields>
                    `)))}
              </div>`)):h``}
          ${i.item.additional_reqs?h`
            <div class="layout horizontal center wrap">
              ${i.item.additional_reqs.map((e=>h`
                  <lablup-shields app=""
                                  color="green"
                                  description="${e}"
                                  ui="round"
                                  style="margin-top:3px;margin-right:3px;"></lablup-shields>
                `))}
            </div>
          `:h``}
          ${i.item.cluster_size>1?h`
            <div class="layout horizontal center wrap">
              <lablup-shields app="${"single-node"===i.item.cluster_mode?"Multi-container":"Multi-node"}"
                              color="blue"
                              description="${"X "+i.item.cluster_size}"
                              ui="round"
                              style="margin-top:3px;margin-right:3px;"></lablup-shields>
            </div>
          `:h``}
          </div>
        </div>
      `,e)}controlRenderer(e,t,i){c(h`
        <div id="controls" class="layout horizontal flex center"
             .session-uuid="${i.item.id}"
             .session-name="${i.item[this.sessionNameField]}"
             .access-key="${i.item.access_key}"
             .kernel-image="${i.item.kernel_image}"
             .app-services="${i.item.app_services}">
          ${i.item.appSupport?h`
            <mwc-icon-button class="fg controls-running green"
                               @click="${e=>this._showAppLauncher(e)}"
                               icon="apps"></mwc-icon-button>
            <mwc-icon-button class="fg controls-running"
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
          `:h``}
          ${this._isRunning&&!this._isPreparing(i.item.status)||this._isError(i.item.status)?h`
            <mwc-icon-button class="fg red controls-running"
                               icon="power_settings_new" @click="${e=>this._openTerminateSessionDialog(e)}"></mwc-icon-button>
          `:h``}
          ${this._isRunning&&!this._isPreparing(i.item.status)||this._APIMajorVersion>4?h`
            <mwc-icon-button class="fg blue controls-running" icon="assignment"
                               @click="${e=>this._showLogs(e)}"
                               icon="assignment"></mwc-icon-button>
          `:h`
            <mwc-icon-button fab flat inverted disabled class="fg controls-running" icon="assignment"></mwc-icon-button>
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
          </div>
        </div>
     `,e)}usageRenderer(e,t,i){"running"===this.condition?c(h`
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
          ${i.item.cuda_gpu_slot&&parseInt(i.item.cuda_gpu_slot)>0?h`
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">GPU</div>
            <div class="horizontal start-justified center layout">
              <lablup-progress-bar class="usage"
                progress="${i.item.cuda_util/i.item.cuda_gpu_slot*100}"
                description=""
              ></lablup-progress-bar>
            </div>
          </div>`:h``}
          ${i.item.cuda_fgpu_slot&&parseFloat(i.item.cuda_fgpu_slot)>0?h`
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">GPU</div>
            <div class="horizontal start-justified center layout">
              <lablup-progress-bar class="usage"
                progress="${i.item.cuda_util/i.item.cuda_fgpu_slot*100}"
                description=""
              ></lablup-progress-bar>
            </div>
          </div>`:h``}
          ${i.item.rocm_gpu_slot&&parseFloat(i.item.cuda_rocm_gpu_slot)>0?h`
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">GPU</div>
            <div class="horizontal start-justified center layout">
              <lablup-progress-bar class="usage"
                progress="${i.item.rocm_util/i.item.rocm_gpu_slot*100}"
                description=""
              ></lablup-progress-bar>
            </div>
          </div>`:h``}
          ${i.item.tpu_slot&&parseFloat(i.item.tpu_slot)>0?h`
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">TPU</div>
            <div class="horizontal start-justified center layout">
              <lablup-progress-bar class="usage"
                progress="${i.item.tpu_util/i.item.tpu_slot*100}"
                description=""
              ></lablup-progress-bar>
            </div>
          </div>`:h``}
          <div class="horizontal start-justified center layout">
            <div style="font-size:8px;width:35px;">I/O</div>
            <div style="font-size:8px;" class="horizontal start-justified center layout">
            R: ${i.item.io_read_bytes_mb}MB /
            W: ${i.item.io_write_bytes_mb}MB
            </div>
          </div>
       </div>
        `,e):"finished"===this.condition&&c(h`
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
        </div>`,e)}_toggleCheckbox(e){let t=this._selected_items.findIndex((t=>t[this.sessionNameField]==e[this.sessionNameField]));-1===t?this._selected_items.push(e):this._selected_items.splice(t,1),this._selected_items.length>0?this.shadowRoot.querySelector("#multiple-action-buttons").style.display="block":this.shadowRoot.querySelector("#multiple-action-buttons").style.display="none"}checkboxRenderer(e,t,i){this._isRunning&&!this._isPreparing(i.item.status)||this._APIMajorVersion>4?c(h`
            <wl-checkbox class="list-check" style="--checkbox-size:12px;" ?checked="${!0===i.item.checked}" @click="${()=>this._toggleCheckbox(i.item)}"></wl-checkbox>
        `,e):c(h``,e)}userInfoRenderer(e,t,i){c(h`
        <div class="layout vertical">
          <span class="indicator">${"API"===this._connectionMode?i.item.access_key:i.item.user_email}</span>
        </div>
      `,e)}statusRenderer(e,t,i){c(h`
        <span style="font-size: 12px;">${i.item.status}</span>
        ${i.item.status_info?h`
        <br />
        <div class="layout horizontal">
        <lablup-shields id="${i.item.name}" app="" color="${this.statusColorTable[i.item.status_info]}"
              description="${i.item.status_info}" ui="round"
              @mouseenter="${e=>this._createStatusDetailDropdown(e,i.item)}"
              @mouseleave="${()=>this._removeStatusDetailDropdown()}"></lablup-shields>
        </div>
        `:h``}
      `,e)}render(){return h`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <div class="layout horizontal center filters">
        <div id="multiple-action-buttons" style="display:none;">
          <wl-button outlined class="multiple-action-button" @click="${()=>this._openTerminateSelectedSessionsDialog()}">
            <wl-icon style="--icon-size: 20px;">delete</wl-icon>
            ${p("session.Terminate")}
          </wl-button>
        </div>
        <span class="flex"></span>
        <div class="vertical layout">
          <wl-textfield id="access-key-filter" type="search" maxLength="64"
                      label="${p("general.AccessKey")}" no-label-float .value="${this.filterAccessKey}"
                      style="display:none;margin-right:20px;"
                      @change="${e=>this._updateFilterAccessKey(e)}">
          </wl-textfield>
          <span id="access-key-filter-helper-text">${p("maxLength.64chars")}</span>
        </div>
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
        <vaadin-grid-column width="210px" flex-grow="0" header="${p("general.Control")}" .renderer="${this._boundControlRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="160px" flex-grow="0" resizable header="${p("session.Configuration")}" .renderer="${this._boundConfigRenderer}"></vaadin-grid-column>
        <vaadin-grid-column width="120px" flex-grow="0" resizable header="${p("session.Usage")}" .renderer="${this._boundUsageRenderer}">
        </vaadin-grid-column>
        <vaadin-grid-sort-column resizable auto-width flex-grow="0" header="${p("session.Reservation")}" path="created_at">
          <template>
            <div class="layout vertical">
              <span>[[item.created_at_hr]]</span>
              <span>([[item.elapsed]])</span>
            </div>
          </template>
        </vaadin-grid-sort-column>
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
          <mwc-icon-button fab flat inverted icon="refresh" @click="${e=>this._refreshLogs()}">
          </mwc-icon-button>
        </div>
        <div slot="content" id="work-area" style="overflow:scroll;"></div>
        <iframe id="work-page" frameborder="0" border="0" cellspacing="0"
                style="border-style: none;display: none;width: 100%;"></iframe>
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
      `}_updateSessionPage(e){"previous-page"===e.target.id?this.current_page-=1:this.current_page+=1,this.refreshList()}};e([t({type:Boolean})],I.prototype,"active",void 0),e([t({type:String})],I.prototype,"condition",void 0),e([t({type:Object})],I.prototype,"jobs",void 0),e([t({type:Array})],I.prototype,"compute_sessions",void 0),e([t({type:Array})],I.prototype,"terminationQueue",void 0),e([t({type:String})],I.prototype,"filterAccessKey",void 0),e([t({type:String})],I.prototype,"sessionNameField",void 0),e([t({type:Array})],I.prototype,"appSupportList",void 0),e([t({type:Object})],I.prototype,"appTemplate",void 0),e([t({type:Object})],I.prototype,"imageInfo",void 0),e([t({type:Array})],I.prototype,"_selected_items",void 0),e([t({type:Object})],I.prototype,"_boundControlRenderer",void 0),e([t({type:Object})],I.prototype,"_boundConfigRenderer",void 0),e([t({type:Object})],I.prototype,"_boundUsageRenderer",void 0),e([t({type:Object})],I.prototype,"_boundSessionInfoRenderer",void 0),e([t({type:Object})],I.prototype,"_boundCheckboxRenderer",void 0),e([t({type:Object})],I.prototype,"_boundUserInfoRenderer",void 0),e([t({type:Object})],I.prototype,"_boundStatusRenderer",void 0),e([t({type:Boolean})],I.prototype,"refreshing",void 0),e([t({type:Boolean})],I.prototype,"is_admin",void 0),e([t({type:Boolean})],I.prototype,"is_superadmin",void 0),e([t({type:String})],I.prototype,"_connectionMode",void 0),e([t({type:Object})],I.prototype,"_grid",void 0),e([t({type:Object})],I.prototype,"notification",void 0),e([t({type:Object})],I.prototype,"terminateSessionDialog",void 0),e([t({type:Object})],I.prototype,"terminateSelectedSessionsDialog",void 0),e([t({type:Boolean})],I.prototype,"enableScalingGroup",void 0),e([t({type:Object})],I.prototype,"spinner",void 0),e([t({type:Object})],I.prototype,"refreshTimer",void 0),e([t({type:Object})],I.prototype,"kernel_labels",void 0),e([t({type:Object})],I.prototype,"kernel_icons",void 0),e([t({type:Object})],I.prototype,"indicator",void 0),e([t({type:Proxy})],I.prototype,"statusColorTable",void 0),e([t({type:Number})],I.prototype,"sshPort",void 0),e([t({type:Number})],I.prototype,"vncPort",void 0),e([t({type:Number})],I.prototype,"current_page",void 0),e([t({type:Number})],I.prototype,"session_page_limit",void 0),e([t({type:Number})],I.prototype,"total_session_count",void 0),e([t({type:Number})],I.prototype,"_APIMajorVersion",void 0),I=e([i("backend-ai-session-list")],I);
/**
 @license
 Copyright (c) 2015-2021 Lablup Inc. All rights reserved.
 */
let E=class extends s{constructor(){super(),this._status="inactive",this.active=!0,this._lists=Object(),this.is_admin=!1,this.filterAccessKey="",this._connectionMode="API",this._defaultFileName="",this.exportToCsvDialog=Object(),this.active=!1,this._status="inactive"}static get styles(){return[o,n,a,u,g,r`
        h3.tab {
          background-color: var(--general-tabbar-background-color);
          border-radius: 5px 5px 0px 0px;
        }
        mwc-tab-bar {
          --mdc-theme-primary: var(--general-sidebar-selected-color);
          --mdc-text-transform: none;
          --mdc-tab-color-default: var(--general-tabbar-background-color);
          --mdc-tab-text-label-color-default: var(--general-sidebar-color);
        }

        wl-button {
          --button-bg:  var(--paper-light-green-50);
          --button-bg-hover:  var(--paper-green-100);
          --button-bg-active:  var(--paper-green-600);
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

        backend-ai-dialog wl-textfield {
          padding: 10px 0px;
          --input-font-family: Roboto, Noto, sans-serif;
          --input-font-size: 12px;
          --input-color-disabled: #bbbbbb;
          --input-label-color-disabled: #222222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #cccccc;
        }

        mwc-menu {
          --mdc-theme-surface: #f1f1f1;
          --mdc-menu-item-height : auto;
        }

        mwc-menu#dropdown-menu {
          position: relative;
          left: -170px;
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

        mwc-textfield {
          width: 100%;
          --mdc-text-field-fill-color: transparent;
          --mdc-theme-primary: var(--paper-green-600);
        }

        backend-ai-resource-monitor {
          margin: 10px 50px;
        }

        backend-ai-session-launcher#session-launcher {
          --component-width: 100px;
          --component-shadow-color: transparent;
        }
        @media screen and (max-width: 805px) {
          mwc-tab {
            --mdc-typography-button-font-size: 10px;
          }
        }
      `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list"),this.notification=globalThis.lablupNotification,document.addEventListener("backend-ai-session-list-refreshed",(()=>{this.shadowRoot.querySelector("#running-jobs").refreshList(!0,!1)})),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",(()=>{this.is_admin=globalThis.backendaiclient.is_admin,this._connectionMode=globalThis.backendaiclient._config._connectionMode}),!0):(this.is_admin=globalThis.backendaiclient.is_admin,this._connectionMode=globalThis.backendaiclient._config._connectionMode)}async _viewStateChanged(e){if(await this.updateComplete,!1!==e)this.shadowRoot.querySelector("#resource-monitor").setAttribute("active",!0),this.shadowRoot.querySelector("#running-jobs").setAttribute("active",!0),this.exportToCsvDialog=this.shadowRoot.querySelector("#export-to-csv"),this._status="active";else{this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active"),this._status="inactive";for(let e=0;e<this._lists.length;e++)this._lists[e].removeAttribute("active")}}_toggleDialogCheckbox(e){let t=e.target,i=this.shadowRoot.querySelector("#date-from"),s=this.shadowRoot.querySelector("#date-to");i.disabled=t.checked,s.disabled=t.checked}_showTab(e){let t=this.shadowRoot.querySelectorAll(".tab-content");for(let e=0;e<t.length;e++)t[e].style.display="none";this.shadowRoot.querySelector("#"+e.title+"-lists").style.display="block";for(let e=0;e<this._lists.length;e++)this._lists[e].removeAttribute("active");this.shadowRoot.querySelector("#"+e.title+"-jobs").setAttribute("active",!0)}_toggleDropdown(e){let t=this.shadowRoot.querySelector("#dropdown-menu"),i=e.target;t.anchor=i,t.open||t.show()}_openExportToCsvDialog(){let e=this.shadowRoot.querySelector("#dropdown-menu");e.open&&e.close(),console.log("Downloading CSV File..."),this._defaultFileName=this._getDefaultCSVFileName(),this.exportToCsvDialog.show()}_getFirstDateOfMonth(){let e=new Date;return new Date(e.getFullYear(),e.getMonth(),2).toISOString().substring(0,10)}_getDefaultCSVFileName(){return(new Date).toISOString().substring(0,10)+"_"+(new Date).toTimeString().slice(0,8).replace(/:/gi,"-")}_validateDateRange(){let e=this.shadowRoot.querySelector("#date-to"),t=this.shadowRoot.querySelector("#date-from");if(e.value&&t.value){new Date(e.value).getTime()<new Date(t.value).getTime()&&(e.value=t.value)}}_automaticScaledTime(e){let t=Object(),i=["D","H","M","S"],s=[864e5,36e5,6e4,1e3];for(let o=0;o<s.length;o++)Math.floor(e/s[o])>0&&(t[i[o]]=Math.floor(e/s[o]),e%=s[o]);return 0===Object.keys(t).length&&(t=e>0?{MS:e}:{NODATA:1}),t}_msecToSec(e){return Number(e/1e3).toFixed(0)}_bytesToMB(e){return Number(e/1048576).toFixed(1)}_exportToCSV(){const e=this.shadowRoot.querySelector("#export-file-name");if(!e.validity.valid)return;const t=[];let i=["RUNNING","RESTARTING","TERMINATING","PENDING","PREPARING","PULLING","TERMINATED","CANCELLED","ERROR"];globalThis.backendaiclient.supports("detailed-session-states")&&(i=i.join(","));const s=["id","name","image","created_at","terminated_at","status","status_info","access_key"];"SESSION"===this._connectionMode&&s.push("user_email"),globalThis.backendaiclient.is_superadmin?s.push("containers {container_id agent occupied_slots live_stat last_stat}"):s.push("containers {container_id occupied_slots live_stat last_stat}");const o=globalThis.backendaiclient.current_group_id();globalThis.backendaiclient.computeSession.listAll(s,i,this.filterAccessKey,100,0,o).then((i=>{const s=i;if(0===s.length)return this.notification.text=d("session.NoSession"),this.notification.show(),void this.exportToCsvDialog.hide();s.forEach((e=>{const i={};if(i.id=e.id,i.name=e.name,i.image=e.image.split("/")[2]||e.image.split("/")[1],i.status=e.status,i.status_info=e.status_info,i.access_key=e.access_key,i.created_at=e.created_at,i.terminated_at=e.terminated_at,e.containers&&e.containers.length>0){const t=e.containers[0];i.container_id=t.container_id;const s=t.occupied_slots?JSON.parse(t.occupied_slots):null;s&&(i.cpu_slot=parseInt(s.cpu),i.mem_slot=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(s.mem,"g")).toFixed(2),s["cuda.shares"]&&(i.cuda_shares=s["cuda.shares"]),s["cuda.device"]&&(i.cuda_device=s["cuda.device"]),s["tpu.device"]&&(i.tpu_device=s["tpu.device"]),s["rocm.device"]&&(i.rocm_device=s["rocm.device"]));const o=t.live_stat?JSON.parse(t.live_stat):null;o&&(o.cpu_used&&o.cpu_used.current?i.cpu_used_time=this._automaticScaledTime(o.cpu_used.current):i.cpu_used_time=0,o.io_read?i.io_read_bytes_mb=this._bytesToMB(o.io_read.current):i.io_read_bytes_mb=0,o.io_write?i.io_write_bytes_mb=this._bytesToMB(o.io_write.current):i.io_write_bytes_mb=0),t.agent&&(i.agent=t.agent)}t.push(i)})),A.exportToCsv(e.value,t),this.notification.text=d("session.DownloadingCSVFile"),this.notification.show(),this.exportToCsvDialog.hide()}))}render(){return h`
      <div class="horizontal layout wrap">
        <lablup-activity-panel title="${p("summary.ResourceStatistics")}" elevation="1" autowidth>
          <div slot="message">
            <backend-ai-resource-monitor location="session" id="resource-monitor" ?active="${!0===this.active}"></backend-ai-resource-monitor>
          </div>
        </lablup-activity-panel>
        <lablup-activity-panel title="${p("summary.Announcement")}" elevation="1" horizontalsize="2x" style="display:none;">
        </lablup-activity-panel>
      </div>
      <lablup-activity-panel elevation="1" autowidth narrow noheader>
        <div slot="message">
          <h3 class="tab horizontal center layout">
            <div class="horizontal layout flex start-justified">
            <mwc-tab-bar>
              <mwc-tab title="running" label="${p("session.Running")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
              <mwc-tab title="finished" label="${p("session.Finished")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
              <mwc-tab title="others" label="${p("session.Others")}" @click="${e=>this._showTab(e.target)}"></mwc-tab>
            </mwc-tab-bar>
            ${this.is_admin?h`
              <div style="position: relative;">
                <mwc-icon-button id="dropdown-menu-button" icon="more_horiz" raised
                                  @click="${e=>this._toggleDropdown(e)}"></mwc-icon-button>
                  <mwc-menu id="dropdown-menu">
                    <mwc-list-item>
                      <a class="horizontal layout start center" @click="${()=>this._openExportToCsvDialog()}">
                        <mwc-icon style="color:#242424;padding-right:10px;">get_app</mwc-icon>
                        ${p("session.exportCSV")}
                      </a>
                    </mwc-list-item>
                  </mwc-menu>
                </div>
              `:h``}
            </div>
            <div class="horizontal layout flex end-justified" style="margin-right:20px;">
            <backend-ai-session-launcher location="session" id="session-launcher" ?active="${!0===this.active}" isSupportingFab></backend-ai-session-launcher>
            </div>
          </h3>
          <div id="running-lists" class="tab-content">
            <backend-ai-session-list id="running-jobs" condition="running"></backend-ai-session-list>
          </div>
          <div id="finished-lists" class="tab-content" style="display:none;">
            <backend-ai-session-list id="finished-jobs" condition="finished"></backend-ai-session-list>
          </div>
          <div id="others-lists" class="tab-content" style="display:none;">
            <backend-ai-session-list id="others-jobs" condition="others"></backend-ai-session-list>
          </div>
        </div>
      </lablup-activity-panel>
      <backend-ai-dialog id="export-to-csv" fixed backdrop>
        <span slot="title">${p("session.ExportSessionListToCSVFile")}</span>
        <div slot="content">
          <mwc-textfield id="export-file-name" label="File name"
                          validationMessage="${p("data.explorer.ValueRequired")}"
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
          <div class="horizontal center layout">
            <wl-button class="fg green" type="button" inverted outlined style="width:100%;"
            @click="${this._exportToCSV}">
              <wl-icon>get_app</wl-icon>
              ${p("session.ExportCSVFile")}
            </wl-button>
          </div>
        </div>
      </backend-ai-dialog>
    `}};e([t({type:String})],E.prototype,"_status",void 0),e([t({type:Boolean})],E.prototype,"active",void 0),e([t({type:Object})],E.prototype,"_lists",void 0),e([t({type:Boolean})],E.prototype,"is_admin",void 0),e([t({type:String})],E.prototype,"filterAccessKey",void 0),e([t({type:String})],E.prototype,"_connectionMode",void 0),e([t({type:Object})],E.prototype,"_defaultFileName",void 0),e([t({type:Object})],E.prototype,"exportToCsvDialog",void 0),E=e([i("backend-ai-session-view")],E);var D=E;export default D;
