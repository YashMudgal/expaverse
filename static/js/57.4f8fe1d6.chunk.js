(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[57],{1332:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(3),r=a(37),o=a(24),i=a(417),c=a(206),s=a(1303),d=a(35),l=a(0),u=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,a=e.action,b=e.heading,p=e.moreLink,j=void 0===p?[]:p,m=e.sx,f=Object(r.a)(e,u);return Object(l.jsxs)(i.a,{sx:Object(n.a)({mb:5},m),children:[Object(l.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(l.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(l.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:b}),Object(l.jsx)(d.b,Object(n.a)({links:t},f))]}),a&&Object(l.jsx)(i.a,{sx:{flexShrink:0},children:a})]}),Object(l.jsx)(i.a,{sx:{mt:2},children:Object(o.isString)(j)?Object(l.jsx)(s.a,{href:j,target:"_blank",variant:"body2",children:j}):j.map((function(e){return Object(l.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1337:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return l}));var n=a(3),r=a(206),o=a(1327),i=a(1342),c=a(417),s=a(0);function d(e){var t=e.title;return Object(s.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function l(e){var t=e.title,a=e.sx,r=e.children;return Object(s.jsxs)(o.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(i.a,{title:t}),Object(s.jsx)(c.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:r})]})}},1342:function(e,t,a){"use strict";var n=a(7),r=a(6),o=a(2),i=a(1),c=(a(10),a(12)),s=a(170),d=a(206),l=a(13),u=a(8),b=a(144),p=a(171);function j(e){return Object(b.a)("MuiCardHeader",e)}var m=Object(p.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=a(0),h=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],O=Object(u.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(o.a)((a={},Object(n.a)(a,"& .".concat(m.title),t.title),Object(n.a)(a,"& .".concat(m.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),x=Object(u.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(u.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(u.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,u=a.className,b=a.component,p=void 0===b?"div":b,m=a.disableTypography,y=void 0!==m&&m,R=a.subheader,C=a.subheaderTypographyProps,k=a.title,A=a.titleTypographyProps,M=Object(r.a)(a,h),N=Object(o.a)({},a,{component:p,disableTypography:y}),P=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},j,t)}(N),G=k;null==G||G.type===d.a||y||(G=Object(f.jsx)(d.a,Object(o.a)({variant:i?"body2":"h5",className:P.title,component:"span",display:"block"},A,{children:G})));var T=R;return null==T||T.type===d.a||y||(T=Object(f.jsx)(d.a,Object(o.a)({variant:i?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:T}))),Object(f.jsxs)(O,Object(o.a)({className:Object(c.default)(P.root,u),as:p,ref:t,styleProps:N},M,{children:[i&&Object(f.jsx)(x,{className:P.avatar,styleProps:N,children:i}),Object(f.jsxs)(g,{className:P.content,styleProps:N,children:[G,T]}),n&&Object(f.jsx)(v,{className:P.action,styleProps:N,children:n})]}))}));t.a=y},1436:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(432),r=a(430),o=a(175),i=a(433);function c(e){return Object(n.a)(e)||Object(r.a)(e)||Object(o.a)(e)||Object(i.a)()}},1620:function(e,t,a){"use strict";var n=a(1),r=n.createContext({});t.a=r},4080:function(e,t,a){"use strict";var n=a(1436),r=a(17),o=a(7),i=a(6),c=a(2),s=a(1),d=(a(252),a(10),a(12)),l=a(170),u=a(8),b=a(13),p=a(538),j=a(645),m=a(1620),f=a(101),h=a(144),O=a(171);function x(e){return Object(h.a)("MuiAccordion",e)}var v=Object(O.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),g=a(0),y=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],R=Object(u.a)(j.a,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return[Object(o.a)({},"& .".concat(v.region),t.region),t.root,!a.square&&t.rounded,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n={duration:a.transitions.duration.shortest};return t={position:"relative",transition:a.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:a.palette.divider,transition:a.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}}},Object(o.a)(t,"&.".concat(v.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(o.a)(t,"&.".concat(v.disabled),{backgroundColor:a.palette.action.disabledBackground}),t}),(function(e){var t=e.theme,a=e.styleProps;return Object(c.a)({},!a.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:t.shape.borderRadius,borderTopRightRadius:t.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:t.shape.borderRadius,borderBottomRightRadius:t.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!a.disableGutters&&Object(o.a)({},"&.".concat(v.expanded),{margin:"16px 0"}))})),C=s.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiAccordion"}),o=a.children,u=a.className,j=a.defaultExpanded,h=void 0!==j&&j,O=a.disabled,v=void 0!==O&&O,C=a.disableGutters,k=void 0!==C&&C,A=a.expanded,M=a.onChange,N=a.square,P=void 0!==N&&N,G=a.TransitionComponent,T=void 0===G?p.a:G,w=a.TransitionProps,I=Object(i.a)(a,y),H=Object(f.a)({controlled:A,default:h,name:"Accordion",state:"expanded"}),S=Object(r.a)(H,2),B=S[0],V=S[1],W=s.useCallback((function(e){V(!B),M&&M(e,!B)}),[B,M,V]),q=s.Children.toArray(o),L=Object(n.a)(q),D=L[0],E=L.slice(1),J=s.useMemo((function(){return{expanded:B,disabled:v,disableGutters:k,toggle:W}}),[B,v,k,W]),_=Object(c.a)({},a,{square:P,disabled:v,disableGutters:k,expanded:B}),U=function(e){var t=e.classes,a={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(l.a)(a,x,t)}(_);return Object(g.jsxs)(R,Object(c.a)({className:Object(d.default)(U.root,u),ref:t,styleProps:_,square:P},I,{children:[Object(g.jsx)(m.a.Provider,{value:J,children:D}),Object(g.jsx)(T,Object(c.a)({in:B,timeout:"auto"},w,{children:Object(g.jsx)("div",{"aria-labelledby":D.props.id,id:D.props["aria-controls"],role:"region",className:U.region,children:E})}))]}))}));t.a=C},4081:function(e,t,a){"use strict";var n=a(7),r=a(6),o=a(2),i=a(1),c=(a(10),a(12)),s=a(170),d=a(8),l=a(13),u=a(1220),b=a(1620),p=a(144),j=a(171);function m(e){return Object(p.a)("MuiAccordionSummary",e)}var f=Object(j.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),h=a(0),O=["children","className","expandIcon","focusVisibleClassName","onClick"],x=Object(d.a)(u.a,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme,r=e.styleProps,i={duration:a.transitions.duration.shortest};return Object(o.a)((t={display:"flex",minHeight:48,padding:a.spacing(0,2),transition:a.transitions.create(["min-height","background-color"],i)},Object(n.a)(t,"&.".concat(f.focusVisible),{backgroundColor:a.palette.action.focus}),Object(n.a)(t,"&.".concat(f.disabled),{opacity:a.palette.action.disabledOpacity}),Object(n.a)(t,"&:hover:not(.".concat(f.disabled,")"),{cursor:"pointer"}),t),!r.disableGutters&&Object(n.a)({},"&.".concat(f.expanded),{minHeight:64}))})),v=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,a=e.styleProps;return Object(o.a)({display:"flex",flexGrow:1,margin:"12px 0"},!a.disableGutters&&Object(n.a)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(f.expanded),{margin:"20px 0"}))})),g=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return Object(n.a)({display:"flex",color:t.palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(f.expanded),{transform:"rotate(180deg)"})})),y=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiAccordionSummary"}),n=a.children,d=a.className,u=a.expandIcon,p=a.focusVisibleClassName,j=a.onClick,f=Object(r.a)(a,O),y=i.useContext(b.a),R=y.disabled,C=void 0!==R&&R,k=y.disableGutters,A=y.expanded,M=y.toggle,N=Object(o.a)({},a,{expanded:A,disabled:C,disableGutters:k}),P=function(e){var t=e.classes,a=e.expanded,n=e.disabled,r=e.disableGutters,o={root:["root",a&&"expanded",n&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return Object(s.a)(o,m,t)}(N);return Object(h.jsxs)(x,Object(o.a)({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":A,className:Object(c.default)(P.root,d),focusVisibleClassName:Object(c.default)(P.focusVisible,p),onClick:function(e){M&&M(e),j&&j(e)},ref:t,styleProps:N},f,{children:[Object(h.jsx)(v,{className:P.content,styleProps:N,children:n}),u&&Object(h.jsx)(g,{className:P.expandIconWrapper,styleProps:N,children:u})]}))}));t.a=y},4082:function(e,t,a){"use strict";var n=a(2),r=a(6),o=a(1),i=(a(10),a(12)),c=a(170),s=a(8),d=a(13),l=a(144),u=a(171);function b(e){return Object(l.a)("MuiAccordionDetails",e)}Object(u.a)("MuiAccordionDetails",["root"]);var p=a(0),j=["className"],m=Object(s.a)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),f=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAccordionDetails"}),o=a.className,s=Object(r.a)(a,j),l=a,u=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(l);return Object(p.jsx)(m,Object(n.a)({className:Object(i.default)(u.root,o),ref:t,styleProps:l},s))}));t.a=f},4151:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(17),r=a(20),o=a(25),i=a(1),c=a(176),s=a.n(c),d=a(8),l=a(417),u=a(1314),b=a(4080),p=a(4081),j=a(206),m=a(4082),f=a(4),h=a(419),O=a(43),x=a(1332),v=a(1337),g=a(0),y=Object(r.a)(Array(4)).map((function(e,t){return{id:f.a.id(t),value:"panel".concat(t+1),heading:"Accordion ".concat(t+1),subHeading:f.a.text.title(t),detail:f.a.text.description(t)}})),R=Object(d.a)(h.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function C(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(g.jsxs)(R,{title:"Components: Accordion | Minimal-UI",children:[Object(g.jsx)(l.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(g.jsx)(u.a,{maxWidth:"lg",children:Object(g.jsx)(x.a,{heading:"Accordion",links:[{name:"Components",href:O.c.components},{name:"Accordion"}],moreLink:"https://next.material-ui.com/components/accordion"})})}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(v.a,{title:"Simple",sx:{mb:5},children:y.map((function(e,t){return Object(g.jsxs)(b.a,{disabled:3===t,children:[Object(g.jsx)(p.a,{expandIcon:Object(g.jsx)(o.a,{icon:s.a,width:20,height:20}),children:Object(g.jsx)(j.a,{variant:"subtitle1",children:e.heading})}),Object(g.jsx)(m.a,{children:Object(g.jsx)(j.a,{children:e.detail})})]},e.value)}))}),Object(g.jsx)(v.a,{title:"Controlled",children:y.map((function(e,t){return Object(g.jsxs)(b.a,{disabled:3===t,expanded:a===e.value,onChange:(n=e.value,function(e,t){r(!!t&&n)}),children:[Object(g.jsxs)(p.a,{expandIcon:Object(g.jsx)(o.a,{icon:s.a,width:20,height:20}),children:[Object(g.jsx)(j.a,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:e.heading}),Object(g.jsx)(j.a,{sx:{color:"text.secondary"},children:e.subHeading})]}),Object(g.jsx)(m.a,{children:Object(g.jsx)(j.a,{children:e.detail})})]},e.value);var n}))})]})]})}}}]);
//# sourceMappingURL=57.4f8fe1d6.chunk.js.map