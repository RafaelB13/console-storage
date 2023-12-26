(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1191],{92217:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var o=r(72791),n=r(29945),i=r(78029),s=r.n(i),a=r(27454),c=r(80184);const l=e=>{let{value:t,label:r="",tooltip:i="",mode:l="json",onChange:d,editorHeight:u=250,helptip:p}=e;return(0,c.jsx)(n.pq4,{value:t,onChange:e=>d(e),mode:l,tooltip:i,editorHeight:u,label:r,helpTools:(0,c.jsx)(o.Fragment,{children:(0,c.jsx)(a.Z,{tooltip:"Copy to Clipboard",children:(0,c.jsx)(s(),{text:t,children:(0,c.jsx)(n.zxk,{type:"button",id:"copy-code-mirror",icon:(0,c.jsx)(n.TIy,{}),color:"primary",variant:"regular"})})})}),helpTip:p,helpTipPlacement:"right"})}},879:(e,t,r)=>{"use strict";r.d(t,{D_:()=>s,Et:()=>n,GJ:()=>i,yh:()=>o});const o={RED:"#C83B51",GREEN:"#4CCB92",YELLOW:"#FFBD62"},n=(e,t)=>e<=t/2?"bad":2!==t&&e===t/2+1?"warn":e===t?"good":void 0,i=e=>{switch(e){case"offline":return"bad";case"online":return"good";default:return"warn"}},s=(e,t)=>e<=t/2?"bad":e===t/2+1?"warn":e===t?"good":void 0},1191:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var o=r(72791),n=r(78687),i=r(57689),s=r(29945),a=r(23814),c=r(92217),l=r(56087),d=r(38442),u=r(75578),p=r(59114),h=r(879),f=r(80184);const y={display:"grid",gridTemplateColumns:"70px 1fr",gap:15},m=e=>{let{search:t="",children:r=""}=e;const o=new RegExp("(".concat(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}(t),")"),"i"),n=String(r).split(o);return t?n.map(((e,t)=>o.test(e)?(0,f.jsx)("mark",{children:e},t):e)):r},x=e=>{let{policyStatements:t}=e;const[r,n]=(0,o.useState)("");return(0,f.jsxs)(s.rjZ,{container:!0,children:[(0,f.jsx)(s.rjZ,{item:!0,xs:12,children:(0,f.jsxs)(s.rjZ,{container:!0,sx:{display:"flex",alignItems:"center"},children:[(0,f.jsx)(s.SYi,{content:(0,f.jsxs)(o.Fragment,{children:["Define which actions are permitted on a specified resource. Learn more about"," ",(0,f.jsx)("a",{target:"blank",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html",children:"IAM conditional statements"}),"."]}),placement:"right",children:(0,f.jsx)(s.rjZ,{item:!0,xs:12,sm:6,sx:{fontWeight:"bold"},children:"Statements"})}),(0,f.jsx)(s.rjZ,{item:!0,xs:12,sm:6,sx:{display:"flex",justifyContent:"flex-end"},children:(0,f.jsx)(p.Z,{placeholder:"Search",onChange:n,value:r,sx:{maxWidth:380}})})]})}),!t&&(0,f.jsx)(o.Fragment,{children:"Policy has no statements"}),t&&(0,f.jsx)(s.rjZ,{item:!0,xs:12,sx:{"& .policy-row":{borderBottom:"1px solid #eaeaea"},"& .policy-row:first-child":{borderTop:"1px solid #eaeaea"},"& .policy-row:last-child":{borderBottom:"0px"},paddingTop:"15px","& mark":{color:"#000000",fontWeight:500}},children:t.map(((e,t)=>{const o=e.Effect,n="Allow"===o;return(0,f.jsxs)(s.xuv,{className:"policy-row",sx:{display:"grid",gridTemplateColumns:"1fr",gap:"15px",fontSize:"14px",padding:"10px 0 10px 0","& .label":{fontWeight:600}},children:[(0,f.jsxs)(s.xuv,{sx:y,children:[(0,f.jsx)(s.xuv,{className:"label",children:"Effect:"}),(0,f.jsxs)(s.xuv,{sx:{display:"flex",alignItems:"center","& .min-icon":{marginRight:"5px",fill:n?h.yh.GREEN:h.yh.RED,height:"14px",width:"14px"}},children:[n?(0,f.jsx)(s.E31,{}):(0,f.jsx)(s.dRf,{}),o]})]}),(0,f.jsxs)(s.rjZ,{container:!0,sx:{gap:15},children:[(0,f.jsxs)(s.rjZ,{item:!0,xs:12,sm:6,sx:y,children:[(0,f.jsx)(s.xuv,{className:"label",children:"Actions:"}),(0,f.jsx)(s.xuv,{children:e.Action&&e.Action.map(((e,o)=>(0,f.jsx)("div",{children:(0,f.jsx)(m,{search:r,children:e})},"".concat(t,"-r-").concat(o))))})]}),(0,f.jsxs)(s.rjZ,{item:!0,xs:12,sm:6,sx:y,children:[(0,f.jsx)(s.xuv,{className:"label",children:"Resources:"}),(0,f.jsx)(s.xuv,{children:e.Resource&&e.Resource.map(((e,o)=>(0,f.jsxs)("div",{children:[" ",(0,f.jsx)(m,{search:r,children:e})]},"".concat(t,"-r-").concat(o))))})]})]})]},"".concat(t))}))})]})};var j=r(45248),b=r(87995),g=r(46078),v=r(44690),C=r(27454),w=r(79844),S=r(31776),O=r(99670);const P=(0,u.Z)(o.lazy((()=>r.e(312).then(r.bind(r,312))))),E=()=>{const e=(0,v.TL)(),t=(0,i.s0)(),r=(0,i.UO)(),u=(0,n.v9)(g.$4),[h,y]=(0,o.useState)(null),[m,E]=(0,o.useState)([]),[k,R]=(0,o.useState)([]),[Z,D]=(0,o.useState)([]),[_,F]=(0,o.useState)(!1),T=(0,j.IO)(r.policyName||""),[A,I]=(0,o.useState)(""),[M,N]=(0,o.useState)(!0),[L,B]=(0,o.useState)(""),[U,G]=(0,o.useState)(!0),[z,H]=(0,o.useState)(""),[K,J]=(0,o.useState)(!0),[W,X]=(0,o.useState)(!1),[Y,Q]=(0,o.useState)("summary"),$=u&&u.includes("ldap-idp")||!1,q=(0,d.F)(l.C3,l.K6,!0),V=(0,d.F)(l.C3,l.k_,!0),ee=(0,d.F)(l.C3,l.Rs,!0),te=(0,d.F)(l.C3,l.iw,!0),re=(0,d.F)(l.C3,l.GD,!0),oe=(0,d.F)(l.C3,l.bE,!0),ne=(0,d.F)(l.C3,l.XM,!0);(0,o.useEffect)((()=>{M&&(M&&(re?S.h.policy.policyInfo((0,j.LL)(T)).then((e=>{if(e.data){var t,r;y(e.data),I(e?JSON.stringify(JSON.parse(null===(t=e.data)||void 0===t?void 0:t.policy),null,4):"");const o=JSON.parse(null===(r=e.data)||void 0===r?void 0:r.policy);E(o.Statement)}N(!1)})).catch((t=>{e((0,b.Ih)(t)),N(!1)})):N(!1)),U&&(ee&&!$?S.h.policies.listUsersForPolicy((0,j.LL)(T)).then((e=>{var t;R(null!==(t=e.data)&&void 0!==t?t:[]),G(!1)})).catch((t=>{e((0,b.Ih)(t)),G(!1)})):G(!1)),K&&(q&&!$?S.h.policies.listGroupsForPolicy((0,j.LL)(T)).then((e=>{var t;D(null!==(t=e.data)&&void 0!==t?t:[]),J(!1)})).catch((t=>{e((0,b.Ih)(t)),J(!1)})):J(!1)))}),[T,M,U,K,R,D,I,y,G,J,ee,q,re,$,e]);const ie=""!==T.trim(),se=[{type:"view",onClick:e=>{t("".concat(l.gA.USERS,"/").concat((0,j.LL)(e)))},disableButtonFunction:()=>!te}],ae=k.filter((e=>e.includes(L))),ce=[{type:"view",onClick:e=>{t("".concat(l.gA.GROUPS,"/").concat((0,j.LL)(e)))},disableButtonFunction:()=>!V}],le=Z.filter((e=>e.includes(z))),de=()=>{G(!0),J(!0),N(!0)};return(0,o.useEffect)((()=>{e((0,b.Sc)("policy_details_summary"))}),[]),(0,f.jsxs)(o.Fragment,{children:[W&&(0,f.jsx)(P,{deleteOpen:W,selectedPolicy:T,closeDeleteModalAndRefresh:e=>{X(!1),t(l.gA.POLICIES)}}),(0,f.jsx)(w.Z,{label:(0,f.jsx)(o.Fragment,{children:(0,f.jsx)(s.hbI,{label:"Policy",onClick:()=>t(l.gA.POLICIES)})}),actions:(0,f.jsx)(O.Z,{})}),(0,f.jsxs)(s.Xgh,{children:[(0,f.jsx)(s.UHn,{icon:(0,f.jsx)(s.v42,{width:40}),title:T,subTitle:(0,f.jsx)(o.Fragment,{children:"IAM Policy"}),actions:(0,f.jsxs)(o.Fragment,{children:[(0,f.jsx)(d.s,{scopes:[l.Ft.ADMIN_DELETE_POLICY],resource:l.C3,errorProps:{disabled:!0},children:(0,f.jsx)(C.Z,{tooltip:oe?"":(0,l.MK)(l.bE,"delete Policies"),children:(0,f.jsx)(s.zxk,{id:"delete-policy",label:"Delete Policy",variant:"secondary",icon:(0,f.jsx)(s.XHJ,{}),onClick:()=>{X(!0)},disabled:!oe})})}),(0,f.jsx)(C.Z,{tooltip:"Refresh",children:(0,f.jsx)(s.zxk,{id:"refresh-policy",label:"Refresh",variant:"regular",icon:(0,f.jsx)(s.DuK,{}),onClick:()=>{de()}})})]}),sx:{marginBottom:15}}),(0,f.jsx)(s.xuv,{children:(0,f.jsx)(s.mQc,{options:[{tabConfig:{label:"Summary",disabled:!re,id:"summary"},content:(0,f.jsx)(o.Fragment,{children:(0,f.jsxs)(s.rjZ,{onMouseMove:()=>e((0,b.Sc)("policy_details_summary")),children:[(0,f.jsx)(s.NZf,{separator:!0,sx:{marginBottom:15},children:"Policy Summary"}),(0,f.jsx)(s.xuv,{withBorders:!0,children:(0,f.jsx)(x,{policyStatements:m})})]})})},{tabConfig:{label:"Users",disabled:!ee||$,id:"users"},content:(0,f.jsx)(o.Fragment,{children:(0,f.jsxs)(s.rjZ,{onMouseMove:()=>e((0,b.Sc)("policy_details_users")),children:[(0,f.jsx)(s.NZf,{separator:!0,sx:{marginBottom:15},children:"Users"}),(0,f.jsxs)(s.rjZ,{container:!0,children:[k.length>0&&(0,f.jsx)(s.rjZ,{item:!0,xs:12,sx:{...a.OR.actionsTray,marginBottom:15},children:(0,f.jsx)(p.Z,{value:L,placeholder:"Search Users",id:"search-resource",onChange:e=>{B(e)}})}),(0,f.jsx)(s.wQF,{itemActions:se,columns:[{label:"Name",elementKey:"name"}],isLoading:U,records:ae,entityName:"Users with this Policy associated",idField:"name",customPaperHeight:"500px"})]})]})})},{tabConfig:{label:"Groups",disabled:!q||$,id:"groups"},content:(0,f.jsx)(o.Fragment,{children:(0,f.jsxs)(s.rjZ,{onMouseMove:()=>e((0,b.Sc)("policy_details_groups")),children:[(0,f.jsx)(s.NZf,{separator:!0,sx:{marginBottom:15},children:"Groups"}),(0,f.jsxs)(s.rjZ,{container:!0,children:[Z.length>0&&(0,f.jsx)(s.rjZ,{item:!0,xs:12,sx:{...a.OR.actionsTray,marginBottom:15},children:(0,f.jsx)(p.Z,{value:L,placeholder:"Search Groups",id:"search-resource",onChange:e=>{H(e)}})}),(0,f.jsx)(s.wQF,{itemActions:ce,columns:[{label:"Name",elementKey:"name"}],isLoading:K,records:le,entityName:"Groups with this Policy associated",idField:"name",customPaperHeight:"500px"})]})]})})},{tabConfig:{label:"Raw Policy",disabled:!re,id:"raw-policy"},content:(0,f.jsx)(o.Fragment,{children:(0,f.jsxs)(s.rjZ,{onMouseMove:()=>e((0,b.Sc)("policy_details_policy")),children:[(0,f.jsx)(s.SYi,{content:(0,f.jsx)(o.Fragment,{children:(0,f.jsx)("a",{target:"blank",href:"https://min.io/docs/minio/kubernetes/upstream/administration/identity-access-management/policy-based-access-control.html#policy-document-structure",children:"Guide to access policy structure"})}),placement:"right",children:(0,f.jsx)(s.NZf,{children:"Raw Policy"})}),(0,f.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:t=>{t.preventDefault(),_||(F(!0),ne?S.h.policies.addPolicy({name:T,policy:A}).then((t=>{F(!1),e((0,b.y1)("Policy successfully updated")),de()})).catch((t=>{F(!1),e((0,b.Ih)({errorMessage:"There was an error updating the Policy ",detailedError:"There was an error updating the Policy: "+(t.error.detailedMessage||"")+". Please check Policy syntax."}))})):F(!1))},children:(0,f.jsxs)(s.rjZ,{container:!0,children:[(0,f.jsx)(s.rjZ,{item:!0,xs:12,children:(0,f.jsx)(c.Z,{value:A,onChange:e=>{ne&&I(e)},editorHeight:"350px",helptip:(0,f.jsx)(o.Fragment,{children:(0,f.jsx)("a",{target:"blank",href:"https://min.io/docs/minio/kubernetes/upstream/administration/identity-access-management/policy-based-access-control.html#policy-document-structure",children:"Guide to access policy structure"})})})}),(0,f.jsxs)(s.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end",paddingTop:16,gap:8},children:[!h&&(0,f.jsx)(s.zxk,{type:"button",variant:"regular",id:"clear-policy",onClick:()=>{I("{}")},children:"Clear"}),(0,f.jsx)(d.s,{scopes:[l.Ft.ADMIN_CREATE_POLICY],resource:l.C3,errorProps:{disabled:!0},children:(0,f.jsx)(C.Z,{tooltip:ne?"":(0,l.MK)(l.XM,"edit a Policy"),children:(0,f.jsx)(s.zxk,{id:"save",type:"submit",variant:"callAction",color:"primary",disabled:_||!ie||!ne,label:"Save"})})})]}),_&&(0,f.jsx)(s.rjZ,{item:!0,xs:12,children:(0,f.jsx)(s.kod,{})})]})})]})})}],currentTabOrPath:Y,onTabClick:e=>Q(e)})})]})]})}},76998:(e,t,r)=>{"use strict";var o=r(42458),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,i,s,a,c,l,d=!1;t||(t={}),r=t.debug||!1;try{if(s=o(),a=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=n[t.format]||n.default;window.clipboardData.setData(i,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(l),a.selectNodeContents(l),c.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(u){r&&console.error("unable to copy using execCommand: ",u),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(u){r&&console.error("unable to copy using clipboardData: ",u),r&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(a):c.removeAllRanges()),l&&document.body.removeChild(l),s()}return d}},568:(e,t,r)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=a(r(72791)),i=a(r(76998)),s=["text","onCopy","options","children"];function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var i=y(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,r)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,e);var t,r,o,a=h(c);function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return m(f(e=a.call.apply(a,[this].concat(r))),"onClick",(function(t){var r=e.props,o=r.text,s=r.onCopy,a=r.children,c=r.options,l=n.default.Children.only(a),d=(0,i.default)(o,c);s&&s(o,d),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(t)})),e}return t=c,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=d(e,s),o=n.default.Children.only(t);return n.default.cloneElement(o,l(l({},r),{},{onClick:this.onClick}))}}])&&u(t.prototype,r),o&&u(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.default.PureComponent);t.CopyToClipboard=x,m(x,"defaultProps",{onCopy:void 0,options:void 0})},78029:(e,t,r)=>{"use strict";var o=r(568).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},42458:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=1191.77653544.chunk.js.map