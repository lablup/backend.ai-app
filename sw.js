if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,n,a)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}})).then(e=>{const s=a(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"dist/components/backend-ai-agent-view-5246ecb6.js",revision:"4cfef2558b8625eb4c83e7479b863944"},{url:"dist/components/backend-ai-change-forgot-password-view-0e6ab73d.js",revision:"d8de20b7be204fb4753bba38bd8815f7"},{url:"dist/components/backend-ai-chart-4a6a30e8.js",revision:"23e915398677aaa1c47b108b397cb52f"},{url:"dist/components/backend-ai-console-d9b9a5ab.js",revision:"19676d914457ada09a69d7ee0db9cad9"},{url:"dist/components/backend-ai-console.js",revision:"6497db7775bd60e1e4d81d79dc6e4896"},{url:"dist/components/backend-ai-credential-view-875cd4bd.js",revision:"5ef0ce985b44a0122280f9b499988d5a"},{url:"dist/components/backend-ai-data-view-023a313c.js",revision:"54c53134534593d3e17970e8d6c5a11a"},{url:"dist/components/backend-ai-email-verification-view-982dcc3d.js",revision:"451557e671c61e95e11f22fe0558b50d"},{url:"dist/components/backend-ai-environment-view-3b33f8b1.js",revision:"31ae0e356c1b2ffbc60f055c8b5c3f88"},{url:"dist/components/backend-ai-error-log-list-0d193827.js",revision:"df8631eed7f13c9cae6d746e0a1e623a"},{url:"dist/components/backend-ai-error-log-view-80ab0395.js",revision:"5d314b7967bcefdaaeb045a632022217"},{url:"dist/components/backend-ai-error-view-a5120a78.js",revision:"cf13d8d19b246f72c50cd5dd40386cae"},{url:"dist/components/backend-ai-experiment-view-ae6490ac.js",revision:"ad08ebda491f0fa4adce06dd0eac7d82"},{url:"dist/components/backend-ai-import-view-0773deb7.js",revision:"1f40ebb8deb8e68730cf5bfdaff5cadf"},{url:"dist/components/backend-ai-information-view-5e8f2027.js",revision:"82058a4910f1c3759d3f7f4dbe8e1191"},{url:"dist/components/backend-ai-maintenance-view-8582935a.js",revision:"e81a2e5d1f267a6b66126707d243a1e4"},{url:"dist/components/backend-ai-session-launcher-5daf7563.js",revision:"a7b02546f44c8647ea7d42da31f17cd3"},{url:"dist/components/backend-ai-session-list-beed9877.js",revision:"471ede7159c7b0d490acc8a9725592d7"},{url:"dist/components/backend-ai-session-view-2451b68c.js",revision:"d07fde5f955cf18d33cd971c02f0dc1b"},{url:"dist/components/backend-ai-settings-view-07d0190f.js",revision:"9d1990fbb6ee582c687926ebc5a9608b"},{url:"dist/components/backend-ai-statistics-view-81f7bc1d.js",revision:"349230004aa05415f94c2da1d3575007"},{url:"dist/components/backend-ai-summary-view-1b7729db.js",revision:"b23862be06515faaa022cea21dff2e69"},{url:"dist/components/backend-ai-usersettings-view-281311b0.js",revision:"46f8c835b69e4fa6ec1ae4c07b21bdf3"},{url:"dist/components/expansion-2224b0c3.js",revision:"42cdf840a530a2a0a8c9876eaeac1227"},{url:"dist/components/field-button-392174e8.js",revision:"7279d9efffff0abadbd5b0ec40846f4c"},{url:"dist/components/iconset-b6786ef5.js",revision:"774d2cc97b3face99f9087c4ee60492f"},{url:"dist/components/iron-iconset-svg-04ff383c.js",revision:"e9746cd1c9e99f019c1a0b1a84025983"},{url:"dist/components/iron-resizable-behavior-60d31af0.js",revision:"5faacefde1395fc21849f26ba238949e"},{url:"dist/components/json_to_csv-0a6876b9.js",revision:"4649463213054be2749072202906db83"},{url:"dist/components/label-f3842d1a.js",revision:"6aff72b092c2beae2c093c57ea43cdb1"},{url:"dist/components/lablup-activity-panel-d3ca2bd2.js",revision:"fb54eeb83c602ac8192c473fa292d43a"},{url:"dist/components/mwc-linear-progress-b0144366.js",revision:"7adef4bcb845aaadb14d602cbb8ec5c4"},{url:"dist/components/paper-dropdown-menu-a208b033.js",revision:"865d459e6d2cd3adbbf2a60faa4c393f"},{url:"dist/components/paper-item-9f2ac1d7.js",revision:"58478d03be639ecf4f17d391b4831bba"},{url:"dist/components/radio-behavior-0218e0db.js",revision:"bebf77698a7ce3c6a7c0bfe291535145"},{url:"dist/components/select-5f3f9459.js",revision:"dda054e6018fb2845e4e2b1beb13bdd6"},{url:"dist/components/switch-42e77f02.js",revision:"9036fc243179396f1af550524a09ac48"},{url:"dist/components/tab-group-9b27cdd6.js",revision:"8c149aefa8b236623c0dd5025fd26b9c"},{url:"dist/components/textarea-394c7e79.js",revision:"265789308b3ef144085d2ddd13f4ba85"},{url:"dist/components/translate-unsafe-html-81a59f03.js",revision:"dfb6e652d7799f71c4c42435957ac35f"},{url:"dist/components/unsafe-html-7ea47ac0.js",revision:"0a5c990d9e8742854a4b5b8caf647091"},{url:"dist/components/vaadin-grid-filter-column-b2151e13.js",revision:"06b986eaee6b55fa719e7ed035b8242b"},{url:"dist/components/vaadin-grid-selection-column-cb6c01c6.js",revision:"7de708cebfeef6e7f3efc588dc2ab92f"},{url:"dist/components/vaadin-grid-sort-column-1a0e592f.js",revision:"ca02a0f431a51fd1be8dc3307d76942f"},{url:"dist/components/vaadin-grid-sorter-efab20c6.js",revision:"9caa61b2ab2552ea66ba790b166071bf"},{url:"src/lib/bundles/webcomponents-ce.js",revision:"fb2608da8f301832531117b05f4acdb3"},{url:"src/lib/bundles/webcomponents-sd-ce-pf.js",revision:"3a28d79ed7dae933323bcabb6ad3dade"},{url:"src/lib/bundles/webcomponents-sd-ce.js",revision:"d0c0741d9f0612fcaf6589ba17a78bd8"},{url:"src/lib/bundles/webcomponents-sd.js",revision:"e2f0b54cb1564b7467ce56bab4945e77"},{url:"src/lib/web-animations-js/web-animations-next-lite.min.js",revision:"5944e892a183b133269418ddf4a6e2c9"},{url:"src/lib/webcomponents-loader.js",revision:"e044a63e034bf10304dad73138b8c74b"}],{})}));
//# sourceMappingURL=sw.js.map
