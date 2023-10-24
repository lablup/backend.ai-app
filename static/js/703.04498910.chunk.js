"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[703],{37007:function(e,n,o){var t=o(99277),r=o(82548),i=o(32048),l=o.n(i),c=o(4519),a=o(2556);n.Z=function(e){var n,o=e.values,i=void 0===o?[]:o;return 0===i.length?null:(n=i[0]&&("string"===typeof i[0]||c.isValidElement(i[0]))?i.map((function(e){return{label:e,color:"blue"}})):i,(0,a.jsx)(t.Z,{direction:"row",children:l().map(n,(function(e,o){return(0,a.jsx)(r.Z,{style:l().last(n)===e?void 0:{margin:0,marginRight:-1,zIndex:1},color:e.color,children:e.label},o)}))}))}},41703:function(e,n,o){o.r(n),o.d(n,{default:function(){return v}});var t=o(43255),r=o(87760),i=o(37007),l=o(99277),c=o(83861),a=o(43971),s=o(28499),d=o(44036),u=o(11718).Z,m=o(36038).Z,f=o(53066),g=o(93448),x=o(82548),b=o(39883),h=o(81748),p=o(87112),Z=o(2556),j=function(e){var n=e.title,o=e.subtitle;return(0,Z.jsxs)(l.Z,{direction:"column",align:"start",children:[(0,Z.jsx)(s.Z.Text,{strong:!0,children:n}),o&&(0,Z.jsx)(s.Z.Text,{type:"secondary",children:o})]})},v=function(){var e=(0,h.$G)().t,n=d.Z.useToken().token,o=(0,r.Dj)(),s=(0,p.useQuery)("licenseInfo",(function(){return o.enterprise.getLicense()}),{suspense:!1}),v=s.data,C=s.isLoading;v||(v={valid:!1,type:e("information.CannotRead"),licensee:e("information.CannotRead"),key:e("information.CannotRead"),expiration:e("information.CannotRead")});var y={xxl:4,xl:4,lg:2,md:1,sm:1,xs:1};return(0,Z.jsxs)(l.Z,{direction:"column",align:"stretch",style:{margin:n.marginSM,gap:n.margin},children:[(0,Z.jsxs)(u,{gutter:[n.margin,n.margin],children:[(0,Z.jsx)(m,{xs:24,xxl:12,children:(0,Z.jsx)(f.Z,{style:{height:"100%"},children:(0,Z.jsxs)(g.Z,{title:e("information.Core"),bordered:!0,column:y,children:[(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.ManagerVersion")}),children:(0,Z.jsxs)(l.Z,{direction:"column",style:{gap:n.marginXXS},align:"start",children:["Backend.AI ",o.managerVersion,(0,Z.jsx)(i.Z,{values:[e("information.Installation"),o.managerVersion]})]})}),(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.APIVersion")}),children:o.apiVersion})]})})}),(0,Z.jsx)(m,{xs:24,xxl:12,children:(0,Z.jsx)(f.Z,{children:(0,Z.jsxs)(g.Z,{title:e("information.Security"),bordered:!0,column:y,children:[(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.DefaultAdministratorAccountChanged"),subtitle:e("information.DescDefaultAdministratorAccountChanged")}),children:(0,Z.jsx)(c.Z,{title:"Yes"})}),(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.UsesSSL"),subtitle:e("information.DescUsesSSL")}),children:null!==o&&void 0!==o&&o._config.endpoint.startsWith("https:")?(0,Z.jsx)(c.Z,{title:"Yes"}):(0,Z.jsx)(a.Z,{style:{color:"red"},title:"No"})})]})})})]}),(0,Z.jsx)(f.Z,{children:(0,Z.jsxs)(g.Z,{title:e("information.Component"),bordered:!0,column:{xxl:4,xl:2,lg:2,md:1,sm:1,xs:1},children:[(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.DockerVersion"),subtitle:e("information.DescDockerVersion")}),children:(0,Z.jsx)(x.Z,{children:e("information.Compatible")})}),(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.PostgreSQLVersion"),subtitle:e("information.DescPostgreSQLVersion")}),children:(0,Z.jsx)(x.Z,{children:e("information.Compatible")})}),(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.ETCDVersion"),subtitle:e("information.DescETCDVersion")}),children:(0,Z.jsx)(x.Z,{children:e("information.Compatible")})}),(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.RedisVersion"),subtitle:(0,t.We)(e("information.DescRedisVersion"))}),children:(0,Z.jsx)(x.Z,{children:e("information.Compatible")})})]})}),(0,Z.jsx)(f.Z,{children:(0,Z.jsx)(b.Z,{spinning:C,children:(0,Z.jsxs)(g.Z,{title:e("information.License"),bordered:!0,column:{xxl:2,xl:2,lg:2,md:1,sm:1,xs:1},children:[(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.IsLicenseValid"),subtitle:e("information.DescIsLicenseValid")}),children:v.valid?(0,Z.jsx)(c.Z,{}):(0,Z.jsx)(a.Z,{style:{color:"red"}})}),(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.LicenseType"),subtitle:(0,t.We)(e("information.DescLicenseType"))}),children:(0,Z.jsx)(x.Z,{children:"fixed"===v.type?e("information.FixedLicense"):e("information.DynamicLicense")})}),(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.Licensee"),subtitle:e("information.DescLicensee")}),children:(0,Z.jsx)(x.Z,{children:v.licensee})}),(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.LicenseKey"),subtitle:e("information.DescLicenseKey")}),children:(0,Z.jsx)(x.Z,{children:v.key})}),(0,Z.jsx)(g.Z.Item,{label:(0,Z.jsx)(j,{title:e("information.Expiration"),subtitle:e("information.DescExpiration")}),children:(0,Z.jsx)(x.Z,{children:v.expiration})})]})})})]})}},43971:function(e,n,o){o.d(n,{Z:function(){return a}});var t=o(87462),r=o(4519),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}}]},name:"warning",theme:"outlined"},l=o(9491),c=function(e,n){return r.createElement(l.Z,(0,t.Z)({},e,{ref:n,icon:i}))};var a=r.forwardRef(c)},49869:function(e,n,o){o.d(n,{Z:function(){return i}});var t=o(31662),r=o(4519);function i(e,n,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.createElement(t.Z,null),l=function(e,n,o){return"boolean"===typeof e?e:void 0===n?!!o:!1!==n&&null!==n}(e,n,arguments.length>4&&void 0!==arguments[4]&&arguments[4]);if(!l)return[!1,null];var c="boolean"===typeof n||void 0===n||null===n?i:n;return[!0,o?o(c):c]}},82548:function(e,n,o){o.d(n,{Z:function(){return E}});var t=o(4942),r=o(29439),i=o(4519),l=o(31662),c=o(43270),a=o.n(c),s=o(71235),d=o(49869),u=o(99495),m=o(48698),f=o(21480),g=o(41157),x=o(70111),b=function(e){var n=e.lineWidth,o=e.fontSizeIcon,t=e.fontSizeSM,r="".concat(e.lineHeightSM*t,"px");return(0,g.TS)(e,{tagFontSize:t,tagLineHeight:r,tagIconSize:o-2*n,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary})},h=function(e){return{defaultBg:e.colorFillQuaternary,defaultColor:e.colorText}},p=(0,x.Z)("Tag",(function(e){return function(e){var n,o,r,i=e.paddingXXS,l=e.lineWidth,c=e.tagPaddingHorizontal,a=e.componentCls,s=c-l,d=i-l;return r={},(0,t.Z)(r,a,Object.assign(Object.assign({},(0,f.Wf)(e)),(o={display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:s,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,opacity:1,transition:"all ".concat(e.motionDurationMid),textAlign:"start",position:"relative"},(0,t.Z)(o,"&".concat(a,"-rtl"),{direction:"rtl"}),(0,t.Z)(o,"&, a, a:hover",{color:e.defaultColor}),(0,t.Z)(o,"".concat(a,"-close-icon"),{marginInlineStart:d,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),"&:hover":{color:e.colorTextHeading}}),(0,t.Z)(o,"&".concat(a,"-has-color"),(0,t.Z)({borderColor:"transparent"},"&, a, a:hover, ".concat(e.iconCls,"-close, ").concat(e.iconCls,"-close:hover"),{color:e.colorTextLightSolid})),(0,t.Z)(o,"&-checkable",(n={backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer"},(0,t.Z)(n,"&:not(".concat(a,"-checkable-checked):hover"),{color:e.colorPrimary,backgroundColor:e.colorFillSecondary}),(0,t.Z)(n,"&:active, &-checked",{color:e.colorTextLightSolid}),(0,t.Z)(n,"&-checked",{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}}),(0,t.Z)(n,"&:active",{backgroundColor:e.colorPrimaryActive}),n)),(0,t.Z)(o,"&-hidden",{display:"none"}),(0,t.Z)(o,"> ".concat(e.iconCls," + span, > span + ").concat(e.iconCls),{marginInlineStart:s}),o))),(0,t.Z)(r,"".concat(a,"-borderless"),{borderColor:"transparent",background:e.tagBorderlessBg}),r}(b(e))}),h),Z=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]])}return o},j=function(e){var n=e.prefixCls,o=e.style,l=e.className,c=e.checked,s=e.onChange,d=e.onClick,u=Z(e,["prefixCls","style","className","checked","onChange","onClick"]),f=i.useContext(m.E_),g=f.getPrefixCls,x=f.tag,b=g("tag",n),h=p(b),j=(0,r.Z)(h,2),v=j[0],C=j[1],y=a()(b,"".concat(b,"-checkable"),(0,t.Z)({},"".concat(b,"-checkable-checked"),c),null===x||void 0===x?void 0:x.className,l,C);return v(i.createElement("span",Object.assign({},u,{style:Object.assign(Object.assign({},o),null===x||void 0===x?void 0:x.style),className:y,onClick:function(e){null===s||void 0===s||s(!c),null===d||void 0===d||d(e)}})))},v=o(10150),C=(0,x.b)(["Tag","preset"],(function(e){return function(e){return(0,v.Z)(e,(function(n,o){var r=o.textColor,i=o.lightBorderColor,l=o.lightColor,c=o.darkColor;return(0,t.Z)({},"".concat(e.componentCls,"-").concat(n),(0,t.Z)({color:r,background:l,borderColor:i,"&-inverse":{color:e.colorTextLightSolid,background:c,borderColor:c}},"&".concat(e.componentCls,"-borderless"),{borderColor:"transparent"}))}))}(b(e))}),h);var y=function(e,n,o){var r,i="string"!==typeof(r=o)?r:r.charAt(0).toUpperCase()+r.slice(1);return(0,t.Z)({},"".concat(e.componentCls,"-").concat(n),(0,t.Z)({color:e["color".concat(o)],background:e["color".concat(i,"Bg")],borderColor:e["color".concat(i,"Border")]},"&".concat(e.componentCls,"-borderless"),{borderColor:"transparent"}))},k=(0,x.b)(["Tag","status"],(function(e){var n=b(e);return[y(n,"success","Success"),y(n,"processing","Info"),y(n,"error","Error"),y(n,"warning","Warning")]}),h),S=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]])}return o},I=function(e,n){var o,c=e.prefixCls,f=e.className,g=e.rootClassName,x=e.style,b=e.children,h=e.icon,Z=e.color,j=e.onClose,v=e.closeIcon,y=e.closable,I=e.bordered,O=void 0===I||I,E=S(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),L=i.useContext(m.E_),D=L.getPrefixCls,T=L.direction,P=L.tag,w=i.useState(!0),V=(0,r.Z)(w,2),z=V[0],N=V[1];i.useEffect((function(){"visible"in E&&N(E.visible)}),[E.visible]);var B=(0,s.o2)(Z),R=(0,s.yT)(Z),A=B||R,H=Object.assign(Object.assign({backgroundColor:Z&&!A?Z:void 0},null===P||void 0===P?void 0:P.style),x),_=D("tag",c),M=p(_),W=(0,r.Z)(M,2),F=W[0],X=W[1],Q=a()(_,null===P||void 0===P?void 0:P.className,(o={},(0,t.Z)(o,"".concat(_,"-").concat(Z),A),(0,t.Z)(o,"".concat(_,"-has-color"),Z&&!A),(0,t.Z)(o,"".concat(_,"-hidden"),!z),(0,t.Z)(o,"".concat(_,"-rtl"),"rtl"===T),(0,t.Z)(o,"".concat(_,"-borderless"),!O),o),f,g,X),U=function(e){e.stopPropagation(),null===j||void 0===j||j(e),e.defaultPrevented||N(!1)},K=(0,d.Z)(y,v,(function(e){return null===e?i.createElement(l.Z,{className:"".concat(_,"-close-icon"),onClick:U}):i.createElement("span",{className:"".concat(_,"-close-icon"),onClick:U},e)}),null,!1),Y=(0,r.Z)(K,2)[1],G="function"===typeof E.onClick||b&&"a"===b.type,$=h||null,q=$?i.createElement(i.Fragment,null,$,b&&i.createElement("span",null,b)):b,J=i.createElement("span",Object.assign({},E,{ref:n,className:Q,style:H}),q,Y,B&&i.createElement(C,{key:"preset",prefixCls:_}),R&&i.createElement(k,{key:"status",prefixCls:_}));return F(G?i.createElement(u.Z,{component:"Tag"},J):J)},O=i.forwardRef(I);O.CheckableTag=j;var E=O}}]);
//# sourceMappingURL=703.04498910.chunk.js.map