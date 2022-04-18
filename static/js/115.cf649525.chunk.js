(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[115],{1332:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(3),a=n(37),r=n(24),c=n(417),l=n(206),o=n(1303),s=n(35),d=n(0),u=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,h=e.moreLink,j=void 0===h?[]:h,f=e.sx,p=Object(a.a)(e,u);return Object(d.jsxs)(c.a,{sx:Object(i.a)({mb:5},f),children:[Object(d.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(d.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(s.b,Object(i.a)({links:t},p))]}),n&&Object(d.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(d.jsx)(c.a,{sx:{mt:2},children:Object(r.isString)(j)?Object(d.jsx)(o.a,{href:j,target:"_blank",variant:"body2",children:j}):j.map((function(e){return Object(d.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1333:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return d}));var i=n(24),a=n(1349),r=n.n(a);function c(e){return r()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function l(e){return r()(e/100).format("0.0%")}function o(e){return r()(e).format()}function s(e){return Object(i.replace)(r()(e).format("0.00a"),".00","")}function d(e){return r()(e).format("0.0 b")}},4140:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var i=n(3),a=n(20),r=n(24),c=(n(25),n(1362),n(263),n(52)),l=n(206),o=n(1211),s=n(1626),d=n(1816),u=n(417),b=n(1559),h=n(1314),j=n(1327),f=n(1342),p=n(1773),m=(n(337),n(1333),n(4)),g=n(331),x=(n(35),n(419)),O=n(43),v=n(1332),y=n(85),C=n(0);var S=[{field:"id",hide:!0},{field:"company",headerName:"Company",flex:1},{field:"location",headerName:"Location",flex:1,renderCell:function(e){var t=e.getValue(e.id,"location");return Object(C.jsx)(l.a,{variant:"body2",sx:{textDecoration:"underline"},noWrap:!0,children:t})}},{field:"lastDate",type:"string",headerName:"Last Date",width:200,align:"right",headerAlign:"right",renderCell:function(e){return e.getValue(e.id,"lastDate").toDateString()}},{field:"type",type:"singleSelect",headerName:"Type",width:120,valueOptions:["Internship","FTE","Internship + FTE"],renderCell:function(e){return e.getValue(e.id,"type")}},{field:"status",type:"singleSelect",headerName:"Status",width:180,valueOptions:["Not Eligible","Rejected","Declined","Shortlisted","Eligible","Applied"],renderCell:function(e){return function(e){var t="light"===Object(c.a)().palette.mode;return Object(C.jsx)(g.a,{variant:t?"ghost":"filled",color:("Not Eligible"===e?"error":"Shortlisted"===e&&"warning")||"success",sx:{textTransform:"capitalize",mx:"auto"},children:e})}(e.getValue(e.id,"status"))}},{field:"CTCStipend",type:"number",headerName:"CTC/Stipend",width:260,renderCell:function(e){var t=e.getValue(e.id,"CTCStipend");return Object(C.jsxs)(o.a,{direction:"row",alignItems:"center",sx:{px:2,width:1,height:1},children:[Object(C.jsx)(s.a,{value:t,variant:"determinate",color:(t<30?"error":t>30&&t<70&&"warning")||"primary",sx:{width:1,height:6}}),Object(C.jsx)(l.a,{variant:"caption",sx:{width:90},children:"".concat(t," LPA")})]})}}],k=Object(a.a)(Array(36)).map((function(e,t){return{id:m.a.id(t),company:m.a.company(t),location:m.a.address.country(t),lastDate:m.a.time(t),type:Object(r.sample)(["Internship","FTE","Internship + FTE"]),CTCStipend:m.a.number.percent(t),rating:m.a.number.rating(t),status:Object(r.sample)(["Not Eligible","Rejected","Declined","Shortlisted","Eligible","Applied"])}}));function w(){var e=Object(p.d)(),t=e.state,n=e.apiRef;return Object(C.jsx)(d.a,{color:"primary",count:t.pagination.pageCount,page:t.pagination.page+1,onChange:function(e,t){return n.current.setPage(t-1)}})}function I(e){var t=e.item,n=e.applyValue;return Object(C.jsx)(u.a,{sx:{p:1,height:1,alignItems:"flex-end",display:"flex"},children:Object(C.jsx)(b.a,{size:"small",precision:.5,placeholder:"Filter value",value:Number(t.value),onChange:function(e,a){n(Object(i.a)(Object(i.a)({},t),{},{value:a}))}})})}function N(){if(S.length>0){var e=S.find((function(e){return"rating"===e.field})),t=S.findIndex((function(e){return"rating"===e.field})),n=Object(p.c)().map((function(e){return Object(i.a)(Object(i.a)({},e),{},{InputComponent:I})}));S[t]=Object(i.a)(Object(i.a)({},e),{},{filterOperators:n})}return Object(C.jsx)(p.a,{disableSelectionOnClick:!0,rows:k,columns:S,pagination:!0,pageSize:10,components:{Toolbar:p.b,Pagination:w}})}function T(){var e=Object(y.a)().themeStretch;return Object(C.jsx)(x.a,{title:"Job List | Minimal-UI",children:Object(C.jsxs)(h.a,{maxWidth:!e&&"lg",children:[Object(C.jsx)(v.a,{heading:"Job List",links:[{name:"Dashboard",href:O.b.root},{name:"User",href:O.b.user.root},{name:"List"}]}),Object(C.jsxs)(j.a,{children:[Object(C.jsx)(f.a,{title:"Jobs",sx:{mb:2}}),Object(C.jsx)(u.a,{sx:{height:720},children:Object(C.jsx)(N,{})})]})]})})}}}]);
//# sourceMappingURL=115.cf649525.chunk.js.map