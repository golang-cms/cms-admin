(this["webpackJsonpcms-admin"]=this["webpackJsonpcms-admin"]||[]).push([[5],{112:function(e,t,a){"use strict";var n=a(175),c=a(174),o=(a(1),a(4));t.a=function(){return Object(o.jsxs)(c.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(o.jsx)(n.a,{color:"inherit",href:"https://material-ui.com/",children:"CMS Admin"})," ",(new Date).getFullYear(),"."]})}},156:function(e,t,a){"use strict";var n=a(88),c=a(89);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a(1)),r=(0,n(a(90)).default)(o.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.default=r},202:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return K}));var n=a(1),c=a(0),o=a(3),r=(a(10),a(83)),i=a(29),l=a(91),s=Object(l.a)(n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=n.forwardRef((function(e,t){var a=e.alt,i=e.children,l=e.classes,d=e.className,u=e.component,b=void 0===u?"div":u,j=e.imgProps,m=e.sizes,p=e.src,h=e.srcSet,f=e.variant,O=void 0===f?"circle":f,v=Object(o.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),x=null,g=function(e){var t=e.src,a=e.srcSet,c=n.useState(!1),o=c[0],r=c[1];return n.useEffect((function(){if(t||a){r(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&r("loaded")},n.onerror=function(){e&&r("error")},function(){e=!1}}}),[t,a]),o}({src:p,srcSet:h}),S=p||h,y=S&&"error"!==g;return x=y?n.createElement("img",Object(c.a)({alt:a,src:p,srcSet:h,sizes:m,className:l.img},j)):null!=i?i:S&&a?a[0]:n.createElement(s,{className:l.fallback}),n.createElement(b,Object(c.a)({className:Object(r.a)(l.root,l.system,l[O],d,!y&&l.colorDefault),ref:t},v),x)})),u=Object(i.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d),b=a(191),j=a(77),m=a(200),p=a(94),h=a(174),f=a(84),O=n.forwardRef((function(e,t){e.checked;var a=e.classes,i=e.className,l=e.control,s=e.disabled,d=(e.inputRef,e.label),u=e.labelPlacement,b=void 0===u?"end":u,j=(e.name,e.onChange,e.value,Object(o.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),m=Object(p.a)(),O=s;"undefined"===typeof O&&"undefined"!==typeof l.props.disabled&&(O=l.props.disabled),"undefined"===typeof O&&m&&(O=m.disabled);var v={disabled:O};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof l.props[t]&&"undefined"!==typeof e[t]&&(v[t]=e[t])})),n.createElement("label",Object(c.a)({className:Object(r.a)(a.root,i,"end"!==b&&a["labelPlacement".concat(Object(f.a)(b))],O&&a.disabled),ref:t},j),n.cloneElement(l,v),n.createElement(h.a,{component:"span",className:Object(r.a)(a.label,O&&a.disabled)},d))})),v=Object(i.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(O),x=a(35),g=a(107),S=a(190),y=n.forwardRef((function(e,t){var a=e.autoFocus,i=e.checked,l=e.checkedIcon,s=e.classes,d=e.className,u=e.defaultChecked,b=e.disabled,j=e.icon,m=e.id,h=e.inputProps,f=e.inputRef,O=e.name,v=e.onBlur,y=e.onChange,C=e.onFocus,k=e.readOnly,E=e.required,_=e.tabIndex,T=e.type,P=e.value,N=Object(o.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),R=Object(g.a)({controlled:i,default:Boolean(u),name:"SwitchBase",state:"checked"}),w=Object(x.a)(R,2),A=w[0],D=w[1],I=Object(p.a)(),F=b;I&&"undefined"===typeof F&&(F=I.disabled);var W="checkbox"===T||"radio"===T;return n.createElement(S.a,Object(c.a)({component:"span",className:Object(r.a)(s.root,d,A&&s.checked,F&&s.disabled),disabled:F,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),I&&I.onFocus&&I.onFocus(e)},onBlur:function(e){v&&v(e),I&&I.onBlur&&I.onBlur(e)},ref:t},N),n.createElement("input",Object(c.a)({autoFocus:a,checked:i,defaultChecked:u,className:s.input,disabled:F,id:W&&m,name:O,onChange:function(e){var t=e.target.checked;D(t),y&&y(e,t)},readOnly:k,ref:f,required:E,tabIndex:_,type:T,value:P},h)),A?l:j)})),C=Object(i.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(y),k=Object(l.a)(n.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),E=Object(l.a)(n.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),_=a(16),T=Object(l.a)(n.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),P=n.createElement(E,null),N=n.createElement(k,null),R=n.createElement(T,null),w=n.forwardRef((function(e,t){var a=e.checkedIcon,i=void 0===a?P:a,l=e.classes,s=e.color,d=void 0===s?"secondary":s,u=e.icon,b=void 0===u?N:u,j=e.indeterminate,m=void 0!==j&&j,p=e.indeterminateIcon,h=void 0===p?R:p,O=e.inputProps,v=e.size,x=void 0===v?"medium":v,g=Object(o.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=m?h:b,y=m?h:i;return n.createElement(C,Object(c.a)({type:"checkbox",classes:{root:Object(r.a)(l.root,l["color".concat(Object(f.a)(d))],m&&l.indeterminate),checked:l.checked,disabled:l.disabled},color:d,inputProps:Object(c.a)({"data-indeterminate":m},O),icon:n.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===x?x:S.props.fontSize}),checkedIcon:n.cloneElement(y,{fontSize:void 0===y.props.fontSize&&"small"===x?x:y.props.fontSize}),ref:t},g))})),A=Object(i.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(_.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(_.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(w),D=a(175),I=a(177),F=a(201),W=a(156),z=a.n(W),H=a(176),B=a(198),L=a(99),V=a(112),M=a(4),U=Object(H.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function K(){var e=U();return Object(M.jsxs)(B.a,{component:"main",maxWidth:"xs",children:[Object(M.jsx)(j.a,{}),Object(M.jsxs)("div",{className:e.paper,children:[Object(M.jsx)(u,{className:e.avatar,children:Object(M.jsx)(z.a,{})}),Object(M.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(M.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(M.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(M.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(M.jsx)(v,{control:Object(M.jsx)(A,{value:"remember",color:"primary"}),label:"Remember me"}),Object(M.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,href:L.a,children:"Sign In"}),Object(M.jsxs)(I.a,{container:!0,children:[Object(M.jsx)(I.a,{item:!0,xs:!0,children:Object(M.jsx)(D.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(M.jsx)(I.a,{item:!0,children:Object(M.jsx)(D.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(M.jsx)(F.a,{mt:8,children:Object(M.jsx)(V.a,{})})]})}},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return ie})),a.d(t,"c",(function(){return le}));var n=a(1),c=a.n(n),o=a(2),r=a(177),i=a(178),l=a(176),s=a(83),d=a(4),u=Object(l.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),b=function(){var e=u(),t=Object(s.a)(e.paper,e.fixedHeight);return Object(d.jsxs)(r.a,{container:!0,spacing:3,children:[Object(d.jsx)(r.a,{item:!0,xs:12,md:8,lg:9,children:Object(d.jsx)(i.a,{className:t})}),Object(d.jsx)(r.a,{item:!0,xs:12,md:4,lg:3,children:Object(d.jsx)(i.a,{className:t})}),Object(d.jsx)(r.a,{item:!0,xs:12,children:Object(d.jsx)(i.a,{className:e.paper})})]})},j=a(31),m=a(192),p=a(193),h=a(194),f=a(195),O=a(196),v=a(197),x=a(191),g=a(130),S=a.n(g),y=a(113),C=a.n(y),k=a(114),E=a(38),_=function(e){var t=Object(n.useState)(null),a=Object(j.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(null),i=Object(j.a)(r,2),l=i[0],s=i[1],d=Object(E.b)();return Object(n.useEffect)((function(){var t=!1;return d(e).then(function(){var e=Object(k.a)(C.a.mark((function e(a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:if(!a.ok){e.next=11;break}return e.t0=o,e.next=6,a.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1),s(null),e.next=16;break;case 11:return e.t2=s,e.next=14,a.text();case 14:e.t3=e.sent,(0,e.t2)(e.t3);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){s(e.message)})),function(){t=!0}}),[e,d]),[c,l]},T=function(e){return["".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CONTENT_API_BASE_URL,"/posts"),{method:"GET"}]},P=function(e){var t=Object(n.useMemo)((function(){return T(e)}),[e]);return _(t)},N=a(32),R=a(188),w=a(180),A=a(187),D=a(186),I=a(190),F=a(183),W=a(184),z=a(185),H=a(179),B=a(200),L=a(189),V=a(174),M=a(133),U=a.n(M),K=a(135),q=function(e){return["".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CONTENT_API_BASE_URL,"/posts"),{body:JSON.stringify(e),method:"POST"}]},$=function(e){var t=Object(n.useMemo)((function(){return q(e)}),[e]);return _(t)},J=function(e){return["".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CONTENT_API_BASE_URL,"/posts/").concat(null===e||void 0===e?void 0:e.id),{body:JSON.stringify(e),method:"PUT"}]},G=function(e){var t=Object(n.useMemo)((function(){return J(e)}),[e]);return _(t)},Y=Object(l.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),Q=c.a.forwardRef((function(e,t){return Object(d.jsx)(H.a,Object(N.a)({direction:"up",ref:t},e))})),X=function(e){var t=Object(K.a)({shouldUnregister:!1}),a=t.register,c=t.handleSubmit,o=t.watch,r=Object(n.useState)(),i=Object(j.a)(r,2),l=i[0],s=i[1];return console.log(o("title")),Object(d.jsxs)("div",{children:[Object(d.jsxs)("form",{onSubmit:c((function(t){console.log(t),t=Object(N.a)(Object(N.a)({},null===e||void 0===e?void 0:e.data),t),s(t),e.onClose()})),children:[Object(d.jsx)(ae,{onClose:e.onClose}),Object(d.jsx)(te,{register:a,post:null===e||void 0===e?void 0:e.data})]}),l&&((null===e||void 0===e?void 0:e.data)?Object(d.jsx)(ee,{data:l,setData:s}):Object(d.jsx)(Z,{data:l}))]})},Z=function(e){var t=e.data,a=$(t),n=Object(j.a)(a,2),c=n[0],o=n[1];return console.log("Create post: ",c,o),null},ee=function(e){var t=e.data,a=e.setData,c=G(t),o=Object(j.a)(c,2),r=o[0],i=o[1];return console.log("Update post: ",r,i),Object(n.useEffect)((function(){console.log("update post clean data"),a(void 0)}),[a]),null},te=function(e){var t=e.register,a=e.post;return Object(d.jsxs)(A.a,{children:[Object(d.jsx)(B.a,Object(N.a)(Object(N.a)({autoFocus:!0,margin:"dense",id:"name",label:"Title",type:"title",fullWidth:!0},t("title")),{},{defaultValue:null===a||void 0===a?void 0:a.title})),Object(d.jsx)(B.a,Object(N.a)(Object(N.a)({autoFocus:!0,margin:"dense",id:"name",label:"Slug",type:"slug",fullWidth:!0},t("slug")),{},{defaultValue:null===a||void 0===a?void 0:a.slug})),Object(d.jsx)(B.a,Object(N.a)(Object(N.a)({autoFocus:!0,margin:"dense",id:"name",multiline:!0,rows:8,label:"Content",type:"content",fullWidth:!0},t("content")),{},{defaultValue:null===a||void 0===a?void 0:a.content}))]})},ae=function(e){var t=e.onClose,a=Y();return Object(d.jsx)(R.a,{className:a.appBar,children:Object(d.jsxs)(L.a,{children:[Object(d.jsx)(I.a,{edge:"start",color:"inherit",onClick:t,"aria-label":"close",children:Object(d.jsx)(U.a,{})}),Object(d.jsx)(V.a,{variant:"h6",className:a.title,children:"Post"}),Object(d.jsx)(x.a,{autoFocus:!0,color:"inherit",type:"submit",children:"save"})]})})},ne=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)(w.a,{fullScreen:!0,open:e.open,onClose:e.onClose,TransitionComponent:Q,children:[Object(d.jsx)(X,{open:e.open,onClose:e.onClose,data:e.data}),Object(d.jsxs)(F.a,{children:[Object(d.jsx)(W.a,{button:!0,children:Object(d.jsx)(z.a,{primary:"Phone ringtone",secondary:"Titania"})}),Object(d.jsx)(D.a,{}),Object(d.jsx)(W.a,{button:!0,children:Object(d.jsx)(z.a,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})})},ce=Object(l.a)({root:{width:"100%"},container:{maxHeight:440}}),oe=[{id:"id",label:"ID",minWidth:170},{id:"title",label:"Title",minWidth:100},{id:"slug",label:"Slug",minWidth:100},{id:"createAt",label:"Create At",minWidth:100},{id:"updateAt",label:"Update At",minWidth:100},{id:"actions",label:"Actions",minWidth:100}],re=function(e){var t=e.updated,a=e.handleClickOpen,n=ce(),c=P(t),o=Object(j.a)(c,2),r=o[0],l=o[1];return null!==l&&console.log(l),Object(d.jsx)(i.a,{className:n.root,children:Object(d.jsx)(m.a,{className:n.container,children:Object(d.jsxs)(p.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(d.jsx)(h.a,{children:Object(d.jsx)(f.a,{children:oe.map((function(e){return Object(d.jsx)(O.a,{style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(d.jsx)(v.a,{children:null!==r?r.map((function(e){return Object(d.jsx)(f.a,{hover:!0,role:"checkbox",tabIndex:-1,children:oe.map((function(t){var n="actions"===t.id?Object(d.jsx)(x.a,{color:"secondary",variant:"contained",onClick:function(){return a(e)},children:"Edit"}):S.a.get(e,t.id);return Object(d.jsx)(O.a,{children:n},t.id)}))},e.id)})):Object(d.jsx)(f.a,{children:Object(d.jsx)(O.a,{children:"NO Data"},"NO_DATA")})})]})})})},ie="/admin",le=[{path:ie,name:"Dashboard",component:b},{path:ie+"/post",name:"Post",component:function(){var e=c.a.useState(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],o=c.a.useState(!1),i=Object(j.a)(o,2),l=i[0],s=i[1],u=c.a.useState(),b=Object(j.a)(u,2),m=b[0],p=b[1],h=function(e){n(!0),e&&p(e)};return Object(d.jsxs)(r.a,{container:!0,spacing:3,children:[Object(d.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){return h()},children:"Create Post"}),Object(d.jsx)(ne,{open:a,onClose:function(){console.log("close dialog"),n(!1),p(void 0),s(!l)},data:m}),Object(d.jsx)(r.a,{item:!0,xs:12,children:Object(d.jsx)(re,{updated:l,handleClickOpen:h})})]})}}];t.b=function(){return Object(d.jsx)(o.c,{children:le.map((function(e,t){var a=e.path,n=e.component;return Object(d.jsx)(o.a,{exact:!0,path:a,component:n},t)}))})}}}]);
//# sourceMappingURL=5.d7a7c39b.chunk.js.map