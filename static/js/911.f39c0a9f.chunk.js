"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[911],{616:function(t,n){n.Z={BASE_URL:"https://api.themoviedb.org",API_KEY:"f23afa13cf10e0a13fa8c4a5195ece8b"}},911:function(t,n,e){e.r(n),e.d(n,{default:function(){return E}});var r,a,c,i=e(439),o=e(791),u=e(689),s=e(168),p=e(444),l=p.ZP.img(r||(r=(0,s.Z)(["\n  display: block;\n  margin: 20px 0 0;\n"]))),f=p.ZP.p(a||(a=(0,s.Z)(["\n  margin: 20px 0 0;\n"]))),h=p.ZP.p(c||(c=(0,s.Z)(["\n  margin: 20px 0 0;\n"]))),m=e(184),d=function(t){var n=t.actor,e=n.profile_path,r=n.name,a=n.character;return(0,m.jsxs)("li",{children:[(0,m.jsx)(l,{src:null===e?"https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png":"https://image.tmdb.org/t/p/w500/".concat(e),alt:r,width:"200"}),(0,m.jsx)(f,{children:r}),(0,m.jsxs)(h,{children:["Character: ",a]})]})},Z=e(861),g=e(757),v=e.n(g),k=e(388),w=e(616),x=w.Z.BASE_URL,_=w.Z.API_KEY;function b(){return(b=(0,Z.Z)(v().mark((function t(n){var e,r;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.Z.get("".concat(x,"/3/movie/").concat(n,"/credits?api_key=").concat(_,"&language=en-US"));case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}var j,P=function(t){return b.apply(this,arguments)},y=p.ZP.ul(j||(j=(0,s.Z)(["\n  list-style: none;\n"]))),E=function(){var t=(0,o.useState)([]),n=(0,i.Z)(t,2),e=n[0],r=n[1],a=(0,u.UO)().movieId;return(0,o.useEffect)((function(){P(a).then((function(t){var n=t.cast;return r(n)}))}),[a]),(0,m.jsx)(y,{children:e.map((function(t){return(0,m.jsx)(d,{actor:t},t.cast_id)}))})}}}]);
//# sourceMappingURL=911.f39c0a9f.chunk.js.map