"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[667],{19743:function(e,n,t){t.d(n,{Qt:function(){return l},Uw:function(){return s},fJ:function(){return o},ly:function(){return c},oN:function(){return v}});var r=t(4942),a=t(27340),i=t(39103),o=new a.E4("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),s=new a.E4("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),l=new a.E4("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),c=new a.E4("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),u=new a.E4("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),f=new a.E4("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),m=new a.E4("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),d=new a.E4("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),p={"slide-up":{inKeyframes:o,outKeyframes:s},"slide-down":{inKeyframes:l,outKeyframes:c},"slide-left":{inKeyframes:u,outKeyframes:f},"slide-right":{inKeyframes:m,outKeyframes:d}},v=function(e,n){var t,a=e.antCls,o="".concat(a,"-").concat(n),s=p[n],l=s.inKeyframes,c=s.outKeyframes;return[(0,i.R)(o,l,c,e.motionDurationMid),(t={},(0,r.Z)(t,"\n      ".concat(o,"-enter,\n      ").concat(o,"-appear\n    "),(0,r.Z)({transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint},"&-prepare",{transform:"scale(1)"})),(0,r.Z)(t,"".concat(o,"-leave"),{animationTimingFunction:e.motionEaseInQuint}),t)]}},14937:function(e,n,t){t.d(n,{Z:function(){return Y}});var r=t(87462),a=t(1413),i=t(29439),o=t(44925),s=t(4519),l=t(43270),c=t.n(l),u=t(91928),f=t(47878),m=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],d=void 0;function p(e,n){var t=e.prefixCls,i=e.invalidate,l=e.item,f=e.renderItem,p=e.responsive,v=e.responsiveDisabled,y=e.registerSize,g=e.itemKey,Z=e.className,E=e.style,h=e.children,w=e.display,b=e.order,O=e.component,N=void 0===O?"div":O,S=(0,o.Z)(e,m),R=p&&!w;function C(e){y(g,e)}s.useEffect((function(){return function(){C(null)}}),[]);var I,K=f&&l!==d?f(l):h;i||(I={opacity:R?0:1,height:R?0:d,overflowY:R?"hidden":d,order:p?b:d,pointerEvents:R?"none":d,position:R?"absolute":d});var k={};R&&(k["aria-hidden"]=!0);var x=s.createElement(N,(0,r.Z)({className:c()(!i&&t,Z),style:(0,a.Z)((0,a.Z)({},I),E)},k,S,{ref:n}),K);return p&&(x=s.createElement(u.Z,{onResize:function(e){C(e.offsetWidth)},disabled:v},x)),x}var v=s.forwardRef(p);v.displayName="Item";var y=v,g=t(44586),Z=t(84453),E=t(72058);function h(){var e=s.useRef(null);return function(n){e.current||(e.current=[],function(e){if("undefined"===typeof MessageChannel)(0,E.Z)(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}((function(){(0,Z.unstable_batchedUpdates)((function(){e.current.forEach((function(e){e()})),e.current=null}))}))),e.current.push(n)}}function w(e,n){var t=s.useState(n),r=(0,i.Z)(t,2),a=r[0],o=r[1];return[a,(0,g.Z)((function(n){e((function(){o(n)}))}))]}var b=s.createContext(null),O=["component"],N=["className"],S=["className"],R=function(e,n){var t=s.useContext(b);if(!t){var a=e.component,i=void 0===a?"div":a,l=(0,o.Z)(e,O);return s.createElement(i,(0,r.Z)({},l,{ref:n}))}var u=t.className,f=(0,o.Z)(t,N),m=e.className,d=(0,o.Z)(e,S);return s.createElement(b.Provider,{value:null},s.createElement(y,(0,r.Z)({ref:n,className:c()(u,m)},f,d)))},C=s.forwardRef(R);C.displayName="RawItem";var I=C,K=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],k="responsive",x="invalidate";function M(e){return"+ ".concat(e.length," ...")}function _(e,n){var t=e.prefixCls,l=void 0===t?"rc-overflow":t,m=e.data,d=void 0===m?[]:m,p=e.renderItem,v=e.renderRawItem,g=e.itemKey,Z=e.itemWidth,E=void 0===Z?10:Z,O=e.ssr,N=e.style,S=e.className,R=e.maxCount,C=e.renderRest,I=e.renderRawRest,_=e.suffix,X=e.component,Y=void 0===X?"div":X,z=e.itemComponent,D=e.onVisibleChange,A=(0,o.Z)(e,K),T="full"===O,F=h(),P=w(F,null),U=(0,i.Z)(P,2),V=U[0],W=U[1],L=V||0,Q=w(F,new Map),G=(0,i.Z)(Q,2),J=G[0],j=G[1],q=w(F,0),B=(0,i.Z)(q,2),H=B[0],$=B[1],ee=w(F,0),ne=(0,i.Z)(ee,2),te=ne[0],re=ne[1],ae=w(F,0),ie=(0,i.Z)(ae,2),oe=ie[0],se=ie[1],le=(0,s.useState)(null),ce=(0,i.Z)(le,2),ue=ce[0],fe=ce[1],me=(0,s.useState)(null),de=(0,i.Z)(me,2),pe=de[0],ve=de[1],ye=s.useMemo((function(){return null===pe&&T?Number.MAX_SAFE_INTEGER:pe||0}),[pe,V]),ge=(0,s.useState)(!1),Ze=(0,i.Z)(ge,2),Ee=Ze[0],he=Ze[1],we="".concat(l,"-item"),be=Math.max(H,te),Oe=R===k,Ne=d.length&&Oe,Se=R===x,Re=Ne||"number"===typeof R&&d.length>R,Ce=(0,s.useMemo)((function(){var e=d;return Ne?e=null===V&&T?d:d.slice(0,Math.min(d.length,L/E)):"number"===typeof R&&(e=d.slice(0,R)),e}),[d,E,V,R,Ne]),Ie=(0,s.useMemo)((function(){return Ne?d.slice(ye+1):d.slice(Ce.length)}),[d,Ce,Ne,ye]),Ke=(0,s.useCallback)((function(e,n){var t;return"function"===typeof g?g(e):null!==(t=g&&(null===e||void 0===e?void 0:e[g]))&&void 0!==t?t:n}),[g]),ke=(0,s.useCallback)(p||function(e){return e},[p]);function xe(e,n,t){(pe!==e||void 0!==n&&n!==ue)&&(ve(e),t||(he(e<d.length-1),null===D||void 0===D||D(e)),void 0!==n&&fe(n))}function Me(e,n){j((function(t){var r=new Map(t);return null===n?r.delete(e):r.set(e,n),r}))}function _e(e){return J.get(Ke(Ce[e],e))}(0,f.Z)((function(){if(L&&"number"===typeof be&&Ce){var e=oe,n=Ce.length,t=n-1;if(!n)return void xe(0,null);for(var r=0;r<n;r+=1){var a=_e(r);if(T&&(a=a||0),void 0===a){xe(r-1,void 0,!0);break}if(e+=a,0===t&&e<=L||r===t-1&&e+_e(t)<=L){xe(t,null);break}if(e+be>L){xe(r-1,e-a-oe+te);break}}_&&_e(0)+oe>L&&fe(null)}}),[L,J,te,oe,Ke,Ce]);var Xe=Ee&&!!Ie.length,Ye={};null!==ue&&Ne&&(Ye={position:"absolute",left:ue,top:0});var ze,De={prefixCls:we,responsive:Ne,component:z,invalidate:Se},Ae=v?function(e,n){var t=Ke(e,n);return s.createElement(b.Provider,{key:t,value:(0,a.Z)((0,a.Z)({},De),{},{order:n,item:e,itemKey:t,registerSize:Me,display:n<=ye})},v(e,n))}:function(e,n){var t=Ke(e,n);return s.createElement(y,(0,r.Z)({},De,{order:n,key:t,item:e,renderItem:ke,itemKey:t,registerSize:Me,display:n<=ye}))},Te={order:Xe?ye:Number.MAX_SAFE_INTEGER,className:"".concat(we,"-rest"),registerSize:function(e,n){re(n),$(te)},display:Xe};if(I)I&&(ze=s.createElement(b.Provider,{value:(0,a.Z)((0,a.Z)({},De),Te)},I(Ie)));else{var Fe=C||M;ze=s.createElement(y,(0,r.Z)({},De,Te),"function"===typeof Fe?Fe(Ie):Fe)}var Pe=s.createElement(Y,(0,r.Z)({className:c()(!Se&&l,S),style:N,ref:n},A),Ce.map(Ae),Re?ze:null,_&&s.createElement(y,(0,r.Z)({},De,{responsive:Oe,responsiveDisabled:!Ne,order:ye,className:"".concat(we,"-suffix"),registerSize:function(e,n){se(n)},display:!0,style:Ye}),_));return Oe&&(Pe=s.createElement(u.Z,{onResize:function(e,n){W(n.clientWidth)},disabled:!Ne},Pe)),Pe}var X=s.forwardRef(_);X.displayName="Overflow",X.Item=I,X.RESPONSIVE=k,X.INVALIDATE=x;var Y=X}}]);
//# sourceMappingURL=667.d630f5ff.chunk.js.map