(this["webpackJsonpcms-admin"]=this["webpackJsonpcms-admin"]||[]).push([[6],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ce})),n.d(t,"c",(function(){return ye}));var a,c=n(1),o=n.n(c),r=n(2),i=n(235),s=n(236),l=n(234),u=n(89),d=n(4),j=Object(l.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),b=function(){var e=j(),t=Object(u.a)(e.paper,e.fixedHeight);return Object(d.jsxs)(i.a,{container:!0,spacing:3,children:[Object(d.jsx)(i.a,{item:!0,xs:12,md:8,lg:9,children:Object(d.jsx)(s.a,{className:t})}),Object(d.jsx)(i.a,{item:!0,xs:12,md:4,lg:3,children:Object(d.jsx)(s.a,{className:t})}),Object(d.jsx)(i.a,{item:!0,xs:12,children:Object(d.jsx)(s.a,{className:e.paper})})]})},O=n(32),p=n(255),f=n(256),h=n(257),m=n(258),x=n(259),v=n(260),g=n(245),C=n(155),y=n.n(C),k=n(135),D=n.n(k),S=n(136),w=n(42),N=function(e){var t=Object(c.useState)(null),n=Object(O.a)(t,2),a=n[0],o=n[1],r=Object(c.useState)(null),i=Object(O.a)(r,2),s=i[0],l=i[1],u=Object(w.b)();return Object(c.useEffect)((function(){var t=!1;if(void 0!==e)return u(e).then(function(){var e=Object(S.a)(D.a.mark((function e(n){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:if(!n.ok){e.next=11;break}return e.t0=o,e.next=6,n.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1),l(null),e.next=16;break;case 11:return e.t2=l,e.next=14,n.text();case 14:e.t3=e.sent,(0,e.t2)(e.t3);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){l(e.message)})),function(){t=!0}}),[e,u]),[a,s]},W=function(e){return["".concat("https://cms-api-content-api-cms-zt1983811.cloud.okteto.net/v1","/posts"),{method:"GET"}]},T=function(e){var t=Object(c.useMemo)((function(){return W(e)}),[e]);return N(t)},A=n(237),E=n(241),P=n(242),U=n(243),I=n(244),F=function(e){return["".concat("https://cms-api-content-api-cms-zt1983811.cloud.okteto.net/v1","/posts/").concat(e),{method:"DELETE"}]},z=function(e){var t=Object(c.useMemo)((function(){return e?F(e):void 0}),[e]);return N(t)},M=function(e){var t,n=Object(c.useState)(),o=Object(O.a)(n,2),r=o[0],i=o[1],s=z(r),l=Object(O.a)(s,2),u=l[0],j=l[1];return Object(c.useEffect)((function(){console.log("Delete post: ",u,j,r),u&&u.id===r&&(e.onClose(a.Delete),i(void 0))}),[u,r,j,e]),Object(d.jsxs)(A.a,{open:e.open,onClose:function(){return e.onClose(a.Delete)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(d.jsx)(E.a,{id:"alert-dialog-title",children:"Delete Post"}),Object(d.jsx)(P.a,{children:Object(d.jsxs)(U.a,{id:"alert-dialog-description",children:["Are you sure delete Post ",null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.title]})}),Object(d.jsxs)(I.a,{children:[Object(d.jsx)(g.a,{onClick:function(){return e.onClose(a.Delete)},color:"primary",children:"Cancel"}),Object(d.jsx)(g.a,{onClick:function(){var t;i(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.id)},color:"primary",autoFocus:!0,children:"Confirm"})]})]})},V=n(34),H=n(253),J=n(252),G=n(246),L=n(247),q=n(250),B=n(251),R=n(249),Y=n(265),_=n(254),K=n(232),Q=n(160),X=n.n(Q),Z=n(129),$=function(e){return["".concat("https://cms-api-content-api-cms-zt1983811.cloud.okteto.net/v1","/posts"),{body:JSON.stringify(e),method:"POST"}]},ee=function(e){var t=Object(c.useMemo)((function(){return $(e)}),[e]);return N(t)},te=function(e){return["".concat("https://cms-api-content-api-cms-zt1983811.cloud.okteto.net/v1","/posts/").concat(null===e||void 0===e?void 0:e.id),{body:JSON.stringify(e),method:"PUT"}]},ne=function(e){var t=Object(c.useMemo)((function(){return te(e)}),[e]);return N(t)},ae=n(108),ce=n(248),oe=n(266),re=function(e){return["".concat("https://cms-api-content-api-cms-zt1983811.cloud.okteto.net/v1","/groups?title=like&title=").concat(e),{method:"GET"}]},ie=function(e){var t=Object(c.useMemo)((function(){return re(e)}),[e]);return N(t)},se=function(e){var t=e.post,n=e.control,a=Object(c.useState)(!1),r=Object(O.a)(a,2),i=r[0],s=r[1],l=Object(c.useState)([]),u=Object(O.a)(l,2),j=u[0],b=u[1],p=Object(c.useState)(""),f=Object(O.a)(p,2),h=f[0],m=f[1],x=i&&0===j.length,v=ie(h),g=Object(O.a)(v,2),C=g[0],y=g[1];console.log(y);var k=Object(ae.a)((function(e,t){console.log("OnInputChange",h,t),h!==t&&(m(t),b(C))}),1500);return Object(d.jsx)("div",{children:Object(d.jsx)(Z.a,{render:function(e){return Object(d.jsx)(oe.a,{multiple:!0,id:"groups",open:i,onOpen:function(){return s(!0)},onClose:function(){return s(!1)},loading:x,options:j,value:e.field.value,getOptionSelected:function(e,t){return e.id===t.id},getOptionLabel:function(e){return e.title},onInputChange:k,onChange:function(t,n){return e.field.onChange(n)},renderInput:function(e){return Object(d.jsx)(Y.a,Object(V.a)(Object(V.a)({},e),{},{variant:"standard",id:"groups",label:"Groups",type:"groups",placeholder:"",InputProps:Object(V.a)(Object(V.a)({},e.InputProps),{},{endAdornment:Object(d.jsxs)(o.a.Fragment,{children:[x?Object(d.jsx)(ce.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})},defaultValue:null===t||void 0===t?void 0:t.groups,name:"groups",control:n})})},le=Object(l.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),ue=o.a.forwardRef((function(e,t){return Object(d.jsx)(R.a,Object(V.a)({direction:"up",ref:t},e))})),de=function(e){return e?a.Update:a.Create},je=function(e){var t=Object(Z.b)({shouldUnregister:!1}),n=t.register,a=t.handleSubmit,o=t.watch,r=t.control,i=Object(c.useState)(),s=Object(O.a)(i,2),l=s[0],u=s[1];return console.log(o("title")),Object(d.jsxs)("div",{children:[Object(d.jsxs)("form",{onSubmit:a((function(t){console.log(t),t=Object(V.a)(Object(V.a)({},null===e||void 0===e?void 0:e.data),t),u(t)})),children:[Object(d.jsx)(fe,{data:e.data,onClose:e.onClose}),Object(d.jsx)(pe,{register:n,post:null===e||void 0===e?void 0:e.data,control:r})]}),l&&((null===e||void 0===e?void 0:e.data)?Object(d.jsx)(Oe,{data:l,setData:u,onClose:e.onClose}):Object(d.jsx)(be,{data:l,setData:u,onClose:e.onClose}))]})},be=function(e){var t=e.data,n=e.setData,a=e.onClose,o=ee(t),r=Object(O.a)(o,2),i=r[0],s=r[1];return console.log("Create post: ",i,s),Object(c.useEffect)((function(){i&&(console.log("update post clean data"),a(de({})),n(void 0))}),[i,n,a]),null},Oe=function(e){var t=e.data,n=e.setData,a=e.onClose,o=ne(t),r=Object(O.a)(o,2),i=r[0],s=r[1];return console.log("Update post: ",i,s),Object(c.useEffect)((function(){i&&i.id===(null===t||void 0===t?void 0:t.id)&&(console.log("update post clean data"),a(de(t)),n(void 0))}),[t,i,n,a]),null},pe=function(e){var t=e.register,n=e.post,a=e.control;return Object(d.jsxs)(P.a,{children:[Object(d.jsx)(Y.a,Object(V.a)(Object(V.a)({autoFocus:!0,margin:"dense",id:"name",label:"Title",type:"title",fullWidth:!0},t("title")),{},{defaultValue:null===n||void 0===n?void 0:n.title})),Object(d.jsx)(se,{post:n,control:a}),Object(d.jsx)(Z.a,{render:function(e){var t=e.field;return Object(d.jsx)(Y.a,Object(V.a)({margin:"dense",id:"slug",label:"Slug",type:"text",fullWidth:!0},t))},control:a,name:"slug",defaultValue:null===n||void 0===n?void 0:n.slug}),Object(d.jsx)(Z.a,{render:function(e){var t=e.field;return Object(d.jsx)(Y.a,Object(V.a)({margin:"dense",id:"content",label:"Content",type:"text",fullWidth:!0,multiline:!0,rows:8},t))},control:a,name:"content",defaultValue:null===n||void 0===n?void 0:n.content})]})},fe=function(e){var t=e.data,n=e.onClose,a=le();return Object(d.jsx)(H.a,{className:a.appBar,children:Object(d.jsxs)(_.a,{children:[Object(d.jsx)(G.a,{edge:"start",color:"inherit",onClick:function(){return n(de(t))},"aria-label":"close",children:Object(d.jsx)(X.a,{})}),Object(d.jsx)(K.a,{variant:"h6",className:a.title,children:"Post"}),Object(d.jsx)(g.a,{autoFocus:!0,color:"inherit",type:"submit",children:"save"})]})})},he=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)(A.a,{fullScreen:!0,open:e.open,onClose:function(){return e.onClose(de(e.data))},TransitionComponent:ue,children:[Object(d.jsx)(je,{open:e.open,onClose:function(){return e.onClose(de(e.data))},data:e.data}),Object(d.jsxs)(L.a,{children:[Object(d.jsx)(q.a,{button:!0,children:Object(d.jsx)(B.a,{primary:"Phone ringtone",secondary:"Titania"})}),Object(d.jsx)(J.a,{}),Object(d.jsx)(q.a,{button:!0,children:Object(d.jsx)(B.a,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})})},me=Object(l.a)({root:{width:"100%"},container:{maxHeight:440}});!function(e){e[e.Delete=0]="Delete",e[e.Update=1]="Update",e[e.Create=2]="Create"}(a||(a={}));var xe=[{id:"id",label:"ID",minWidth:170},{id:"title",label:"Title",minWidth:100},{id:"slug",label:"Slug",minWidth:100},{id:"createAt",label:"Create At",minWidth:100},{id:"updateAt",label:"Update At",minWidth:100},{id:"actions",label:"Actions",minWidth:100}],ve=function(e){var t=e.updated,n=e.handleClickOpen,a=me(),c=T(t),o=Object(O.a)(c,2),r=o[0],i=o[1];return null!==i&&console.log(i),Object(d.jsx)(s.a,{className:a.root,children:Object(d.jsx)(p.a,{className:a.container,children:Object(d.jsxs)(f.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(d.jsx)(h.a,{children:Object(d.jsx)(m.a,{children:xe.map((function(e){return Object(d.jsx)(x.a,{style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(d.jsx)(v.a,{children:null!==r?r.map((function(e){return Object(d.jsx)(m.a,{hover:!0,role:"checkbox",tabIndex:-1,children:xe.map((function(t){return Object(d.jsx)(x.a,{children:"actions"===t.id?Object(d.jsx)(ge,{handleClickOpen:n,row:e}):y.a.get(e,t.id)},t.id)}))},e.id)})):Object(d.jsx)(m.a,{children:Object(d.jsx)(x.a,{children:"NO Data"},"NO_DATA")})})]})})})},ge=function(e){var t=e.handleClickOpen,n=e.row;return Object(d.jsxs)("div",{children:[Object(d.jsx)(g.a,{color:"secondary",variant:"contained",onClick:function(){return t(a.Update,n)},children:"Edit"}),Object(d.jsx)(g.a,{color:"default",variant:"contained",onClick:function(){return t(a.Delete,n)},children:"Delete"})]})},Ce="/admin",ye=[{path:Ce,name:"Dashboard",component:b},{path:Ce+"/post",name:"Post",component:function(){var e=o.a.useState(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],r=o.a.useState(!1),s=Object(O.a)(r,2),l=s[0],u=s[1],j=o.a.useState(!1),b=Object(O.a)(j,2),p=b[0],f=b[1],h=o.a.useState(),m=Object(O.a)(h,2),x=m[0],v=m[1],C=function(e,t){switch(e){case a.Create:case a.Update:c(!0);break;case a.Delete:u(!0)}t&&v(t)},y=function(e){switch(console.log("close dialog"),e){case a.Create:case a.Update:c(!1);break;case a.Delete:u(!1)}v(void 0),f(!p)};return Object(d.jsxs)(i.a,{container:!0,spacing:3,children:[Object(d.jsx)(g.a,{variant:"contained",color:"primary",onClick:function(){return C(a.Create)},children:"Create"}),Object(d.jsx)(he,{open:n,onClose:y,data:x}),Object(d.jsx)(M,{open:l,onClose:y,data:x}),Object(d.jsx)(i.a,{item:!0,xs:12,children:Object(d.jsx)(ve,{updated:p,handleClickOpen:C})})]})}}];t.b=function(){return Object(d.jsx)(r.c,{children:ye.map((function(e,t){var n=e.path,a=e.component;return Object(d.jsx)(r.a,{exact:!0,path:n,component:a},t)}))})}},134:function(e,t,n){"use strict";var a=n(233),c=n(232),o=(n(1),n(4));t.a=function(){return Object(o.jsxs)(c.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(o.jsx)(a.a,{color:"inherit",href:"https://material-ui.com/",children:"CMS Admin"})," ",(new Date).getFullYear(),"."]})}},268:function(e,t,n){"use strict";n.r(t);var a=n(272),c=n(261),o=n(86),r=(n(1),n(134)),i=n(234),s=n(265),l=n(4),u=function(){return Object(l.jsx)(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0})},d=n(273),j=n(190),b=n.n(j),O=n(232),p=Object(i.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}})),f=function(){var e=p();return Object(l.jsxs)("div",{className:e.paper,children:[Object(l.jsx)(d.a,{className:e.avatar,children:Object(l.jsx)(b.a,{})}),Object(l.jsx)(O.a,{component:"h1",variant:"h5",children:"Sign in"})]})},h=n(270),m=n(263),x=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(s.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(l.jsx)(m.a,{control:Object(l.jsx)(h.a,{value:"remember",color:"primary"}),label:"Remember me"})]})},v=n(235),g=n(233),C=function(){return Object(l.jsxs)(v.a,{container:!0,children:[Object(l.jsx)(v.a,{item:!0,xs:!0,children:Object(l.jsx)(g.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(l.jsx)(v.a,{item:!0,children:Object(l.jsx)(g.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})},y=n(245),k=n(191),D=n.n(k),S=n(111),w=D()((function(e){return{submit:{margin:e.spacing(3,0,2)}}})),N=function(){var e=w();return Object(l.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,href:S.a,children:"Sign In"})},W=Object(i.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)}}})),T=function(){var e=W();return Object(l.jsxs)("div",{children:[Object(l.jsx)(f,{}),Object(l.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(l.jsx)(u,{}),Object(l.jsx)(x,{}),Object(l.jsx)(N,{}),Object(l.jsx)(C,{})]})]})};t.default=function(){return Object(l.jsxs)(c.a,{component:"main",maxWidth:"xs",children:[Object(l.jsx)(o.a,{}),Object(l.jsx)(T,{}),Object(l.jsx)(a.a,{mt:8,children:Object(l.jsx)(r.a,{})})]})}}}]);
//# sourceMappingURL=6.ceab79df.chunk.js.map