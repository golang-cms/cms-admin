(this["webpackJsonpcms-admin"]=this["webpackJsonpcms-admin"]||[]).push([[7],{191:function(e,t,n){"use strict";var a=n(198),r=n.n(a),c=n(199),s=n(28),i=n(0),o=n(75);t.a=function(e){var t=Object(i.useState)(null),n=Object(s.a)(t,2),a=n[0],u=n[1],j=Object(i.useState)(null),l=Object(s.a)(j,2),b=l[0],d=l[1],m=Object(o.b)();return Object(i.useEffect)((function(){var t=!1;if(void 0!==e)return m(e).then(function(){var e=Object(c.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:if(!n.ok){e.next=11;break}return e.t0=u,e.next=6,n.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1),d(null),e.next=16;break;case 11:return e.t2=d,e.next=14,n.text();case 14:e.t3=e.sent,(0,e.t2)(e.t3);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){d(e.message)})),function(){t=!0};u(null)}),[e,m]),[a,b]}},328:function(e,t,n){"use strict";n.r(t);var a=n(189),r=n(174),c=n(175),s=n(0),i=n(73),o=n(28),u=n(173),j=n(197),l=n(191),b=function(e){var t=new URLSearchParams({client_id:"authn-proxy",client_secret:"76c7bfb2-1957-4e97-b130-b250538c34d5",grant_type:"password",username:e.username,password:e.password});return["".concat("https://keycloak-keycloak-zt1983811.cloud.okteto.net","/auth/realms/").concat("golang-cms","/protocol/openid-connect/token"),{method:"POST",body:t}]},d=function(e){var t=Object(s.useMemo)((function(){return e?b(e):void 0}),[e]);return Object(l.a)(t)},m=n(62),O=n(36),f=n(184),p=n(6),x=function(e){var t=e.register;return Object(p.jsx)(f.a,Object(O.a)({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Email Address",autoComplete:"username",autoFocus:!0},t("username")))},h=n(188),v=n(79),g=n.n(v),w=n(66),k=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}})),y=function(){var e=k();return Object(p.jsxs)("div",{className:e.paper,children:[Object(p.jsx)(h.a,{className:e.avatar,children:Object(p.jsx)(g.a,{})}),Object(p.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign in"})]})},S=n(186),C=n(180),N=function(e){var t=e.register;return Object(p.jsxs)("div",{children:[Object(p.jsx)(f.a,Object(O.a)({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"current-password"},t("password"))),Object(p.jsx)(C.a,{control:Object(p.jsx)(S.a,{value:"remember",color:"primary"}),label:"Remember me"})]})},W=n(176),E=n(126),P=function(){return Object(p.jsxs)(W.a,{container:!0,children:[Object(p.jsx)(W.a,{item:!0,xs:!0,children:Object(p.jsx)(E.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(p.jsx)(W.a,{item:!0,children:Object(p.jsx)(E.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})},T=n(181),_=n(267),q=n.n(_)()((function(e){return{submit:{margin:e.spacing(3,0,2)}}})),D=function(){var e=q();return Object(p.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"})},F=Object(u.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)}}})),I=function(){var e=F(),t=Object(s.useState)(),n=Object(o.a)(t,2),a=n[0],r=n[1],c=d(a),i=Object(o.a)(c,2),u=i[0],l=i[1],b=Object(s.useContext)(m.a),O=Object(o.a)(b,2),f=O[0],h=O[1];console.log(u,l);var v=Object(j.b)(),g=v.register,w=v.handleSubmit,k=v.watch;return Object(s.useEffect)((function(){h(u)}),[u,h]),console.log(k("username")),Object(p.jsxs)("div",{children:[Object(p.jsx)(y,{}),Object(p.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:w((function(e){console.log(e,f),r(e)})),children:[Object(p.jsx)(x,{register:g}),Object(p.jsx)(N,{register:g}),Object(p.jsx)(D,{}),Object(p.jsx)(P,{})]})]})};t.default=function(){return Object(p.jsxs)(r.a,{component:"main",maxWidth:"xs",children:[Object(p.jsx)(c.a,{}),Object(p.jsx)(I,{}),Object(p.jsx)(a.a,{mt:8,children:Object(p.jsx)(i.a,{})})]})}}}]);
//# sourceMappingURL=7.d9947cef.chunk.js.map