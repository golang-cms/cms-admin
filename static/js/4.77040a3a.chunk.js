(this["webpackJsonpcms-admin"]=this["webpackJsonpcms-admin"]||[]).push([[4],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return Q}));var n=a(1),r=a.n(n),i=a(2),o=a(172),c=a(173),s=a(171),l=a(81),d=a(4),p=Object(s.a)((function(e){return{paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),u=function(){var e=p(),t=Object(l.a)(e.paper,e.fixedHeight);return Object(d.jsxs)(o.a,{container:!0,spacing:3,children:[Object(d.jsx)(o.a,{item:!0,xs:12,md:8,lg:9,children:Object(d.jsx)(c.a,{className:t})}),Object(d.jsx)(o.a,{item:!0,xs:12,md:4,lg:3,children:Object(d.jsx)(c.a,{className:t})}),Object(d.jsx)(o.a,{item:!0,xs:12,children:Object(d.jsx)(c.a,{className:e.paper})})]})},j=a(30),b=a(187),h=a(188),f=a(189),m=a(190),O=a(191),x=a(192),g=a(186),v=a(126),w=a.n(v),y=a(127),C=a(36),k=function(e){var t=Object(n.useState)(null),a=Object(j.a)(t,2),r=a[0],i=a[1],o=Object(n.useState)(null),c=Object(j.a)(o,2),s=c[0],l=c[1],d=Object(C.b)();return Object(n.useEffect)((function(){d(e).then(function(){var e=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=9;break}return e.t0=i,e.next=4,t.json();case 4:e.t1=e.sent,(0,e.t0)(e.t1),l(null),e.next=14;break;case 9:return e.t2=l,e.next=12,t.text();case 12:e.t3=e.sent,(0,e.t2)(e.t3);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){l(e.message)}))}),[e,d]),[r,s]},N=function(){return["".concat("https://cms-api-content-api-cms-zt1983811.cloud.okteto.net/v1","/posts"),{method:"GET"}]},S=function(){var e=Object(n.useMemo)((function(){return N()}),[]);return k(e)},P=a(31),B=a(183),z=a(175),D=a(182),T=a(181),R=a(185),I=a(178),M=a(179),E=a(180),H=a(174),W=a(195),A=a(184),L=a(169),_=a(130),F=a.n(_),$=Object(s.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),V=r.a.forwardRef((function(e,t){return Object(d.jsx)(H.a,Object(P.a)({direction:"up",ref:t},e))})),G=function(){return Object(d.jsxs)(D.a,{children:[Object(d.jsx)(W.a,{autoFocus:!0,margin:"dense",id:"name",label:"Title",type:"title",fullWidth:!0}),Object(d.jsx)(W.a,{autoFocus:!0,margin:"dense",id:"name",multiline:!0,rows:8,label:"Content",type:"content",fullWidth:!0})]})},J=function(e){var t=e.onClose,a=$();return Object(d.jsx)(B.a,{className:a.appBar,children:Object(d.jsxs)(A.a,{children:[Object(d.jsx)(R.a,{edge:"start",color:"inherit",onClick:t,"aria-label":"close",children:Object(d.jsx)(F.a,{})}),Object(d.jsx)(L.a,{variant:"h6",className:a.title,children:"Post"}),Object(d.jsx)(g.a,{autoFocus:!0,color:"inherit",onClick:t,children:"save"})]})})},X=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)(z.a,{fullScreen:!0,open:e.open,onClose:e.onClose,TransitionComponent:V,children:[Object(d.jsx)(J,{onClose:e.onClose}),Object(d.jsx)(G,{}),Object(d.jsxs)(I.a,{children:[Object(d.jsx)(M.a,{button:!0,children:Object(d.jsx)(E.a,{primary:"Phone ringtone",secondary:"Titania"})}),Object(d.jsx)(T.a,{}),Object(d.jsx)(M.a,{button:!0,children:Object(d.jsx)(E.a,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})})},Y=Object(s.a)({root:{width:"100%"},container:{maxHeight:440}}),Z=[{id:"id",label:"ID",minWidth:170},{id:"content",label:"Title",minWidth:100}],q=function(){var e=Y(),t=S(),a=Object(j.a)(t,2),n=a[0],r=a[1];return null!==r&&console.log(r),Object(d.jsx)(c.a,{className:e.root,children:Object(d.jsx)(b.a,{className:e.container,children:Object(d.jsxs)(h.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(d.jsx)(f.a,{children:Object(d.jsx)(m.a,{children:Z.map((function(e){return Object(d.jsx)(O.a,{style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(d.jsx)(x.a,{children:null!==n?n.map((function(e){return Object(d.jsx)(m.a,{hover:!0,role:"checkbox",tabIndex:-1,children:Z.map((function(t){var a=e[t.id];return Object(d.jsx)(O.a,{children:a},t.id)}))},e.id)})):Object(d.jsx)(m.a,{children:Object(d.jsx)(O.a,{children:"NO Data"},"NO_DATA")})})]})})})},K=function(){var e=r.a.useState(!1),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)(o.a,{container:!0,spacing:3,children:["Post page",Object(d.jsx)(g.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)},children:"Create Post"}),Object(d.jsx)(X,{open:a,onClose:function(){n(!1)}}),Object(d.jsx)(o.a,{item:!0,xs:12,children:Object(d.jsx)(q,{})})]})},Q="/admin";t.b=function(){return Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:Q,exact:!0,component:u}),Object(d.jsx)(i.a,{path:Q+"/post",component:K})]})}},110:function(e,t,a){"use strict";var n=a(170),r=a(169),i=(a(1),a(4));t.a=function(){return Object(i.jsxs)(r.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(i.jsx)(n.a,{color:"inherit",href:"https://material-ui.com/",children:"CMS Admin"})," ",(new Date).getFullYear(),"."]})}},146:function(e,t,a){"use strict";var n=a(86),r=a(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(1)),o=(0,n(a(88)).default)(i.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=o},147:function(e,t,a){"use strict";var n=a(86),r=a(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(1)),o=(0,n(a(88)).default)(i.createElement("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard");t.default=o},148:function(e,t,a){"use strict";var n=a(86),r=a(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(1)),o=(0,n(a(88)).default)(i.createElement("path",{d:"M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4zm9 4l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4zm2-14h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"}),"Pages");t.default=o},149:function(e,t,a){"use strict";var n=a(86),r=a(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(1)),o=(0,n(a(88)).default)(i.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=o},150:function(e,t,a){"use strict";var n=a(86),r=a(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(1)),o=(0,n(a(88)).default)(i.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");t.default=o},198:function(e,t,a){"use strict";a.r(t),a.d(t,"drawerWidth",(function(){return oe}));var n=a(13),r=a(31),i=a(196),o=a(193),c=a(75),s=a(171),l=a(1),d=a(110),p=a(30),u=a(0),j=a(3),b=(a(10),a(81)),h=a(199),f=a(177),m=a(28),O=a(174),x=a(173),g=a(82),v=a(32),w=a(91),y={left:"right",right:"left",top:"down",bottom:"up"};var C={enter:v.b.enteringScreen,exit:v.b.leavingScreen},k=l.forwardRef((function(e,t){var a=e.anchor,n=void 0===a?"left":a,r=e.BackdropProps,i=e.children,o=e.classes,c=e.className,s=e.elevation,d=void 0===s?16:s,p=e.ModalProps,m=(p=void 0===p?{}:p).BackdropProps,v=Object(j.a)(p,["BackdropProps"]),k=e.onClose,N=e.open,S=void 0!==N&&N,P=e.PaperProps,B=void 0===P?{}:P,z=e.SlideProps,D=e.TransitionComponent,T=void 0===D?O.a:D,R=e.transitionDuration,I=void 0===R?C:R,M=e.variant,E=void 0===M?"temporary":M,H=Object(j.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),W=Object(w.a)(),A=l.useRef(!1);l.useEffect((function(){A.current=!0}),[]);var L=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?y[t]:t}(W,n),_=l.createElement(x.a,Object(u.a)({elevation:"temporary"===E?d:0,square:!0},B,{className:Object(b.a)(o.paper,o["paperAnchor".concat(Object(g.a)(L))],B.className,"temporary"!==E&&o["paperAnchorDocked".concat(Object(g.a)(L))])}),i);if("permanent"===E)return l.createElement("div",Object(u.a)({className:Object(b.a)(o.root,o.docked,c),ref:t},H),_);var F=l.createElement(T,Object(u.a)({in:S,direction:y[L],timeout:I,appear:A.current},z),_);return"persistent"===E?l.createElement("div",Object(u.a)({className:Object(b.a)(o.root,o.docked,c),ref:t},H),F):l.createElement(h.a,Object(u.a)({BackdropProps:Object(u.a)({},r,m,{transitionDuration:I}),BackdropComponent:f.a,className:Object(b.a)(o.root,o.modal,c),open:S,onClose:k,ref:t},H,v),F)})),N=Object(m.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(k),S=a(185),P=a(181),B=a(178),z=a(179),D=a(102),T=l.forwardRef((function(e,t){var a=e.classes,n=e.className,r=Object(j.a)(e,["classes","className"]),i=l.useContext(D.a);return l.createElement("div",Object(u.a)({className:Object(b.a)(a.root,n,"flex-start"===i.alignItems&&a.alignItemsFlexStart),ref:t},r))})),R=Object(m.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(T),I=a(180),M=a(146),E=a.n(M),H=a(147),W=a.n(H),A=a(148),L=a.n(A),_=a(34),F=a(106),$=a(4),V=Object(l.createContext)({}),G=function(e){var t=e.children,a=Object(l.useState)(!0),n=Object(p.a)(a,2),r=n[0],i=n[1];return Object($.jsx)(V.Provider,{value:[r,i],children:t})},J=Object(s.a)((function(e){return{toolbarIcon:Object(r.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),drawerPaper:{position:"relative",whiteSpace:"nowrap",width:oe,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(n.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}})),X=Object($.jsxs)("div",{children:[Object($.jsxs)(z.a,{button:!0,component:_.b,to:F.a,children:[Object($.jsx)(R,{children:Object($.jsx)(W.a,{})}),Object($.jsx)(I.a,{primary:"Dashboard"})]}),Object($.jsxs)(z.a,{button:!0,component:_.b,to:F.a+"/post",children:[Object($.jsx)(R,{children:Object($.jsx)(L.a,{})}),Object($.jsx)(I.a,{primary:"Post"})]})]}),Y=function(){var e=J(),t=Object(l.useContext)(V),a=Object(p.a)(t,2),n=a[0],r=a[1];return Object($.jsxs)(N,{variant:"permanent",classes:{paper:Object(b.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n,children:[Object($.jsx)("div",{className:e.toolbarIcon,children:Object($.jsx)(S.a,{onClick:function(){r(!1)},children:Object($.jsx)(E.a,{})})}),Object($.jsx)(P.a,{}),Object($.jsx)(B.a,{children:X}),Object($.jsx)(P.a,{}),Object($.jsx)(B.a,{})]})},Z=a(169),q=l.forwardRef((function(e,t){var a=e.anchorOrigin,n=void 0===a?{vertical:"top",horizontal:"right"}:a,r=e.badgeContent,i=e.children,o=e.classes,c=e.className,s=e.color,d=void 0===s?"default":s,p=e.component,h=void 0===p?"span":p,f=e.invisible,m=e.max,O=void 0===m?99:m,x=e.overlap,v=void 0===x?"rectangle":x,w=e.showZero,y=void 0!==w&&w,C=e.variant,k=void 0===C?"standard":C,N=Object(j.a)(e,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),S=f;null==f&&(0===r&&!y||null==r&&"dot"!==k)&&(S=!0);var P="";return"dot"!==k&&(P=r>O?"".concat(O,"+"):r),l.createElement(h,Object(u.a)({className:Object(b.a)(o.root,c),ref:t},N),i,l.createElement("span",{className:Object(b.a)(o.badge,o["".concat(n.horizontal).concat(Object(g.a)(n.vertical),"}")],o["anchorOrigin".concat(Object(g.a)(n.vertical)).concat(Object(g.a)(n.horizontal)).concat(Object(g.a)(v))],"default"!==d&&o["color".concat(Object(g.a)(d))],S&&o.invisible,"dot"===k&&o.dot)},P))})),K=Object(m.a)((function(e){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorError:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}}),{name:"MuiBadge"})(q),Q=a(183),U=a(184),ee=a(149),te=a.n(ee),ae=a(150),ne=a.n(ae),re=Object(s.a)((function(e){return{toolbar:{paddingRight:24},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:oe,width:"calc(100% - ".concat(oe,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1}}})),ie=function(){var e=re(),t=Object(l.useContext)(V),a=Object(p.a)(t,2),n=a[0],r=a[1];return Object($.jsx)(Q.a,{position:"absolute",className:Object(b.a)(e.appBar,n&&e.appBarShift),children:Object($.jsxs)(U.a,{className:e.toolbar,children:[Object($.jsx)(S.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},className:Object(b.a)(e.menuButton,n&&e.menuButtonHidden),children:Object($.jsx)(te.a,{})}),Object($.jsx)(Z.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Dashboard"}),Object($.jsx)(S.a,{color:"inherit",children:Object($.jsx)(K,{badgeContent:4,color:"secondary",children:Object($.jsx)(ne.a,{})})})]})})},oe=240,ce=Object(s.a)((function(e){return{root:{display:"flex"},toolbarIcon:Object(r.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),drawerPaper:{position:"relative",whiteSpace:"nowrap",width:oe,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(n.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));t.default=function(){var e=ce();return Object($.jsxs)("div",{className:e.root,children:[Object($.jsx)(c.a,{}),Object($.jsxs)(G,{children:[Object($.jsx)(ie,{}),Object($.jsx)(Y,{})]}),Object($.jsxs)("main",{className:e.content,children:[Object($.jsx)("div",{className:e.appBarSpacer}),Object($.jsxs)(o.a,{className:e.container,children:[Object($.jsx)(F.b,{}),Object($.jsx)(i.a,{pt:4,children:Object($.jsx)(d.a,{})})]})]})]})}}}]);
//# sourceMappingURL=4.77040a3a.chunk.js.map