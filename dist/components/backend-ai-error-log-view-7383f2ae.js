import{B as s,d as a,I as t,a as e,n as r,e as i,b as o,h as d,_ as l,p as n,c}from"./backend-ai-console-59b588b0.js";import"./radio-behavior-2692b39d.js";import"./expansion-6946b833.js";import"./vaadin-grid-sorter-f0db9e83.js";import"./vaadin-grid-selection-column-056a9949.js";import"./vaadin-grid-sort-column-cab34161.js";import"./iconset-a5679453.js";import"./backend-ai-error-log-list-2be79d84.js";let p=class extends s{constructor(){super(),this._lists=Object()}static get styles(){return[a,t,e,r,i,o`
          wl-card h3.tab {
              padding-top: 0;
              padding-bottom: 0;
              padding-left: 0;
              }
          `]}firstUpdated(){this._lists=this.shadowRoot.querySelectorAll("backend-ai-session-list")}render(){return d`
      <wl-card class="item" elevation="1">
        <backend-ai-error-log-list active="true"></backend-ai-error-log-list>
      </wl-card>
      `}};l([n({type:Object})],p.prototype,"_lists",void 0),p=l([c("backend-ai-error-log-view")],p);var b=p;export default b;
