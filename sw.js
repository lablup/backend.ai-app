if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,n,a)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}})).then(e=>{const s=a(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"dist/components/backend-ai-agent-view-e07d0a81.js",revision:"68fb8278efa24913dc0521d5c93ba515"},{url:"dist/components/backend-ai-change-forgot-password-view-b00deda1.js",revision:"fd35df9eb1bc1bede2209e02f387b6a8"},{url:"dist/components/backend-ai-chart-8114c71a.js",revision:"f9fcb082e14cc0e813a8d1f5a8d3ec2a"},{url:"dist/components/backend-ai-console-33bc2716.js",revision:"aa57d59b1cad3609f1dfd9e55eaaa464"},{url:"dist/components/backend-ai-console.js",revision:"e9e7bde0c2a7e2a1ea82a4bbec9b8566"},{url:"dist/components/backend-ai-credential-view-ae5bf85a.js",revision:"5b1375fabe365b68d78b24897caed4bf"},{url:"dist/components/backend-ai-data-view-8bc8c82a.js",revision:"75bf2cd03cfe9beac4d1519c81a8f885"},{url:"dist/components/backend-ai-email-verification-view-a84b0c40.js",revision:"ca1d3ac1931a065ced3ed440251aa4b8"},{url:"dist/components/backend-ai-environment-view-223ec2fe.js",revision:"ac0d87b775b1e903aadca0e89a8496d1"},{url:"dist/components/backend-ai-error-log-list-efdc4ce2.js",revision:"12cc2a968d957a0e3073555458e530dc"},{url:"dist/components/backend-ai-error-log-view-a9900c5f.js",revision:"58d6aebf2b459bee27989ea5062c440e"},{url:"dist/components/backend-ai-error-view-0a9b02da.js",revision:"a73822199e82059033bbb14334313f81"},{url:"dist/components/backend-ai-experiment-view-8cdce2b2.js",revision:"027821976e6248950885b4919d38d430"},{url:"dist/components/backend-ai-import-view-6185ebda.js",revision:"95bb8db88f31dece71f290ec852cd6ea"},{url:"dist/components/backend-ai-information-view-5fbd9629.js",revision:"0727c61e620baa665e6d59b91477c8b7"},{url:"dist/components/backend-ai-maintenance-view-264de6bb.js",revision:"08a9144115c9721bbe7dc9a5ea96d1f0"},{url:"dist/components/backend-ai-session-launcher-b498d91f.js",revision:"dd4c30d0cbd7ecd4cfeda0dfabcc43f8"},{url:"dist/components/backend-ai-session-list-0a8b9cdd.js",revision:"cf94e140af64bf55fe1042256554ca89"},{url:"dist/components/backend-ai-session-view-c1943714.js",revision:"4899fc113f0a9eb8418a2d4bbbf3df7f"},{url:"dist/components/backend-ai-settings-view-a3a1cf22.js",revision:"38734513afa14bf7fcb8e00c2fad4573"},{url:"dist/components/backend-ai-statistics-view-13a72c4f.js",revision:"ebe10e800b45dba90fe15d76ff416e63"},{url:"dist/components/backend-ai-summary-view-242eef0c.js",revision:"c61e35734a1f7c69ff19071bda62e409"},{url:"dist/components/backend-ai-usersettings-view-ec5f7cbe.js",revision:"b03ff2f39cb58eceda76cd7dcdc1aba6"},{url:"dist/components/expansion-d3426563.js",revision:"0261247b39a466369cbfcce74a4dd7b4"},{url:"dist/components/field-button-392174e8.js",revision:"7279d9efffff0abadbd5b0ec40846f4c"},{url:"dist/components/iconset-b6786ef5.js",revision:"774d2cc97b3face99f9087c4ee60492f"},{url:"dist/components/iron-iconset-svg-04ff383c.js",revision:"e9746cd1c9e99f019c1a0b1a84025983"},{url:"dist/components/iron-resizable-behavior-60d31af0.js",revision:"5faacefde1395fc21849f26ba238949e"},{url:"dist/components/json_to_csv-0a6876b9.js",revision:"4649463213054be2749072202906db83"},{url:"dist/components/label-d001d26a.js",revision:"4a38603b9c17401fa0c6e48bbdcd36cc"},{url:"dist/components/lablup-activity-panel-da1a7c78.js",revision:"35755f656310cc383a05e5e4e1c02efc"},{url:"dist/components/mwc-linear-progress-dd49070e.js",revision:"a585f0a30fa7f51ea56e28383c595d15"},{url:"dist/components/paper-dropdown-menu-a208b033.js",revision:"865d459e6d2cd3adbbf2a60faa4c393f"},{url:"dist/components/paper-item-9f2ac1d7.js",revision:"58478d03be639ecf4f17d391b4831bba"},{url:"dist/components/radio-behavior-0d67e81a.js",revision:"43bdccf578041a2b18429c3e80fb01b0"},{url:"dist/components/select-d9732b41.js",revision:"5fb565a24e2e97969fdeea713b628745"},{url:"dist/components/switch-8aa44e91.js",revision:"4e6a485812757be48a337074ab13fd3c"},{url:"dist/components/tab-group-5d1eb0aa.js",revision:"7d7f806b7beac5b19e6da94641dd2533"},{url:"dist/components/textarea-6423bb0e.js",revision:"1b35a9d6c5b7849060cc8d704eb46d51"},{url:"dist/components/translate-unsafe-html-aa6e6af6.js",revision:"83989216506573a74dec8b2fadde3f6a"},{url:"dist/components/unsafe-html-015207e0.js",revision:"5c3abc4add5778dc208d4078a6f8eb47"},{url:"dist/components/vaadin-grid-filter-column-b2151e13.js",revision:"06b986eaee6b55fa719e7ed035b8242b"},{url:"dist/components/vaadin-grid-selection-column-cb6c01c6.js",revision:"7de708cebfeef6e7f3efc588dc2ab92f"},{url:"dist/components/vaadin-grid-sort-column-1a0e592f.js",revision:"ca02a0f431a51fd1be8dc3307d76942f"},{url:"dist/components/vaadin-grid-sorter-efab20c6.js",revision:"9caa61b2ab2552ea66ba790b166071bf"},{url:"src/lib/bundles/webcomponents-ce.js",revision:"fb2608da8f301832531117b05f4acdb3"},{url:"src/lib/bundles/webcomponents-sd-ce-pf.js",revision:"3a28d79ed7dae933323bcabb6ad3dade"},{url:"src/lib/bundles/webcomponents-sd-ce.js",revision:"d0c0741d9f0612fcaf6589ba17a78bd8"},{url:"src/lib/bundles/webcomponents-sd.js",revision:"e2f0b54cb1564b7467ce56bab4945e77"},{url:"src/lib/web-animations-js/web-animations-next-lite.min.js",revision:"5944e892a183b133269418ddf4a6e2c9"},{url:"src/lib/webcomponents-loader.js",revision:"e044a63e034bf10304dad73138b8c74b"}],{})}));
//# sourceMappingURL=sw.js.map
