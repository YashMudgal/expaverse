(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[15],{1410:function(t,e,i){"use strict";i.d(e,"j",(function(){return j})),i.d(e,"g",(function(){return T})),i.d(e,"h",(function(){return B})),i.d(e,"i",(function(){return E})),i.d(e,"a",(function(){return nt})),i.d(e,"b",(function(){return ct})),i.d(e,"c",(function(){return lt})),i.d(e,"d",(function(){return ut})),i.d(e,"e",(function(){return gt})),i.d(e,"f",(function(){return Tt})),i.d(e,"k",(function(){return Lt}));var n=i(3),r=i(37),a=i(8),c=i(417),o=i(0),s=["color"],l=Object(a.a)("ul")((function(t){var e=t.theme;return{display:"flex",listStyle:"none",alignItems:"center",position:"absolute",right:e.spacing(3),bottom:e.spacing(3),"& li":{width:18,height:18,opacity:.32,cursor:"pointer","&.slick-active":{opacity:1}}}}));function j(t){var e=t.color,i=Object(r.a)(t,s);return{appendDots:function(t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l,Object(n.a)(Object(n.a)({},i),{},{children:t}))})},customPaging:function(){return Object(o.jsx)(c.a,{sx:{width:1,height:1,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(o.jsx)(c.a,{component:"span",sx:{width:8,height:8,borderRadius:"50%",bgcolor:e||"common.white"}})})}}}var d=["color"],b=Object(a.a)("ul")({display:"flex",listStyle:"none",justifyContent:"center","& li":{width:24,height:24,opacity:.32,cursor:"pointer","&.slick-active":{opacity:1,"& .dotActive":{width:18,borderRadius:8}}}}),u=Object(a.a)("span")((function(t){var e=t.theme;return{width:8,height:8,borderRadius:"50%",transition:e.transitions.create("all",{easing:e.transitions.easing.easeInOut,duration:360})}}));var h=i(25),O=i(1377),x=i.n(O),p=i(1378),m=i.n(p),g=i(1379),f=i.n(g),v=i(1380),w=i.n(v),y=i(52),k=i(35),S=["arrowLine","onNext","onPrevious"],P={width:20,height:20},R=Object(a.a)(c.a)((function(t){var e=t.theme;return{zIndex:9,display:"flex",position:"absolute",top:e.spacing(2),right:e.spacing(2)}})),N=Object(a.a)(k.e)((function(t){return{padding:6,opacity:.48,color:t.theme.palette.common.white,"&:hover":{opacity:1}}}));function T(t){var e=t.arrowLine,i=t.onNext,a=t.onPrevious,c=Object(r.a)(t,S),s="rtl"===Object(y.a)().direction;return Object(o.jsxs)(R,Object(n.a)(Object(n.a)({},c),{},{children:[Object(o.jsx)(N,{size:"small",onClick:a,children:e?Object(o.jsx)(h.a,Object(n.a)({icon:s?w.a:f.a},P)):Object(o.jsx)(h.a,Object(n.a)({icon:s?m.a:x.a},P))}),Object(o.jsx)(N,{size:"small",onClick:i,children:e?Object(o.jsx)(h.a,Object(n.a)({icon:s?f.a:w.a},P)):Object(o.jsx)(h.a,Object(n.a)({icon:s?x.a:m.a},P))})]}))}var C=["arrowLine","onNext","onPrevious"],I={width:20,height:20},z=Object(a.a)(c.a)((function(t){return{top:0,bottom:0,zIndex:9,height:40,width:"100%",margin:"auto",display:"flex",position:"absolute",padding:t.theme.spacing(0,2),justifyContent:"space-between"}})),A=Object(a.a)(k.e)((function(t){var e=t.theme;return{width:40,height:40,opacity:.48,display:"flex",cursor:"pointer",alignItems:"center",justifyContent:"center",color:e.palette.common.white,background:e.palette.grey[900],borderRadius:e.shape.borderRadiusSm,transition:e.transitions.create("opacity"),"&:hover":{opacity:1,background:e.palette.grey[900]}}}));function B(t){var e=t.arrowLine,i=t.onNext,a=t.onPrevious,c=Object(r.a)(t,C),s="rtl"===Object(y.a)().direction;return Object(o.jsxs)(z,Object(n.a)(Object(n.a)({},c),{},{children:[Object(o.jsx)(A,{size:"small",onClick:a,children:e?Object(o.jsx)(h.a,Object(n.a)({icon:s?w.a:f.a},I)):Object(o.jsx)(h.a,Object(n.a)({icon:s?m.a:x.a},I))}),Object(o.jsx)(A,{size:"small",onClick:i,children:e?Object(o.jsx)(h.a,Object(n.a)({icon:s?f.a:w.a},I)):Object(o.jsx)(h.a,Object(n.a)({icon:s?x.a:m.a},I))})]}))}var F=i(64),W=i(206),L=["arrowLine","index","total","onNext","onPrevious"],M={width:20,height:20},D=Object(a.a)(c.a)((function(t){var e=t.theme;return{zIndex:9,display:"flex",alignItems:"center",position:"absolute",bottom:e.spacing(2),right:e.spacing(2),color:e.palette.common.white,borderRadius:e.shape.borderRadius,backgroundColor:Object(F.a)(e.palette.grey[900],.48)}})),J=Object(a.a)(k.e)((function(t){return{padding:6,opacity:.48,color:t.theme.palette.common.white,"&:hover":{opacity:1}}}));function E(t){var e=t.arrowLine,i=t.index,a=t.total,c=t.onNext,s=t.onPrevious,l=Object(r.a)(t,L),j="rtl"===Object(y.a)().direction;return Object(o.jsxs)(D,Object(n.a)(Object(n.a)({},l),{},{children:[Object(o.jsx)(J,{size:"small",onClick:s,children:e?Object(o.jsx)(h.a,Object(n.a)({icon:j?w.a:f.a},M)):Object(o.jsx)(h.a,Object(n.a)({icon:j?m.a:x.a},M))}),Object(o.jsxs)(W.a,{variant:"subtitle2",children:[i+1,"/",a]}),Object(o.jsx)(J,{size:"small",onClick:c,children:e?Object(o.jsx)(h.a,Object(n.a)({icon:j?f.a:w.a},M)):Object(o.jsx)(h.a,Object(n.a)({icon:j?x.a:m.a},M))})]}))}var H=i(17),V=i(20),X=i(1340),q=i.n(X),G=i(1286),K=i(1),Q=i(645),U=i(1433),Y=i(418),Z=i(1327),$=i(4),_=i(207),tt=Object(V.a)(Array(5)).map((function(t,e){return{id:$.a.id(e),title:$.a.text.title(e),image:$.a.image.feed(e),description:$.a.text.description(e)}})),et=Object(a.a)("img")({top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function it(t){var e=t.item,i=t.isActive,n=Object(y.a)(),r=e.image,a=e.title;return Object(o.jsxs)(Q.a,{sx:{position:"relative",paddingTop:{xs:"100%",md:"50%"}},children:[Object(o.jsx)(et,{alt:a,src:r}),Object(o.jsx)(c.a,{sx:{top:0,width:"100%",height:"100%",position:"absolute",backgroundImage:"linear-gradient(to top, ".concat(n.palette.grey[900]," 0%,").concat(Object(F.a)(n.palette.grey[900],0)," 100%)")}}),Object(o.jsx)(U.a,{sx:{bottom:0,width:"100%",maxWidth:480,textAlign:"left",position:"absolute",color:"common.white"},children:Object(o.jsxs)(_.c,{open:i,children:[Object(o.jsx)(G.a.div,{variants:_.w,children:Object(o.jsx)(W.a,{variant:"h3",gutterBottom:!0,children:e.title})}),Object(o.jsx)(G.a.div,{variants:_.w,children:Object(o.jsx)(W.a,{variant:"body2",noWrap:!0,gutterBottom:!0,children:e.description})}),Object(o.jsx)(G.a.div,{variants:_.w,children:Object(o.jsx)(Y.a,{variant:"contained",sx:{mt:3},children:"View More"})})]})})]})}function nt(){var t=Object(y.a)(),e=Object(K.useRef)(),i=Object(K.useState)("rtl"===t.direction?tt.length-1:0),r=Object(H.a)(i,2),a=r[0],c=r[1],s={speed:800,dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===t.direction),beforeChange:function(t,e){return c(e)}};return Object(o.jsxs)(Z.a,{children:[Object(o.jsx)(q.a,Object(n.a)(Object(n.a)({ref:e},s),{},{children:tt.map((function(t,e){return Object(o.jsx)(it,{item:t,isActive:e===a},t.title)}))})),Object(o.jsx)(E,{index:a,total:tt.length,onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()}})]})}var rt=Object(V.a)(Array(5)).map((function(t,e){return{id:$.a.id(e),title:$.a.text.title(e),image:$.a.image.feed(e),description:$.a.text.description(e)}}));function at(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsx)(c.a,{component:"img",alt:n,src:i,sx:{width:"100%",height:480,objectFit:"cover"}})}function ct(){var t=Object(y.a)(),e=Object(K.useRef)(),i=Object(K.useState)("rtl"===t.direction?rt.length-1:0),r=Object(H.a)(i,2),a=r[0],c=r[1],s={dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===t.direction),beforeChange:function(t,e){return c(e)}};return Object(o.jsxs)(Z.a,{children:[Object(o.jsx)(q.a,Object(n.a)(Object(n.a)({ref:e},s),{},{children:rt.map((function(t){return Object(o.jsx)(at,{item:t},t.title)}))})),Object(o.jsx)(E,{index:a,total:rt.length,onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()}})]})}var ot=Object(V.a)(Array(5)).map((function(t,e){return{id:$.a.id(e),title:$.a.text.title(e),image:$.a.image.feed(e),description:$.a.text.description(e)}}));function st(t){var e=t.item,i=e.image,n=e.title,r=e.description;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(c.a,{component:"img",alt:n,src:i,sx:{width:"100%",height:370,objectFit:"cover"}}),Object(o.jsxs)(U.a,{sx:{textAlign:"left"},children:[Object(o.jsx)(W.a,{variant:"h6",noWrap:!0,gutterBottom:!0,children:n}),Object(o.jsx)(W.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:r})]})]})}function lt(){var t=Object(y.a)(),e=Object(K.useRef)(),i=Object(K.useState)(2),r=Object(H.a)(i,2),a=r[0],c=r[1],s={dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,initialSlide:a,fade:Boolean("rtl"!==t.direction),rtl:Boolean("rtl"===t.direction),beforeChange:function(t,e){return c(e)}};return Object(o.jsxs)(Z.a,{children:[Object(o.jsx)(q.a,Object(n.a)(Object(n.a)({ref:e},s),{},{children:ot.map((function(t){return Object(o.jsx)(st,{item:t},t.title)}))})),Object(o.jsx)(E,{index:a,total:ot.length,onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()},sx:{bottom:120}})]})}var jt=Object(V.a)(Array(5)).map((function(t,e){return{id:$.a.id(e),title:$.a.text.title(e),image:$.a.image.feed(e),description:$.a.text.description(e)}})),dt=Object(a.a)("div")((function(t){var e=t.theme;return{position:"relative","& .slick-list":{boxShadow:e.customShadows.z16,borderRadius:e.shape.borderRadiusMd}}}));function bt(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsx)(c.a,{component:"img",alt:n,src:i,sx:{width:"100%",height:480,objectFit:"cover"}})}function ut(){var t=Object(y.a)(),e=Object(K.useRef)(),i=Object(n.a)({dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===t.direction)},function(t){var e=t.color,i=Object(r.a)(t,d);return{appendDots:function(t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(b,Object(n.a)(Object(n.a)({},i),{},{children:t}))})},customPaging:function(){return Object(o.jsx)(c.a,{sx:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(o.jsx)(u,{className:"dotActive",sx:{bgcolor:e||"primary.main"}})})}}}({sx:{mt:3}}));return Object(o.jsxs)(dt,{children:[Object(o.jsx)(q.a,Object(n.a)(Object(n.a)({ref:e},i),{},{children:jt.map((function(t){return Object(o.jsx)(bt,{item:t},t.title)}))})),Object(o.jsx)(B,{onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()}})]})}var ht=i(1463),Ot=i.n(ht),xt=Object(V.a)(Array(5)).map((function(t,e){return{id:$.a.id(e),title:$.a.text.title(e),image:$.a.image.feed(e),description:$.a.text.description(e)}})),pt=Object(a.a)("div")((function(t){var e=t.theme;return{bottom:0,zIndex:9,width:"100%",display:"flex",position:"absolute",alignItems:"center",padding:e.spacing(3),borderBottomLeftRadius:16,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderBottomRightRadius:16,justifyContent:"space-between",backgroundColor:Object(F.a)(e.palette.grey[900],.72),flexDirection:"rtl"===e.direction?"row-reverse":"row"}}));function mt(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsxs)(c.a,{sx:{position:"relative",zIndex:0},children:[Object(o.jsx)(c.a,{component:"img",alt:n,src:i,sx:{width:"100%",height:480,objectFit:"cover"}}),Object(o.jsxs)(pt,{children:[Object(o.jsx)(W.a,{variant:"h6",sx:{color:"common.white"},children:e.title}),Object(o.jsx)(k.e,{onClick:function(){},sx:{color:"common.white","&:hover":{bgcolor:function(t){return Object(F.a)(t.palette.common.white,t.palette.action.hoverOpacity)}}},children:Object(o.jsx)(h.a,{icon:Ot.a})})]})]})}function gt(){var t=Object(y.a)(),e=Object(K.useRef)(),i={dots:!1,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,fade:Boolean("rtl"!==t.direction),rtl:Boolean("rtl"===t.direction)};return Object(o.jsxs)(Z.a,{children:[Object(o.jsx)(q.a,Object(n.a)(Object(n.a)({ref:e},i),{},{children:xt.map((function(t){return Object(o.jsx)(mt,{item:t},t.title)}))})),Object(o.jsx)(B,{onNext:function(){e.current.slickNext()},onPrevious:function(){e.current.slickPrev()}})]})}var ft=i(7),vt=i(31),wt=i(1545),yt=i.n(wt),kt=i(1303),St=Object(V.a)(Array(5)).map((function(t,e){return{id:$.a.id(e),title:$.a.text.title(e),image:$.a.image.feed(e),description:$.a.text.description(e)}})),Pt=Object(a.a)("div")((function(t){var e=t.theme;return{overflow:"hidden",position:"relative","&:before, &:after":Object(ft.a)({top:0,left:0,zIndex:8,width:48,content:"''",height:"100%",display:"none",position:"absolute",backgroundImage:"linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"},e.breakpoints.up(480),{display:"block"}),"&:after":{right:0,left:"auto",transform:"scaleX(-1)"}}})),Rt=Object(a.a)("img")((function(t){return{top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute",transition:t.theme.transitions.create("all")}}));function Nt(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsxs)(Q.a,{sx:{mx:1,borderRadius:2,overflow:"hidden",paddingTop:"calc(16 /9 * 100%)",position:"relative","&:hover img":{width:"120%",height:"120%"}},children:[Object(o.jsx)(Rt,{alt:n,src:i}),Object(o.jsxs)(U.a,{sx:{bottom:0,zIndex:9,width:"100%",textAlign:"left",position:"absolute",color:"common.white",backgroundImage:function(t){return"linear-gradient(to top, ".concat(t.palette.grey[900]," 0%,").concat(Object(F.a)(t.palette.grey[900],0)," 100%)")}},children:[Object(o.jsx)(W.a,{variant:"h4",paragraph:!0,children:n}),Object(o.jsxs)(kt.a,{to:"#",color:"inherit",variant:"overline",component:vt.b,sx:{opacity:.72,alignItems:"center",display:"inline-flex",transition:function(t){return t.transitions.create("opacity")},"&:hover":{opacity:1}},children:["learn More",Object(o.jsx)(c.a,{component:h.a,icon:yt.a,sx:{width:16,height:16,ml:1}})]})]})]})}function Tt(){var t=Object(K.useRef)(),e=Object(y.a)(),i={slidesToShow:3,centerMode:!0,centerPadding:"60px",rtl:Boolean("rtl"===e.direction),responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,centerPadding:"0"}}]};return Object(o.jsxs)(Pt,{children:[Object(o.jsx)(q.a,Object(n.a)(Object(n.a)({ref:t},i),{},{children:St.map((function(t){return Object(o.jsx)(Nt,{item:t},t.title)}))})),Object(o.jsx)(B,{onNext:function(){t.current.slickNext()},onPrevious:function(){t.current.slickPrev()}})]})}var Ct=Object(V.a)(Array(5)).map((function(t,e){return{id:$.a.id(e),title:$.a.text.title(e),image:$.a.image.feed(e),description:$.a.text.description(e)}})),It=64,zt=Object(a.a)("div")((function(t){return{root:{"& .slick-slide":{float:"rtl"===t.theme.direction?"right":"left"}}}})),At=Object(a.a)("img")({top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute"}),Bt=Object(a.a)("img")((function(t){var e=t.theme;return{opacity:.48,width:It,cursor:"pointer",height:It,margin:e.spacing(0,1),borderRadius:e.shape.borderRadiusSm,"&:hover":{opacity:.72,transition:e.transitions.create("opacity")}}}));function Ft(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsx)(c.a,{sx:{position:"relative",paddingTop:{xs:"100%",md:"50%"}},children:Object(o.jsx)(At,{alt:n,src:i})})}function Wt(t){var e=t.item,i=e.image,n=e.title;return Object(o.jsx)(Bt,{alt:n,src:i})}function Lt(){var t=Object(K.useState)(0),e=Object(H.a)(t,2),i=e[0],r=e[1],a=Object(K.useState)(null),s=Object(H.a)(a,2),l=s[0],j=s[1],d=Object(K.useState)(null),b=Object(H.a)(d,2),u=b[0],h=b[1],O=Object(K.useRef)(null),x=Object(K.useRef)(null),p={dots:!1,arrows:!1,slidesToShow:1,draggable:!1,slidesToScroll:1,adaptiveHeight:!0,beforeChange:function(t,e){return r(e)}},m={dots:!1,arrows:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:Ct.length>3?3:Ct.length};Object(K.useEffect)((function(){j(O.current),h(x.current)}),[]);return Object(o.jsxs)(zt,{children:[Object(o.jsxs)(c.a,{sx:{zIndex:0,borderRadius:2,overflow:"hidden",position:"relative"},children:[Object(o.jsx)(q.a,Object(n.a)(Object(n.a)({},p),{},{asNavFor:u,ref:O,children:Ct.map((function(t){return Object(o.jsx)(Ft,{item:t},t)}))})),Object(o.jsx)(E,{index:i,total:Ct.length,onNext:function(){x.current.slickNext()},onPrevious:function(){x.current.slickPrev()}})]}),Object(o.jsx)(c.a,{sx:Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({mt:3,mx:"auto"},1===Ct.length&&{maxWidth:80}),2===Ct.length&&{maxWidth:160}),3===Ct.length&&{maxWidth:240}),4===Ct.length&&{maxWidth:240}),5===Ct.length&&{maxWidth:384}),{},{"& .slick-current img":{opacity:1,border:function(t){return"solid 3px ".concat(t.palette.primary.main)}}}),children:Object(o.jsx)(q.a,Object(n.a)(Object(n.a)({},m),{},{asNavFor:l,ref:x,children:Ct.map((function(t){return Object(o.jsx)(Wt,{item:t},t)}))}))})]})}}}]);
//# sourceMappingURL=15.2b999c5f.chunk.js.map