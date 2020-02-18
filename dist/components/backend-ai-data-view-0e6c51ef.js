import{f as html,ae as GestureEventListeners,P as PolymerElement,ak as addListener,av as resetMouseCanceller,k as BackendAiStyles,I as IronFlex,j as IronFlexAlignment,l as IronPositioning,a as css,h as html$1,ap as render,m as BackendAIPainKiller,_ as __decorate,c as customElement}from"./backend-ai-console-f442a6b8.js";import{B as BackendAIPage}from"./backend-ai-page-98b8ad16.js";import"./lablup-loading-indicator-fe6978c9.js";import{E as ElementMixin,T as ThemableMixin}from"./iron-resizable-behavior-1552c11e.js";import"./vaadin-progress-bar-0ea54e72.js";import"./radio-behavior-0dc5181d.js";import"./shadow-a7d1713f.js";import"./paper-dropdown-menu-6c03947c.js";import"./index-baab4736.js";import{C as ControlStateMixin}from"./vaadin-grid-d72d8ff2.js";import"./vaadin-grid-selection-column-8deeb859.js";import"./vaadin-grid-sorter-d8dd722c.js";import"./vaadin-grid-sort-column-f7aa6beb.js";import"./index-eb0bd4f9.js";import"./index-2ca25cb7.js";import"./vaadin-item-9d0b8f73.js";
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template=html`<iron-iconset-svg name="social" size="24">
<svg><defs>
<g id="cake"><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"></path></g>
<g id="domain"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></g>
<g id="group"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
<g id="group-add"><path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"></path></g>
<g id="location-city"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path></g>
<g id="mood"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="mood-bad"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 3c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></g>
<g id="notifications"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></g>
<g id="notifications-active"><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path></g>
<g id="notifications-none"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path></g>
<g id="notifications-off"><path d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"></path></g>
<g id="notifications-paused"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2l-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z"></path></g>
<g id="pages"><path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"></path></g>
<g id="party-mode"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z"></path></g>
<g id="people"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></g>
<g id="people-outline"><path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></g>
<g id="person"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
<g id="person-add"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g>
<g id="person-outline"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="plus-one"><path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"></path></g>
<g id="poll"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="public"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></g>
<g id="school"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></g>
<g id="sentiment-dissatisfied"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"></path></g>
<g id="sentiment-neutral"><path d="M9 14h6v1.5H9z"></path><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="sentiment-satisfied"><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-4c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2z"></path></g>
<g id="sentiment-very-dissatisfied"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path></g>
<g id="sentiment-very-satisfied"><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path></g>
<g id="share"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></g>
<g id="whatshot"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(template.content);const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild($_documentContainer.content);const $_documentContainer$1=html`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$1.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class ButtonElement extends(ElementMixin(ControlStateMixin(ThemableMixin(GestureEventListeners(PolymerElement))))){static get template(){return html`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.2.1"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){addListener(this,"down",()=>!this.disabled&&this.setAttribute("active","")),addListener(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(ButtonElement.is,ButtonElement);const $_documentContainer$2=html`<dom-module id="lumo-upload" theme-for="vaadin-upload">
  <template>
    <style>
      :host {
        line-height: var(--lumo-line-height-m);
      }

      :host(:not([nodrop])) {
        overflow: hidden;
        border: 1px dashed var(--lumo-contrast-20pct);
        border-radius: var(--lumo-border-radius);
        padding: var(--lumo-space-m);
        transition: background-color 0.6s, border-color 0.6s;
      }

      [part="primary-buttons"] > * {
        display: inline-block;
        white-space: nowrap;
      }

      [part="drop-label"] {
        display: inline-block;
        white-space: normal;
        padding: 0 var(--lumo-space-s);
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
      }

      :host([dragover-valid]) {
        border-color: var(--lumo-primary-color-50pct);
        background: var(--lumo-primary-color-10pct);
        transition: background-color 0.1s, border-color 0.1s;
      }

      :host([dragover-valid]) [part="drop-label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="drop-label-icon"] {
        display: inline-block;
      }

      [part="drop-label-icon"]::before {
        content: var(--lumo-icons-upload);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        vertical-align: -.25em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-upload-file" theme-for="vaadin-upload-file">
  <template>
    <style include="lumo-field-button">
      :host {
        padding: var(--lumo-space-s) 0;
      }

      :host(:not(:first-child)) {
        border-top: 1px solid var(--lumo-contrast-10pct);
      }

      [part="row"] {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
      }

      [part="status"],
      [part="error"] {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      [part="info"] {
        display: flex;
        align-items: baseline;
        flex: auto;
      }

      [part="meta"] {
        width: 0.001px;
        flex: 1 1 auto;
      }

      [part="name"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="commands"] {
        display: flex;
        align-items: baseline;
        flex: none;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        margin-right: var(--lumo-space-xs);
      }

      /* When both icons are hidden, let us keep space for one */
      [part="done-icon"][hidden] + [part="warning-icon"][hidden] {
        display: block !important;
        visibility: hidden;
      }

      [part="done-icon"],
      [part="warning-icon"] {
        font-size: var(--lumo-icon-size-m);
        font-family: 'lumo-icons';
        line-height: 1;
      }

      [part="start-button"],
      [part="retry-button"],
      [part="clear-button"] {
        flex: none;
        margin-left: var(--lumo-space-xs);
      }

      [part="done-icon"]::before,
      [part="warning-icon"]::before,
      [part="start-button"]::before,
      [part="retry-button"]::before,
      [part="clear-button"]::before {
        vertical-align: -.25em;
      }

      [part="done-icon"]::before {
        content: var(--lumo-icons-checkmark);
        color: var(--lumo-primary-text-color);
      }

      [part="warning-icon"]::before {
        content: var(--lumo-icons-error);
        color: var(--lumo-error-text-color);
      }

      [part="start-button"]::before {
        content: var(--lumo-icons-play);
      }

      [part="retry-button"]::before {
        content: var(--lumo-icons-reload);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      [part="error"] {
        color: var(--lumo-error-text-color);
      }

      [part="progress"] {
        width: auto;
        margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
        margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
      }

      [part="progress"][complete],
      [part="progress"][error] {
        display: none;
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$2.content);const $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-upload-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild($_documentContainer$3.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class UploadFileElement extends(ThemableMixin(PolymerElement)){static get template(){return html`
    <style>
      :host {
        display: block;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div part="row">
      <div part="info">
        <div part="done-icon" hidden\$="[[!file.complete]]"></div>
        <div part="warning-icon" hidden\$="[[!file.error]]"></div>

        <div part="meta">
          <div part="name" id="name">[[file.name]]</div>
          <div part="status" hidden\$="[[!file.status]]" id="status">[[file.status]]</div>
          <div part="error" id="error" hidden\$="[[!file.error]]">[[file.error]]</div>
        </div>
      </div>
      <div part="commands">
        <div part="start-button" file-event="file-start" on-click="_fireFileEvent" hidden\$="[[!file.held]]"></div>
        <div part="retry-button" file-event="file-retry" on-click="_fireFileEvent" hidden\$="[[!file.error]]"></div>
        <div part="clear-button" file-event="file-abort" on-click="_fireFileEvent"></div>
      </div>
    </div>

    <vaadin-progress-bar part="progress" id="progress" value\$="[[_formatProgressValue(file.progress)]]" error\$="[[file.error]]" indeterminate\$="[[file.indeterminate]]" uploading\$="[[file.uploading]]" complete\$="[[file.complete]]">
    </vaadin-progress-bar>
`}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}_fileAborted(e){e&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(e){return e/100}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(e,t){const i=Boolean(e);this.hasAttribute(t)!==i&&(i?this.setAttribute(t,""):this.removeAttribute(t))}}customElements.define(UploadFileElement.is,UploadFileElement);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class UploadElement extends(ElementMixin(ThemableMixin(PolymerElement))){static get template(){return html`
    <style>
      :host {
        display: block;
        position: relative;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }
    </style>

    <div part="primary-buttons">
      <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
        <slot name="add-button">
          <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
            [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
          </vaadin-button>
        </slot>
      </div>
      <div part="drop-label" hidden\$="[[nodrop]]" id="dropLabelContainer">
        <slot name="drop-label-icon">
          <div part="drop-label-icon"></div>
        </slot>
        <slot name="drop-label" id="dropLabel">
          [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]]
        </slot>
      </div>
    </div>
    <slot name="file-list">
      <div id="fileList" part="file-list">
        <template is="dom-repeat" items="[[files]]" as="file">
          <vaadin-upload-file file="[[file]]"></vaadin-upload-file>
        </template>
      </div>
    </slot>
    <slot></slot>
    <input type="file" id="fileInput" on-change="_onFileInputChange" hidden="" accept\$="{{accept}}" multiple\$="[[_isMultiple(maxFiles)]]" capture\$="[[capture]]">
`}static get is(){return"vaadin-upload"}static get version(){return"4.2.2"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:function(){try{return!!document.createEvent("TouchEvent")}catch(e){return!1}}},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:function(){return[]}},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:function(){return{dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},cancel:"Cancel",error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled.",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Server Unavailable",unexpectedServerError:"Unexpected Server Error",forbidden:"Forbidden"}},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}}}}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this))}_formatSize(e){if("function"==typeof this.i18n.formatSize)return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,i=~~(Math.log(e)/Math.log(t)),o=Math.max(0,Math.min(3,i-1));return parseFloat((e/Math.pow(t,i)).toFixed(o))+" "+this.i18n.units.size[i]}_splitTimeByUnits(e){const t=[60,60,24,1/0],i=[0];for(var o=0;o<t.length&&e>0;o++)i[o]=e%t[o],e=Math.floor(e/t[o]);return i}_formatTime(e,t){if("function"==typeof this.i18n.formatTime)return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(e=>(e<10?"0":"")+e).join(":")}_formatFileProgress(e){return e.totalStr+": "+e.progress+"% ("+(e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown)+")"}_maxFilesAdded(e,t){return e>=0&&t>=e}_onDragover(e){e.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}for(var t in this.headers)e.setRequestHeader(t,this.headers[t]);this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,i,o){e.elapsed=o,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(o*(t/i-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/o/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(i),e.status=this._formatFileProgress(e)}uploadFiles(e){e&&!Array.isArray(e)&&(e=[e]),e=(e=e||this.files).filter(e=>!e.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),i=e.xhr=this._createXhr(e);let o,r;i.upload.onprogress=n=>{clearTimeout(o),r=Date.now();const a=(r-t)/1e3,l=n.loaded,s=n.total,d=~~(l/s*100);e.loaded=l,e.progress=d,e.indeterminate=l<=0||l>=s,e.error?e.indeterminate=e.status=void 0:e.abort||(d<100?(this._setStatus(e,s,l,a),o=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(e)},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing,e.uploading=!1)),this._notifyFileChanges(e),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:i}}))},i.onreadystatechange=()=>{if(4==i.readyState){if(clearTimeout(o),e.indeterminate=e.uploading=!1,e.abort)return void this._notifyFileChanges(e);if(e.status="",!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:i},cancelable:!0})))return;0===i.status?e.error=this.i18n.uploading.error.serverUnavailable:i.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:i.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent(`upload-${e.error?"error":"success"}`,{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)}};const n=new FormData;e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName,this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:i},cancelable:!0}))&&(n.append(e.formDataName,e,e.name),i.open(this.method,e.uploadTarget,!0),this._configureXhr(i),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,i.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:i}})),this._notifyFileChanges(e)},this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:i,formData:n},cancelable:!0}))&&i.send(n))}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._notifyFileChanges(e))}_notifyFileChanges(e){var t="files."+this.files.indexOf(e)+".";for(var i in e)e.hasOwnProperty(i)&&this.notifyPath(t+i,e[i])}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));if(this.maxFileSize>=0&&e.size>this.maxFileSize)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));const t=e.name.match(/\.[^\.]*$|$/)[0],i=new RegExp("^("+this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")+")$","i");!this.accept||i.test(e.type)||i.test(t)?(e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.unshift("files",e),this.noAuto||this._uploadFile(e)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}))}_removeFile(e){this.files.indexOf(e)>-1&&this.splice("files",this.files.indexOf(e),1)}_onAddFilesTouchEnd(e){e.preventDefault(),this.__resetMouseCanceller(),this._onAddFilesClick()}__resetMouseCanceller(){resetMouseCanceller()}_onAddFilesClick(){this.maxFilesReached||(this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileRemove(e){this._removeFile(e.detail.file)}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return 1==e?t.one:t.many}_isMultiple(e){return 1!=e}}customElements.define(UploadElement.is,UploadElement),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).tus=e()}}((function(){return function e(t,i,o){function r(a,l){if(!i[a]){if(!t[a]){var s="function"==typeof require&&require;if(!l&&s)return s(a,!0);if(n)return n(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var c=i[a]={exports:{}};t[a][0].call(c.exports,(function(e){var i=t[a][1][e];return r(i||e)}),c,c.exports,e,t,i,o)}return i[a].exports}for(var n="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t,i){if((0,n.default)())return i(null,function(e,t){var i=e.exif?function(e){var t=0;if(0===e.length)return t;for(var i=0;i<e.length;i++){var o=e.charCodeAt(i);t=(t<<5)-t+o,t&=t}return t}(JSON.stringify(e.exif)):"noexif";return["tus-rn",e.name||"noname",e.size||"nosize",i,t.endpoint].join("/")}(e,t));return i(null,["tus-br",e.name,e.type,e.size,e.lastModified,t.endpoint].join("-"))};var o,r=e("./isReactNative"),n=(o=r)&&o.__esModule?o:{default:o}},{"./isReactNative":3}],2:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0});i.default=function(){return"undefined"!=typeof window&&(void 0!==window.PhoneGap||void 0!==window.Cordova||void 0!==window.cordova)}},{}],3:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0});i.default=function(){return"undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase()}},{}],4:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var i=new FileReader;i.onload=function(){t(null,new Uint8Array(i.result))},i.onerror=function(e){t(e)},i.readAsArrayBuffer(e)}},{}],5:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0}),i.newRequest=function(){return new window.XMLHttpRequest},i.resolveUrl=function(e,t){return new n.default(t,e).toString()};var o,r=e("url-parse"),n=(o=r)&&o.__esModule?o:{default:o}},{"url-parse":16}],6:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}();i.getSource=function(e,t,i){if((0,r.default)()&&e&&void 0!==e.uri)return void(0,n.default)(e.uri,(function(e,t){if(e)return i(new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. "+e));i(null,new c(t))}));if("function"==typeof e.slice&&void 0!==e.size)return void i(null,new c(e));if("function"==typeof e.read)return t=+t,isFinite(t)?void i(null,new u(e,t)):void i(new Error("cannot create source for stream without a finite value for the `chunkSize` option"));i(new Error("source object may only be an instance of File, Blob, or Reader in this environment"))};var r=s(e("./isReactNative")),n=s(e("./uriToBlob")),a=s(e("./isCordova")),l=s(e("./readAsByteArray"));function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function(){function e(t){d(this,e),this._file=t,this.size=t.size}return o(e,[{key:"slice",value:function(e,t,i){(0,a.default)()?(0,l.default)(this._file.slice(e,t),(function(e,t){if(e)return i(e);i(null,t)})):i(null,this._file.slice(e,t))}},{key:"close",value:function(){}}]),e}(),u=function(){function e(t,i){d(this,e),this._chunkSize=i,this._buffer=void 0,this._bufferOffset=0,this._reader=t,this._done=!1}return o(e,[{key:"slice",value:function(e,t,i){if(!(e<this._bufferOffset))return this._readUntilEnoughDataOrDone(e,t,i);i(new Error("Requested data is before the reader's current offset"))}},{key:"_readUntilEnoughDataOrDone",value:function(e,t,i){var o=this,r=t<=this._bufferOffset+h(this._buffer);if(this._done||r){var n=this._getDataFromBuffer(e,t);i(null,n,null==n&&this._done)}else this._reader.read().then((function(r){var n=r.value;r.done?o._done=!0:void 0===o._buffer?o._buffer=n:o._buffer=function(e,t){if(e.concat)return e.concat(t);if(e instanceof Blob)return new Blob([e,t],{type:e.type});if(e.set){var i=new e.constructor(e.length+t.length);return i.set(e),i.set(t,e.length),i}throw new Error("Unknown data type")}(o._buffer,n),o._readUntilEnoughDataOrDone(e,t,i)})).catch((function(e){i(new Error("Error during read: "+e))}))}},{key:"_getDataFromBuffer",value:function(e,t){e>this._bufferOffset&&(this._buffer=this._buffer.slice(e-this._bufferOffset),this._bufferOffset=e);var i=0===h(this._buffer);return this._done&&i?null:this._buffer.slice(0,t-e)}},{key:"close",value:function(){this._reader.cancel&&this._reader.cancel()}}]),e}();function h(e){return void 0===e?0:void 0!==e.size?e.size:e.length}},{"./isCordova":2,"./isReactNative":3,"./readAsByteArray":4,"./uriToBlob":8}],7:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}();i.getStorage=function(){return r?new a:null};var r=!1;try{r="localStorage"in window;var n="tusSupport";localStorage.setItem(n,localStorage.getItem(n))}catch(e){if(e.code!==e.SECURITY_ERR&&e.code!==e.QUOTA_EXCEEDED_ERR)throw e;r=!1}i.canStoreURLs=r;var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"setItem",value:function(e,t,i){i(null,localStorage.setItem(e,t))}},{key:"getItem",value:function(e,t){t(null,localStorage.getItem(e))}},{key:"removeItem",value:function(e,t){t(null,localStorage.removeItem(e))}}]),e}()},{}],8:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var i=new XMLHttpRequest;i.responseType="blob",i.onload=function(){var e=i.response;t(null,e)},i.onerror=function(e){t(e)},i.open("GET",e),i.send()}},{}],9:[function(e,t,i){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(i,"__esModule",{value:!0});var n=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.message));a.originalRequest=n,a.causingError=i;var l=e.message;return null!=i&&(l+=", caused by "+i.toString()),null!=n&&(l+=", originated from request (response code: "+n.status+", response text: "+n.responseText+")"),a.message=l,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Error),t}();i.default=n},{}],10:[function(e,t,i){var o,r=e("./upload"),n=(o=r)&&o.__esModule?o:{default:o},a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(e("./node/storage"));var l=n.default.defaultOptions,s={Upload:n.default,canStoreURLs:a.canStoreURLs,defaultOptions:l};if("undefined"!=typeof window){var d=window,c=d.XMLHttpRequest,u=d.Blob;s.isSupported=c&&u&&"function"==typeof u.prototype.slice}else s.isSupported=!0,s.FileStorage=a.FileStorage;t.exports=s},{"./node/storage":7,"./upload":11}],11:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),r=c(e("./error")),n=c(e("extend")),a=e("js-base64"),l=e("./node/request"),s=e("./node/source"),d=e("./node/storage");function c(e){return e&&e.__esModule?e:{default:e}}var u={endpoint:null,fingerprint:c(e("./node/fingerprint")).default,resume:!0,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,headers:{},chunkSize:1/0,withCredentials:!1,uploadUrl:null,uploadSize:null,overridePatchMethod:!1,retryDelays:null,removeFingerprintOnSuccess:!1,uploadLengthDeferred:!1,urlStorage:null,fileReader:null,uploadDataDuringCreation:!1},h=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=(0,n.default)(!0,{},u,i),this._storage=this.options.urlStorage,this.file=t,this.url=null,this._xhr=null,this._fingerprint=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0}return o(e,[{key:"start",value:function(){var e=this,t=this.file;t?this.options.endpoint||this.options.uploadUrl?(this.options.resume&&null==this._storage&&(this._storage=(0,d.getStorage)()),this._source?this._start(this._source):(this.options.fileReader||s.getSource)(t,this.options.chunkSize,(function(t,i){t?e._emitError(t):(e._source=i,e._start(i))}))):this._emitError(new Error("tus: neither an endpoint or an upload URL is provided")):this._emitError(new Error("tus: no file or stream to upload provided"))}},{key:"_start",value:function(e){var t=this,i=this.file;if(this.options.uploadLengthDeferred)this._size=null;else if(null!=this.options.uploadSize){if(this._size=+this.options.uploadSize,isNaN(this._size))return void this._emitError(new Error("tus: cannot convert `uploadSize` option into a number"))}else if(this._size=e.size,null==this._size)return void this._emitError(new Error("tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option"));var o=this.options.retryDelays;if(null!=o){if("[object Array]"!==Object.prototype.toString.call(o))return void this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));var r=this.options.onError;this.options.onError=function(e){t.options.onError=r,null!=t._offset&&t._offset>t._offsetBeforeRetry&&(t._retryAttempt=0);var i=!0;"undefined"!=typeof window&&"navigator"in window&&!1===window.navigator.onLine&&(i=!1);var n=e.originalRequest?e.originalRequest.status:0,a=!p(n,400)||409===n||423===n;if(t._retryAttempt<o.length&&null!=e.originalRequest&&a&&i){var l=o[t._retryAttempt++];t._offsetBeforeRetry=t._offset,t.options.uploadUrl=t.url,t._retryTimeout=setTimeout((function(){t.start()}),l)}else t._emitError(e)}}if(this._aborted=!1,null==this.url)return null!=this.options.uploadUrl?(this.url=this.options.uploadUrl,void this._resumeUpload()):void(this._hasStorage()?this.options.fingerprint(i,this.options,(function(e,i){e?t._emitError(e):(t._fingerprint=i,t._storage.getItem(t._fingerprint,(function(e,i){e?t._emitError(e):null!=i?(t.url=i,t._resumeUpload()):t._createUpload()})))})):this._createUpload());this._resumeUpload()}},{key:"abort",value:function(t,i){var o=this;null!==this._xhr&&(this._xhr.abort(),this._source.close()),this._aborted=!0,null!=this._retryTimeout&&(clearTimeout(this._retryTimeout),this._retryTimeout=null),i=i||function(){},t?e.terminate(this.url,this.options,(function(e,t){if(e)return i(e,t);o._hasStorage()?o._storage.removeItem(o._fingerprint,i):i()})):i()}},{key:"_hasStorage",value:function(){return this.options.resume&&this._storage}},{key:"_emitXhrError",value:function(e,t,i){this._emitError(new r.default(t,i,e))}},{key:"_emitError",value:function(e){if("function"!=typeof this.options.onError)throw e;this.options.onError(e)}},{key:"_emitSuccess",value:function(){"function"==typeof this.options.onSuccess&&this.options.onSuccess()}},{key:"_emitProgress",value:function(e,t){"function"==typeof this.options.onProgress&&this.options.onProgress(e,t)}},{key:"_emitChunkComplete",value:function(e,t,i){"function"==typeof this.options.onChunkComplete&&this.options.onChunkComplete(e,t,i)}},{key:"_setupXHR",value:function(e){this._xhr=e,f(e,this.options)}},{key:"_createUpload",value:function(){var e=this;if(this.options.endpoint){var t=(0,l.newRequest)();t.open("POST",this.options.endpoint,!0),t.onload=function(){if(p(t.status,200)){var i=t.getResponseHeader("Location");if(null!=i){if(e.url=(0,l.resolveUrl)(e.options.endpoint,i),0===e._size)return e._emitSuccess(),void e._source.close();e._hasStorage()&&e._storage.setItem(e._fingerprint,e.url,(function(t){t&&e._emitError(t)})),e.options.uploadDataDuringCreation?e._handleUploadResponse(t):(e._offset=0,e._startUpload())}else e._emitXhrError(t,new Error("tus: invalid or missing Location header"))}else e._emitXhrError(t,new Error("tus: unexpected response while creating upload"))},t.onerror=function(i){e._emitXhrError(t,new Error("tus: failed to create upload"),i)},this._setupXHR(t),this.options.uploadLengthDeferred?t.setRequestHeader("Upload-Defer-Length",1):t.setRequestHeader("Upload-Length",this._size);var i=function(e){var t=[];for(var i in e)t.push(i+" "+a.Base64.encode(e[i]));return t.join(",")}(this.options.metadata);""!==i&&t.setRequestHeader("Upload-Metadata",i),this.options.uploadDataDuringCreation&&!this.options.uploadLengthDeferred?(this._offset=0,this._addChunkToRequest(t)):t.send(null)}else this._emitError(new Error("tus: unable to create upload because no endpoint is provided"))}},{key:"_resumeUpload",value:function(){var e=this,t=(0,l.newRequest)();t.open("HEAD",this.url,!0),t.onload=function(){if(!p(t.status,200))return e._hasStorage()&&p(t.status,400)&&e._storage.removeItem(e._fingerprint,(function(t){t&&e._emitError(t)})),423===t.status?void e._emitXhrError(t,new Error("tus: upload is currently locked; retry later")):e.options.endpoint?(e.url=null,void e._createUpload()):void e._emitXhrError(t,new Error("tus: unable to resume upload (new upload cannot be created without an endpoint)"));var i=parseInt(t.getResponseHeader("Upload-Offset"),10);if(isNaN(i))e._emitXhrError(t,new Error("tus: invalid or missing offset value"));else{var o=parseInt(t.getResponseHeader("Upload-Length"),10);if(!isNaN(o)||e.options.uploadLengthDeferred){if(i===o)return e._emitProgress(o,o),void e._emitSuccess();e._offset=i,e._startUpload()}else e._emitXhrError(t,new Error("tus: invalid or missing length value"))}},t.onerror=function(i){e._emitXhrError(t,new Error("tus: failed to resume upload"),i)},this._setupXHR(t),t.send(null)}},{key:"_startUpload",value:function(){var e=this;if(!this._aborted){var t=(0,l.newRequest)();this.options.overridePatchMethod?(t.open("POST",this.url,!0),t.setRequestHeader("X-HTTP-Method-Override","PATCH")):t.open("PATCH",this.url,!0),t.onload=function(){p(t.status,200)?e._handleUploadResponse(t):e._emitXhrError(t,new Error("tus: unexpected response while uploading chunk"))},t.onerror=function(i){e._aborted||e._emitXhrError(t,new Error("tus: failed to upload chunk at offset "+e._offset),i)},this._setupXHR(t),t.setRequestHeader("Upload-Offset",this._offset),this._addChunkToRequest(t)}}},{key:"_addChunkToRequest",value:function(e){var t=this;"upload"in e&&(e.upload.onprogress=function(e){e.lengthComputable&&t._emitProgress(i+e.loaded,t._size)}),e.setRequestHeader("Content-Type","application/offset+octet-stream");var i=this._offset,o=this._offset+this.options.chunkSize;(o===1/0||o>this._size)&&!this.options.uploadLengthDeferred&&(o=this._size),this._source.slice(i,o,(function(i,o,r){i?t._emitError(i):(t.options.uploadLengthDeferred&&r&&(t._size=t._offset+(o&&o.size?o.size:0),e.setRequestHeader("Upload-Length",t._size)),null===o?e.send():(e.send(o),t._emitProgress(t._offset,t._size)))}))}},{key:"_handleUploadResponse",value:function(e){var t=this,i=parseInt(e.getResponseHeader("Upload-Offset"),10);if(isNaN(i))this._emitXhrError(e,new Error("tus: invalid or missing offset value"));else{if(this._emitProgress(i,this._size),this._emitChunkComplete(i-this._offset,i,this._size),this._offset=i,i==this._size)return this.options.removeFingerprintOnSuccess&&this.options.resume&&this._storage.removeItem(this._fingerprint,(function(e){e&&t._emitError(e)})),this._emitSuccess(),void this._source.close();this._startUpload()}}}],[{key:"terminate",value:function(e,t,i){if("function"!=typeof t&&"function"!=typeof i)throw new Error("tus: a callback function must be specified");"function"==typeof t&&(i=t,t={});var o=(0,l.newRequest)();o.open("DELETE",e,!0),o.onload=function(){204===o.status?i():i(new r.default(new Error("tus: unexpected response while terminating upload"),null,o))},o.onerror=function(e){i(new r.default(e,new Error("tus: failed to terminate upload"),o))},f(o,t),o.send(null)}}]),e}();function p(e,t){return e>=t&&e<t+100}function f(e,t){e.setRequestHeader("Tus-Resumable","1.0.0");var i=t.headers||{};for(var o in i)e.setRequestHeader(o,i[o]);e.withCredentials=t.withCredentials}h.defaultOptions=u,i.default=h},{"./error":9,"./node/fingerprint":1,"./node/request":5,"./node/source":6,"./node/storage":7,extend:12,"js-base64":13}],12:[function(e,t,i){var o=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=Object.defineProperty,a=Object.getOwnPropertyDescriptor,l=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===r.call(e)},s=function(e){if(!e||"[object Object]"!==r.call(e))return!1;var t,i=o.call(e,"constructor"),n=e.constructor&&e.constructor.prototype&&o.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!i&&!n)return!1;for(t in e);return void 0===t||o.call(e,t)},d=function(e,t){n&&"__proto__"===t.name?n(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},c=function(e,t){if("__proto__"===t){if(!o.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,i,o,r,n,a,u=arguments[0],h=1,p=arguments.length,f=!1;for("boolean"==typeof u&&(f=u,u=arguments[1]||{},h=2),(null==u||"object"!=typeof u&&"function"!=typeof u)&&(u={});h<p;++h)if(null!=(t=arguments[h]))for(i in t)o=c(u,i),u!==(r=c(t,i))&&(f&&r&&(s(r)||(n=l(r)))?(n?(n=!1,a=o&&l(o)?o:[]):a=o&&s(o)?o:{},d(u,{name:i,newValue:e(f,a,r)})):void 0!==r&&d(u,{name:i,newValue:r}));return u}},{}],13:[function(_dereq_,module,exports){(function(global){!function(e,t){"object"==typeof exports&&void 0!==module?module.exports=t(e):t(e)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:this,(function(global){var _Base64=global.Base64,version="2.4.9",buffer;if(void 0!==module&&module.exports)try{buffer=eval("require('buffer').Buffer")}catch(e){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},i=0,o=e.length;i<o;i++)t[e.charAt(i)]=i;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],i=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[b64chars.charAt(i>>>18),b64chars.charAt(i>>>12&63),t>=2?"=":b64chars.charAt(i>>>6&63),t>=1?"=":b64chars.charAt(63&i)].join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e)).toString("base64")}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e)).toString("base64")}:function(e){return btoa(utob(e))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,""):_encode(String(e))},encodeURI=function(e){return encode(e,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return fromCharCode(55296+(t>>>10))+fromCharCode(56320+(1023&t));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,i=t%4,o=(t>0?b64tab[e.charAt(0)]<<18:0)|(t>1?b64tab[e.charAt(1)]<<12:0)|(t>2?b64tab[e.charAt(2)]<<6:0)|(t>3?b64tab[e.charAt(3)]:0),r=[fromCharCode(o>>>16),fromCharCode(o>>>8&255),fromCharCode(255&o)];return r.length-=[0,0,2,1][i],r.join("")},atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/[\s\S]{1,4}/g,cb_decode)},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(e){return encode(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global.Meteor&&(Base64=global.Base64),void 0!==module&&module.exports&&(module.exports.Base64=global.Base64),{Base64:global.Base64}}))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],14:[function(e,t,i){var o=Object.prototype.hasOwnProperty;function r(e){return decodeURIComponent(e.replace(/\+/g," "))}i.stringify=function(e,t){t=t||"";var i=[];for(var r in"string"!=typeof t&&(t="?"),e)o.call(e,r)&&i.push(encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return i.length?t+i.join("&"):""},i.parse=function(e){for(var t,i=/([^=?&]+)=?([^&]*)/g,o={};t=i.exec(e);){var n=r(t[1]),a=r(t[2]);n in o||(o[n]=a)}return o}},{}],15:[function(e,t,i){t.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},{}],16:[function(e,t,i){(function(i){var o=e("requires-port"),r=e("querystringify"),n=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,a=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,l=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],s={hash:1,query:1};function d(e){var t,o=i&&i.location||{},r={},n=typeof(e=e||o);if("blob:"===e.protocol)r=new u(unescape(e.pathname),{});else if("string"===n)for(t in r=new u(e,{}),s)delete r[t];else if("object"===n){for(t in e)t in s||(r[t]=e[t]);void 0===r.slashes&&(r.slashes=a.test(e.href))}return r}function c(e){var t=n.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function u(e,t,i){if(!(this instanceof u))return new u(e,t,i);var n,a,s,h,p,f,m=l.slice(),A=typeof t,v=this,g=0;for("object"!==A&&"string"!==A&&(i=t,t=null),i&&"function"!=typeof i&&(i=r.parse),t=d(t),n=!(a=c(e||"")).protocol&&!a.slashes,v.slashes=a.slashes||n&&t.slashes,v.protocol=a.protocol||t.protocol||"",e=a.rest,a.slashes||(m[3]=[/(.*)/,"pathname"]);g<m.length;g++)"function"!=typeof(h=m[g])?(s=h[0],f=h[1],s!=s?v[f]=e:"string"==typeof s?~(p=e.indexOf(s))&&("number"==typeof h[2]?(v[f]=e.slice(0,p),e=e.slice(p+h[2])):(v[f]=e.slice(p),e=e.slice(0,p))):(p=s.exec(e))&&(v[f]=p[1],e=e.slice(0,p.index)),v[f]=v[f]||n&&h[3]&&t[f]||"",h[4]&&(v[f]=v[f].toLowerCase())):e=h(e);i&&(v.query=i(v.query)),n&&t.slashes&&"/"!==v.pathname.charAt(0)&&(""!==v.pathname||""!==t.pathname)&&(v.pathname=function(e,t){for(var i=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=i.length,r=i[o-1],n=!1,a=0;o--;)"."===i[o]?i.splice(o,1):".."===i[o]?(i.splice(o,1),a++):a&&(0===o&&(n=!0),i.splice(o,1),a--);return n&&i.unshift(""),"."!==r&&".."!==r||i.push(""),i.join("/")}(v.pathname,t.pathname)),o(v.port,v.protocol)||(v.host=v.hostname,v.port=""),v.username=v.password="",v.auth&&(h=v.auth.split(":"),v.username=h[0]||"",v.password=h[1]||""),v.origin=v.protocol&&v.host&&"file:"!==v.protocol?v.protocol+"//"+v.host:"null",v.href=v.toString()}u.prototype={set:function(e,t,i){var n=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(i||r.parse)(t)),n[e]=t;break;case"port":n[e]=t,o(t,n.protocol)?t&&(n.host=n.hostname+":"+t):(n.host=n.hostname,n[e]="");break;case"hostname":n[e]=t,n.port&&(t+=":"+n.port),n.host=t;break;case"host":n[e]=t,/:\d+$/.test(t)?(t=t.split(":"),n.port=t.pop(),n.hostname=t.join(":")):(n.hostname=t,n.port="");break;case"protocol":n.protocol=t.toLowerCase(),n.slashes=!i;break;case"pathname":case"hash":if(t){var a="pathname"===e?"/":"#";n[e]=t.charAt(0)!==a?a+t:t}else n[e]=t;break;default:n[e]=t}for(var s=0;s<l.length;s++){var d=l[s];d[4]&&(n[d[1]]=n[d[1]].toLowerCase())}return n.origin=n.protocol&&n.host&&"file:"!==n.protocol?n.protocol+"//"+n.host:"null",n.href=n.toString(),n},toString:function(e){e&&"function"==typeof e||(e=r.stringify);var t,i=this,o=i.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var n=o+(i.slashes?"//":"");return i.username&&(n+=i.username,i.password&&(n+=":"+i.password),n+="@"),n+=i.host+i.pathname,(t="object"==typeof i.query?e(i.query):i.query)&&(n+="?"!==t.charAt(0)?"?"+t:t),i.hash&&(n+=i.hash),n}},u.extractProtocol=c,u.location=d,u.qs=r,t.exports=u}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{querystringify:14,"requires-port":15}]},{},[10])(10)}));
/**
 @license
 Copyright (c) 2015-2020 Lablup Inc. All rights reserved.
 */
