(this["webpackJsonpcms-admin"]=this["webpackJsonpcms-admin"]||[]).push([[6],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return $}));var c=n(1),a=n.n(c),i=n(2),r=n(35),s=n(167),o=n(168),j=n(166),l=n(81),u=n(4),b=Object(j.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),d=function(){var e=b(),t=Object(l.a)(e.paper,e.fixedHeight);return Object(u.jsxs)(s.a,{container:!0,spacing:3,children:[Object(u.jsx)(s.a,{item:!0,xs:12,md:8,lg:9,children:Object(u.jsx)(o.a,{className:t})}),Object(u.jsx)(s.a,{item:!0,xs:12,md:4,lg:3,children:Object(u.jsx)(o.a,{className:t})}),Object(u.jsx)(s.a,{item:!0,xs:12,children:Object(u.jsx)(o.a,{className:e.paper})})]})},x=n(30),O=n(182),h=n(183),f=n(184),p=n(185),m=n(186),g=n(187),v=n(181),y=n(122),k=n.n(y),C=n(123),N=n(36),w=function(e){var t=Object(c.useState)(null),n=Object(x.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(null),s=Object(x.a)(r,2),o=s[0],j=s[1],l=Object(N.b)();return Object(c.useEffect)((function(){l(e).then(function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=9;break}return e.t0=i,e.next=4,t.json();case 4:e.t1=e.sent,(0,e.t0)(e.t1),j(null),e.next=14;break;case 9:return e.t2=j,e.next=12,t.text();case 12:e.t3=e.sent,(0,e.t2)(e.t3);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){j(e.message)}))}),[e,l]),[a,o]},T=function(){return["".concat("/v1","/posts"),{method:"GET"}]},W=function(){var e=Object(c.useMemo)((function(){return T()}),[]);return w(e)},D=n(95),P=n(178),H=n(170),S=n(177),F=n(176),L=n(180),A=n(173),B=n(174),E=n(175),I=n(169),J=n(194),G=n(179),M=n(164),R=n(126),_=n.n(R),q=Object(j.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),z=a.a.forwardRef((function(e,t){return Object(u.jsx)(I.a,Object(D.a)({direction:"up",ref:t},e))})),K=function(){return Object(u.jsxs)(S.a,{children:[Object(u.jsx)(J.a,{autoFocus:!0,margin:"dense",id:"name",label:"Title",type:"title",fullWidth:!0}),Object(u.jsx)(J.a,{autoFocus:!0,margin:"dense",id:"name",multiline:!0,rows:8,label:"Content",type:"content",fullWidth:!0})]})},Q=function(e){var t=e.onClose,n=q();return Object(u.jsx)(P.a,{className:n.appBar,children:Object(u.jsxs)(G.a,{children:[Object(u.jsx)(L.a,{edge:"start",color:"inherit",onClick:t,"aria-label":"close",children:Object(u.jsx)(_.a,{})}),Object(u.jsx)(M.a,{variant:"h6",className:n.title,children:"Post"}),Object(u.jsx)(v.a,{autoFocus:!0,color:"inherit",onClick:t,children:"save"})]})})},U=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)(H.a,{fullScreen:!0,open:e.open,onClose:e.onClose,TransitionComponent:z,children:[Object(u.jsx)(Q,{onClose:e.onClose}),Object(u.jsx)(K,{}),Object(u.jsxs)(A.a,{children:[Object(u.jsx)(B.a,{button:!0,children:Object(u.jsx)(E.a,{primary:"Phone ringtone",secondary:"Titania"})}),Object(u.jsx)(F.a,{}),Object(u.jsx)(B.a,{button:!0,children:Object(u.jsx)(E.a,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})})},V=Object(j.a)({root:{width:"100%"},container:{maxHeight:440}}),X=[{id:"id",label:"ID",minWidth:170},{id:"content",label:"Title",minWidth:100}],Y=function(){var e=V(),t=W(),n=Object(x.a)(t,2),c=n[0],a=n[1];return null!==a&&console.log(a),Object(u.jsx)(o.a,{className:e.root,children:Object(u.jsx)(O.a,{className:e.container,children:Object(u.jsxs)(h.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(u.jsx)(f.a,{children:Object(u.jsx)(p.a,{children:X.map((function(e){return Object(u.jsx)(m.a,{style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(u.jsx)(g.a,{children:null!==c?c.map((function(e){return Object(u.jsx)(p.a,{hover:!0,role:"checkbox",tabIndex:-1,children:X.map((function(t){var n=e[t.id];return Object(u.jsx)(m.a,{children:n},t.id)}))},e.id)})):Object(u.jsx)(p.a,{children:Object(u.jsx)(m.a,{children:"NO Data"},"NO_DATA")})})]})})})},Z=function(){var e=a.a.useState(!1),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(s.a,{container:!0,spacing:3,children:["Post page",Object(u.jsx)(v.a,{variant:"outlined",color:"primary",onClick:function(){c(!0)},children:"Create Post"}),Object(u.jsx)(U,{open:n,onClose:function(){c(!1)}}),Object(u.jsx)(s.a,{item:!0,xs:12,children:Object(u.jsx)(Y,{})})]})},$=r.a+"/admin";t.b=function(){return Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:$,exact:!0,component:d}),Object(u.jsx)(i.a,{path:$+"/post",component:Z})]})}},192:function(e,t,n){"use strict";n.r(t);var c=n(181),a=n(102),i=n(4);t.default=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Landing Page"}),Object(i.jsx)(c.a,{color:"primary",href:a.a,children:"Login"})]})}}}]);
//# sourceMappingURL=6.3a97349d.chunk.js.map