(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{135:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(0),a=n.n(c),o=n(27),i=n.n(o),u=(n(135),n(31)),s=n(40),l=n.n(s),j=n(14),b=n(52),d=n(117),O=n(121),p=n(86),f=n(122),h=n.n(f);function x(){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/refresh_token",e.prev=1,e.next=4,h()("/refresh_token",{method:"POST",withCredentials:!0});case 4:return t=e.sent,n=t.data.access_token,e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),console.log("error",e.t0),e.abrupt("return","");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var v=function(){var e=Object(b.a)(l.a.mark((function e(){var t,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=localStorage.getItem("token")||"")&&0!==t.length){e.next=3;break}return e.abrupt("return","");case 3:if(n=Object(O.a)(t),r=Object(p.get)(n,"exp"),!(!r||Date.now()>=1e3*r)){e.next=17;break}return e.prev=7,e.next=10,x();case 10:return c=e.sent,e.abrupt("return",c);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return","");case 17:return e.abrupt("return","");case 18:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}(),m=Object(u.createHttpLink)({uri:"/graphql"}),w=Object(d.a)(function(){var e=Object(b.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.headers,e.next=3,v();case 3:return c=e.sent,e.abrupt("return",{headers:Object(j.a)(Object(j.a)({},r),{},{authorization:"Bearer ".concat(c)})});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),y=new u.ApolloClient({link:w.concat(m),cache:new u.InMemoryCache}),k=n(36),S=n(41),A=n(190),C=n(70),U=n(12),L=n(91),_=n(84),P=function(e){var t=e.children,n=Object(_.a)(e,["children"]),c=Object(S.b)(),a=c.isAuth;return c.loading?Object(r.jsx)(k.a,{}):Object(r.jsx)(U.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){var n=e.location;return a?Object(r.jsx)(U.a,{to:{pathname:"/",state:{from:n}}}):t}}))},T=function(e){var t=e.children,n=Object(_.a)(e,["children"]),c=Object(S.b)(),a=c.isAuth;return c.loading?Object(r.jsx)(k.a,{}):Object(r.jsx)(U.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){var n=e.location;return a?t:Object(r.jsx)(U.a,{to:{pathname:"/login",state:{from:n}}})}}))},z=Object(A.a)({wrap:{}}),D=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,234))})),F=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(9)]).then(n.bind(null,235))})),I=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(8)]).then(n.bind(null,243))})),E=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,251))})),H=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,246))})),N=function(){var e=z(),t=Object(S.b)(),n=t.loadUserSuccess,a=t.loadUserFailed;return Object(u.useQuery)(L.b,{onError:function(e){console.log("error",e),a()},onCompleted:function(e){console.log("data",e),n(e.me)}}).loading?Object(r.jsx)(k.a,{}):Object(r.jsx)("div",{className:e.wrap,children:Object(r.jsx)(C.a,{children:Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(k.a,{}),children:Object(r.jsxs)(U.d,{children:[Object(r.jsx)(U.b,{path:"/",exact:!0,component:D}),Object(r.jsx)(U.b,{path:"/profile/:username",exact:!0,component:E}),Object(r.jsx)(T,{path:"/edit",children:Object(r.jsx)(H,{})}),Object(r.jsx)(P,{path:"/signup",children:Object(r.jsx)(F,{})}),Object(r.jsx)(P,{path:"/login",children:Object(r.jsx)(I,{})}),Object(r.jsx)(U.b,{component:k.b})]})})})})};var R=function(){return Object(r.jsx)(k.c,{children:Object(r.jsx)(u.ApolloProvider,{client:y,children:Object(r.jsx)(S.a,{children:Object(r.jsx)(N,{})})})})},q=function(e){e&&e instanceof Function&&n.e(11).then(n.bind(null,247)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),q()},36:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return O}));var r=n(5),c=(n(0),n(190)),a=n(193),o=n(199),i=Object(c.a)({password:{cursor:"pointer",color:"#ddd","&:hover":{color:"#aaa"}},active:{color:"#333"}}),u=function(e){var t=e.show,n=e.toggleShow,c=i(),u=t?"".concat(c.password," ").concat(c.active):c.password;return Object(r.jsx)(a.a,{position:"end",children:Object(r.jsx)(o.a,{onClick:n,className:u})})},s=n(196),l=Object(c.a)({wrap:{display:"flex",alignItems:"center",justifyContent:"center",padding:15},full:{position:"absolute",top:0,bottom:0,right:0,left:0}}),j=function(e){var t=e.full,n=void 0!==t&&t,c=l(),a=n?"".concat(c.wrap," ").concat(c.full):c.wrap;return Object(r.jsx)("div",{className:a,children:Object(r.jsx)(s.a,{})})},b=function(){return Object(r.jsx)("div",{children:"Not found"})},d=(Object(c.a)({container:{maxWith:768,paddingLeft:15,paddingRight:15,marginLeft:"auto",marginRight:"auto"}}),n(126)),O=function(e){var t=e.children;return Object(r.jsx)(d.a,{autoHideDuration:1e3,maxSnack:3,anchorOrigin:{vertical:"top",horizontal:"right"},children:t})}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(85),c=n(14),a=n(5),o=n(0),i={loading:!0,user:void 0,isAuth:!1},u="AUTH/LOADING",s="AUTH/LOAD_USER_SUCCESS",l="AUTH/LOAD_USER_FAILED",j="AUTH/LOGOUT",b=function(e,t){switch(t.type){case u:return Object(c.a)(Object(c.a)({},e),{},{loading:!0});case s:return Object(c.a)(Object(c.a)({},e),{},{user:t.payload,isAuth:!0,loading:!1});case l:return Object(c.a)(Object(c.a)({},e),{},{user:void 0,isAuth:!1,loading:!1});case j:return Object(c.a)(Object(c.a)({},i),{},{loading:!1});default:return e}},d={state:i,dispatch:function(){}},O=Object(o.createContext)(d),p=function(e){var t=e.children,n=Object(o.useReducer)(b,i),c=Object(r.a)(n,2),u=c[0],s=c[1],l=Object(o.useMemo)((function(){return{state:u,dispatch:s}}),[u]);return Object(a.jsx)(O.Provider,{value:l,children:t})},f=function(){var e=Object(o.useContext)(O),t=e.state,n=e.dispatch;return Object(c.a)(Object(c.a)({},t),{},{loadUserSuccess:function(e){n({type:s,payload:e})},logout:function(){n({type:j})},loadUserFailed:function(){n({type:l})}})}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(81),c=n(31);function a(){var e=Object(r.a)(["\n  query Me {\n    me {\n      _id\n      fullname\n      phoneNumber\n      email\n      address\n\n      list {\n        _id\n        name\n        no\n        address\n      }\n      token\n    }\n  }\n"]);return a=function(){return e},e}function o(){var e=Object(r.a)(["\n  mutation Login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      _id\n      token\n    }\n  }\n"]);return o=function(){return e},e}var i=Object(c.gql)(o()),u=Object(c.gql)(a())}},[[164,4,5]]]);
//# sourceMappingURL=main.3dd3420e.chunk.js.map