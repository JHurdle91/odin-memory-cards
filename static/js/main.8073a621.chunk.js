(this["webpackJsonpmemory-cards"]=this["webpackJsonpmemory-cards"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(6),s=r.n(a),i=r(4),u=r(0),o=function(e){var t=e.score,r=e.highScore;return Object(u.jsxs)("div",{className:"Header",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Dog Memory"})}),Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Don't click the same dog twice!"})}),Object(u.jsxs)("div",{className:"scoreContainer",children:[Object(u.jsxs)("h3",{children:["Score: ",t]}),Object(u.jsxs)("h3",{children:["High Score: ",r]})]})]})},f=r(2),d=r.n(f),h=r(3),j=(r(13),function(e){var t=Object(n.useState)(!1),r=Object(i.a)(t,2),c=r[0],a=r[1],s=e.name,o=e.imageUrl,f=e.score,d=e.onCardClicked;return Object(n.useEffect)((function(){0===f&&a(!1)}),[f]),Object(u.jsxs)("div",{className:"Card",onClick:function(){d(c),c||a(!0)},children:[Object(u.jsx)("div",{children:s}),Object(u.jsx)("img",{src:o,alt:s})]})}),p=function(){var e=Object(h.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thedogapi.com/v1/breeds?api_key=".concat("ca217401-8ae2-4cc7-b949-46bbfab5be7b"),{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(h.a)(d.a.mark((function e(t){var r,n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:for(r=e.sent,n=[];t>0;)c=Math.floor(Math.random()*r.length),a=r[c],n.includes(a)||(n=n.concat(a),t--);return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(h.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return t=e.sent,r=t.map((function(e){return{id:e.id,name:e.name,imageUrl:e.image.url}})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(12);case 2:return t=e.sent,e.next=5,l(t);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Array.prototype.shuffle=function(){for(var e=this.length-1;e>0;e--){var t=Math.floor(Math.random()*e),r=[this[t],this[e]];this[e]=r[0],this[t]=r[1]}return this};Array.prototype.shuffle,r(14);var v=function(e){var t=Object(n.useState)(function(){for(var e=[],t=0;t<12;t++)e[t]={id:t,name:"Loading...",imageUrl:""};return e}()),r=Object(i.a)(t,2),c=r[0],a=r[1],s=e.score;Object(n.useEffect)((function(){(function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,m();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){0===s&&function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,m();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s]);var o=function(t){e.onCardClicked(t),a(c.shuffle())};return Object(u.jsx)("div",{className:"Game",children:c.map((function(e){var t=e.id,r=e.name,n=e.imageUrl;return Object(u.jsx)(j,{name:r,imageUrl:n,score:s,onCardClicked:o},t)}))})};r(15);var O=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(0),s=Object(i.a)(a,2),f=s[0],d=s[1];return Object(n.useEffect)((function(){d((function(e){return r>e?r:e}))}),[r]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(o,{score:r,highScore:f}),Object(u.jsx)(v,{score:r,onCardClicked:function(e){c(e?0:function(e){return e+1})}})]})};document.title="Dog Memory Game",s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8073a621.chunk.js.map