let BackendAIData=class extends BackendAIPage{constructor(){super(),this.folders={},this.folderInfo={},this.is_admin=!1,this.authenticated=!1,this.deleteFolderId="",this.active=!1,this.explorer={},this.explorerFiles=[],this.invitees=[],this.selectedFolder="",this.uploadFiles=[],this.vhost="",this.vhosts=[],this.allowedGroups=[],this.uploadFilesExist=!1,this.allowed_folder_type=[],this._boundIndexRenderer=this.indexRenderer.bind(this),this._boundTypeRenderer=this.typeRenderer.bind(this),this._boundControlFolderListRenderer=this.controlFolderListRenderer.bind(this),this._boundControlFileListRenderer=this.controlFileListRenderer.bind(this),this._boundPermissionViewRenderer=this.permissionViewRenderer.bind(this),this._boundFileNameRenderer=this.fileNameRenderer.bind(this),this._boundCreatedTimeRenderer=this.createdTimeRenderer.bind(this),this._boundPermissionRenderer=this.permissionRenderer.bind(this),this._uploadFlag=!0}static get properties(){return{folders:{type:Object},folderInfo:{type:Object},fileListGrid:{type:Object},is_admin:{type:Boolean},authenticated:{type:Boolean},deleteFolderId:{type:String},active:{type:Boolean},explorer:{type:Object},explorerFiles:{type:Array},uploadFiles:{type:Array},uploadFilesExist:{type:Boolean},vhost:{type:String},vhosts:{type:Array},allowedGroups:{type:Array},invitees:{type:Array},deleteFileDialog:{type:Object},notification:{type:Object},indicator:{type:Object}}}static get styles(){return[BackendAiStyles,IronFlex,IronFlexAlignment,IronPositioning,css`
        vaadin-grid {
          border: 0 !important;
          font-size: 12px;
        }

        ul {
          padding-left: 0;
        }

        ul li {
          list-style: none;
          font-size: 13px;
        }

        span.indicator {
          width: 100px;
          font-size: 10px;
        }

        .folder-action-buttons wl-button {
          margin-right: 10px;
        }

        wl-button > wl-icon {
          --icon-size: 24px;
          padding: 0;
        }

        wl-icon {
          --icon-size: 16px;
          padding: 0;
        }

        wl-button.button {
          width: 330px;
        }

        paper-icon-button.tiny {
          width: 35px;
          height: 35px;
        }

        .warning {
          color: red;
        }

        vaadin-item {
          font-size: 13px;
          font-weight: 100;
        }

        #folder-explorer-dialog {
          --dialog-height: calc(100vh - 170px);
          height: calc(100vh - 170px);
          right: 0;
          top: 0;
          position: fixed;
          margin: 170px 0 0 0;
        }

        @media screen and (max-width: 899px) {
          #folder-explorer-dialog {
            left: 0;
            --dialog-width: 100%;
            width: 100%;
          }
        }

        @media screen and (min-width: 900px) {
          #folder-explorer-dialog {
            left: 150px;
            --dialog-width: calc(100% - 100px);
            width: calc(100% - 100px);
          }
        }

        div.breadcrumb {
          color: #637282;
          font-size: 1em;
          margin-bottom: 10px;
        }

        div.breadcrumb span:first-child {
          display: none;
        }

        vaadin-grid.folderlist {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 220px);
        }

        vaadin-grid.explorer {
          border: 0;
          font-size: 14px;
          height: calc(100vh - 370px);
        }

        wl-button.goto {
          margin: 0;
          padding: 5px;
          min-width: 0;
        }

        wl-button.goto:last-of-type {
          font-weight: bold;
        }

        div#upload {
          margin: 0;
          padding: 0;
        }

        div#dropzone {
          display: none;
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;
          z-index: 10;
        }

        div#dropzone, div#dropzone p {
          margin: 0;
          padding: 0;
          width: 100%;
          background: rgba(211, 211, 211, .5);
          text-align: center;
        }

        .progress {
          padding: 30px 10px;
          border: 1px solid lightgray;
        }

        .progress-item {
          padding: 10px 30px;
        }

        wl-tab-group {
          --tab-group-indicator-bg: var(--paper-orange-500);
        }

        wl-tab {
          --tab-color: #666666;
          --tab-color-hover: #222222;
          --tab-color-hover-filled: #222222;
          --tab-color-active: #222222;
          --tab-color-active-hover: #222222;
          --tab-color-active-filled: #cccccc;
          --tab-bg-active: var(--paper-orange-50);
          --tab-bg-filled: var(--paper-orange-50);
          --tab-bg-active-hover: var(--paper-orange-100);
        }

        wl-button {
          --button-bg: var(--paper-orange-50);
          --button-bg-hover: var(--paper-orange-100);
          --button-bg-active: var(--paper-orange-600);
          color: var(--paper-orange-900);
        }

        wl-dialog wl-textfield,
        wl-dialog wl-select {
          --input-font-family: Roboto, Noto, sans-serif;
          --input-color-disabled: #222222;
          --input-label-color-disabled: #222222;
          --input-label-font-size: 12px;
          --input-border-style-disabled: 1px solid #cccccc;
        }

        #textfields wl-textfield,
        wl-label {
          margin-bottom: 20px;
        }

        wl-label {
          --label-font-family: Roboto, Noto, sans-serif;
          --label-color: black;
        }

        wl-checkbox {
          --checkbox-color: var(--paper-orange-900);
          --checkbox-color-checked: var(--paper-orange-900);
          --checkbox-bg-checked: var(--paper-orange-900);
          --checkbox-color-disabled-checked: var(--paper-orange-900);
          --checkbox-bg-disabled-checked: var(--paper-orange-900);
        }

        #modify-permission-dialog {
          --dialog-min-width: 600px;
        }

      `]}_toggleCheckbox(){let e=this.shadowRoot.querySelectorAll(".multiple-action-buttons");this.fileListGrid.selectedItems.length>0?[].forEach.call(e,e=>{e.style.display="block"}):[].forEach.call(e,e=>{e.style.display="none"})}render(){return html$1`
      <lablup-loading-indicator id="loading-indicator"></lablup-loading-indicator>
      <wl-card class="item" elevation="1" style="padding-bottom:20px;">
        <h3 class="horizontal center flex layout tab">
          <wl-tab-group>
            <wl-tab value="folder-lists" checked>Folders</wl-tab>
            <wl-tab value="shared-folder-lists" disabled>Shared Data</wl-tab>
            <wl-tab value="model-lists" disabled>Models</wl-tab>
          </wl-tab-group>
          <span class="flex"></span>
          <wl-button class="fg red" id="add-folder" outlined @click="${()=>this._addFolderDialog()}">
            <wl-icon>add</wl-icon>
            New folder
          </wl-button>
        </h3>

        <vaadin-grid class="folderlist" theme="row-stripes column-borders compact" aria-label="Folder list" .items="${this.folders}">
          <vaadin-grid-column width="40px" flex-grow="0" resizable header="#" .renderer="${this._boundIndexRenderer}">
          </vaadin-grid-column>
          <vaadin-grid-column resizable header="Name">
            <template>
              <div class="indicator" @click="[[_folderExplorer()]]" .folder-id="[[item.name]]">[[item.name]]</div>
            </template>
          </vaadin-grid-column>

          <vaadin-grid-column resizable>
            <template class="header">id</template>
            <template>
              <div class="layout vertical">
                <span class="indicator monospace">[[item.id]]</span>
              </div>
            </template>
          </vaadin-grid-column>

          <vaadin-grid-column width="85px" flex-grow="0" resizable header="Location">
            <template>
              <div class="layout vertical">
                <span>[[item.host]]</span>
              </div>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column width="45px" flex-grow="0" resizable header="Type" .renderer="${this._boundTypeRenderer}"></vaadin-grid-column>
          <vaadin-grid-column width="85px" flex-grow="0" resizable header="Permission" .renderer="${this._boundPermissionViewRenderer}"></vaadin-grid-column>
          <vaadin-grid-column resizable header="Control" .renderer="${this._boundControlFolderListRenderer}"></vaadin-grid-column>
        </vaadin-grid>
      </wl-card>
      <wl-dialog id="add-folder-dialog" class="dialog-ask" fixed backdrop blockscrolling>
        <wl-card elevation="1" class="login-panel intro centered">
          <h3 class="horizontal center layout">
            <span>Create a new storage folder</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <section>
            <paper-input id="add-folder-name" label="Folder name" pattern="[a-zA-Z0-9_-]*"
                         error-message="Allows letters, numbers and -_." auto-validate></paper-input>
            <div class="horizontal layout">
              <paper-dropdown-menu id="add-folder-host" label="Host">
                <paper-listbox slot="dropdown-content" selected="0">
                ${this.vhosts.map(e=>html$1`
                  <paper-item id="${e}" label="${e}">${e}</paper-item>
                `)}
                </paper-listbox>
              </paper-dropdown-menu>
              <paper-dropdown-menu id="add-folder-type" label="Type">
                <paper-listbox slot="dropdown-content" selected="0">
                ${this.allowed_folder_type.includes("user")?html$1`
                  <paper-item label="user">User</paper-item>
                `:html$1``}
                ${this.is_admin&&this.allowed_folder_type.includes("group")?html$1`
                  <paper-item label="group">Group</paper-item>
                `:html$1``}
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
            ${this.is_admin&&this.allowed_folder_type.includes("group")?html$1`
            <div class="horizontal layout">
              <paper-dropdown-menu id="add-folder-group" label="Group">
                <paper-listbox slot="dropdown-content" selected="0">
                ${this.allowedGroups.map(e=>html$1`
                  <paper-item id="${e.name}" label="${e.name}">${e.name}</paper-item>
                `)}
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
            `:html$1``}
            <br/>
            <wl-button class="blue button" type="button" id="add-button" outlined @click="${()=>this._addFolder()}">
              <wl-icon>rowing</wl-icon>
              Create
            </wl-button>
          </section>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="delete-folder-dialog" class="dialog-ask" fixed backdrop blockscrolling>
        <wl-card class="login-panel intro centered">
          <h3 class="horizontal center layout">
            <span>Delete a folder</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <section>
            <div class="warning">WARNING: this cannot be undone!</div>
            <div>
              <paper-input class="red" id="delete-folder-name" label="Type folder name to delete"
                           pattern="[a-zA-Z0-9_-]*"
                           error-message="Allows letters, numbers and -_." auto-validate></paper-input>
              <br/>
              <wl-button class="blue button" type="submit" id="delete-button" outlined @click="${()=>this._deleteFolderWithCheck()}">
                <wl-icon>close</wl-icon>
                Delete
              </wl-button>
            </div>
            </section>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="info-folder-dialog" class="dialog-ask" fixed backdrop blockscrolling>
        <wl-card class="intro centered" style="margin: 0;">
          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span>${this.folderInfo.name}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <div role="listbox" style="margin: 0;">
            <vaadin-item>
              <div><strong>ID</strong></div>
              <div secondary>${this.folderInfo.id}</div>
            </vaadin-item>
            <vaadin-item>
              <div><strong>Location</strong></div>
              <div secondary>${this.folderInfo.host}</div>
            </vaadin-item>
            <vaadin-item>
              <div><strong>Number of Files</strong></div>
              <div secondary>${this.folderInfo.numFiles}</div>
            </vaadin-item>
            ${this.folderInfo.is_owner?html$1`
              <vaadin-item>
                <div><strong>Ownership</strong></div>
                <div secondary>You are the owner of this folder.</div>
              </vaadin-item>
            `:html$1``}
            <vaadin-item>
              <div><strong>Permission</strong></div>
              <div secondary>${this.folderInfo.permission}</div>
            </vaadin-item>
          </div>
        </wl-card>
      </wl-dialog>
      <wl-dialog id="folder-explorer-dialog">
        <wl-card>
          <h3 class="horizontal center layout" style="font-weight:bold">
            <span>${this.explorer.id}</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>

          <div class="breadcrumb">
          ${this.explorer.breadcrumb?html$1`
              ${this.explorer.breadcrumb.map(e=>html$1`
               <wl-icon>keyboard_arrow_right</wl-icon>
               <wl-button outlined class="goto" path="item" @click="${e=>this._gotoFolder(e)}" dest="${e}">${e}</wl-button>
              `)}
              `:html$1``}
          </div>
          <div class="horizontal layout folder-action-buttons">
            <wl-button outlined class="multiple-action-buttons" @click="${()=>this._openDeleteMultipleFileDialog()}" style="display:none;">
              <div class="horizontal center layout">
              <wl-icon style="--icon-size: 20px;margin-right:5px;">delete</wl-icon><span>Delete...</span></div>
            </wl-button>
            <wl-button outlined id="add-btn" @click="${e=>this._uploadFileBtnClick(e)}">
              <wl-icon style="--icon-size: 20px;margin-right:5px;">cloud_upload</wl-icon>
              Upload Files...
            </wl-button>
            <wl-button outlined id="mkdir" @click="${()=>this._mkdirDialog()}">
              <wl-icon style="--icon-size: 20px;margin-right:5px;">create_new_folder</wl-icon>
              New Folder
            </wl-button>
          </div>
          <div id="dropzone"><p>drag</p></div>
          <input type="file" id="fileInput" @change="${e=>this._uploadFileChange(e)}" hidden multiple>
          ${this.uploadFilesExist?html$1`
          <wl-button outlined id="cancel_upload" @click="${e=>this._cancelUpload(e)}">
            <wl-icon>cancel</wl-icon> Stop uploading
          </wl-button>
          <vaadin-grid class="progress" theme="row-stripes compact" aria-label="uploadFiles" .items="${this.uploadFiles}"
                       height-by-rows>
            <vaadin-grid-column width="100px" flex-grow="0">
              <template>
                <vaadin-item class="progress-item">
                  <div>
                    <template is="dom-if" if="[[item.complete]]">
                      <wl-icon>check</wl-icon>
                    </template>
                  </div>
                </vaadin-item>
              </template>
            </vaadin-grid-column>

            <vaadin-grid-column>
              <template>
                <vaadin-item>
                  <span>[[item.name]]</span>
                  <template is="dom-if" if="[[!item.complete]]">
                    <div>
                      <vaadin-progress-bar value="[[item.progress]]"></vaadin-progress-bar>
                    </div>
                    <div>
                      <span>[[item.caption]]</span>
                    </div>
                  </template>
                </vaadin-item>
              </template>
            </vaadin-grid-column>
          </vaadin-grid>`:html$1``}
          <vaadin-grid id="fileList-grid" class="explorer" theme="row-stripes compact" aria-label="Explorer" .items="${this.explorerFiles}">
            <vaadin-grid-selection-column auto-select></vaadin-grid-selection-column>
            <vaadin-grid-column width="40px" flex-grow="0" resizable header="#" .renderer="${this._boundIndexRenderer}">
            </vaadin-grid-column>

            <vaadin-grid-sort-column flex-grow="2" resizable header="Name" path="filename" .renderer="${this._boundFileNameRenderer}">
            </vaadin-grid-sort-column>

            <vaadin-grid-sort-column flex-grow="2" resizable header="Created" path="ctime" .renderer="${this._boundCreatedTimeRenderer}">
            </vaadin-grid-sort-column>

            <vaadin-grid-column flex-grow="1" resizable>
              <template class="header">
                <vaadin-grid-sorter path="size">Size</vaadin-grid-sorter>
              </template>
              <template>
                <div class="layout vertical">
                  <span>[[item.size]]</span>
                </div>
              </template>
            </vaadin-grid-column>
            <vaadin-grid-column resizable flex-grow="2" header="Actions" .renderer="${this._boundControlFileListRenderer}"></vaadin-grid-column>
          </vaadin-grid>
        </wl-card>
      </wl-dialog>

      <wl-dialog id="mkdir-dialog" class="dialog-ask" fixed blockscrolling backdrop>
        <wl-card elevation="1" class="login-panel intro centered" style="margin: 0;">
          <h3 class="horizontal center layout">
            <span>Create a new folder</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <section>
            <paper-input id="mkdir-name" label="Folder name" pattern="[a-zA-Z0-9_-]*"
                         error-message="Allows letters, numbers and -_." auto-validate></paper-input>
            <br/>
            <wl-button class="blue button" type="submit" id="mkdir-btn" @click="${e=>this._mkdir(e)}" outlined>
              <wl-icon>rowing</wl-icon>
              Create
            </wl-button>
          </section>
        </wl-card>
      </wl-dialog>

      <wl-dialog
        id="share-folder-dialog"
        class="dialog-ask"
        fixed
        backdrop
        blockscrolling
      >
        <wl-card class="intro centered" style="margin: 0;">
          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span>Share Folder</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <div role="listbox" style="margin: 0; padding: 20px 25px 25px 25px;">
            <div style="margin: 10px 0px">People</div>
            <div style="display: flex;">
              <div id="textfields" style="flex-grow: 2">
                <wl-textfield type="email" label="Enter e-mail address"></wl-textfield>
              </div>
              <div>
                <wl-button fab flat @click="${e=>this._addTextField(e)}">
                  <wl-icon>add</wl-icon>
                </wl-button>
                <wl-button fab flat @click="${e=>this._removeTextField(e)}">
                  <wl-icon>remove</wl-icon>
                </wl-button>
              </div>
            </div>
            <div style="margin: 10px 0px">Permissions</div>
            <div style="display: flex; justify-content: space-evenly;">
              <wl-label>
                <wl-checkbox checked disabled></wl-checkbox>
                View
              </wl-label>
              <wl-label>
                <wl-checkbox id="share-folder-write"></wl-checkbox>
                Edit
              </wl-label>
            </div>

            <wl-button
              type="button"
              outlined
              id="share-button"
              style="width: 100%; box-sizing: border-box;"
              @click=${e=>this._shareFolder(e)}
            >
              <wl-icon>share</wl-icon>
              Share
            </wl-button>
          </div>
        </wl-card>
      </wl-dialog>
      <wl-dialog
        id="modify-permission-dialog"
        class="dialog-ask"
        fixed backdrop blockscrolling
      >
        <wl-card class="intro" style="margin: 0; width: 100%;">
          <h3 class="horizontal center layout" style="border-bottom:1px solid #ddd;">
            <span>Modify Permissions</span>
            <div class="flex"></div>
            <wl-button fab flat inverted @click="${e=>this._hideDialog(e)}">
              <wl-icon>close</wl-icon>
            </wl-button>
          </h3>
          <div role="listbox" style="margin: 0; padding: 10px;">
            <vaadin-grid theme="row-stripes column-borders compact" .items="${this.invitees}">
              <vaadin-grid-column
                width="30px"
                flex-grow="0"
                header="#"
                .renderer="${this._boundIndexRenderer}"
              ></vaadin-grid-column>
              <vaadin-grid-column header="Invitee Email">
                <template>
                  <div>[[item.shared_to.email]]</div>
                </template>
              </vaadin-grid-column>
              <vaadin-grid-column header="Permission" .renderer="${this._boundPermissionRenderer}">
              </vaadin-grid-column>
            </vaadin-grid>
          </div>
        </wl-card>
        <div slot="footer">
          <wl-button
            type="button"
            outlined
            style="width: 100%; box-sizing: border-box;"
            @click=${this._modifySharedFolderPermissions}
          >
            <wl-icon>check</wl-icon>
            Save Changes
          </wl-button>
        </div>
      </wl-dialog>
      <wl-dialog id="delete-file-dialog" fixed backdrop blockscrolling>
         <wl-title level="3" slot="header">Let's double-check</wl-title>
         <div slot="content">
            <p>This action cannot be undone. Do you want to proceed?</p>
         </div>
         <div slot="footer">
            <wl-button inverted flat @click="${e=>this._hideDialog(e)}">Cancel</wl-button>
            <wl-button @click="${e=>this._deleteFileWithCheck(e)}">Okay</wl-button>
         </div>
      </wl-dialog>

    `}_modifySharedFolderPermissions(){const e=this.shadowRoot.querySelectorAll("#modify-permission-dialog wl-select"),t=Array.prototype.filter.call(e,(e,t)=>e.value!==this.invitees[t].perm).map((e,t)=>({perm:e.value,user:this.invitees[t].shared_to.uuid,vfolder:this.invitees[t].vfolder_id})).map(e=>window.backendaiclient.vfolder.modify_invitee_permission(e));Promise.all(t).then(e=>{0===e.length?this.notification.text="No changes made.":this.notification.text="Permission successfully modified.",this.notification.show(),this.shadowRoot.querySelector("#modify-permission-dialog").hide()})}permissionRenderer(e,t,i){render(html$1`
        <div>
          <wl-select outlined label="Select Permission">
            <option ?selected=${"ro"===i.item.perm} value="ro">View</option>
            <option ?selected=${"rw"===i.item.perm} value="rw">Edit</option>
            <option ?selected=${"wd"===i.item.perm} value="wd">Edit+Delete</option>
          </wl-select>
        </div>
      `,e)}_addTextField(e){let t=document.createElement("wl-textfield");t.label="Enter e-mail address",t.type="email",this.shadowRoot.querySelector("#textfields").appendChild(t)}_removeTextField(e){const t=this.shadowRoot.querySelector("#textfields");t.removeChild(t.lastChild)}indexRenderer(e,t,i){render(html$1`${this._indexFrom1(i.index)}`,e)}controlFolderListRenderer(e,t,i){render(html$1`
        <div
          id="controls"
          class="layout horizontal flex center"
          folder-id="${i.item.name}"
        >
          <paper-icon-button
            class="fg green controls-running"
            icon="vaadin:info-circle-o"
            @click="${e=>this._infoFolder(e)}"
          ></paper-icon-button>

          ${this._hasPermission(i.item,"r")?html$1`
              <paper-icon-button
                class="fg blue controls-running"
                icon="folder-open"
                @click="${e=>this._folderExplorer(e)}" .folder-id="${i.item.name}"
              ></paper-icon-button>
            `:html$1``}

          ${this._hasPermission(i.item,"w"),html$1``}

          ${i.item.is_owner&&"user"==i.item.type?html$1`
              <paper-icon-button
                class="fg blue controls-running"
                icon="social:share"
                @click="${e=>this._shareFolderDialog(e)}"
              ></paper-icon-button>
            `:html$1``}

          ${i.item.is_owner?html$1`
              <paper-icon-button
                class="fg cyan controls-running"
                icon="perm-identity"
                @click=${e=>this._modifyPermissionDialog(i.item.id)}
              ></paper-icon-button>
            `:html$1``}

          ${this._hasPermission(i.item,"d")?html$1`
              <paper-icon-button
                class="fg red controls-running"
                icon="delete"
                @click="${e=>this._deleteFolderDialog(e)}"
              ></paper-icon-button>
            `:html$1``}
        </div>
       `,e)}controlFileListRenderer(e,t,i){render(html$1`
        ${!this._isDir(i.item)&&this._isDownloadable(i.item)?html$1`
            <paper-icon-button id="download-btn" class="tiny fg blue" icon="vaadin:download"
                               filename="${i.item.filename}" @click="${e=>this._downloadFile(e)}"></paper-icon-button>
            <paper-icon-button id="delete-btn" class="tiny fg red" icon="vaadin:trash"
                               filename="${i.item.filename}" @click="${e=>this._openDeleteFileDialog(e)}"></paper-icon-button>
                               `:html$1``}
       `,e)}fileNameRenderer(e,t,i){render(html$1`
        ${this._isDir(i.item)?html$1`
          <div class="indicator" @click="${e=>this._enqueueFolder(e)}" name="${i.item.filename}">
            <paper-icon-button class="fg controls-running" icon="folder-open"
                               name="${i.item.filename}"></paper-icon-button>
            ${i.item.filename}
          </div>
       `:html$1`
          <div class="indicator">
            <paper-icon-button class="fg controls-running" icon="insert-drive-file"></paper-icon-button>
            ${i.item.filename}
          </div>
       `}
      `,e)}permissionViewRenderer(e,t,i){render(html$1`
        <div class="horizontal center-justified wrap layout">
        ${this._hasPermission(i.item,"r")?html$1`
            <lablup-shields app="" color="green"
                            description="R" ui="flat"></lablup-shields>`:html$1``}
        ${this._hasPermission(i.item,"w")?html$1`
            <lablup-shields app="" color="blue"
                            description="W" ui="flat"></lablup-shields>`:html$1``}
        ${this._hasPermission(i.item,"d")?html$1`
            <lablup-shields app="" color="red"
                            description="D" ui="flat"></lablup-shields>`:html$1``}
        </div>`,e)}createdTimeRenderer(e,t,i){render(html$1`
        <div class="layout vertical">
            <span>${this._humanReadableTime(i.item.ctime)}</span>
        </div>`,e)}typeRenderer(e,t,i){render(html$1`
        <div class="layout vertical center-justified">
        ${"user"==i.item.type?html$1`
          <wl-icon>person</wl-icon>
        `:html$1`
          <wl-icon>group</wl-icon>
        `}
        </div>`,e)}firstUpdated(){this._addEventListenerDropZone(),this._mkdir=this._mkdir.bind(this),this.deleteFileDialog=this.shadowRoot.querySelector("#delete-file-dialog"),this.fileListGrid=this.shadowRoot.querySelector("#fileList-grid"),this.fileListGrid.addEventListener("selected-items-changed",()=>{this._toggleCheckbox()}),this.indicator=this.shadowRoot.querySelector("#loading-indicator"),this.notification=window.lablupNotification,document.addEventListener("backend-ai-group-changed",e=>this._refreshFolderList())}_refreshFolderList(){this.indicator.show();let e=null;e=window.backendaiclient.current_group_id(),window.backendaiclient.vfolder.list(e).then(e=>{this.indicator.hide(),this.folders=e}),window.backendaiclient.vfolder.list_hosts().then(e=>{})}async _viewStateChanged(e){await this.updateComplete,!1!==e&&(void 0===window.backendaiclient||null===window.backendaiclient||!1===window.backendaiclient.ready?document.addEventListener("backend-ai-connected",()=>{this.is_admin=window.backendaiclient.is_admin,this.authenticated=!0,window.backendaiclient.vfolder.allowed_types().then(e=>{this.allowed_folder_type=e}),this._refreshFolderList()},!0):(this.is_admin=window.backendaiclient.is_admin,this.authenticated=!0,window.backendaiclient.vfolder.allowed_types().then(e=>{this.allowed_folder_type=e}),this._refreshFolderList()))}async _addFolderDialog(){let e=await window.backendaiclient.vfolder.list_hosts();if(this.vhosts=e.allowed,this.vhost=e.default,this.allowed_folder_type.includes("group")){const e=await window.backendaiclient.group.list();this.allowedGroups=e.groups}this.openDialog("add-folder-dialog")}_folderExplorerDialog(){this.openDialog("folder-explorer-dialog")}_mkdirDialog(){this.shadowRoot.querySelector("#mkdir-name").value="",this.openDialog("mkdir-dialog")}openDialog(e){this.shadowRoot.querySelector("#"+e).show()}closeDialog(e){this.shadowRoot.querySelector("#"+e).hide()}_indexFrom1(e){return e+1}_hasPermission(e,t){return!!e.permission.includes(t)||!(!e.permission.includes("w")||"r"!==t)}_addFolder(){let e,t=this.shadowRoot.querySelector("#add-folder-name").value,i=this.shadowRoot.querySelector("#add-folder-host").value,o=this.shadowRoot.querySelector("#add-folder-type").value;!1===["user","group"].includes(o)&&(o="user"),e="user"==o?"":this.is_admin?this.shadowRoot.querySelector("#add-folder-group").value:window.backendaiclient.current_group,window.backendaiclient.vfolder.create(t,i,e).then(e=>{this.notification.text="Folder is successfully created.",this.notification.show(),this._refreshFolderList()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))}),this.closeDialog("add-folder-dialog")}_getControlId(e){return e.target.closest("#controls").getAttribute("folder-id")}_infoFolder(e){const t=this._getControlId(e);window.backendaiclient.vfolder.info(t).then(e=>{this.folderInfo=e,this.openDialog("info-folder-dialog")}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_deleteFolderDialog(e){this.deleteFolderId=this._getControlId(e),this.shadowRoot.querySelector("#delete-folder-name").value="",this.openDialog("delete-folder-dialog")}_deleteFolderWithCheck(){if(this.shadowRoot.querySelector("#delete-folder-name").value!=this.deleteFolderId)return this.notification.text="Folder name mismatched. Check your typing.",void this.notification.show();this.closeDialog("delete-folder-dialog"),this._deleteFolder(this.deleteFolderId)}_deleteFolder(e){window.backendaiclient.vfolder.delete(e).then(e=>{this.notification.text="Folder is successfully deleted.",this.notification.show(),this._refreshFolderList()}).catch(e=>{console.log(e),e&&e.message&&(this.notification.text=BackendAIPainKiller.relieve(e.title),this.notification.detail=e.message,this.notification.show(!0,e))})}_clearExplorer(e=this.explorer.breadcrumb.join("/"),t=this.explorer.id,i=!1){window.backendaiclient.vfolder.list_files(e,t).then(e=>{this.shadowRoot.querySelector("#fileList-grid").selectedItems=[],this.explorer.files=JSON.parse(e.files),this.explorerFiles=this.explorer.files,i&&this.openDialog("folder-explorer-dialog")})}_folderExplorer(e){let t={id:this._getControlId(e),breadcrumb:["."]};this.explorer=t,this._clearExplorer(t.breadcrumb.join("/"),t.id,!0)}_enqueueFolder(e){const t=e.target.getAttribute("name");this.explorer.breadcrumb.push(t),this._clearExplorer()}_gotoFolder(e){const t=e.target.getAttribute("dest");let i=this.explorer.breadcrumb;const o=i.indexOf(t);-1!==o&&(i=i.slice(0,o+1),this.explorer.breadcrumb=i,this._clearExplorer(i.join("/"),this.explorer.id,!1))}_mkdir(e){const t=this.shadowRoot.querySelector("#mkdir-name").value,i=this.explorer;window.backendaiclient.vfolder.mkdir([...i.breadcrumb,t].join("/"),i.id).then(e=>{this.closeDialog("mkdir-dialog"),this._clearExplorer()})}_isDir(e){return e.mode.startsWith("d")}_addEventListenerDropZone(){const e=this.shadowRoot.querySelector("#folder-explorer-dialog"),t=this.shadowRoot.querySelector("#dropzone");t.addEventListener("dragleave",()=>{t.style.display="none"}),e.addEventListener("dragover",e=>(e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy",t.style.display="flex",!1)),e.addEventListener("drop",e=>{e.stopPropagation(),e.preventDefault(),t.style.display="none";let i=[];for(let t=0;t<e.dataTransfer.files.length;t++){const o=e.dataTransfer.files[t];o.size>2**20?console.log("File size limit (< 1 MiB)"):(o.progress=0,o.caption="",o.error=!1,o.complete=!1,i.push(o),this.uploadFiles.push(o))}for(let e=0;e<i.length;e++)this.fileUpload(i[e]),this._clearExplorer()})}_uploadFileBtnClick(e){const t=this.shadowRoot.querySelector("#fileInput");if(t&&document.createEvent){const e=document.createEvent("MouseEvents");e.initEvent("click",!0,!1),t.dispatchEvent(e)}}_uploadFileChange(e){const t=e.target.files.length;for(let i=0;i<t;i++){const t=e.target.files[i];let o="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let e=0;e<5;e++)o+=r.charAt(Math.floor(Math.random()*r.length));t.id=o,t.progress=0,t.caption="",t.error=!1,t.complete=!1,this.uploadFiles.push(t)}for(let e=0;e<t;e++)this.fileUpload(this.uploadFiles[e]);this.shadowRoot.querySelector("#fileInput").value=""}fileUpload(e){this._uploadFlag=!0,this.uploadFilesExist=this.uploadFiles.length>0;const t=this.explorer.breadcrumb.concat(e.name).join("/");window.backendaiclient.vfolder.create_upload_session(t,e,this.explorer.id).then(i=>{const o=(new Date).getTime(),r=new tus.Upload(e,{retryDelays:[0,3e3,5e3,1e4,2e4],uploadUrl:i,chunkSize:15728640,metadata:{filename:t,filetype:e.type},onError:function(e){console.log("Failed because: "+e)},onProgress:(t,i)=>{if(!this._uploadFlag)return r.abort(),this.uploadFiles[this.uploadFiles.indexOf(e)].caption="Canceling...",this.uploadFiles=this.uploadFiles.slice(),void setTimeout(()=>{this.uploadFiles=[],this.uploadFilesExist=!1},1e3);const n=(new Date).getTime(),a=(t/1048576/((n-o)/1e3)).toFixed(1)+"MB/s",l=Math.floor((i-t)/(t/(n-o)*1e3));let s="Less than 10 seconds";if(l>=86400)s="More than a day";else if(l>10){s=`${Math.floor(l/3600)}:${Math.floor(l%3600/60)}:${l%60}`}const d=(t/i*100).toFixed(1);this.uploadFiles[this.uploadFiles.indexOf(e)].progress=t/i,this.uploadFiles[this.uploadFiles.indexOf(e)].caption=`${d}% / Time left : ${s} / Speed : ${a}`,this.uploadFiles=this.uploadFiles.slice()},onSuccess:()=>{this._clearExplorer(),this.uploadFiles[this.uploadFiles.indexOf(e)].complete=!0,this.uploadFiles=this.uploadFiles.slice(),setTimeout(()=>{this.uploadFiles.splice(this.uploadFiles.indexOf(e),1),this.uploadFilesExist=this.uploadFiles.length>0,this.uploadFiles=this.uploadFiles.slice()},1e3)}});r.start()})}_cancelUpload(e){this._uploadFlag=!1}_downloadFile(e){let t=e.target.getAttribute("filename"),i=this.explorer.breadcrumb.concat(t).join("/");window.backendaiclient.vfolder.request_download_token(i,this.explorer.id).then(e=>{const i=e.token,o=window.backendaiclient.vfolder.get_download_url_with_token(i);let r=document.createElement("a");r.addEventListener("click",(function(e){e.stopPropagation()})),r.href=o,r.download=t,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(o)})}_openDeleteFileDialog(e){let t=e.target.getAttribute("filename");this.deleteFileDialog.filename=t,this.deleteFileDialog.files=[],this.deleteFileDialog.show()}_openDeleteMultipleFileDialog(e){this.deleteFileDialog.files=this.fileListGrid.selectedItems,this.deleteFileDialog.filename="",this.deleteFileDialog.show()}_deleteFileWithCheck(e){let t=this.deleteFileDialog.files;if(t.length>0){let e=[];t.forEach(t=>{let i=this.explorer.breadcrumb.concat(t.filename).join("/");e.push(i)}),window.backendaiclient.vfolder.delete_files(e,!0,this.explorer.id).then(e=>{this.notification.text="Files deleted.",this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()})}else if(""!=this.deleteFileDialog.filename){let e=this.explorer.breadcrumb.concat(this.deleteFileDialog.filename).join("/");window.backendaiclient.vfolder.delete_files([e],!0,this.explorer.id).then(e=>{this.notification.text="File deleted.",this.notification.show(),this._clearExplorer(),this.deleteFileDialog.hide()})}}_deleteFile(e){let t=e.target.getAttribute("filename"),i=this.explorer.breadcrumb.concat(t).join("/");window.backendaiclient.vfolder.delete_files([i],!0,this.explorer.id).then(e=>{this.notification.text="File deleted.",this.notification.show(),this._clearExplorer()})}_humanReadableTime(e){const t=new Date(1e3*e),i=t.getTimezoneOffset()/60,o=t.getHours();return t.setHours(o-i),t.toUTCString()}_isDownloadable(e){return!0}_hideDialog(e){e.target.closest("wl-dialog").hide()}_shareFolderDialog(e){this.selectedFolder=this._getControlId(e),this.openDialog("share-folder-dialog")}_modifyPermissionDialog(e){window.backendaiclient.vfolder.list_invitees(e).then(e=>{this.invitees=e.shared,this.openDialog("modify-permission-dialog")})}_shareFolder(e){const t=this.shadowRoot.querySelector("#textfields").children,i=Array.prototype.filter.call(t,e=>!e.hasAttribute("invalid")&&""!==e.value).map(e=>e.value.trim()),o="r"+(this.shadowRoot.querySelector("#share-folder-write").checked?"w":"o");if(0!==i.length)window.backendaiclient.vfolder.invite(o,i,this.selectedFolder).then(e=>{let o;o=e.invited_ids&&e.invited_ids.length>0?e.invited_ids.reduce((e,t)=>e+t+" ","")+(1===i.length?"was":"were")+" successfully invited":"No one was invited",this.notification.text=o,this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(let e of t)e.value=""});else{this.notification.text="No valid emails were entered",this.notification.show(),this.shadowRoot.querySelector("#share-folder-dialog").hide();for(let e of t)e.value=""}}};BackendAIData=__decorate([customElement("backend-ai-data-view")],BackendAIData);var BackendAIData$1=BackendAIData;export default BackendAIData$1;
