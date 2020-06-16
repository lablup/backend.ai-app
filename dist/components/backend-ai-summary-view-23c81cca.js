import{_ as e,p as t,c as i,L as s,I as r,a as n,b as a,h as o,g as l,B as c,d as h,e as p,f as u,t as d}from"./backend-ai-console-08beed35.js";import{u as g}from"./unsafe-html-0d08774d.js";import{t as m}from"./translate-unsafe-html-6aae53e6.js";import"./mwc-linear-progress-2487daa0.js";import"./backend-ai-chart-8a1bcb38.js";import"./iron-resizable-behavior-d47f1a1f.js";import"./paper-dropdown-menu-b2129442.js";import"./iron-iconset-svg-bcb33a8c.js";import"./paper-item-05614dab.js";import"./radio-behavior-98768496.js";import"./expansion-5fb4c02d.js";import"./label-b667f462.js";import"./backend-ai-resource-monitor-4a70e6ba.js";import"./select-eb203a8d.js";let b=class extends s{constructor(){super(),this.title="",this.message="",this.panelId="",this.horizontalsize="",this.elevation=1,this.width=280,this.marginWidth=16,this.minwidth=0,this.maxwidth=0,this.pinned=!1,this.disabled=!1}static get styles(){return[r,n,a`
        wl-card {
          display: block;
          background: white;
          box-sizing: border-box;
          margin: 16px;
          padding: 0;
          border-radius: 5px;
          --card-elevation: rgba(4, 7, 22, 0.15) 0px 5px 10px -2px;
        }

        wl-card > h4 {
          border-left: 3px solid var(--paper-green-900);
          background-color: var(--paper-green-500);
          color: #eee;
          font-size: 14px;
          font-weight: 400;
          height: 32px;
          padding: 5px 15px 5px 20px;
          margin: 0 0 10px 0;
          border-bottom: 1px solid #DDD;
          @apply --layout-justified;
          display: flex;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        wl-card[disabled] {
          background-color: rgba(0, 0, 0, 0.1);
        }

        wl-card > div {
          margin: 20px;
          padding-bottom: 20px;
          font-size: 12px;
          padding-left: 3px;
        }

        ul {
          padding-inline-start: 0;
        }

        #button {
          display: none;
        }
      `]}render(){return o`
      <wl-card id="activity" elevation="${this.elevation}" ?disabled="${this.disabled}">
        <h4 class="horizontal center layout" style="font-weight:bold">
          <span>${this.title}</span>
          <div class="flex"></div>
          <wl-button id="button" fab flat inverted @click="${()=>this._removePanel()}">
            <wl-icon>close</wl-icon>
          </wl-button>
        </h4>
        <div class="${this.disabled?"disabled":"enabled"}">
          <slot name="message"></slot>
        </div>
      </wl-card>
    `}firstUpdated(){if(this.pinned||null==this.panelId){const e=this.shadowRoot.getElementById("button");this.shadowRoot.querySelector("h4").removeChild(e)}this.shadowRoot.querySelector("wl-card").style.width=this.width+"px",this.minwidth&&(this.shadowRoot.querySelector("wl-card").style.minWidth=this.minwidth+"px"),this.maxwidth&&(this.shadowRoot.querySelector("wl-card").style.minWidth=this.maxwidth+"px"),this.horizontalsize&&("2x"==this.horizontalsize&&(this.shadowRoot.querySelector("wl-card").style.width=2*this.width+32+"px"),"3x"==this.horizontalsize&&(this.shadowRoot.querySelector("wl-card").style.width=3*this.width+32+"px")),this.shadowRoot.querySelector("wl-card").style.margin=this.marginWidth+"px"}connectedCallback(){super.connectedCallback()}_removePanel(){}};e([t({type:String})],b.prototype,"title",void 0),e([t({type:String})],b.prototype,"message",void 0),e([t({type:String})],b.prototype,"panelId",void 0),e([t({type:String})],b.prototype,"horizontalsize",void 0),e([t({type:Number})],b.prototype,"elevation",void 0),e([t({type:Number})],b.prototype,"width",void 0),e([t({type:Number})],b.prototype,"marginWidth",void 0),e([t({type:Number})],b.prototype,"minwidth",void 0),e([t({type:Number})],b.prototype,"maxwidth",void 0),e([t({type:Boolean})],b.prototype,"pinned",void 0),e([t({type:Boolean})],b.prototype,"disabled",void 0),b=e([i("lablup-activity-panel")],b);
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let f=class extends s{constructor(){super(),this.releaseURL="https://raw.githubusercontent.com/lablup/backend.ai-console/release/version.json",this.localVersion="",this.localBuild="",this.remoteVersion="",this.remoteBuild="",this.remoteRevision="",this.updateChecked=!1,this.updateNeeded=!1,this.updateURL=""}static get styles(){return[]}render(){return o`
    `}firstUpdated(){this.notification=globalThis.lablupNotification,globalThis.isElectron&&void 0!==globalThis.backendaioptions&&globalThis.backendaioptions.get("automatic_update_check",!0)&&this.checkRelease()}async checkRelease(){this.updateChecked||fetch(this.releaseURL).then(e=>e.json()).then(e=>{this.updateChecked=!0,this.remoteVersion=e.package,this.remoteBuild=e.build,this.remoteRevision=e.revision,this.compareVersion(globalThis.packageVersion,this.remoteVersion)<0&&(this.updateNeeded=!0,this.updateURL="https://github.com/lablup/backend.ai-console/releases/tag/v"+this.remoteVersion,globalThis.isElectron&&(this.notification.text=l("update.NewConsoleVersionAvailable")+" "+this.remoteVersion,this.notification.detail=l("update.NewConsoleVersionAvailable"),this.notification.url=this.updateURL,this.notification.show()))}).catch(e=>{let t=globalThis.backendaioptions.get("automatic_update_count_trial",0);t>3&&globalThis.backendaioptions.set("automatic_update_check",!1),globalThis.backendaioptions.set("automatic_update_count_trial",t+1)})}compareVersion(e,t){if("string"!=typeof e)return!1;if("string"!=typeof t)return!1;e=e.split("."),t=t.split(".");const i=Math.min(e.length,t.length);for(let s=0;s<i;++s){if(e[s]=parseInt(e[s],10),t[s]=parseInt(t[s],10),e[s]>t[s])return 1;if(e[s]<t[s])return-1}return e.length==t.length?0:e.length<t.length?-1:1}};e([t({type:String})],f.prototype,"releaseURL",void 0),e([t({type:String})],f.prototype,"localVersion",void 0),e([t({type:String})],f.prototype,"localBuild",void 0),e([t({type:String})],f.prototype,"remoteVersion",void 0),e([t({type:String})],f.prototype,"remoteBuild",void 0),e([t({type:String})],f.prototype,"remoteRevision",void 0),e([t({type:Boolean})],f.prototype,"updateChecked",void 0),e([t({type:Boolean})],f.prototype,"updateNeeded",void 0),e([t({type:String})],f.prototype,"updateURL",void 0),e([t({type:Object})],f.prototype,"notification",void 0),f=e([i("backend-ai-release-check")],f);let _=class extends s{constructor(){super(),this.currentNumber=50,this.maxNumber=100,this.unit="%",this.url="",this.textcolor="#888888",this.chartcolor="#ff2222",this.size=200,this.fontsize=60,this.chartFontSize="0",this.indicatorPath="",this.prefix="",this.sizeParam=""}static get is(){return"lablup-piechart"}static get styles(){return[r,n,a`
        #chart {
          cursor: pointer;
        }
      `]}firstUpdated(){this.sizeParam=this.size+"px";let e=this.fontsize/this.size;e>=.5&&(e=.3),this.chartFontSize=e.toString();let t=this.shadowRoot.querySelector("#chart"),i=this.shadowRoot.querySelector("#chart-text"),s=this.shadowRoot.querySelector("#unit-text"),r=(.3-.05*this.unit.length).toString();t.setAttribute("fill",this.chartcolor),i.setAttribute("fill",this.textcolor),i.setAttribute("font-size",this.chartFontSize),s.setAttribute("font-size",r),t.setAttribute("width",this.sizeParam),t.setAttribute("height",this.sizeParam),this.indicatorPath="M 0.5 0.5 L0.5 0 ";var n=100*(this.maxNumber-this.currentNumber)/this.maxNumber;n>12.5&&(this.indicatorPath=this.indicatorPath+"L1 0 "),n>37.5&&(this.indicatorPath=this.indicatorPath+"L1 1 "),n>62.5&&(this.indicatorPath=this.indicatorPath+"L0 1 "),n>87.5&&(this.indicatorPath=this.indicatorPath+"L0 0 ");let a=n/100*2*Math.PI,o=Math.sin(a)/Math.cos(a),l=0,c=0;n<=12.5||n>87.5?(c=.5,l=c*o):n>12.5&&n<=37.5?(l=.5,c=l/o):n>37.5&&n<=62.5?(c=-.5,l=c*o):n>62.5&&n<=87.5&&(l=-.5,c=l/o),l+=.5,c=.5-c,this.indicatorPath=this.indicatorPath+"L"+l+" "+c+" z",this.shadowRoot.querySelector("#pievalue").setAttribute("d",this.indicatorPath),void 0!==this.url&&""!==this.url&&this.shadowRoot.querySelector("#chart").addEventListener("tap",this._moveTo.bind(this)),this.requestUpdate()}connectedCallback(){super.connectedCallback()}_moveTo(){window.location.href=this.url}render(){return o`
      <svg id="chart"
           xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
           viewBox="0 0 1 1" style="background-color:transparent;">
        <g id="piechart">
          <circle cx="0.5" cy="0.5" r="0.5" />
          <circle cx="0.5" cy="0.5" r="0.40" fill="rgba(255,255,255,0.9)"/>
          <path id="pievalue" stroke="none" fill="rgba(255, 255, 255, 0.75)"/>
          <text id="chart-text" x="0.5" y="0.5" font-family="Roboto" text-anchor="middle"
                dy="0.1">
            <tspan>${this.prefix}</tspan>
            <tspan>${this.currentNumber}</tspan>
            <tspan id="unit-text" font-size="0.2" dy="-0.07">${this.unit}</tspan>
          </text>
        </g>
      </svg>
    `}};e([t({type:Number})],_.prototype,"currentNumber",void 0),e([t({type:Number})],_.prototype,"maxNumber",void 0),e([t({type:String})],_.prototype,"unit",void 0),e([t({type:String})],_.prototype,"url",void 0),e([t({type:String})],_.prototype,"textcolor",void 0),e([t({type:String})],_.prototype,"chartcolor",void 0),e([t({type:Number})],_.prototype,"size",void 0),e([t({type:Number})],_.prototype,"fontsize",void 0),e([t({type:String})],_.prototype,"chartFontSize",void 0),e([t({type:String})],_.prototype,"indicatorPath",void 0),e([t({type:String})],_.prototype,"prefix",void 0),e([t({type:String})],_.prototype,"sizeParam",void 0),_=e([i("lablup-piechart")],_);var y=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}));y.defaults,y.getDefaults,y.changeDefaults;const k=/[&<>"']/,v=/[&<>"']/g,x=/[<>"']|&(?!#?\w+;)/,w=/[<>"']|&(?!#?\w+;)/g,$={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},z=e=>$[e];const S=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function T(e){return e.replace(S,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const A=/(^|[^\[])\^/g;const R=/[^\w:]/g,C=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const N={},I=/^[^:]+:\/*[^/]*$/,j=/^([^:]+:)[\s\S]*$/,U=/^([^:]+:\/*[^/]*)[\s\S]*$/;function P(e,t){N[" "+e]||(I.test(e)?N[" "+e]=e+"/":N[" "+e]=q(e,"/",!0));const i=-1===(e=N[" "+e]).indexOf(":");return"//"===t.substring(0,2)?i?t:e.replace(j,"$1")+t:"/"===t.charAt(0)?i?t:e.replace(U,"$1")+t:e+t}function q(e,t,i){const s=e.length;if(0===s)return"";let r=0;for(;r<s;){const n=e.charAt(s-r-1);if(n!==t||i){if(n===t||!i)break;r++}else r++}return e.substr(0,s-r)}var O={escape:function(e,t){if(t){if(k.test(e))return e.replace(v,z)}else if(x.test(e))return e.replace(w,z);return e},unescape:T,edit:function(e,t){e=e.source||e,t=t||"";const i={replace:(t,s)=>(s=(s=s.source||s).replace(A,"$1"),e=e.replace(t,s),i),getRegex:()=>new RegExp(e,t)};return i},cleanUrl:function(e,t,i){if(e){let e;try{e=decodeURIComponent(T(i)).replace(R,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!C.test(i)&&(i=P(t,i));try{i=encodeURI(i).replace(/%25/g,"%")}catch(e){return null}return i},resolveUrl:P,noopTest:{exec:function(){}},merge:function(e){let t,i,s=1;for(;s<arguments.length;s++)for(i in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},splitCells:function(e,t){const i=e.replace(/\|/g,(e,t,i)=>{let s=!1,r=t;for(;--r>=0&&"\\"===i[r];)s=!s;return s?"|":" |"}).split(/ \|/);let s=0;if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(/\\\|/g,"|");return i},rtrim:q,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const i=e.length;let s=0,r=0;for(;r<i;r++)if("\\"===e[r])r++;else if(e[r]===t[0])s++;else if(e[r]===t[1]&&(s--,s<0))return r;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}};const{defaults:E}=y,{rtrim:L,splitCells:B,escape:F,findClosingBracket:Z}=O;function D(e,t,i){const s=t.href,r=t.title?F(t.title):null;return"!"!==e[0].charAt(0)?{type:"link",raw:i,href:s,title:r,text:e[1]}:{type:"image",raw:i,text:F(e[1]),href:s,title:r}}var V=class{constructor(e){this.options=e||E}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}}code(e,t){const i=this.rules.block.code.exec(e);if(i){const e=t[t.length-1];if(e&&"paragraph"===e.type)return{raw:i[0],text:i[0].trimRight()};const s=i[0].replace(/^ {4}/gm,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?s:L(s,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],i=function(e,t){const i=e.match(/^(\s+)(?:```)/);if(null===i)return t;const s=i[1];return t.split("\n").map(e=>{const t=e.match(/^\s+/);if(null===t)return e;const[i]=t;return i.length>=s.length?e.slice(s.length):e}).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[1].length,text:t[2]}}nptable(e){const t=this.rules.block.nptable.exec(e);if(t){const e={type:"table",header:B(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(e.header.length===e.align.length){let t,i=e.align.length;for(t=0;t<i;t++)/^ *-+: *$/.test(e.align[t])?e.align[t]="right":/^ *:-+: *$/.test(e.align[t])?e.align[t]="center":/^ *:-+ *$/.test(e.align[t])?e.align[t]="left":e.align[t]=null;for(i=e.cells.length,t=0;t<i;t++)e.cells[t]=B(e.cells[t],e.header.length);return e}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:e}}}list(e){const t=this.rules.block.list.exec(e);if(t){let e=t[0];const i=t[2],s=i.length>1,r={type:"list",raw:e,ordered:s,start:s?+i:"",loose:!1,items:[]},n=t[0].match(this.rules.block.item);let a,o,l,c,h,p,u,d=!1;const g=n.length;for(let t=0;t<g;t++)a=n[t],e=a,o=a.length,a=a.replace(/^ *([*+-]|\d+\.) */,""),~a.indexOf("\n ")&&(o-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+o+"}","gm"),"")),t!==g-1&&(l=this.rules.block.bullet.exec(n[t+1])[0],(i.length>1?1===l.length:l.length>1||this.options.smartLists&&l!==i)&&(c=n.slice(t+1).join("\n"),r.raw=r.raw.substring(0,r.raw.length-c.length),t=g-1)),h=d||/\n\n(?!\s*$)/.test(a),t!==g-1&&(d="\n"===a.charAt(a.length-1),h||(h=d)),h&&(r.loose=!0),p=/^\[[ xX]\] /.test(a),u=void 0,p&&(u=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),r.items.push({type:"list_item",raw:e,task:p,checked:u,loose:h,text:a});return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):F(t[0]):t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));return{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:B(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let i,s=e.align.length;for(i=0;i<s;i++)/^ *-+: *$/.test(e.align[i])?e.align[i]="right":/^ *:-+: *$/.test(e.align[i])?e.align[i]="center":/^ *:-+ *$/.test(e.align[i])?e.align[i]="left":e.align[i]=null;for(s=e.cells.length,i=0;i<s;i++)e.cells[i]=B(e.cells[i].replace(/^ *\| *| *\| *$/g,""),e.header.length);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}}text(e,t){const i=this.rules.block.text.exec(e);if(i){const e=t[t.length-1];return e&&"text"===e.type?{raw:i[0],text:i[0]}:{type:"text",raw:i[0],text:i[0]}}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:F(t[1])}}tag(e,t,i){const s=this.rules.inline.tag.exec(e);if(s)return!t&&/^<a /i.test(s[0])?t=!0:t&&/^<\/a>/i.test(s[0])&&(t=!1),!i&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?i=!0:i&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(i=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:t,inRawBlock:i,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):F(s[0]):s[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=Z(t[2],"()");if(e>-1){const i=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,i).trim(),t[3]=""}let i=t[2],s="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);e?(i=e[1],s=e[3]):s=""}else s=t[3]?t[3].slice(1,-1):"";i=i.trim().replace(/^<([\s\S]*)>$/,"$1");return D(t,{href:i?i.replace(this.rules.inline._escapes,"$1"):i,title:s?s.replace(this.rules.inline._escapes,"$1"):s},t[0])}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let e=(i[2]||i[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=i[0].charAt(0);return{type:"text",raw:e,text:e}}return D(i,e,i[0])}}strong(e){const t=this.rules.inline.strong.exec(e);if(t)return{type:"strong",raw:t[0],text:t[4]||t[3]||t[2]||t[1]}}em(e){const t=this.rules.inline.em.exec(e);if(t)return{type:"em",raw:t[0],text:t[6]||t[5]||t[4]||t[3]||t[2]||t[1]}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const i=/[^ ]/.test(e),s=e.startsWith(" ")&&e.endsWith(" ");return i&&s&&(e=e.substring(1,e.length-1)),e=F(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[1]}}autolink(e,t){const i=this.rules.inline.autolink.exec(e);if(i){let e,s;return"@"===i[2]?(e=F(this.options.mangle?t(i[1]):i[1]),s="mailto:"+e):(e=F(i[1]),s=e),{type:"link",raw:i[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let i;if(i=this.rules.inline.url.exec(e)){let e,s;if("@"===i[2])e=F(this.options.mangle?t(i[0]):i[0]),s="mailto:"+e;else{let t;do{t=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0]}while(t!==i[0]);e=F(i[0]),s="www."===i[1]?"http://"+e:e}return{type:"link",raw:i[0],text:e,href:s,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t,i){const s=this.rules.inline.text.exec(e);if(s){let e;return e=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):F(s[0]):s[0]:F(this.options.smartypants?i(s[0]):s[0]),{type:"text",raw:s[0],text:e}}}};const{noopTest:M,edit:G,merge:W}=O,H={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:M,table:M,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};H.def=G(H.def).replace("label",H._label).replace("title",H._title).getRegex(),H.bullet=/(?:[*+-]|\d{1,9}\.)/,H.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,H.item=G(H.item,"gm").replace(/bull/g,H.bullet).getRegex(),H.list=G(H.list).replace(/bull/g,H.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+H.def.source+")").getRegex(),H._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",H._comment=/<!--(?!-?>)[\s\S]*?-->/,H.html=G(H.html,"i").replace("comment",H._comment).replace("tag",H._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),H.paragraph=G(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",H._tag).getRegex(),H.blockquote=G(H.blockquote).replace("paragraph",H.paragraph).getRegex(),H.normal=W({},H),H.gfm=W({},H.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),H.gfm.nptable=G(H.gfm.nptable).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",H._tag).getRegex(),H.gfm.table=G(H.gfm.table).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",H._tag).getRegex(),H.pedantic=W({},H.normal,{html:G("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",H._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:M,paragraph:G(H.normal._paragraph).replace("hr",H.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",H.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const K={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:M,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\s,punctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\s,punctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:M,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+\\-./:;<=>?@\\[^_{|}~"};K.em=G(K.em).replace(/punctuation/g,K._punctuation).getRegex(),K._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,K._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,K._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,K.autolink=G(K.autolink).replace("scheme",K._scheme).replace("email",K._email).getRegex(),K._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,K.tag=G(K.tag).replace("comment",H._comment).replace("attribute",K._attribute).getRegex(),K._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,K._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,K._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,K.link=G(K.link).replace("label",K._label).replace("href",K._href).replace("title",K._title).getRegex(),K.reflink=G(K.reflink).replace("label",K._label).getRegex(),K.normal=W({},K),K.pedantic=W({},K.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:G(/^!?\[(label)\]\((.*?)\)/).replace("label",K._label).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",K._label).getRegex()}),K.gfm=W({},K.normal,{escape:G(K.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),K.gfm.url=G(K.gfm.url,"i").replace("email",K.gfm._extended_email).getRegex(),K.breaks=W({},K.gfm,{br:G(K.br).replace("{2,}","*").getRegex(),text:G(K.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var X={block:H,inline:K};const{defaults:Y}=y,{block:J,inline:Q}=X;function ee(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function te(e){let t,i,s="";const r=e.length;for(t=0;t<r;t++)i=e.charCodeAt(t),Math.random()>.5&&(i="x"+i.toString(16)),s+="&#"+i+";";return s}var ie=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Y,this.options.tokenizer=this.options.tokenizer||new V,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const t={block:J.normal,inline:Q.normal};this.options.pedantic?(t.block=J.pedantic,t.inline=Q.pedantic):this.options.gfm&&(t.block=J.gfm,this.options.breaks?t.inline=Q.breaks:t.inline=Q.gfm),this.tokenizer.rules=t}static get rules(){return{block:J,inline:Q}}static lex(t,i){return new e(i).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(e,t=[],i=!0){let s,r,n,a;for(e=e.replace(/^ +$/gm,"");e;)if(s=this.tokenizer.space(e))e=e.substring(s.raw.length),s.type&&t.push(s);else if(s=this.tokenizer.code(e,t))e=e.substring(s.raw.length),s.type?t.push(s):(a=t[t.length-1],a.raw+="\n"+s.raw,a.text+="\n"+s.text);else if(s=this.tokenizer.fences(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.heading(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.nptable(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.hr(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.blockquote(e))e=e.substring(s.raw.length),s.tokens=this.blockTokens(s.text,[],i),t.push(s);else if(s=this.tokenizer.list(e)){for(e=e.substring(s.raw.length),n=s.items.length,r=0;r<n;r++)s.items[r].tokens=this.blockTokens(s.items[r].text,[],!1);t.push(s)}else if(s=this.tokenizer.html(e))e=e.substring(s.raw.length),t.push(s);else if(i&&(s=this.tokenizer.def(e)))e=e.substring(s.raw.length),this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});else if(s=this.tokenizer.table(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.lheading(e))e=e.substring(s.raw.length),t.push(s);else if(i&&(s=this.tokenizer.paragraph(e)))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.text(e,t))e=e.substring(s.raw.length),s.type?t.push(s):(a=t[t.length-1],a.raw+="\n"+s.raw,a.text+="\n"+s.text);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}return t}inline(e){let t,i,s,r,n,a;const o=e.length;for(t=0;t<o;t++)switch(a=e[t],a.type){case"paragraph":case"text":case"heading":a.tokens=[],this.inlineTokens(a.text,a.tokens);break;case"table":for(a.tokens={header:[],cells:[]},r=a.header.length,i=0;i<r;i++)a.tokens.header[i]=[],this.inlineTokens(a.header[i],a.tokens.header[i]);for(r=a.cells.length,i=0;i<r;i++)for(n=a.cells[i],a.tokens.cells[i]=[],s=0;s<n.length;s++)a.tokens.cells[i][s]=[],this.inlineTokens(n[s],a.tokens.cells[i][s]);break;case"blockquote":this.inline(a.tokens);break;case"list":for(r=a.items.length,i=0;i<r;i++)this.inline(a.items[i].tokens)}return e}inlineTokens(e,t=[],i=!1,s=!1){let r;for(;e;)if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e,i,s))e=e.substring(r.raw.length),i=r.inLink,s=r.inRawBlock,t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,s)),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,s)),t.push(r);else if(r=this.tokenizer.strong(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],i,s),t.push(r);else if(r=this.tokenizer.em(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],i,s),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],i,s),t.push(r);else if(r=this.tokenizer.autolink(e,te))e=e.substring(r.raw.length),t.push(r);else if(i||!(r=this.tokenizer.url(e,te))){if(r=this.tokenizer.inlineText(e,s,ee))e=e.substring(r.raw.length),t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(r.raw.length),t.push(r);return t}};const{defaults:se}=y,{cleanUrl:re,escape:ne}=O;var ae=class{constructor(e){this.options=e||se}code(e,t,i){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,s);null!=t&&t!==e&&(i=!0,e=t)}return s?'<pre><code class="'+this.options.langPrefix+ne(s,!0)+'">'+(i?e:ne(e,!0))+"</code></pre>\n":"<pre><code>"+(i?e:ne(e,!0))+"</code></pre>\n"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,i,s){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+s.slug(i)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,i){const s=t?"ol":"ul";return"<"+s+(t&&1!==i?' start="'+i+'"':"")+">\n"+e+"</"+s+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const i=t.header?"th":"td";return(t.align?"<"+i+' align="'+t.align+'">':"<"+i+">")+e+"</"+i+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,i){if(null===(e=re(this.options.sanitize,this.options.baseUrl,e)))return i;let s='<a href="'+ne(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+i+"</a>",s}image(e,t,i){if(null===(e=re(this.options.sanitize,this.options.baseUrl,e)))return i;let s='<img src="'+e+'" alt="'+i+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">",s}text(e){return e}},oe=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,i){return""+i}image(e,t,i){return""+i}br(){return""}},le=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}};const{defaults:ce}=y,{unescape:he}=O;var pe=class e{constructor(e){this.options=e||ce,this.options.renderer=this.options.renderer||new ae,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new oe,this.slugger=new le}static parse(t,i){return new e(i).parse(t)}parse(e,t=!0){let i,s,r,n,a,o,l,c,h,p,u,d,g,m,b,f,_,y,k="";const v=e.length;for(i=0;i<v;i++)switch(p=e[i],p.type){case"space":continue;case"hr":k+=this.renderer.hr();continue;case"heading":k+=this.renderer.heading(this.parseInline(p.tokens),p.depth,he(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":k+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",l="",n=p.header.length,s=0;s<n;s++)l+=this.renderer.tablecell(this.parseInline(p.tokens.header[s]),{header:!0,align:p.align[s]});for(c+=this.renderer.tablerow(l),h="",n=p.cells.length,s=0;s<n;s++){for(o=p.tokens.cells[s],l="",a=o.length,r=0;r<a;r++)l+=this.renderer.tablecell(this.parseInline(o[r]),{header:!1,align:p.align[r]});h+=this.renderer.tablerow(l)}k+=this.renderer.table(c,h);continue;case"blockquote":h=this.parse(p.tokens),k+=this.renderer.blockquote(h);continue;case"list":for(u=p.ordered,d=p.start,g=p.loose,n=p.items.length,h="",s=0;s<n;s++)b=p.items[s],f=b.checked,_=b.task,m="",b.task&&(y=this.renderer.checkbox(f),g?b.tokens.length>0&&"text"===b.tokens[0].type?(b.tokens[0].text=y+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&"text"===b.tokens[0].tokens[0].type&&(b.tokens[0].tokens[0].text=y+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:y}):m+=y),m+=this.parse(b.tokens,g),h+=this.renderer.listitem(m,_,f);k+=this.renderer.list(h,u,d);continue;case"html":k+=this.renderer.html(p.text);continue;case"paragraph":k+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(h=p.tokens?this.parseInline(p.tokens):p.text;i+1<v&&"text"===e[i+1].type;)p=e[++i],h+="\n"+(p.tokens?this.parseInline(p.tokens):p.text);k+=t?this.renderer.paragraph(h):h;continue;default:{const e='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return k}parseInline(e,t){t=t||this.renderer;let i,s,r="";const n=e.length;for(i=0;i<n;i++)switch(s=e[i],s.type){case"escape":r+=t.text(s.text);break;case"html":r+=t.html(s.text);break;case"link":r+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break;case"image":r+=t.image(s.href,s.title,s.text);break;case"strong":r+=t.strong(this.parseInline(s.tokens,t));break;case"em":r+=t.em(this.parseInline(s.tokens,t));break;case"codespan":r+=t.codespan(s.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(s.tokens,t));break;case"text":r+=t.text(s.text);break;default:{const e='Token with "'+s.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return r}};const{merge:ue,checkSanitizeDeprecation:de,escape:ge}=O,{getDefaults:me,changeDefaults:be,defaults:fe}=y;function _e(e,t,i){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(i=t,t=null),t=ue({},_e.defaults,t||{}),de(t),i){const s=t.highlight;let r;try{r=ie.lex(e,t)}catch(e){return i(e)}const n=function(e){let n;if(!e)try{n=pe.parse(r,t)}catch(t){e=t}return t.highlight=s,e?i(e):i(null,n)};if(!s||s.length<3)return n();if(delete t.highlight,!r.length)return n();let a=0;return _e.walkTokens(r,(function(e){"code"===e.type&&(a++,s(e.text,e.lang,(function(t,i){if(t)return n(t);null!=i&&i!==e.text&&(e.text=i,e.escaped=!0),a--,0===a&&n()})))})),void(0===a&&n())}try{const i=ie.lex(e,t);return t.walkTokens&&_e.walkTokens(i,t.walkTokens),pe.parse(i,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+ge(e.message+"",!0)+"</pre>";throw e}}_e.options=_e.setOptions=function(e){return ue(_e.defaults,e),be(_e.defaults),_e},_e.getDefaults=me,_e.defaults=fe,_e.use=function(e){const t=ue({},e);if(e.renderer){const i=_e.defaults.renderer||new ae;for(const t in e.renderer){const s=i[t];i[t]=(...r)=>{let n=e.renderer[t].apply(i,r);return!1===n&&(n=s.apply(i,r)),n}}t.renderer=i}if(e.tokenizer){const i=_e.defaults.tokenizer||new V;for(const t in e.tokenizer){const s=i[t];i[t]=(...r)=>{let n=e.tokenizer[t].apply(i,r);return!1===n&&(n=s.apply(i,r)),n}}t.tokenizer=i}if(e.walkTokens){const i=_e.defaults.walkTokens;t.walkTokens=t=>{e.walkTokens(t),i&&i(t)}}_e.setOptions(t)},_e.walkTokens=function(e,t){for(const i of e)switch(t(i),i.type){case"table":for(const e of i.tokens.header)_e.walkTokens(e,t);for(const e of i.tokens.cells)for(const i of e)_e.walkTokens(i,t);break;case"list":_e.walkTokens(i.items,t);break;default:i.tokens&&_e.walkTokens(i.tokens,t)}},_e.Parser=pe,_e.parser=pe.parse,_e.Renderer=ae,_e.TextRenderer=oe,_e.Lexer=ie,_e.lexer=ie.lex,_e.Tokenizer=V,_e.Slugger=le,_e.parse=_e;var ye=_e;
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */let ke=class extends c{constructor(){super(),this.condition="running",this.sessions=0,this.jobs=Object(),this.agents=0,this.is_admin=!1,this.is_superadmin=!1,this.resources=Object(),this.update_checker=Object(),this.authenticated=!1,this.manager_version="",this.console_version="",this.cpu_total=0,this.cpu_used=0,this.cpu_percent="0",this.cpu_total_percent="0",this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total="0",this.mem_used="0",this.mem_allocated="0",this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.cuda_gpu_total=0,this.cuda_gpu_used=0,this.cuda_fgpu_total=0,this.cuda_fgpu_used=0,this.rocm_gpu_total=0,this.rocm_gpu_used=0,this.tpu_total=0,this.tpu_used=0,this.spinner=Object(),this.notification=Object(),this.announcement="",this.invitations=[]}static get styles(){return[h,r,n,p,a`
        ul {
          padding-left: 0;
        }

        ul li {
          list-style: none;
          font-size: 14px;
        }

        li:before {
          padding: 3px;
          transform: rotate(-45deg) translateY(-2px);
          transition: color ease-in .2s;
          border: solid;
          border-width: 0 2px 2px 0;
          border-color: #242424;
          margin-right: 10px;
          content: '';
          display: inline-block;
        }

        span.indicator {
          width: 100px;
        }

        div.big.indicator {
          font-size: 48px;
        }

        a,
        a:visited {
          color: #222222;
        }

        a:hover {
          color: #3e872d;
        }

        mwc-linear-progress {
          width: 190px;
          height: 5px;
          border-radius: 0;
          --mdc-theme-primary: #3677eb;
        }

        mwc-linear-progress.start-bar {
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          --mdc-theme-primary: #3677eb;
        }

        mwc-linear-progress.end-bar {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
          --mdc-theme-primary: #98be5a;
        }

        wl-button[class*="green"] {
          --button-bg: var(--paper-light-green-50);
          --button-bg-hover: var(--paper-green-100);
          --button-bg-active: var(--paper-green-600);
        }

        wl-button[class*="red"] {
          --button-bg: var(--paper-red-50);
          --button-bg-hover: var(--paper-red-100);
          --button-bg-active: var(--paper-red-600);
        }

        wl-icon {
          --icon-size: 24px;
        }

        .invitation_folder_name {
          font-size: 13px;
        }

        mwc-icon-button.update-button {
          --mdc-icon-size: 16px;
          --mdc-icon-button-size: 24px;
          color: red;
        }

        mwc-icon.update-icon {
          --mdc-icon-size: 16px;
          --mdc-icon-button-size: 24px;
          color: black;
        }

        img.resource-type-icon {
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }

        .system-health-indicator {
          width: 90px;
        }
      `]}firstUpdated(){this.spinner=this.shadowRoot.querySelector("#loading-spinner"),this.notification=globalThis.lablupNotification,this.update_checker=this.shadowRoot.querySelector("#update-checker"),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this._readAnnouncement()},!0):this._readAnnouncement()}_refreshHealthPanel(){this.activeConnected&&(this._refreshSessionInformation(),this.is_superadmin&&this._refreshAgentInformation())}_refreshSessionInformation(){if(!this.activeConnected)return;this.spinner.show();let e="RUNNING";switch(this.condition){case"running":e="RUNNING";break;case"finished":e="TERMINATED";break;case"archived":default:e="RUNNING"}globalThis.backendaiclient.computeSession.list(["created_at"],e).then(e=>{this.spinner.hide(),this.jobs=e,this.sessions=e.compute_session_list.total_count,this.active&&setTimeout(()=>{this._refreshSessionInformation()},15e3)}).catch(e=>{this.spinner.hide(),this.jobs=[],this.sessions=0,this.notification.text=u.relieve("Couldn't connect to manager."),this.notification.detail=e,this.notification.show(!0,e)})}_refreshConsoleUpdateInformation(){this.is_superadmin&&globalThis.backendaioptions.get("automatic_update_check",!0)&&this.update_checker.checkRelease()}_refreshResourceInformation(){if(this.activeConnected)return globalThis.backendaiclient.resourcePolicy.get(globalThis.backendaiclient.resource_policy).then(e=>{let t=e.keypair_resource_policies;this.resourcePolicy=globalThis.backendaiclient.utils.gqlToObject(t,"name")})}_refreshAgentInformation(e="running"){if(this.activeConnected){switch(this.condition){case"running":e="ALIVE";break;case"finished":e="TERMINATED";break;case"archived":default:e="ALIVE"}this.spinner.show(),globalThis.backendaiclient.resources.totalResourceInformation().then(t=>{this.spinner.hide(),this.resources=t,this._sync_resource_values(),1==this.active&&setTimeout(()=>{this._refreshAgentInformation(e)},15e3)}).catch(e=>{this.spinner.hide(),e&&e.message&&(this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}}_init_resource_values(){this.resources.cpu={},this.resources.cpu.total=0,this.resources.cpu.used=0,this.resources.cpu.percent=0,this.resources.mem={},this.resources.mem.total=0,this.resources.mem.allocated=0,this.resources.mem.used=0,this.resources.cuda_gpu={},this.resources.cuda_gpu.total=0,this.resources.cuda_gpu.used=0,this.resources.cuda_fgpu={},this.resources.cuda_fgpu.total=0,this.resources.cuda_fgpu.used=0,this.resources.agents={},this.resources.agents.total=0,this.resources.agents.using=0,this.cpu_total_usage_ratio=0,this.cpu_current_usage_ratio=0,this.mem_total_usage_ratio=0,this.mem_current_usage_ratio=0,this.mem_current_usage_percent="0",this.is_admin=!1,this.is_superadmin=!1}_sync_resource_values(){this.manager_version=globalThis.backendaiclient.managerVersion,this.console_version=globalThis.packageVersion,this.cpu_total=this.resources.cpu.total,this.mem_total=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.total,"g")).toFixed(2),isNaN(this.resources["cuda.device"].total)?this.cuda_gpu_total=0:this.cuda_gpu_total=this.resources["cuda.device"].total,isNaN(this.resources["cuda.shares"].total)?this.cuda_fgpu_total=0:this.cuda_fgpu_total=this.resources["cuda.shares"].total,this.cpu_used=this.resources.cpu.used,this.cuda_gpu_used=this.resources["cuda.device"].used,this.cuda_fgpu_used=this.resources["cuda.shares"].used,this.cpu_percent=parseFloat(this.resources.cpu.percent).toFixed(2),this.cpu_total_percent=(parseFloat(this.resources.cpu.percent)/(100*this.cpu_total)*100).toFixed(2),this.cpu_total_usage_ratio=this.resources.cpu.used/this.resources.cpu.total*100,this.cpu_current_usage_ratio=this.resources.cpu.percent/this.resources.cpu.total,this.mem_used=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.used,"g")).toFixed(2),this.mem_allocated=parseFloat(globalThis.backendaiclient.utils.changeBinaryUnit(this.resources.mem.allocated,"g")).toFixed(2),this.mem_total_usage_ratio=this.resources.mem.allocated/this.resources.mem.total*100,this.mem_current_usage_ratio=this.resources.mem.used/this.resources.mem.total*100,0===this.mem_total_usage_ratio?this.mem_current_usage_percent="0.0":this.mem_current_usage_percent=this.mem_total_usage_ratio.toFixed(2),this.agents=this.resources.agents.total,isNaN(parseFloat(this.mem_current_usage_percent))&&(this.mem_current_usage_percent="0")}async _viewStateChanged(e){await this.updateComplete,!1!==e?(this.shadowRoot.querySelector("#resource-monitor").setAttribute("active","true"),this._init_resource_values(),void 0===globalThis.backendaiclient||null===globalThis.backendaiclient||!1===globalThis.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this.activeConnected&&(this._refreshConsoleUpdateInformation(),this._refreshHealthPanel(),this._refreshInvitations(),this.requestUpdate())},!0):(this.is_superadmin=globalThis.backendaiclient.is_superadmin,this.is_admin=globalThis.backendaiclient.is_admin,this.authenticated=!0,this._refreshConsoleUpdateInformation(),this._refreshHealthPanel(),this._refreshInvitations(),this.requestUpdate())):this.shadowRoot.querySelector("#resource-monitor").removeAttribute("active")}_readAnnouncement(){this.activeConnected&&globalThis.backendaiclient.service.get_announcement().then(e=>{"message"in e&&(this.announcement=ye(e.message))}).catch(e=>{})}_toInt(e){return Math.ceil(e)}_countObject(e){return Object.keys(e).length}_addComma(e){if(void 0===e)return"";return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}_refreshInvitations(e=!1){this.activeConnected&&globalThis.backendaiclient.vfolder.invitations().then(t=>{this.invitations=t.invitations,this.active&&!e&&setTimeout(()=>{this._refreshInvitations()},15e3)})}_acceptInvitation(e,t){if(!this.activeConnected)return;let i=e.target.closest("lablup-activity-panel");globalThis.backendaiclient.vfolder.accept_invitation(t.id).then(e=>{i.setAttribute("disabled","true"),i.querySelectorAll("wl-button").forEach(e=>{e.setAttribute("disabled","true")}),this.notification.text="You can now access folder: "+t.vfolder_name,this.notification.show(),this._refreshInvitations(!0)}).catch(e=>{this.notification.text=u.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e)})}_deleteInvitation(e,t){if(!this.activeConnected)return;let i=e.target.closest("lablup-activity-panel");globalThis.backendaiclient.vfolder.delete_invitation(t.id).then(e=>{i.setAttribute("disabled","true"),i.querySelectorAll("wl-button").forEach(e=>{e.setAttribute("disabled","true")}),this.notification.text="Folder invitation is deleted: "+t.vfolder_name,this.notification.show(),this._refreshInvitations(!0)})}render(){return o`
      <lablup-loading-spinner id="loading-spinner"></lablup-loading-spinner>
      <wl-card class="item" elevation="1" style="padding-bottom:20px;">
        <h3 class="plastic-material-title">${d("summary.Dashboard")}</h3>
        <div class="horizontal wrap layout">
          <lablup-activity-panel title="${d("summary.StartMenu")}" elevation="1">
            <div slot="message">
              <div class="horizontal justified layout wrap">
                <backend-ai-resource-monitor location="summary" id="resource-monitor" ?active="${!0===this.active}" direction="vertical"></backend-ai-resource-monitor>
              </div>
            </div>
          </lablup-activity-panel>
          <lablup-activity-panel title="${d("summary.ResourceStatistics")}" elevation="1">
            <div slot="message">
              <div class="horizontal justified layout wrap">
                ${this.is_superadmin?o`
                  <div class="vertical layout center system-health-indicator">
                    <div class="big indicator">${this.agents}</div>
                    <span>${m("summary.ConnectedNodes")}</span>
                  </div>`:o``}
                <div class="vertical layout center system-health-indicator">
                  <div class="big indicator">${this.sessions}</div>
                  <span>${d("summary.ActiveSessions")}</span>
                </div>
              </div>
              ${this.is_superadmin?o`
              <div class="layout horizontal center flex" style="margin-top:15px;margin-bottom:5px;">
                <div class="layout vertical start center-justified">
                  <wl-icon class="fg green">developer_board</wl-icon>
                  <span>CPU</span>
                </div>
                <div class="layout vertical start" style="padding-left:15px;">
                  <mwc-linear-progress class="mem-usage-bar start-bar" progress="${this.cpu_total_usage_ratio/100}"></mwc-linear-progress>
                  <mwc-linear-progress class="mem-usage-bar end-bar" id="cpu-usage-bar"
                    progress="${this.cpu_current_usage_ratio/100}"
                    buffer="${this.cpu_current_usage_ratio/100}"></mwc-linear-progress>
                  <div><span class="progress-value"> ${this._addComma(this.cpu_used)}</span>/${this._addComma(this.cpu_total)}
                    ${d("summary.CoresReserved")}.
                  </div>
                  <div>${d("summary.Using")} <span class="progress-value"> ${this.cpu_total_percent}</span>% (util. ${this.cpu_percent} %)
                  </div>
                </div>
              </div>
              <div class="layout horizontal center flex" style="margin-bottom:5px;">
                <div class="layout vertical start center-justified">
                  <wl-icon class="fg green">memory</wl-icon>
                  <span>RAM</span>
                </div>
                <div class="layout vertical start" style="padding-left:15px;">
                  <mwc-linear-progress class="mem-usage-bar start-bar" id="mem-usage-bar" progress="${this.mem_total_usage_ratio/100}"></mwc-linear-progress>
                  <mwc-linear-progress class="mem-usage-bar end-bar"
                    progress="${this.mem_current_usage_ratio/100}"
                    buffer="${this.mem_current_usage_ratio/100}"></mwc-linear-progress>
                  <div><span class="progress-value"> ${this._addComma(this.mem_allocated)}</span>/${this._addComma(this.mem_total)} GB
                    ${d("summary.reserved")}.
                  </div>
                  <div>${d("summary.Using")} <span class="progress-value"> ${this._addComma(this.mem_used)}</span> GB
                    (${this.mem_current_usage_percent} %)
                  </div>
                </div>
              </div>
              ${this.cuda_gpu_total||this.cuda_fgpu_total||this.rocm_gpu_total||this.tpu_total?o`
              <div class="layout horizontal center flex" style="margin-bottom:5px;">
                <div class="layout vertical start center-justified">
                  <wl-icon class="fg green">view_module</wl-icon>
                  <span>GPU</span>
                </div>
                <div class="layout vertical start" style="padding-left:15px;">
                ${this.cuda_gpu_total?o`
                  <mwc-linear-progress id="gpu-bar"
                    progress="${this.cuda_gpu_used/this.cuda_gpu_total}"></mwc-linear-progress>
                  <div class="horizontal center layout">
                    <img class="resource-type-icon fg green" src="/resources/icons/file_type_cuda.svg" />
                    <div>
                      <div><span class="progress-value"> ${this.cuda_gpu_used}</span>/${this.cuda_gpu_total} CUDA GPUs</div>
                    </div>
                  </div>
                `:o``}
                ${this.cuda_fgpu_total?o`
                  <mwc-linear-progress id="vgpu-bar"
                    progress="${this.cuda_fgpu_used/this.cuda_fgpu_total}"
                    buffer="${this.cuda_fgpu_used/this.cuda_fgpu_total}"></mwc-linear-progress>
                  <div class="horizontal center layout">
                    <img class="resource-type-icon fg green" src="/resources/icons/file_type_cuda.svg" />
                    <div>
                      <div><span class="progress-value"> ${this.cuda_fgpu_used}</span>/${this.cuda_fgpu_total} CUDA fGPUs</div>
                      <div><span class="progress-value">${d("summary.FractionalGPUScalingEnabled")}.</div>
                    </div>
                  </div>
                `:o``}
                ${this.rocm_gpu_total?o`
                  <mwc-linear-progress id="rocm-gpu-bar"
                    progress="${this.rocm_gpu_used/100}"
                    buffer="${this.rocm_gpu_used/100}"></mwc-linear-progress>
                  <div class="horizontal center layout">
                    <img class="resource-type-icon fg green" src="/resources/icons/ROCm.png" />
                    <div>
                      <div><span class="progress-value"> ${this.rocm_gpu_used}</span>/${this.rocm_gpu_total} ROCm GPUs</div>
                    </div>
                  </div>
                `:o``}
                ${this.tpu_total?o`
                  <mwc-linear-progress id="tpu-bar"
                    progress="${this.tpu_used/100}"
                    buffer="${this.tpu_used/100}"></mwc-linear-progress>
                  <div class="horizontal center layout">
                    <img class="resource-type-icon fg green" src="/resources/icons/tpu.svg" />
                    <div>
                      <div><span class="progress-value"> ${this.tpu_used}</span>/${this.tpu_total} TPUs</div>
                    </div>
                  </div>
            `:o``}
                </div>
              </div>`:o``}
              <div class="horizontal center layout">
                <div style="width:10px;height:10px;margin-left:40px;margin-right:3px;background-color:#4775E3;"></div>
                <span style="margin-right:5px;">${d("summary.Reserved")}</span>
                <div style="width:10px;height:10px;margin-right:3px;background-color:#A0BD67"></div>
                <span style="margin-right:5px;">${d("summary.Used")}</span>
                <div style="width:10px;height:10px;margin-right:3px;background-color:#E0E0E0"></div>
                <span>${d("summary.Total")}</span>
              </div>`:o``}
            </div>
          </lablup-activity-panel>
          <lablup-activity-panel title="${d("summary.Shortcut")}" elevation="1">
            <div slot="message">
              <ul>
                <li><a href="/data">${d("summary.UploadFiles")}</a></li>
              </ul>
              <ul>
                <li><a href="/job">${d("summary.StartASession")}</a></li>
              </ul>
              ${this.is_admin?o`
                <ul>
                  <li><a href="/credential">${d("summary.CreateANewKeypair")}</a></li>
                  <li><a href="/credential">${d("summary.MaintainKeypairs")}</a></li>
                </ul>`:o``}
            </div>
          </lablup-activity-panel>
          ${""!=this.announcement?o`
          <lablup-activity-panel title="${d("summary.Announcement")}" elevation="1">
            <div slot="message">
              ${g(this.announcement)}
            </div>
          </lablup-activity-panel>
          `:o``}
      ${this.invitations?this.invitations.map(e=>o`
            <lablup-activity-panel title="${d("summary.Invitation")}">
              <div slot="message">
                <h3>From ${e.inviter}</h3>
                <span class="invitation_folder_name">${d("summary.FolderName")}>: ${e.vfolder_name}</span>
                <div class="horizontal center layout">
                ${d("summary.Permission")}>:
                ${[...e.perm].map(e=>o`
                  <lablup-shields app="" color="${["green","blue","red"][["r","w","d"].indexOf(e)]}"
                            description="${e.toUpperCase()}" ui="flat"></lablup-shields>`)}
                </div>
                <div style="margin-top:25px;" class="horizontal layout justified">
                  <wl-button
                    class="fg green"
                    outlined
                    @click=${t=>this._acceptInvitation(t,e)}
                  >
                    <wl-icon>add</wl-icon>
                    ${d("summary.Accept")}
                  </wl-button>
                  <span class="flex"></span>
                  <wl-button
                    class="fg red"
                    outlined
                    @click=${t=>this._deleteInvitation(t,e)}
                  >
                    <wl-icon>remove</wl-icon>
                    ${d("summary.Decline")}
                  </wl-button>
                </div>
              </div>
            </lablup-activity-panel>
            `):""}
    ${this.is_admin?o`
          <lablup-activity-panel title="${d("summary.Administration")}" elevation="1">
            <div slot="message">
      ${this.is_superadmin?o`
              <div class="layout vertical center start flex" style="margin-bottom:5px;">
                <lablup-shields app="Manager version" color="darkgreen" description="${this.manager_version}" ui="flat"></lablup-shields>
                <div class="layout horizontal center flex" style="margin-top:4px;">
                  <lablup-shields app="Console version" color="${this.update_checker.updateNeeded?"red":"darkgreen"}" description="${this.console_version}" ui="flat"></lablup-shields>
                  ${this.update_checker.updateNeeded?o`
                    <mwc-icon-button class="update-button" icon="new_releases" @click="${()=>{window.open(this.update_checker.updateURL,"_blank")}}"></mwc-icon-button>
                  `:o`
                    <mwc-icon class="update-icon">done</mwc-icon>
                  `}
                </div>
              </div>`:o``}
              <ul>
                <li><a href="/environment">${d("summary.UpdateEnvironmentImages")}</a></li>
                <li><a href="/agent">${d("summary.CheckResources")}</a></li>
      ${this.is_superadmin?o`
                <li><a href="/settings">${d("summary.ChangeSystemSetting")}</a></li>
                <li><a href="/environment">${d("summary.SystemMaintenance")}</a></li>`:o``}
              </ul>
            </div>
          </lablup-activity-panel>`:o``}
        </div>
      </wl-card>
      <backend-ai-release-check id="update-checker"></backend-ai-release-check>
`}};e([t({type:String})],ke.prototype,"condition",void 0),e([t({type:Number})],ke.prototype,"sessions",void 0),e([t({type:Object})],ke.prototype,"jobs",void 0),e([t({type:Number})],ke.prototype,"agents",void 0),e([t({type:Boolean})],ke.prototype,"is_admin",void 0),e([t({type:Boolean})],ke.prototype,"is_superadmin",void 0),e([t({type:Object})],ke.prototype,"resources",void 0),e([t({type:Object})],ke.prototype,"update_checker",void 0),e([t({type:Boolean})],ke.prototype,"authenticated",void 0),e([t({type:String})],ke.prototype,"manager_version",void 0),e([t({type:String})],ke.prototype,"console_version",void 0),e([t({type:Number})],ke.prototype,"cpu_total",void 0),e([t({type:Number})],ke.prototype,"cpu_used",void 0),e([t({type:String})],ke.prototype,"cpu_percent",void 0),e([t({type:String})],ke.prototype,"cpu_total_percent",void 0),e([t({type:Number})],ke.prototype,"cpu_total_usage_ratio",void 0),e([t({type:Number})],ke.prototype,"cpu_current_usage_ratio",void 0),e([t({type:String})],ke.prototype,"mem_total",void 0),e([t({type:String})],ke.prototype,"mem_used",void 0),e([t({type:String})],ke.prototype,"mem_allocated",void 0),e([t({type:Number})],ke.prototype,"mem_total_usage_ratio",void 0),e([t({type:Number})],ke.prototype,"mem_current_usage_ratio",void 0),e([t({type:String})],ke.prototype,"mem_current_usage_percent",void 0),e([t({type:Number})],ke.prototype,"cuda_gpu_total",void 0),e([t({type:Number})],ke.prototype,"cuda_gpu_used",void 0),e([t({type:Number})],ke.prototype,"cuda_fgpu_total",void 0),e([t({type:Number})],ke.prototype,"cuda_fgpu_used",void 0),e([t({type:Number})],ke.prototype,"rocm_gpu_total",void 0),e([t({type:Number})],ke.prototype,"rocm_gpu_used",void 0),e([t({type:Number})],ke.prototype,"tpu_total",void 0),e([t({type:Number})],ke.prototype,"tpu_used",void 0),e([t({type:Object})],ke.prototype,"spinner",void 0),e([t({type:Object})],ke.prototype,"notification",void 0),e([t({type:Object})],ke.prototype,"resourcePolicy",void 0),e([t({type:String})],ke.prototype,"announcement",void 0),ke=e([i("backend-ai-summary-view")],ke);var ve=ke;export default ve;
