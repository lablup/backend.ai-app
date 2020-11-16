import{B as a,d as s,I as e,a as t,n as r,e as i,b as o,h as d,_ as l,p as n,c}from"./backend-ai-console-fae5771c.js";import"./radio-behavior-de9a46e5.js";import"./expansion-9e996087.js";import"./vaadin-grid-sorter-5345283b.js";import"./vaadin-grid-selection-column-e82eaa7b.js";import"./vaadin-grid-sort-column-69875545.js";import"./iconset-53811108.js";import"./backend-ai-error-log-list-5af7bb09.js";let p=class extends a{constructor(){super(),this._lists=Object()}static get styles(){return[s,e,t,r,i,o`
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
