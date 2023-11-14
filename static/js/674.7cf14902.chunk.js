"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[674],{37127:function(e,t,n){n.d(t,{Z:function(){return r}});var r=function(e){return e?"function"===typeof e?e():e:null}},60284:function(e,t,n){n.d(t,{Z:function(){return I}});var r=n(4942),o=n(29439),a=n(4519),i=n(43270),l=n.n(i),c=n(95882),s=n(23946),p=n(90690),u=n(48698),d=n(17669),m=n(27439),f=function(e){var t=e.children,n=(0,a.useContext(u.E_).getPrefixCls)("breadcrumb");return a.createElement("li",{className:"".concat(n,"-separator"),"aria-hidden":"true"},""===t?t:t||"/")};f.__ANT_BREADCRUMB_SEPARATOR=!0;var v=f,g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function b(e,t,n,r){if(null===n||void 0===n)return null;var o=t.className,i=t.onClick,c=g(t,["className","onClick"]),p=Object.assign(Object.assign({},(0,s.Z)(c,{data:!0,aria:!0})),{onClick:i});return void 0!==r?a.createElement("a",Object.assign({},p,{className:l()("".concat(e,"-link"),o),href:r}),n):a.createElement("span",Object.assign({},p,{className:l()("".concat(e,"-link"),o)}),n)}function y(e,t){return function(n,r,o,a,i){if(t)return t(n,r,o,a);var l=function(e,t){if(void 0===e.title||null===e.title)return null;var n=Object.keys(t).join("|");return"object"===typeof e.title?e.title:String(e.title).replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(n,r);return b(e,n,l,i)}}var O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},h=function(e){var t=e.prefixCls,n=e.separator,r=void 0===n?"/":n,o=e.children,i=e.menu,l=e.overlay,c=e.dropdownProps,s=e.href,p=function(e){if(i||l){var n=Object.assign({},c);if(i){var r=i||{},o=r.items,p=O(r,["items"]);n.menu=Object.assign(Object.assign({},p),{items:null===o||void 0===o?void 0:o.map((function(e,t){var n=e.key,r=e.title,o=e.label,i=e.path,l=O(e,["key","title","label","path"]),c=null!==o&&void 0!==o?o:r;return i&&(c=a.createElement("a",{href:"".concat(s).concat(i)},c)),Object.assign(Object.assign({},l),{key:null!==n&&void 0!==n?n:t,label:c})}))})}else l&&(n.overlay=l);return a.createElement(m.Z,Object.assign({placement:"bottom"},n),a.createElement("span",{className:"".concat(t,"-overlay-link")},e,a.createElement(d.Z,null)))}return e}(o);return void 0!==p&&null!==p?a.createElement(a.Fragment,null,a.createElement("li",null,p),r&&a.createElement(v,null,r)):null},x=function(e){var t=e.prefixCls,n=e.children,r=e.href,o=O(e,["prefixCls","children","href"]),i=(0,a.useContext(u.E_).getPrefixCls)("breadcrumb",t);return a.createElement(h,Object.assign({},o,{prefixCls:i}),b(i,o,n,r))};x.__ANT_BREADCRUMB_ITEM=!0;var C=x,j=n(21480),Z=n(70111),S=n(41157),E=function(e){var t,n,o=e.componentCls,a=e.iconCls;return(0,r.Z)({},o,Object.assign(Object.assign({},(0,j.Wf)(e)),(n={color:e.itemColor,fontSize:e.fontSize},(0,r.Z)(n,a,{fontSize:e.iconFontSize}),(0,r.Z)(n,"ol",{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"}),(0,r.Z)(n,"a",Object.assign({color:e.linkColor,transition:"color ".concat(e.motionDurationMid),padding:"0 ".concat(e.paddingXXS,"px"),borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,j.Qy)(e))),(0,r.Z)(n,"li:last-child",{color:e.lastItemColor}),(0,r.Z)(n,"".concat(o,"-separator"),{marginInline:e.separatorMargin,color:e.separatorColor}),(0,r.Z)(n,"".concat(o,"-link"),(0,r.Z)({},"\n          > ".concat(a," + span,\n          > ").concat(a," + a\n        "),{marginInlineStart:e.marginXXS})),(0,r.Z)(n,"".concat(o,"-overlay-link"),(t={borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:"0 ".concat(e.paddingXXS,"px"),marginInline:-e.marginXXS},(0,r.Z)(t,"> ".concat(a),{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon}),(0,r.Z)(t,"&:hover",{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}}),(0,r.Z)(t,"a",{"&:hover":{backgroundColor:"transparent"}}),t)),(0,r.Z)(n,"&".concat(e.componentCls,"-rtl"),{direction:"rtl"}),n)))},k=(0,Z.Z)("Breadcrumb",(function(e){var t=(0,S.TS)(e,{});return[E(t)]}),(function(e){return{itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}})),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function P(e){var t=e.breadcrumbName,n=e.children,r=w(e,["breadcrumbName","children"]),o=Object.assign({title:t},r);return n&&(o.menu={items:n.map((function(e){var t=e.breadcrumbName,n=w(e,["breadcrumbName"]);return Object.assign(Object.assign({},n),{title:t})}))}),o}var N=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},_=function(e){var t,n=e.prefixCls,i=e.separator,d=void 0===i?"/":i,m=e.style,f=e.className,g=e.rootClassName,b=e.routes,O=e.items,x=e.children,C=e.itemRender,j=e.params,Z=void 0===j?{}:j,S=N(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),E=a.useContext(u.E_),w=E.getPrefixCls,_=E.direction,I=E.breadcrumb,z=w("breadcrumb",n),T=k(z),B=(0,o.Z)(T,2),R=B[0],W=B[1],M=function(e,t){return(0,a.useMemo)((function(){return e||(t?t.map(P):null)}),[e,t])}(O,b),X=y(z,C);if(M&&M.length>0){var D=[],H=O||b;t=M.map((function(e,t){var n=e.path,r=e.key,o=e.type,i=e.menu,l=e.overlay,c=e.onClick,p=e.className,u=e.separator,m=e.dropdownProps,f=function(e,t){if(void 0===t)return t;var n=(t||"").replace(/^\//,"");return Object.keys(e).forEach((function(t){n=n.replace(":".concat(t),e[t])})),n}(Z,n);void 0!==f&&D.push(f);var g=null!==r&&void 0!==r?r:t;if("separator"===o)return a.createElement(v,{key:g},u);var b={},y=t===M.length-1;i?b.menu=i:l&&(b.overlay=l);var O=e.href;return D.length&&void 0!==f&&(O="#/".concat(D.join("/"))),a.createElement(h,Object.assign({key:g},b,(0,s.Z)(e,{data:!0,aria:!0}),{className:p,dropdownProps:m,href:O,separator:y?"":d,onClick:c,prefixCls:z}),X(e,Z,H,D,O))}))}else if(x){var A=(0,c.Z)(x).length;t=(0,c.Z)(x).map((function(e,t){if(!e)return e;var n=t===A-1;return(0,p.Tm)(e,{separator:n?"":d,key:t})}))}var F=l()(z,null===I||void 0===I?void 0:I.className,(0,r.Z)({},"".concat(z,"-rtl"),"rtl"===_),f,g,W),L=Object.assign(Object.assign({},null===I||void 0===I?void 0:I.style),m);return R(a.createElement("nav",Object.assign({className:F,style:L},S),a.createElement("ol",null,t)))};_.Item=C,_.Separator=v;var I=_},1289:function(e,t,n){var r=n(29439),o=n(43270),a=n.n(o),i=n(42230),l=n(4519),c=n(48698),s=n(37127),p=n(32738),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},d=function(e){var t=e.hashId,n=e.prefixCls,r=e.className,o=e.style,c=e.placement,p=void 0===c?"top":c,u=e.title,d=e.content,m=e.children;return l.createElement("div",{className:a()(t,n,"".concat(n,"-pure"),"".concat(n,"-placement-").concat(p),r),style:o},l.createElement("div",{className:"".concat(n,"-arrow")}),l.createElement(i.G,Object.assign({},e,{className:t,prefixCls:n}),m||function(e,t,n){if(t||n)return l.createElement(l.Fragment,null,t&&l.createElement("div",{className:"".concat(e,"-title")},(0,s.Z)(t)),l.createElement("div",{className:"".concat(e,"-inner-content")},(0,s.Z)(n)))}(n,u,d)))};t.ZP=function(e){var t=e.prefixCls,n=u(e,["prefixCls"]),o=(0,l.useContext(c.E_).getPrefixCls)("popover",t),a=(0,p.Z)(o),i=(0,r.Z)(a,2),s=i[0],m=i[1];return s(l.createElement(d,Object.assign({},n,{prefixCls:o,hashId:m})))}},26524:function(e,t,n){var r=n(29439),o=n(43270),a=n.n(o),i=n(4519),l=n(37127),c=n(7189),s=n(48698),p=n(227),u=n(1289),d=n(32738),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},f=function(e){var t=e.title,n=e.content,r=e.prefixCls;return i.createElement(i.Fragment,null,t&&i.createElement("div",{className:"".concat(r,"-title")},(0,l.Z)(t)),i.createElement("div",{className:"".concat(r,"-inner-content")},(0,l.Z)(n)))},v=i.forwardRef((function(e,t){var n=e.prefixCls,o=e.title,l=e.content,u=e.overlayClassName,v=e.placement,g=void 0===v?"top":v,b=e.trigger,y=void 0===b?"hover":b,O=e.mouseEnterDelay,h=void 0===O?.1:O,x=e.mouseLeaveDelay,C=void 0===x?.1:x,j=e.overlayStyle,Z=void 0===j?{}:j,S=m(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),E=i.useContext(s.E_).getPrefixCls,k=E("popover",n),w=(0,d.Z)(k),P=(0,r.Z)(w,2),N=P[0],_=P[1],I=E(),z=a()(u,_);return N(i.createElement(p.Z,Object.assign({placement:g,trigger:y,mouseEnterDelay:h,mouseLeaveDelay:C,overlayStyle:Z},S,{prefixCls:k,overlayClassName:z,ref:t,overlay:o||l?i.createElement(f,{prefixCls:k,title:o,content:l}):null,transitionName:(0,c.m)(I,"zoom-big",S.transitionName),"data-popover-inject":!0})))}));v._InternalPanelDoNotUseOrYouWillBeFired=u.ZP,t.Z=v},32738:function(e,t,n){var r=n(4942),o=n(21480),a=n(39287),i=n(50540),l=n(94359),c=n(70111),s=n(41157),p=function(e){var t,n=e.componentCls,a=e.popoverColor,l=e.titleMinWidth,c=e.fontWeightStrong,s=e.popoverPadding,p=e.boxShadowSecondary,u=e.colorTextHeading,d=e.borderRadiusLG,m=e.zIndexPopup,f=e.marginXS,v=e.colorBgElevated,g=e.popoverBg;return[(0,r.Z)({},n,Object.assign(Object.assign({},(0,o.Wf)(e)),(t={position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:m,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":v,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"}},(0,r.Z)(t,"".concat(n,"-content"),{position:"relative"}),(0,r.Z)(t,"".concat(n,"-inner"),{backgroundColor:g,backgroundClip:"padding-box",borderRadius:d,boxShadow:p,padding:s}),(0,r.Z)(t,"".concat(n,"-title"),{minWidth:l,marginBottom:f,color:u,fontWeight:c}),(0,r.Z)(t,"".concat(n,"-inner-content"),{color:a}),t))),(0,i.ZP)(e,{colorBg:"var(--antd-arrow-background-color)"}),(0,r.Z)({},"".concat(n,"-pure"),(0,r.Z)({position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block"},"".concat(n,"-content"),{display:"inline-block"}))]},u=function(e){var t=e.componentCls;return(0,r.Z)({},t,l.i.map((function(n){var o,a=e["".concat(n,"6")];return(0,r.Z)({},"&".concat(t,"-").concat(n),(o={"--antd-arrow-background-color":a},(0,r.Z)(o,"".concat(t,"-inner"),{backgroundColor:a}),(0,r.Z)(o,"".concat(t,"-arrow"),{background:"transparent"}),o))})))},d=function(e){var t,n=e.componentCls,o=e.lineWidth,a=e.lineType,i=e.colorSplit,l=e.paddingSM,c=e.controlHeight,s=e.fontSize,p=e.lineHeight,u=e.padding,d=c-Math.round(s*p),m=d/2,f=d/2-o,v=u;return(0,r.Z)({},n,(t={},(0,r.Z)(t,"".concat(n,"-inner"),{padding:0}),(0,r.Z)(t,"".concat(n,"-title"),{margin:0,padding:"".concat(m,"px ").concat(v,"px ").concat(f,"px"),borderBottom:"".concat(o,"px ").concat(a," ").concat(i)}),(0,r.Z)(t,"".concat(n,"-inner-content"),{padding:"".concat(l,"px ").concat(v,"px")}),t))};t.Z=(0,c.Z)("Popover",(function(e){var t=e.colorBgElevated,n=e.colorText,r=e.wireframe,o=(0,s.TS)(e,{popoverPadding:12,popoverBg:t,popoverColor:n});return[p(o),u(o),r&&d(o),(0,a._y)(o,"zoom-big")]}),(function(e){return{width:177,minWidth:177,titleMinWidth:177,zIndexPopup:e.zIndexPopupBase+30}}),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})}}]);
//# sourceMappingURL=674.7cf14902.chunk.js.map