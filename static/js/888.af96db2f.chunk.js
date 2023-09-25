"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{2639:function(e,t,n){n.d(t,{Z:function(){return i}});n(2791);var r=n(5748),a="Loader_loader__+lRPl",s=n(184);function i(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},8888:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(9439),a=n(2791),s=n(7689),i=n(1087),c=n(8820),u=n(9126),o=n(6856),l=n(2444),d=n(2639),p=n(1875),v="MovieDetails_container_details__3kYvu",f="MovieDetails_button_back__l6uM+",h="MovieDetails_details__tmd20",_="MovieDetails_poster__Gw9Qy",m="MovieDetails_movie__vEd44",x="MovieDetails_list_details__Afvmk",g="MovieDetails_list_revCast__5ZXsZ",j="MovieDetails_link__wf74g",w="MovieDetails_icon__3Fjif",k=n(184);var y=function(){var e,t,n=(0,a.useState)([]),y=(0,r.Z)(n,2),b=y[0],Z=y[1],N=(0,a.useState)(!1),M=(0,r.Z)(N,2),D=M[0],U=M[1],S=(0,s.UO)().movieId,C=(0,s.TH)(),q=null!==(e=null===(t=C.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";(0,a.useEffect)((function(){U(!0),(0,l.hG)(S).then((function(e){Z(e)})).catch((function(e){return console.log(e)})),U(!1)}),[S]);var G=b.poster_path,L=b.overview,F=b.original_title,R=b.vote_average,E=b.genres;return(0,k.jsxs)("div",{className:v,children:[D&&(0,k.jsx)(d.Z,{}),(0,k.jsxs)(i.rU,{className:f,to:q,children:[(0,k.jsx)(c.kyg,{className:w}),"Back"]}),(0,k.jsxs)("div",{className:h,children:[(0,k.jsx)("img",{className:_,src:G?"https://image.tmdb.org/t/p/w500"+G:p,alt:F}),(0,k.jsxs)("div",{className:m,children:[(0,k.jsx)("h2",{children:F}),(0,k.jsxs)("p",{children:[Math.round(10*R),"%"]}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:L}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("ul",{className:x,children:null===E||void 0===E?void 0:E.map((function(e){var t=e.id,n=e.name;return(0,k.jsx)("li",{children:n},t)}))})]})]}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{className:g,children:(0,k.jsxs)(i.rU,{className:j,to:"cast",state:C.state,children:[(0,k.jsx)(u.fFq,{className:w}),"Cast"]})}),(0,k.jsx)("li",{className:g,children:(0,k.jsxs)(i.rU,{className:j,to:"reviews",state:C.state,children:[(0,k.jsx)(o.TKY,{className:w}),"Reviews"]})})]}),(0,k.jsx)(a.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading..."}),children:(0,k.jsx)(s.j3,{})})]})}},2444:function(e,t,n){n.d(t,{W_:function(){return f},eq:function(){return _},hG:function(){return p},qF:function(){return l},t$:function(){return u}});var r=n(5861),a=n(7757),s=n.n(a),i=n(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="d46fe50954ecb8065dcaa214ccc0bcb9";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1875:function(e,t,n){e.exports=n.p+"static/media/no-poster.0dec656e0f78c42f8e07.png"}}]);
//# sourceMappingURL=888.af96db2f.chunk.js.map