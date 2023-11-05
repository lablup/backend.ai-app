"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[201],{77758:function(e,n,i){i.d(n,{Z:function(){return o}});var t=i(1413),l=i(36459),a=i(65113),r=(i(4519),i(2556)),o=function(e){var n,i=Object.assign({},((0,l.Z)(e),e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:".ant-modal.bai-modal .ant-modal-content {\n  padding: var(--general-modal-content-padding, 0);\n}\n.ant-modal.bai-modal .ant-modal-body {\n  padding: var(--general-modal-body-padding, 0 24px);\n}\n\n.ant-modal.bai-modal .ant-modal-footer {\n  padding: var(--general-modal-footer-padding, 0 20px 24px 20px);\n}\n\n.ant-modal.bai-modal .ant-modal-header {\n  border-bottom: 1px solid rgb(221, 221, 221);\n  border-width: 100%;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.ant-modal.bai-modal .ant-modal-content .ant-modal-header,\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  padding: var(--general-modal-header-padding, 10px 20px);\n  height: var(--general-modal-header-height, 69px);\n}\n\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  /* center */\n  top: 0;\n}\n"}),(0,r.jsx)(a.Z,(0,t.Z)({centered:null===(n=i.centered)||void 0===n||n,className:"bai-modal"},i))]})}},96451:function(e,n,i){var t,l=i(82548),a=(i(4519),i(16980)),r=i(2556);n.Z=function(e){var n,o=e.endpointFrgmt,s=(0,a.useFragment)(void 0!==t?t:t=i(58393),o),d="default";switch(null===s||void 0===s||null===(n=s.status)||void 0===n?void 0:n.toUpperCase()){case"RUNNING":case"HEALTHY":d="success"}return(0,r.jsx)(l.Z,{color:d,children:null===s||void 0===s?void 0:s.status})}},76587:function(e,n,i){var t,l=i(1413),a=i(29439),r=i(44925),o=i(43255),s=i(87760),d=i(50164),u=i(77758),c=i(99277),m=i(44036),g=i(57054),v=i(66653),f=(i(4519),i(81748)),p=i(16980),h=i(2556),y=["onRequestClose","endpointFrgmt"];n.Z=function(e){var n=e.onRequestClose,S=e.endpointFrgmt,x=(0,r.Z)(e,y),_=m.Z.useToken().token,b=(0,s.Dj)(),Z=(0,f.$G)().t,k=g.Z.useForm(),j=(0,a.Z)(k,1)[0],F=(0,p.useFragment)(void 0!==t?t:t=i(56326),S),C=(0,d.Y)({mutationFn:function(e){var n={to:e.desired_session_count};return(0,o.Lc)({method:"POST",url:"/services/".concat(null===F||void 0===F?void 0:F.endpoint_id,"/scale"),body:n,client:b})}});return(0,h.jsx)(u.Z,(0,l.Z)((0,l.Z)({style:{zIndex:1e4},destroyOnClose:!0,onOk:function(e){j.validateFields().then((function(e){C.mutate(e,{onSuccess:function(){console.log("service updated"),n(!0)},onError:function(e){console.log(e)}})})).catch((function(e){console.log(e)}))},onCancel:function(){n()},okButtonProps:{loading:C.isLoading},title:Z("modelService.EditModelService")},x),{},{children:(0,h.jsx)(c.Z,{direction:"row",align:"stretch",justify:"around",children:(0,h.jsx)(g.Z,{form:j,preserve:!1,validateTrigger:["onChange","onBlur"],initialValues:{desired_session_count:null===F||void 0===F?void 0:F.desired_session_count},style:{marginBottom:_.marginLG,marginTop:_.margin},children:(0,h.jsx)(g.Z.Item,{name:"desired_session_count",label:Z("modelService.DesiredSessionCount"),rules:[{pattern:/^[0-9]+$/,message:Z("modelService.OnlyAllowsNonNegativeIntegers")}],children:(0,h.jsx)(v.Z,{type:"number",min:0})})})})}))}},58393:function(e,n,i){i.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EndpointStatusTagFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null}],type:"Endpoint",abstractKey:null,hash:"3b31efa50b55edddcb210b59003dc479"};n.default=t},56326:function(e,n,i){i.r(n);var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ModelServiceSettingModal_endpoint",selections:[{alias:null,args:null,kind:"ScalarField",name:"endpoint_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"desired_session_count",storageKey:null}],type:"Endpoint",abstractKey:null,hash:"881f18324b27eba6ff0fcfb83ae241d2"};n.default=t},4201:function(e,n,i){i.r(n),i.d(n,{default:function(){return W}});var t=i(29439),l=i(77758),a=i(96451),r=i(99277),o=i(76587),s=i(1413),d=i(44925),u=i(43255),c=i(87760),m=i(1839),g=i(50164),v=i(46228),f=i(34341),p=i(61815),h=i(99695),y=i(19427),S=i(32048),x=i.n(S),_=i(4519),b=i(2556),Z=["filter","autoSelectDefault"],k=function(e){var n,i,l=e.filter,a=e.autoSelectDefault,r=(0,d.Z)(e,Z),o=(0,c.qh)(),m=(0,u.y3)(),v=(0,c.Kr)("first"),f=(0,t.Z)(v,2),p=f[0],h=f[1],S=(0,g.h)({queryKey:["VFolderSelectQuery",p],queryFn:function(){return m({method:"GET",url:"/folders?group_id=".concat(o.id)})},staleTime:0}).data,k=l?x().filter(S,l):S,j=x().first(k)?{label:null===(n=x().first(k))||void 0===n?void 0:n.name,value:null===(i=x().first(k))||void 0===i?void 0:i.name}:void 0;return(0,_.useEffect)((function(){var e;a&&j&&(null===(e=r.onChange)||void 0===e||e.call(r,j.value,j))}),[a]),(0,b.jsx)(y.Z,(0,s.Z)((0,s.Z)({showSearch:!0},r),{},{onDropdownVisibleChange:function(e){e&&(0,_.startTransition)((function(){h()}))},children:x().map(k,(function(e){return(0,b.jsx)(y.Z.Option,{value:null===e||void 0===e?void 0:e.name,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))}))},j=i(44036),F=i(57054),C=i(88464),K=i(38818),T=i(62708),L=i(53066),P=i(81748),D=["extraP","onRequestClose"],w=function(e){e.extraP;var n=e.onRequestClose,i=(0,d.Z)(e,D),a=(0,P.$G)().t,r=j.Z.useToken().token,o=(0,c.Dj)(),y=(0,c.tQ)(),S=F.Z.useForm(),Z=(0,t.Z)(S,1)[0],w=(0,m.T)(),E=(0,t.Z)(w,1)[0],q=(0,g.Y)({mutationFn:function(e){var n,i,t,l,a="".concat(null===(n=e.environments.image)||void 0===n?void 0:n.registry,"/").concat(null===(i=e.environments.image)||void 0===i?void 0:i.name,":").concat(null===(t=e.environments.image)||void 0===t?void 0:t.tag),r={name:e.serviceName,desired_session_count:e.desiredRoutingCount,image:a,arch:null===(l=e.environments.image)||void 0===l?void 0:l.architecture,group:o.current_group,domain:y,cluster_size:1,cluster_mode:"single-node",open_to_public:e.openToPublic,config:{model:e.vFolderName,model_mount_destination:"/models",environ:{},scaling_group:e.resourceGroup,resources:{cpu:e.cpu,mem:e.mem+"G"}}};return null!==E&&void 0!==E&&E["cuda.shares"]&&(r.config.resources["cuda.shares"]=e.gpu),null!==E&&void 0!==E&&E["cuda.device"]&&(r.config.resources["cuda.device"]=e.gpu),e.shmem&&e.shmem>0&&(r.config.resource_opts={shmem:e.shmem+"G"}),(0,u.Lc)({method:"POST",url:"/services",body:r,client:o})}});return(0,b.jsx)(l.Z,(0,s.Z)((0,s.Z)({title:a("modelService.StartNewServing"),onOk:function(){Z.validateFields().then((function(e){q.mutate(e,{onSuccess:function(){n(!0)},onError:function(e){null!==e&&void 0!==e&&e.message?C.ZP.error(x().truncate(null===e||void 0===e?void 0:e.message,{length:200})):C.ZP.error(a("modelService.FailedToStartService"))}})})).catch((function(e){var n,i,t,l;null!==(n=e.errorFields)&&void 0!==n&&null!==(i=n[0].errors)&&void 0!==i&&i[0]?C.ZP.error(null===(t=e.errorFields)||void 0===t||null===(l=t[0].errors)||void 0===l?void 0:l[0]):C.ZP.error(a("modelService.FormValidationFailed"))}))},onCancel:function(){n()},destroyOnClose:!0,maskClosable:!1,confirmLoading:q.isLoading},i),{},{children:(0,b.jsx)(_.Suspense,{fallback:(0,b.jsx)(v.Z,{}),children:(0,b.jsxs)(F.Z,{disabled:q.isLoading,form:Z,preserve:!1,layout:"vertical",labelCol:{span:12},initialValues:{cpu:1,gpu:0,mem:.25,shmem:0,desiredRoutingCount:1},children:[(0,b.jsx)(F.Z.Item,{label:a("modelService.ServiceName"),name:"serviceName",rules:[{pattern:/^(?=.{4,24}$)\w[\w.-]*\w$/,message:a("modelService.ServiceNameRule")},{required:!0}],children:(0,b.jsx)(K.Z,{})}),(0,b.jsx)(F.Z.Item,{name:"resourceGroup",label:a("session.ResourceGroup"),rules:[{required:!0}],children:(0,b.jsx)(p.Z,{autoSelectDefault:!0})}),(0,b.jsx)(F.Z.Item,{name:"openToPublic",label:a("modelService.OpenToPublic"),valuePropName:"checked",children:(0,b.jsx)(T.Z,{})}),(0,b.jsx)(F.Z.Item,{name:"vFolderName",label:a("session.launcher.ModelStorageToMount"),rules:[{required:!0}],children:(0,b.jsx)(k,{filter:function(e){return"model"===e.usage_mode},autoSelectDefault:!0})}),(0,b.jsx)(h.Z,{label:a("modelService.DesiredRoutingCount"),name:"desiredRoutingCount",rules:[{required:!0}],inputNumberProps:{addonAfter:"#"},required:!0}),(0,b.jsxs)(L.Z,{style:{marginBottom:r.margin},children:[(0,b.jsx)(f.Z,{}),(0,b.jsx)(F.Z.Item,{noStyle:!0,shouldUpdate:function(e,n){var i,t,l,a;return(null===(i=e.environments)||void 0===i||null===(t=i.image)||void 0===t?void 0:t.digest)!==(null===(l=n.environments)||void 0===l||null===(a=l.image)||void 0===a?void 0:a.digest)},children:function(e){var n,i,t=null===(n=(0,e.getFieldValue)("environments"))||void 0===n?void 0:n.image;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Z,{name:"cpu",label:a("session.launcher.CPU"),tooltip:(0,b.jsx)(P.cC,{i18nKey:"session.launcher.DescCPU"}),min:parseInt((null===(i=x().find(null===t||void 0===t?void 0:t.resource_limits,(function(e){return"cpu"===(null===e||void 0===e?void 0:e.key)})))||void 0===i?void 0:i.min)||"0"),max:o._config.maxCPUCoresPerContainer||128,inputNumberProps:{addonAfter:a("session.launcher.Core")},required:!0,rules:[{required:!0}]}),(0,b.jsx)(h.Z,{name:"mem",label:a("session.launcher.Memory"),tooltip:(0,b.jsx)(P.cC,{i18nKey:"session.launcher.DescMemory"}),max:o._config.maxMemoryPerContainer||1536,min:0,inputNumberProps:{addonAfter:"GiB"},step:.25,required:!0,rules:[{required:!0},function(e){e.getFieldValue;return{validator:function(e,n){var i,l=(0,u.PZ)((null===(i=x().find(null===t||void 0===t?void 0:t.resource_limits,(function(e){return"mem"===(null===e||void 0===e?void 0:e.key)})))||void 0===i?void 0:i.min)||"0B","G");return l.number>n?Promise.reject(new Error(a("session.launcher.MinMemory",{size:l.numberUnit}))):Promise.resolve()}}}]}),(0,b.jsx)(h.Z,{name:"shmem",label:a("session.launcher.SharedMemory"),tooltip:(0,b.jsx)(P.cC,{i18nKey:"session.launcher.DescSharedMemory"}),max:o._config.maxShmPerContainer||8,min:0,step:.25,inputNumberProps:{addonAfter:"GiB"},required:!0,rules:[{required:!0}]}),((null===E||void 0===E?void 0:E["cuda.device"])||(null===E||void 0===E?void 0:E["cuda.shares"]))&&(0,b.jsx)(h.Z,{style:{marginBottom:0},name:"gpu",label:a("session.launcher.AIAccelerator"),tooltip:(0,b.jsx)(P.cC,{i18nKey:"session.launcher.DescAIAccelerator"}),max:E["cuda.shares"]?o._config.maxCUDASharesPerContainer:o._config.maxCUDADevicesPerContainer,step:E["cuda.shares"]?.1:1,inputNumberProps:{addonAfter:"GPU"},required:!0,rules:[{required:!0}]})]})}})]})]})})}))},E=i(43596),q=i(28501),A=i(83861),I=i(31662),M=i(46951),R=i(69537);var N=function(e){if(e.id,"undefined"===typeof cancelAnimationFrame)return clearInterval(e.id);cancelAnimationFrame(e.id)};var B,G=function(e,n,i){var t=null===i||void 0===i?void 0:i.immediate,l=(0,M.Z)(e),a=(0,_.useRef)();return(0,_.useEffect)((function(){if((0,R.hj)(n)&&!(n<0))return t&&l.current(),a.current=function(e,n){if(void 0===n&&(n=0),"undefined"===typeof requestAnimationFrame)return{id:setInterval(e,n)};var i=(new Date).getTime(),t={id:0};return t.id=requestAnimationFrame((function l(){(new Date).getTime()-i>=n&&(e(),i=(new Date).getTime()),t.id=requestAnimationFrame(l)})),t}((function(){l.current()}),n),function(){a.current&&N(a.current)}}),[n]),(0,_.useCallback)((function(){a.current&&N(a.current)}),[])},z=i(45110),O=i(92171),U=i(79876),V=i(28499),$=i(99517),H=i.n($),Q=i(16980),Y=i(51843),W=function(e){e.children;var n=(0,P.$G)().t,s=(0,c.Dj)(),d=j.Z.useToken().token,m=(0,c.qh)(),v=(0,_.useState)(!1),f=(0,t.Z)(v,2),p=f[0],h=f[1],y=(0,_.useState)(),S=(0,t.Z)(y,2),Z=S[0],k=S[1],F=(0,_.useState)(!1),C=(0,t.Z)(F,2),K=C[0],T=C[1],L=(0,_.useState)({current:1,pageSize:100}),D=(0,t.Z)(L,1)[0],M=(0,_.useTransition)(),R=(0,t.Z)(M,2),N=R[0],$=R[1],W=(0,_.useState)(!1),J=(0,t.Z)(W,2),X=J[0],ee=J[1],ne=(0,c.Kr)("initial-fetch"),ie=(0,t.Z)(ne,2),te=ie[0],le=ie[1],ae=(0,_.useState)("services"),re=(0,t.Z)(ae,2),oe=re[0],se=re[1];G((function(){(0,_.startTransition)((function(){le()}))}),7e3);var de=(0,Q.useLazyLoadQuery)(void 0!==B?B:B=i(16142),{offset:(D.current-1)*D.pageSize,limit:D.pageSize,projectID:m.id},{fetchPolicy:"initial-fetch"===te?"store-and-network":"network-only",fetchKey:te}).endpoint_list,ue=x().sortBy(null===de||void 0===de?void 0:de.items,"name"),ce=(0,g.Y)({mutationFn:function(){return(0,u.Lc)({method:"DELETE",url:"/services/"+(null===Z||void 0===Z?void 0:Z.endpoint_id),client:s})}});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r.Z,{direction:"column",align:"stretch",style:{padding:d.padding,gap:d.margin},children:(0,b.jsxs)(r.Z,{direction:"column",align:"stretch",children:[(0,b.jsx)(r.Z,{style:{flex:1},children:(0,b.jsx)(z.Z,{activeKey:oe,onChange:function(e){return se(e)},tabBarStyle:{marginBottom:0},style:{width:"100%",paddingLeft:d.paddingMD,paddingRight:d.paddingMD,borderTopLeftRadius:d.borderRadius,borderTopRightRadius:d.borderRadius},items:[{key:"services",label:n("modelService.Services")}],tabBarExtraContent:{right:(0,b.jsx)(O.ZP,{type:"primary",onClick:function(){h(!0)},children:n("modelService.StartService")})}})}),(0,b.jsx)(_.Suspense,{fallback:(0,b.jsx)("div",{children:"loading.."}),children:(0,b.jsx)(U.Z,{loading:N,scroll:{x:"max-content"},rowKey:"endpoint_id",dataSource:ue||[],columns:[{title:n("modelService.EndpointName"),dataIndex:"endpoint_id",fixed:"left",render:function(e,n){return(0,b.jsx)(Y.rU,{to:"/serving/"+e,children:n.name})}},{title:n("modelService.EndpointId"),dataIndex:"endpoint_id",width:310,render:function(e){return(0,b.jsx)(V.Z.Text,{code:!0,children:e})}},{title:n("modelService.Controls"),dataIndex:"controls",render:function(e,n){var i,t,l,a;return(0,b.jsxs)(r.Z,{direction:"row",align:"stretch",children:[(0,b.jsx)(O.ZP,{type:"text",icon:(0,b.jsx)(E.Z,{}),style:n.desired_session_count<0||"destroying"===(null===(i=n.status)||void 0===i?void 0:i.toLowerCase())?void 0:{color:"#29b6f6"},disabled:n.desired_session_count<0||"destroying"===(null===(t=n.status)||void 0===t?void 0:t.toLowerCase()),onClick:function(){T(!0),k(n)}}),(0,b.jsx)(O.ZP,{type:"text",icon:(0,b.jsx)(q.Z,{style:n.desired_session_count<0||"destroying"===(null===(l=n.status)||void 0===l?void 0:l.toLowerCase())?void 0:{color:d.colorError}}),disabled:n.desired_session_count<0||"destroying"===(null===(a=n.status)||void 0===a?void 0:a.toLowerCase()),onClick:function(){ee(!0),k(n)}})]})}},{title:n("modelService.Status"),render:function(e,n){return(0,b.jsx)(a.Z,{endpointFrgmt:n})}},{title:n("modelService.CreatedAt"),dataIndex:"created_at",render:function(e){return H()(e).format("ll LT")},defaultSortOrder:"descend",sortDirections:["descend","ascend","descend"],sorter:function(e,n){var i=H()(e.created_at),t=H()(n.created_at);return i.diff(t)}},{title:n("modelService.DesiredSessionCount"),dataIndex:"desired_session_count",render:function(e){return e<0?"-":e}},{title:(0,b.jsxs)(r.Z,{direction:"column",align:"start",children:[n("modelService.RoutingsCount"),(0,b.jsx)("br",{}),(0,b.jsxs)(V.Z.Text,{type:"secondary",style:{fontWeight:"normal"},children:["(",n("modelService.Active/Total"),")"]})]}),render:function(e,n){var i;return x().filter(n.routings,(function(e){return"HEALTHY"===(null===e||void 0===e?void 0:e.status)})).length+" / "+(null===(i=n.routings)||void 0===i?void 0:i.length)}},{title:n("modelService.Public"),render:function(e,n){return n.open_to_public?(0,b.jsx)(A.Z,{style:{color:d.colorSuccess}}):(0,b.jsx)(I.Z,{style:{color:d.colorTextSecondary}})}}],pagination:!1})})]})}),(0,b.jsx)(l.Z,{open:X,title:n("dialog.title.LetsDouble-Check"),okButtonProps:{loading:ce.isLoading},onOk:function(){ce.mutate(void 0,{onSuccess:function(e){$((function(){le()})),ee(!1)},onError:function(e){console.log("terminateModelServiceMutation Error",e)}})},onCancel:function(){ee(!1)},children:(0,b.jsxs)(r.Z,{direction:"column",align:"stretch",justify:"center",children:[(0,b.jsx)("p",{children:n("modelService.YouAreAboutToTerminate")+((null===Z||void 0===Z?void 0:Z.name)||"")+"."}),(0,b.jsx)("p",{children:n("dialog.ask.DoYouWantToProceed")})]})}),(0,b.jsx)(o.Z,{open:K,onRequestClose:function(e){T(!1),e&&$((function(){le()}))},endpointFrgmt:Z||null}),(0,b.jsx)(w,{open:p,onRequestClose:function(e){h(!p),e&&$((function(){le()}))}})]})}},16142:function(e,n,i){i.r(n);var t=function(){var e={defaultValue:null,kind:"LocalArgument",name:"limit"},n={defaultValue:null,kind:"LocalArgument",name:"offset"},i={defaultValue:null,kind:"LocalArgument",name:"projectID"},t=[{kind:"Literal",name:"filter",value:"name != 'koalpaca-test'"},{kind:"Variable",name:"limit",variableName:"limit"},{kind:"Variable",name:"offset",variableName:"offset"},{kind:"Variable",name:"project",variableName:"projectID"}],l={alias:null,args:null,kind:"ScalarField",name:"total_count",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"endpoint_id",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"image",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"model",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"domain",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"project",storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"resource_group",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"resource_slots",storageKey:null},v={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"open_to_public",storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"created_at",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"created_user",storageKey:null},y={alias:null,args:null,kind:"ScalarField",name:"desired_session_count",storageKey:null},S={alias:null,args:null,kind:"ScalarField",name:"routing_id",storageKey:null},x={alias:null,args:null,kind:"ScalarField",name:"endpoint",storageKey:null},_={alias:null,args:null,kind:"ScalarField",name:"session",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"traffic_ratio",storageKey:null},Z={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:[e,n,i],kind:"Fragment",metadata:null,name:"ServingListPageQuery",selections:[{alias:null,args:t,concreteType:"EndpointList",kind:"LinkedField",name:"endpoint_list",plural:!1,selections:[l,{alias:null,args:null,concreteType:"Endpoint",kind:"LinkedField",name:"items",plural:!0,selections:[a,r,o,s,d,u,c,m,g,v,f,p,h,{kind:"RequiredField",field:y,action:"NONE",path:"endpoint_list.items.desired_session_count"},{alias:null,args:null,concreteType:"Routing",kind:"LinkedField",name:"routings",plural:!0,selections:[S,x,_,b,u],storageKey:null},{args:null,kind:"FragmentSpread",name:"ModelServiceSettingModal_endpoint"},{args:null,kind:"FragmentSpread",name:"EndpointStatusTagFragment"}],storageKey:null}],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[n,e,i],kind:"Operation",name:"ServingListPageQuery",selections:[{alias:null,args:t,concreteType:"EndpointList",kind:"LinkedField",name:"endpoint_list",plural:!1,selections:[l,{alias:null,args:null,concreteType:"Endpoint",kind:"LinkedField",name:"items",plural:!0,selections:[a,r,o,s,d,u,c,m,g,v,f,p,h,y,{alias:null,args:null,concreteType:"Routing",kind:"LinkedField",name:"routings",plural:!0,selections:[S,x,_,b,u,Z],storageKey:null},Z],storageKey:null}],storageKey:null}]},params:{cacheID:"b3f7122c428341734000f9de6c03928c",id:null,metadata:{},name:"ServingListPageQuery",operationKind:"query",text:'query ServingListPageQuery(\n  $offset: Int!\n  $limit: Int!\n  $projectID: UUID\n) {\n  endpoint_list(offset: $offset, limit: $limit, project: $projectID, filter: "name != \'koalpaca-test\'") {\n    total_count\n    items {\n      name\n      endpoint_id\n      image\n      model\n      domain\n      status\n      project\n      resource_group\n      resource_slots\n      url\n      open_to_public\n      created_at @since(version: "23.09.0")\n      created_user\n      desired_session_count\n      routings {\n        routing_id\n        endpoint\n        session\n        traffic_ratio\n        status\n        id\n      }\n      ...ModelServiceSettingModal_endpoint\n      ...EndpointStatusTagFragment\n      id\n    }\n  }\n}\n\nfragment EndpointStatusTagFragment on Endpoint {\n  id\n  status\n}\n\nfragment ModelServiceSettingModal_endpoint on Endpoint {\n  endpoint_id\n  desired_session_count\n}\n'}}}();t.hash="4bdd65d4de1c5a874a4377337f62fe49",n.default=t},28501:function(e,n,i){i.d(n,{Z:function(){return s}});var t=i(87462),l=i(4519),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},r=i(9491),o=function(e,n){return l.createElement(r.Z,(0,t.Z)({},e,{ref:n,icon:a}))};var s=l.forwardRef(o)},43596:function(e,n,i){i.d(n,{Z:function(){return s}});var t=i(87462),l=i(4519),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},r=i(9491),o=function(e,n){return l.createElement(r.Z,(0,t.Z)({},e,{ref:n,icon:a}))};var s=l.forwardRef(o)}}]);
//# sourceMappingURL=201.b3ba23d7.chunk.js.map