"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3830],{29316:function(e,t,n){n(50390);var a=n(6369),s=n(86509),i=n(4285),o=n(63548),r=n(62559);t.Z=(0,i.Z)((function(e){return(0,s.Z)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"250px",padding:"2rem 2rem 0rem 2rem",color:e.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center"}})}))((function(e){var t=e.to,n=e.label,s=e.classes,i=e.className;return(0,r.jsxs)(a.rU,{to:t,className:"".concat(s.link," ").concat(i||""),children:[(0,r.jsx)("div",{className:s.icon,children:(0,r.jsx)(o.xN,{})}),(0,r.jsx)("div",{className:s.label,children:n})]})}))},25534:function(e,t,n){var a=n(18489),s=(n(50390),n(25594)),i=n(86509),o=n(4285),r=n(72462),l=n(62559);t.Z=(0,o.Z)((function(e){return(0,i.Z)((0,a.Z)({},r.Bw))}))((function(e){var t=e.classes,n=e.className,a=void 0===n?"":n,i=e.children;return(0,l.jsx)("div",{className:t.contentSpacer,children:(0,l.jsx)(s.ZP,{container:!0,children:(0,l.jsx)(s.ZP,{item:!0,xs:12,className:a,children:i})})})}))},35721:function(e,t,n){n(50390);var a=n(34424),s=n(56805),i=n(25594),o=n(86509),r=n(4285),l=n(35477),c=n(95467),d=n(26805),u=n(44078),m=n(5265),p=n(63548),h=n(62559),g={toggleList:m.kQ},f=(0,a.$j)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),g);t.Z=f((0,r.Z)((function(e){return(0,o.Z)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,n=e.label,a=e.actions,o=e.sidebarOpen,r=e.operatorMode,m=e.managerObjects,g=e.toggleList;return(0,h.jsxs)(i.ZP,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[(0,h.jsx)(s.Z,{display:{xs:"block",sm:"block",md:"none"},children:(0,h.jsx)(i.ZP,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),(0,h.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:6,className:t.label,children:[!o&&(0,h.jsx)("div",{className:t.logo,children:r?(0,h.jsx)(d.Z,{}):(0,h.jsx)(u.Z,{})}),(0,h.jsx)(l.Z,{variant:"h4",className:t.labelStyle,children:n})]}),(0,h.jsxs)(i.ZP,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:[a&&a,m&&m.length>0&&(0,h.jsx)(c.Z,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){g()},size:"large",children:(0,h.jsx)(p.gx,{})})]})]})})))},66721:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(35531),s=n(23430),i=n(18489),o=n(50390),r=n(34424),l=n(38342),c=n.n(l),d=n(86509),u=n(4285),m=n(25594),p=n(66946),h=n(72462),g=n(28948),f=n(44149),x=n(30324),b=n(8174),j=n(12066),v=n(62559),Z=(0,u.Z)((function(e){return(0,d.Z)({searchField:(0,i.Z)((0,i.Z)({},h.qg.searchField),{},{height:30,padding:0,"& input":{padding:"0 12px",height:28,fontSize:12,fontWeight:600,color:"#393939"},"&.isDisabled":{"&:hover":{borderColor:"#EAEDEE"}},"& input.Mui-disabled":{backgroundColor:"#EAEAEA"}}),labelStyle:{color:"#393939",fontSize:12,marginBottom:4},buttonKit:{display:"flex",alignItems:"center"},fieldContainer:{flexGrow:1,margin:"0 15px"}})}))((function(e){var t=e.classes,n=e.label,a=e.onChange,s=e.value,i=e.placeholder,r=void 0===i?"":i,l=e.id,c=e.name;return(0,v.jsx)(o.Fragment,{children:(0,v.jsxs)("div",{className:t.fieldContainer,children:[(0,v.jsx)("div",{className:t.labelStyle,children:n}),(0,v.jsx)("div",{className:t.buttonKit,children:(0,v.jsx)(j.Z,{placeholder:r,id:l,name:c,label:"",onChange:function(e){a(e.target.value)},InputProps:{disableUnderline:!0},className:t.searchField,value:s})})]})})})),S=n(76352),C={time:"Timestamp",api_name:"API Name",bucket:"Bucket",object:"Object",remote_host:"Remote Host",request_id:"Request ID",user_agent:"User Agent",response_status:"Response Status",response_status_code:"Response Status Code",request_content_length:"Request Content Length",response_content_length:"Response Content Length",time_to_response_ns:"Time to Response NS"},y=(0,u.Z)((function(e){return(0,d.Z)((0,i.Z)({buttonContainer:{textAlign:"right"},objectKeyCol:{fontWeight:700,paddingRight:"10px",textAlign:"left"}},h.oO))}))((function(e){var t=e.modalOpen,n=e.logSearchElement,a=e.onClose,s=e.classes,i=Object.keys(n);return(0,v.jsx)(o.Fragment,{children:(0,v.jsx)(S.Z,{modalOpen:t,title:"Full Log Information",onClose:function(){a()},children:(0,v.jsxs)(m.ZP,{container:!0,children:[(0,v.jsx)(m.ZP,{item:!0,xs:12,children:(0,v.jsx)("table",{children:(0,v.jsx)("tbody",{children:i.map((function(e,t){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{className:s.objectKeyCol,children:c()(C,e,"".concat(e))}),(0,v.jsx)("td",{children:c()(n,e,"")})]},"logSearch-".concat(t.toString()))}))})})}),(0,v.jsx)(m.ZP,{item:!0,xs:12,className:s.buttonContainer,children:(0,v.jsx)(p.Z,{type:"button",variant:"contained",color:"primary",onClick:a,children:"Close"})})]})})})})),_=n(17778),N=n(35721),k=n(29316),P=n(25534),E=n(37354),A=n(49495),L=n(15607),w=n(63548),I=n(8235),F=function(e){var t=e.iconComponent,n=e.entity,a=e.documentationLink;return(0,v.jsx)(m.ZP,{container:!0,justifyContent:"center",alignContent:"center",alignItems:"center",children:(0,v.jsx)(m.ZP,{item:!0,xs:8,children:(0,v.jsx)(I.Z,{title:"".concat(n," not available"),iconComponent:t,help:(0,v.jsxs)(o.Fragment,{children:["This feature is not available.",(0,v.jsx)("br",{}),"Please configure"," ",(0,v.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:n})," ","first to use this feature."]})})})})},M={setErrorSnackMessage:f.Ih},O=(0,r.$j)((function(e){return{features:e.console.session.features}}),M),R=(0,u.Z)((function(e){return(0,d.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({blockCollapsed:{display:"none",overflowY:"hidden"},filterOpen:{display:"block",marginBottom:12},endLineAction:{marginBottom:15,padding:"0 15px 0 15px",display:"flex",alignItems:"center",justifyContent:"flex-end"},filtersContainer:{display:"flex",justifyContent:"space-between",marginBottom:12},innerContainer:{backgroundColor:"#fff"},noticeLabel:{marginLeft:15,marginBottom:15,fontSize:12,color:"#9C9C9C"},tableFOpen:{height:"calc(100vh - 520px)"},tableFClosed:{height:"calc(100vh - 320px)"}},h.VX),h.S),{},{searchOptions:{display:"flex",padding:15,"@media (max-width: 900px)":{flexFlow:"column"}},formBox:{border:"1px solid #EAEAEA",marginBottom:15},dateRangePicker:{"& div":{marginBottom:0}},advancedButton:{display:"flex",alignItems:"center",justifyContent:"flex-start"}},h.o$),(0,h.Bz)(e.spacing(4))))}))(O((function(e){var t=e.classes,n=e.features,i=e.setErrorSnackMessage,r=(0,o.useState)(!0),l=(0,s.Z)(r,2),d=l[0],u=l[1],h=(0,o.useState)(null),f=(0,s.Z)(h,2),j=f[0],S=f[1],I=(0,o.useState)(null),M=(0,s.Z)(I,2),O=M[0],R=M[1],q=(0,o.useState)(!1),B=(0,s.Z)(q,2),D=B[0],z=B[1],T=(0,o.useState)([]),K=(0,s.Z)(T,2),H=K[0],W=K[1],U=(0,o.useState)(""),G=(0,s.Z)(U,2),Y=G[0],$=G[1],V=(0,o.useState)(""),Q=(0,s.Z)(V,2),X=Q[0],J=Q[1],ee=(0,o.useState)(""),te=(0,s.Z)(ee,2),ne=te[0],ae=te[1],se=(0,o.useState)(""),ie=(0,s.Z)(se,2),oe=ie[0],re=ie[1],le=(0,o.useState)(""),ce=(0,s.Z)(le,2),de=ce[0],ue=ce[1],me=(0,o.useState)(""),pe=(0,s.Z)(me,2),he=pe[0],ge=pe[1],fe=(0,o.useState)("DESC"),xe=(0,s.Z)(fe,2),be=xe[0],je=xe[1],ve=(0,o.useState)(["time","api_name","bucket","object","remote_host","request_id","user_agent","response_status"]),Ze=(0,s.Z)(ve,2),Se=Ze[0],Ce=Ze[1],ye=(0,o.useState)(0),_e=(0,s.Z)(ye,2),Ne=_e[0],ke=_e[1],Pe=(0,o.useState)(!1),Ee=(0,s.Z)(Pe,2),Ae=Ee[0],Le=Ee[1],we=(0,o.useState)(!1),Ie=(0,s.Z)(we,2),Fe=Ie[0],Me=Ie[1],Oe=(0,o.useState)(null),Re=(0,s.Z)(Oe,2),qe=Re[0],Be=Re[1],De=null,ze=n&&n.includes("log-search"),Te=(0,o.useCallback)((function(){if(!Ae&&ze){Le(!0);var e="".concat(""!==Y?"&fp=bucket:".concat(Y):"").concat(""!==oe?"&fp=object:".concat(oe):"").concat(""!==X?"&fp=api_name:".concat(X):"").concat(""!==de?"&fp=request_id:".concat(de):"").concat(""!==ne?"&fp=user_agent:".concat(ne):"").concat(""!==he?"&fp=response_status:".concat(he):"");(e=e.trim()).endsWith(",")&&(e=e.slice(0,-1)),x.Z.invoke("GET","/api/v1/logs/search?q=reqinfo".concat(""!==e?"".concat(e):"","&pageSize=100&pageNo=").concat(Ne,"&order=").concat("DESC"===be?"timeDesc":"timeAsc").concat(null!==j?"&timeStart=".concat(j.toISOString()):"").concat(null!==O?"&timeEnd=".concat(O.toISOString()):"")).then((function(e){var t=e.results||[];u(!1),Le(!1),W(t),ke(Ne+1),null!==De&&De()})).catch((function(e){u(!1),Le(!1),i(e)}))}else u(!1),Le(!1)}),[Ae,ze,Y,oe,X,de,ne,he,Ne,be,j,O,De,i]);(0,o.useEffect)((function(){d&&(W([]),Te())}),[d,be,Te]);return(0,v.jsxs)(o.Fragment,{children:[Fe&&null!==qe&&(0,v.jsx)(y,{logSearchElement:qe,modalOpen:Fe,onClose:function(){Be(null),Me(!1)}}),(0,v.jsx)(N.Z,{label:"Audit Logs"}),(0,v.jsx)(k.Z,{to:"/tools",label:"Return to Tools"}),(0,v.jsx)(P.Z,{children:ze?(0,v.jsxs)(o.Fragment,{children:[" ",(0,v.jsxs)(m.ZP,{xs:12,className:t.formBox,children:[(0,v.jsxs)(m.ZP,{item:!0,xs:12,className:"".concat(t.searchOptions),children:[(0,v.jsx)("div",{className:t.dateRangePicker,children:(0,v.jsx)(_.Z,{setTimeEnd:R,setTimeStart:S,timeEnd:O,timeStart:j})}),(0,v.jsx)(m.ZP,{item:!0,className:t.advancedButton,children:(0,v.jsxs)("button",{onClick:function(){z(!D)},className:t.advancedConfiguration,children:[D?"Hide":"Show"," advanced Filters"," ",(0,v.jsx)("span",{className:D?t.advancedOpen:t.advancedClosed,children:(0,v.jsx)(E.Z,{})})]})})]}),(0,v.jsx)(m.ZP,{item:!0,xs:12,className:"".concat(t.blockCollapsed," ").concat(D?t.filterOpen:""),children:(0,v.jsxs)("div",{className:t.innerContainer,children:[(0,v.jsxs)("div",{className:t.noticeLabel,children:["Enable your preferred options to get filtered records.",(0,v.jsx)("br",{}),"You can use '*' to match any character, '.' to signify a single character or '\\' to scape an special character (E.g. mybucket-*)"]}),(0,v.jsxs)("div",{className:t.filtersContainer,children:[(0,v.jsx)(Z,{onChange:$,value:Y,label:"Bucket",id:"bucket",name:"bucket"}),(0,v.jsx)(Z,{onChange:J,value:X,label:"API Name",id:"api_name",name:"api_name"}),(0,v.jsx)(Z,{onChange:ae,value:ne,label:"User Agent",id:"user_agent",name:"user_agent"})]}),(0,v.jsxs)("div",{className:t.filtersContainer,children:[(0,v.jsx)(Z,{onChange:re,value:oe,label:"Object",id:"object",name:"object"}),(0,v.jsx)(Z,{onChange:ue,value:de,label:"Request ID",id:"request_id",name:"request_id"}),(0,v.jsx)(Z,{onChange:ge,value:he,label:"Response Status",id:"response_status",name:"response_status"})]})]})}),(0,v.jsx)(m.ZP,{item:!0,xs:12,className:t.endLineAction,children:(0,v.jsx)(p.Z,{type:"button",variant:"contained",color:"primary",onClick:function(){ke(0),u(!0)},children:"Get Information"})})]}),(0,v.jsx)(m.ZP,{item:!0,xs:12,className:t.tableBlock,children:(0,v.jsx)(L.Z,{scopes:[A.Ft.ADMIN_HEALTH_INFO],resource:A.C3,errorProps:{disabled:!0},children:(0,v.jsx)(b.Z,{columns:[{label:C.time,elementKey:"time",enableSort:!0},{label:C.api_name,elementKey:"api_name"},{label:C.bucket,elementKey:"bucket"},{label:C.object,elementKey:"object"},{label:C.remote_host,elementKey:"remote_host"},{label:C.request_id,elementKey:"request_id"},{label:C.user_agent,elementKey:"user_agent"},{label:C.response_status,elementKey:"response_status",renderFunction:function(e){return(0,v.jsx)(o.Fragment,{children:(0,v.jsxs)("span",{children:[e.response_status_code," (",e.response_status,")"]})})},renderFullObject:!0},{label:C.request_content_length,elementKey:"request_content_length",renderFunction:g.ae},{label:C.response_content_length,elementKey:"response_content_length",renderFunction:g.ae},{label:C.time_to_response_ns,elementKey:"time_to_response_ns",renderFunction:g.Yj,contentTextAlign:"right"}],isLoading:d,records:H,entityName:"Logs",customEmptyMessage:"There is no information with this criteria",idField:"request_id",columnsSelector:!0,columnsShown:Se,onColumnChange:function(e,t){var n=(0,a.Z)(Se);t?n.includes(e)||n.push(e):n=Se.filter((function(t){return t!==e})),Ce(n)},customPaperHeight:D?t.tableFOpen:t.tableFClosed,sortConfig:{currentSort:"time",currentDirection:be,triggerSort:function(e){var t=c()(e,"sortDirection","DESC");je(t),ke(0),u(!0)}},infiniteScrollConfig:{recordsCount:1e6,loadMoreRecords:function(e){return Te(),new Promise((function(e){De=e}))}},itemActions:[{type:"view",onClick:function(e){Be(e),Me(!0)}}],textSelectable:!0})})})]}):(0,v.jsx)(F,{entity:"Audit Logs",iconComponent:(0,v.jsx)(w.W1,{}),documentationLink:"https://github.com/minio/operator/tree/master/logsearchapi"})})]})})))},37354:function(e,t,n){var a=n(64119);t.Z=void 0;var s=a(n(66830)),i=n(62559),o=(0,s.default)((0,i.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");t.Z=o},59443:function(e,t,n){var a=n(64119);t.Z=void 0;var s=a(n(66830)),i=n(62559),o=(0,s.default)((0,i.jsx)("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"}),"WatchLater");t.Z=o},7887:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(1048),s=n(32793),i=n(50390),o=n(44977),r=n(50076),l=n(8208),c=n(15573),d=n(10594);function u(e){return(0,d.Z)("MuiDialogActions",e)}(0,n(43349).Z)("MuiDialogActions",["root","spacing"]);var m=n(62559),p=["className","disableSpacing"],h=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,s.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),g=i.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiDialogActions"}),i=n.className,l=n.disableSpacing,d=void 0!==l&&l,g=(0,a.Z)(n,p),f=(0,s.Z)({},n,{disableSpacing:d}),x=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,r.Z)(n,u,t)}(f);return(0,m.jsx)(h,(0,s.Z)({className:(0,o.Z)(x.root,i),ownerState:f,ref:t},g))}))},65771:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(36222),s=n(1048),i=n(32793),o=n(50390),r=n(44977),l=n(50076),c=n(91442),d=n(35477),u=n(14478),m=n(23060),p=n(8208),h=n(10594);function g(e){return(0,h.Z)("MuiInputAdornment",e)}var f=(0,n(43349).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=n(15573),b=n(62559),j=["children","className","component","disablePointerEvents","disableTypography","position","variant"],v=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat((0,c.Z)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:t.palette.action.active},"filled"===n.variant&&(0,a.Z)({},"&.".concat(f.positionStart,"&:not(.").concat(f.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),Z=o.forwardRef((function(e,t){var n=(0,x.Z)({props:e,name:"MuiInputAdornment"}),a=n.children,p=n.className,h=n.component,f=void 0===h?"div":h,Z=n.disablePointerEvents,S=void 0!==Z&&Z,C=n.disableTypography,y=void 0!==C&&C,_=n.position,N=n.variant,k=(0,s.Z)(n,j),P=(0,m.Z)()||{},E=N;N&&P.variant,P&&!E&&(E=P.variant);var A=(0,i.Z)({},n,{hiddenLabel:P.hiddenLabel,size:P.size,disablePointerEvents:S,position:_,variant:E}),L=function(e){var t=e.classes,n=e.disablePointerEvents,a=e.hiddenLabel,s=e.position,i=e.size,o=e.variant,r={root:["root",n&&"disablePointerEvents",s&&"position".concat((0,c.Z)(s)),o,a&&"hiddenLabel",i&&"size".concat((0,c.Z)(i))]};return(0,l.Z)(r,g,t)}(A);return(0,b.jsx)(u.Z.Provider,{value:null,children:(0,b.jsx)(v,(0,i.Z)({as:f,ownerState:A,className:(0,r.Z)(L.root,p),ref:t},k,{children:"string"!==typeof a||y?(0,b.jsxs)(o.Fragment,{children:["start"===_?(0,b.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,a]}):(0,b.jsx)(d.Z,{color:"text.secondary",children:a})}))})}))}}]);
//# sourceMappingURL=3830.31b98398.chunk.js.map