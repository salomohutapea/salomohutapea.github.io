import{_ as r,a as t,b as n,c as s,i as a,s as e,d as o,S as c,f,e as u,t as i,j as l,k as h,g as v,h as p,l as k,m,n as w,o as d,r as g,u as y,p as $,v as E,w as R,x,y as b,z as B,A as I,B as j,C as D,q as V,D as H,E as M,F as O}from"./client.7488fcab.js";import{b as P}from"./browser-ponyfill.57a72839.js";function S(r){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}();return function(){var a,e=t(r);if(s){var o=t(this).constructor;a=Reflect.construct(e,arguments,o)}else a=e.apply(this,arguments);return n(this,a)}}function A(r){var t,n,s,a,e,o,c,E,R,x,b,B,I,j=r[0].name+"",D=r[0].desc+"";return{c:function(){t=f("a"),n=f("div"),s=f("div"),a=f("img"),o=u(),c=f("div"),E=f("h3"),R=i(j),x=u(),b=f("p"),B=i(D),this.h()},l:function(r){t=l(r,"A",{href:!0});var e=h(t);n=l(e,"DIV",{class:!0});var f=h(n);s=l(f,"DIV",{class:!0});var u=h(s);a=l(u,"IMG",{src:!0,alt:!0,class:!0}),u.forEach(v),o=p(f),c=l(f,"DIV",{class:!0});var i=h(c);E=l(i,"H3",{class:!0});var m=h(E);R=k(m,j),m.forEach(v),x=p(i),b=l(i,"P",{class:!0});var w=h(b);B=k(w,D),w.forEach(v),i.forEach(v),f.forEach(v),e.forEach(v),this.h()},h:function(){a.src!==(e=r[0].images[0])&&m(a,"src",e),m(a,"alt","works"),m(a,"class","svelte-r604k5"),m(s,"class","work-image svelte-r604k5"),m(E,"class","svelte-r604k5"),m(b,"class","description svelte-r604k5"),m(c,"class","work-detail svelte-r604k5"),m(n,"class","work-card svelte-r604k5"),m(t,"href",I="works/"+r[0].slug)},m:function(r,e){w(r,t,e),d(t,n),d(n,s),d(s,a),d(n,o),d(n,c),d(c,E),d(E,R),d(c,x),d(c,b),d(b,B)},p:function(r,n){var s=g(n,1)[0];1&s&&a.src!==(e=r[0].images[0])&&m(a,"src",e),1&s&&j!==(j=r[0].name+"")&&y(R,j),1&s&&D!==(D=r[0].desc+"")&&y(B,D),1&s&&I!==(I="works/"+r[0].slug)&&m(t,"href",I)},i:$,o:$,d:function(r){r&&v(t)}}}function C(r,t,n){var s=t.work;return r.$$set=function(r){"work"in r&&n(0,s=r.work)},[s]}var q=function(t){r(f,c);var n=S(f);function f(r){var t;return s(this,f),t=n.call(this),a(o(t),r,C,A,e,{work:0}),t}return f}();function z(r){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}();return function(){var a,e=t(r);if(s){var o=t(this).constructor;a=Reflect.construct(e,arguments,o)}else a=e.apply(this,arguments);return n(this,a)}}function F(r,t,n){var s=r.slice();return s[1]=t[n],s}function G(r){var t,n;return t=new q({props:{work:r[1]}}),{c:function(){x(t.$$.fragment)},l:function(r){b(t.$$.fragment,r)},m:function(r,s){B(t,r,s),n=!0},p:function(r,n){var s={};1&n&&(s.work=r[1]),t.$set(s)},i:function(r){n||(I(t.$$.fragment,r),n=!0)},o:function(r){j(t.$$.fragment,r),n=!1},d:function(r){D(t,r)}}}function N(r){for(var t,n,s,a,e,o,c,y=r[0],$=[],E=0;E<y.length;E+=1)$[E]=G(F(r,y,E));var R=function(r){return j($[r],1,1,(function(){$[r]=null}))};return{c:function(){t=u(),n=f("div"),s=f("h1"),a=i("My works"),e=u(),o=f("section");for(var r=0;r<$.length;r+=1)$[r].c();this.h()},l:function(r){V('[data-svelte="svelte-1ge6llo"]',document.head).forEach(v),t=p(r),n=l(r,"DIV",{class:!0});var c=h(n);s=l(c,"H1",{class:!0});var f=h(s);a=k(f,"My works"),f.forEach(v),e=p(c),o=l(c,"SECTION",{class:!0});for(var u=h(o),i=0;i<$.length;i+=1)$[i].l(u);u.forEach(v),c.forEach(v),this.h()},h:function(){document.title="Work | Salomo Hutapea",m(s,"class","svelte-ds6rh4"),m(o,"class","work-card svelte-ds6rh4"),m(n,"class","wrapper svelte-ds6rh4")},m:function(r,f){w(r,t,f),w(r,n,f),d(n,s),d(s,a),d(n,e),d(n,o);for(var u=0;u<$.length;u+=1)$[u].m(o,null);c=!0},p:function(r,t){var n=g(t,1)[0];if(1&n){var s;for(y=r[0],s=0;s<y.length;s+=1){var a=F(r,y,s);$[s]?($[s].p(a,n),I($[s],1)):($[s]=G(a),$[s].c(),I($[s],1),$[s].m(o,null))}for(O(),s=y.length;s<$.length;s+=1)R(s);H()}},i:function(r){if(!c){for(var t=0;t<y.length;t+=1)I($[t]);c=!0}},o:function(r){$=$.filter(Boolean);for(var t=0;t<$.length;t+=1)j($[t]);c=!1},d:function(r){r&&v(t),r&&v(n),M($,r)}}}function T(){return W.apply(this,arguments)}function W(){return(W=E(R.mark((function r(){var t,n;return R.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P("https://salomohutapea-website.firebaseio.com/works.json");case 2:return t=r.sent,r.next=5,t.json();case 5:return n=r.sent,r.abrupt("return",{works:n});case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function _(r,t,n){var s=t.works;return r.$$set=function(r){"works"in r&&n(0,s=r.works)},[s]}var J=function(t){r(f,c);var n=z(f);function f(r){var t;return s(this,f),t=n.call(this),a(o(t),r,_,N,e,{works:0}),t}return f}();export default J;export{T as preload};
