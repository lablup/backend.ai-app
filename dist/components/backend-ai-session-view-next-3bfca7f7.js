import{_ as s,e as i,B as t,c as a,I as r,a as e,i as o,x as n,j as m,k as c}from"./backend-ai-webui-ecaf99ee.js";import"./backend-ai-session-launcher-0df4830b.js";import"./backend-ai-session-view-c9c8f19c.js";import"./lablup-codemirror-52c13cae.js";import"./lablup-progress-bar-a39f3f78.js";import"./slider-02083b9c.js";import"./mwc-check-list-item-aff3ba37.js";import"./media-query-controller-0af6896b.js";import"./dir-utils-fbe312c1.js";import"./vaadin-grid-798320e5.js";import"./vaadin-grid-filter-column-c9fe72e2.js";import"./vaadin-grid-selection-column-229b0835.js";import"./json_to_csv-35c9e191.js";import"./backend-ai-resource-monitor-1713a3ed.js";import"./mwc-switch-4eed1e1c.js";import"./backend-ai-list-status-813286bf.js";import"./lablup-grid-sort-filter-column-7f6dc2bb.js";import"./vaadin-grid-sort-column-c154b80d.js";import"./vaadin-iconset-73b6a7a7.js";import"./lablup-activity-panel-e283a3a7.js";import"./mwc-formfield-6c406dcc.js";import"./mwc-tab-bar-c3cea253.js";let p=class extends t{static get styles(){return[a,r,e,o``]}async _viewStateChanged(s){await this.updateComplete}render(){return n`
      <backend-ai-react-session-list
        @moveTo="${s=>{const i=s.detail.path;globalThis.history.pushState({},"",i),m.dispatch(c(decodeURIComponent(i),{}))}}"
      ></backend-ai-react-session-list>
    `}};p=s([i("backend-ai-session-view-next")],p);
