(this.webpackJsonpsqld3=this.webpackJsonpsqld3||[]).push([[0],{139:function(t,e,n){},140:function(t,e,n){},170:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(33),r=n.n(o),i=(n(139),n(140),n(117)),l=n(115),s=n(26),u=n(8),d=n(252),j=n(251),b=n(254),f=n(255),h=n(233),O=n(243),p=n(236),g=n(234),x=n(237),y=n(247),m=n(245),v=n(246),_=n(239),S=n(242),C=n(53),E=n(87),T=n.n(E),L=n(32),I=n(1),F={};function A(){var t=Object(i.d)(),e=Object(C.b)(),n=Object(c.useState)(""),a=Object(u.a)(n,2),o=a[0],r=a[1],l=Object(c.useState)(""),E=Object(u.a)(l,2),A=(E[0],E[1],Object(c.useState)([])),G=Object(u.a)(A,2),w=G[0],k=G[1],D=c.useState([null,null]),P=Object(u.a)(D,2),R=P[0],N=P[1],q=Object(C.c)((function(t){return t.chart.sensor_id})),z=Object(C.c)((function(t){return t.logs.sensor_id}));console.log("history===",t.location.pathname),c.useEffect((function(){F=T.a.uniq(T.a.map(q.length>1?q:z,"sensor_id")),k(F.sort((function(t,e){return t-e})))}),[q,z]),c.useEffect((function(){"/"==t.location.pathname&&e(L.f(o||-1,R||-1)),"/logpage"==t.location.pathname&&e(L.g(o||-1,R||-1)),console.log("date===",R)}),[o,R]);return console.log("localdata==",w),Object(I.jsxs)(j.a,{sx:{flexGrow:1},children:[Object(I.jsx)(d.a,{position:"static",children:Object(I.jsxs)(b.a,{children:[Object(I.jsx)(f.a,{color:"inherit",onClick:function(){N([null,null]),r(""),t.push("/")},children:"Chart"}),Object(I.jsx)(f.a,{color:"inherit",onClick:function(){N([null,null]),r(""),t.push("/logpage")},children:"Log"})]})}),Object(I.jsx)(d.a,{position:"static",color:"secondary",children:Object(I.jsx)(b.a,{sx:{m:2},children:Object(I.jsxs)(y.a,{container:!0,justifyContent:"center",spacing:4,children:[Object(I.jsx)(y.a,{item:!0,md:2,xs:4,children:Object(I.jsxs)(m.a,{fullWidth:!0,children:[Object(I.jsx)(v.a,{id:"location",children:"Location"}),Object(I.jsx)(_.a,{labelId:"location",value:o,onChange:function(t){r(t.target.value)},label:"location",children:null===w||void 0===w?void 0:w.map((function(t,e){return Object(I.jsxs)(S.a,{value:t,children:["Sensor_",t]},e)}))})]})}),Object(I.jsx)(y.a,{item:!0,md:4,xs:8,children:Object(I.jsx)(h.b,{dateAdapter:p.a,children:Object(I.jsx)(g.a,{spacing:3,children:Object(I.jsx)(x.a,{startText:"Mobile start",value:R,onChange:function(t){N(t)},renderInput:function(t,e){return Object(I.jsxs)(c.Fragment,{children:[Object(I.jsx)(O.a,Object(s.a)({},t)),Object(I.jsx)(j.a,{sx:{mx:2},children:" to "}),Object(I.jsx)(O.a,Object(s.a)({},e))]})}})})})})]})})})]})}var G=n(48),w=n(113),k={data:[],limit:[],sensor_id:[]},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L.d:return console.log("reducer===",e.payload),Object(s.a)(Object(s.a)({},t),{},{data:e.payload.data,limit:e.payload.limit,sensor_id:e.payload.sensor_id});case L.a:return Object(s.a)(Object(s.a)({},t),{},{data:e.payload.data,limit:e.payload.limit,sensor_id:e.payload.sensor_id});default:return t}},P={log:[],sensor_id:[]},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L.c:return console.log("logs===",e.payload),Object(s.a)(Object(s.a)({},t),{},{log:e.payload.data,sensor_id:e.payload.sensor_id});case L.b:return Object(s.a)(Object(s.a)({},t),{},{log:e.payload.data,sensor_id:e.payload.sensor_id});default:return t}},N=function(t){return Object(G.c)(Object(s.a)({chart:D,logs:R},t))};G.a.REPLACE="@@redux/INIT";var q=(0,G.d)(Object(G.b)(w.a)),z=Object(G.e)(N(),q);z.asyncReducers={};var B=z,J=n(238),M=n(258),W=Object(J.a)((function(){return{root:{position:"fixed",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}}));function H(){var t=W();return Object(I.jsx)("div",{className:t.root,children:Object(I.jsx)(M.a,{color:"secondary"})})}var K=n(250),Q=n(116),U=Object(Q.a)({palette:{primary:{main:"#fa8b02"},secondary:{main:"#fcc488"}},typography:{fontFamily:"Cinzel"}}),V=Object(l.a)();var X=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(K.a,{theme:U,children:Object(I.jsx)(C.a,{store:B,children:Object(I.jsxs)(i.b,{history:V,children:[Object(I.jsx)(A,{}),Object(I.jsx)(c.Suspense,{fallback:H,children:Object(I.jsxs)(i.c,{children:[Object(I.jsx)(i.a,{exact:!0,path:"/logpage",component:Object(c.lazy)((function(){return Promise.all([n.e(6),n.e(10)]).then(n.bind(null,606))}))}),Object(I.jsx)(i.a,{exact:!0,path:"/",component:Object(c.lazy)((function(){return Promise.all([n.e(5),n.e(9)]).then(n.bind(null,610))}))})]})})]})})})})},Y=function(t){t&&t instanceof Function&&n.e(11).then(n.bind(null,607)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};r.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(X,{})}),document.getElementById("root")),Y()},32:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"h",(function(){return j})),n.d(e,"g",(function(){return b}));var c=n(54),a=n.n(c),o="http://123.206.118.90:5000/api/",r="GET_SENSOR_DATAS",i="GET_FILTER_DATA";function l(){var t=a.a.get("".concat(o,"getData"));return function(e){return t.then((function(t){console.log("response==",t),e({type:r,payload:t.data})})).catch((function(t){return console.log(t)}))}}function s(t,e){var n=a.a.post("".concat(o,"filterData"),{location:t,period:e});return function(t){return n.then((function(e){console.log("response==",e),t({type:i,payload:e.data})})).catch((function(t){return console.log(t)}))}}var u="GET_LOGS",d="GET_FILTER_LOGS";function j(){var t=a.a.get("".concat(o,"getLogs"));return function(e){return t.then((function(t){console.log("response==",t),e({type:u,payload:t.data})})).catch((function(t){return console.log(t)}))}}function b(t,e){console.log("action filter");var n=a.a.post("".concat(o,"filterLogs"),{location:t,period:e});return function(t){return n.then((function(e){console.log("response==",e),t({type:d,payload:e.data})})).catch((function(t){return console.log(t)}))}}}},[[170,1,4]]]);
//# sourceMappingURL=main.bd1de1d6.chunk.js.map