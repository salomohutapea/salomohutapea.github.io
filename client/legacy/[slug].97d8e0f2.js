import{v as r,_ as t,a as n,b as s,c as a,i as e,d as o,S as c,s as f,f as i,e as u,j as l,k as h,h as p,g as v,m,n as w,o as g,p as d,t as k,l as y,r as b,D as x}from"./client.9a5a5d4f.js";import{_ as E,b as j}from"./browser-ponyfill.cd6937f6.js";function D(r){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}();return function(){var a,e=n(r);if(t){var o=n(this).constructor;a=Reflect.construct(e,arguments,o)}else a=e.apply(this,arguments);return s(this,a)}}function R(r,t,n){var s=r.slice();return s[4]=t[n],s}function I(r){var t,n,s,a;return{c:function(){t=i("div"),n=i("img"),a=u(),this.h()},l:function(r){t=l(r,"DIV",{class:!0});var s=h(t);n=l(s,"IMG",{src:!0,alt:!0,class:!0}),a=p(s),s.forEach(v),this.h()},h:function(){n.src!==(s=r[4])&&m(n,"src",s),m(n,"alt","Work"),m(n,"class","svelte-1rfwwno"),m(t,"class","svelte-1rfwwno")},m:function(r,s){w(r,t,s),g(t,n),g(t,a)},p:d,d:function(r){r&&v(t)}}}function S(r){for(var t,n,s,a,e,o,c,f,E=r[0].name+"",j=r[0].desc+"",D=r[0].images,S=[],H=0;H<D.length;H+=1)S[H]=I(R(r,D,H));return{c:function(){t=i("div"),n=i("h2"),s=k(E),a=u(),e=i("h4"),o=k(j),c=u(),f=i("section");for(var r=0;r<S.length;r+=1)S[r].c();this.h()},l:function(r){t=l(r,"DIV",{});var i=h(t);n=l(i,"H2",{class:!0});var u=h(n);s=y(u,E),u.forEach(v),a=p(i),e=l(i,"H4",{class:!0});var m=h(e);o=y(m,j),m.forEach(v),c=p(i),f=l(i,"SECTION",{class:!0});for(var w=h(f),g=0;g<S.length;g+=1)S[g].l(w);w.forEach(v),i.forEach(v),this.h()},h:function(){m(n,"class","svelte-1rfwwno"),m(e,"class","svelte-1rfwwno"),m(f,"class","svelte-1rfwwno")},m:function(r,i){w(r,t,i),g(t,n),g(n,s),g(t,a),g(t,e),g(e,o),g(t,c),g(t,f);for(var u=0;u<S.length;u+=1)S[u].m(f,null)},p:function(r,t){var n=b(t,1)[0];if(1&n){var s;for(D=r[0].images,s=0;s<D.length;s+=1){var a=R(r,D,s);S[s]?S[s].p(a,n):(S[s]=I(a),S[s].c(),S[s].m(f,null))}for(;s<S.length;s+=1)S[s].d(1);S.length=D.length}},i:d,o:d,d:function(r){r&&v(t),x(S,r)}}}function H(r){return V.apply(this,arguments)}function V(){return(V=E(r.mark((function t(n){var s,a,e;return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=n.params,r.next=3,j("https://salomohutapea-website.firebaseio.com/works.json");case 3:return a=r.sent,r.next=6,a.json();case 6:return e=r.sent,r.abrupt("return",{works:e,params:s});case 8:case"end":return r.stop()}}),t)})))).apply(this,arguments)}function $(r,t,n){for(var s=t.works,a=t.params,e=0;e<s.length;e++)if(s[e].slug===a.slug){var o=s[e];break}return r.$$set=function(r){"works"in r&&n(1,s=r.works),"params"in r&&n(2,a=r.params)},[o,s,a]}var _=function(r){t(s,c);var n=D(s);function s(r){var t;return a(this,s),t=n.call(this),e(o(t),r,$,S,f,{works:1,params:2}),t}return s}();export default _;export{H as preload};
