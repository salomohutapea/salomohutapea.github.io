import{v as t,w as r,_ as s,a as n,b as a,c as e,i as o,d as c,S as u,s as f,f as i,e as l,j as h,k as m,h as v,g as p,m as d,n as g,o as k,p as w,t as y,q as E,l as b,r as x,E as j}from"./client.01d6315d.js";import{b as R}from"./browser-ponyfill.05c4f104.js";function I(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,e=n(t);if(r){var o=n(this).constructor;s=Reflect.construct(e,arguments,o)}else s=e.apply(this,arguments);return a(this,s)}}function W(t,r,s){var n=t.slice();return n[4]=r[s],n}function B(t){var r,s,n,a;return{c:function(){r=i("div"),s=i("img"),a=l(),this.h()},l:function(t){r=h(t,"DIV",{class:!0});var n=m(r);s=h(n,"IMG",{src:!0,alt:!0,class:!0}),a=v(n),n.forEach(p),this.h()},h:function(){s.src!==(n=t[4])&&d(s,"src",n),d(s,"alt","Work"),d(s,"class","svelte-1fu3m8o"),d(r,"class","svelte-1fu3m8o")},m:function(t,n){g(t,r,n),k(r,s),k(r,a)},p:w,d:function(t){t&&p(r)}}}function D(t){var r,s,n,a,e,o,c,u,f,R,I=t[0].name+"",D=t[0].desc+"";document.title=r="Work - "+t[0].name;for(var H=t[0].images,O=[],S=0;S<H.length;S+=1)O[S]=B(W(t,H,S));return{c:function(){s=l(),n=i("div"),a=i("h2"),e=y(I),o=l(),c=i("h4"),u=y(D),f=l(),R=i("section");for(var t=0;t<O.length;t+=1)O[t].c();this.h()},l:function(t){E('[data-svelte="svelte-1o039mm"]',document.head).forEach(p),s=v(t),n=h(t,"DIV",{class:!0});var r=m(n);a=h(r,"H2",{class:!0});var i=m(a);e=b(i,I),i.forEach(p),o=v(r),c=h(r,"H4",{class:!0});var l=m(c);u=b(l,D),l.forEach(p),f=v(r),R=h(r,"SECTION",{class:!0});for(var d=m(R),g=0;g<O.length;g+=1)O[g].l(d);d.forEach(p),r.forEach(p),this.h()},h:function(){d(a,"class","svelte-1fu3m8o"),d(c,"class","svelte-1fu3m8o"),d(R,"class","svelte-1fu3m8o"),d(n,"class","svelte-1fu3m8o")},m:function(t,r){g(t,s,r),g(t,n,r),k(n,a),k(a,e),k(n,o),k(n,c),k(c,u),k(n,f),k(n,R);for(var i=0;i<O.length;i+=1)O[i].m(R,null)},p:function(t,s){var n=x(s,1)[0];if(1&n&&r!==(r="Work - "+t[0].name)&&(document.title=r),1&n){var a;for(H=t[0].images,a=0;a<H.length;a+=1){var e=W(t,H,a);O[a]?O[a].p(e,n):(O[a]=B(e),O[a].c(),O[a].m(R,null))}for(;a<O.length;a+=1)O[a].d(1);O.length=H.length}},i:w,o:w,d:function(t){t&&p(s),t&&p(n),j(O,t)}}}function H(t){return O.apply(this,arguments)}function O(){return(O=t(r.mark((function t(s){var n,a,e;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,t.next=3,R("https://salomohutapea-website.firebaseio.com/works.json");case 3:return a=t.sent,t.next=6,a.json();case 6:return e=t.sent,t.abrupt("return",{works:e,params:n});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(t,r,s){for(var n=r.works,a=r.params,e=0;e<n.length;e++)if(n[e].slug===a.slug){var o=n[e];break}return t.$$set=function(t){"works"in t&&s(1,n=t.works),"params"in t&&s(2,a=t.params)},[o,n,a]}var V=function(t){s(n,u);var r=I(n);function n(t){var s;return e(this,n),s=r.call(this),o(c(s),t,S,D,f,{works:1,params:2}),s}return n}();export default V;export{H as preload};
