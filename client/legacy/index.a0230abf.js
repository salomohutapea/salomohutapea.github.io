import{_ as t,a as r,b as n,c as s,i as a,s as e,d as o,S as c,f,e as i,t as u,j as l,k as v,g as h,h as p,l as k,m as w,n as d,o as m,r as g,u as y,p as $,v as E,w as R,x as D,y as x,z as b,A as I,B as j,C as S,D as V,E as q}from"./client.9a5a5d4f.js";import{_ as M,b as P}from"./browser-ponyfill.cd6937f6.js";function A(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,e=r(t);if(s){var o=r(this).constructor;a=Reflect.construct(e,arguments,o)}else a=e.apply(this,arguments);return n(this,a)}}function B(t){var r,n,s,a,e,o,c,E,R,D,x,b,I,j=t[0].name+"",S=t[0].desc+"";return{c:function(){r=f("a"),n=f("div"),s=f("div"),a=f("img"),o=i(),c=f("div"),E=f("h3"),R=u(j),D=i(),x=f("p"),b=u(S),this.h()},l:function(t){r=l(t,"A",{href:!0});var e=v(r);n=l(e,"DIV",{class:!0,"data-aos":!0,"data-aos-easing":!0});var f=v(n);s=l(f,"DIV",{class:!0});var i=v(s);a=l(i,"IMG",{src:!0,alt:!0,class:!0}),i.forEach(h),o=p(f),c=l(f,"DIV",{class:!0});var u=v(c);E=l(u,"H3",{class:!0});var w=v(E);R=k(w,j),w.forEach(h),D=p(u),x=l(u,"P",{class:!0});var d=v(x);b=k(d,S),d.forEach(h),u.forEach(h),f.forEach(h),e.forEach(h),this.h()},h:function(){a.src!==(e=t[0].images[0])&&w(a,"src",e),w(a,"alt","works"),w(a,"class","svelte-1nvo5k3"),w(s,"class","work-image svelte-1nvo5k3"),w(E,"class","svelte-1nvo5k3"),w(x,"class","description svelte-1nvo5k3"),w(c,"class","work-detail svelte-1nvo5k3"),w(n,"class","work-card svelte-1nvo5k3"),w(n,"data-aos","fade-down"),w(n,"data-aos-easing","ease"),w(r,"href",I="works/"+t[0].slug)},m:function(t,e){d(t,r,e),m(r,n),m(n,s),m(s,a),m(n,o),m(n,c),m(c,E),m(E,R),m(c,D),m(c,x),m(x,b)},p:function(t,n){var s=g(n,1)[0];1&s&&a.src!==(e=t[0].images[0])&&w(a,"src",e),1&s&&j!==(j=t[0].name+"")&&y(R,j),1&s&&S!==(S=t[0].desc+"")&&y(b,S),1&s&&I!==(I="works/"+t[0].slug)&&w(r,"href",I)},i:$,o:$,d:function(t){t&&h(r)}}}function C(t,r,n){var s=r.work;return t.$$set=function(t){"work"in t&&n(0,s=t.work)},[s]}var H=function(r){t(f,c);var n=A(f);function f(t){var r;return s(this,f),r=n.call(this),a(o(r),t,C,B,e,{work:0}),r}return f}();function _(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,e=r(t);if(s){var o=r(this).constructor;a=Reflect.construct(e,arguments,o)}else a=e.apply(this,arguments);return n(this,a)}}function z(t,r,n){var s=t.slice();return s[1]=r[n],s}function G(t){var r,n;return r=new H({props:{work:t[1]}}),{c:function(){R(r.$$.fragment)},l:function(t){D(r.$$.fragment,t)},m:function(t,s){x(r,t,s),n=!0},p:function(t,n){var s={};1&n&&(s.work=t[1]),r.$set(s)},i:function(t){n||(b(r.$$.fragment,t),n=!0)},o:function(t){I(r.$$.fragment,t),n=!1},d:function(t){j(r,t)}}}function N(t){for(var r,n,s,a,e,o,c=t[0],y=[],$=0;$<c.length;$+=1)y[$]=G(z(t,c,$));var E=function(t){return I(y[t],1,1,(function(){y[t]=null}))};return{c:function(){r=f("div"),n=f("h1"),s=u("My works"),a=i(),e=f("section");for(var t=0;t<y.length;t+=1)y[t].c();this.h()},l:function(t){r=l(t,"DIV",{class:!0});var o=v(r);n=l(o,"H1",{class:!0});var c=v(n);s=k(c,"My works"),c.forEach(h),a=p(o),e=l(o,"SECTION",{class:!0});for(var f=v(e),i=0;i<y.length;i+=1)y[i].l(f);f.forEach(h),o.forEach(h),this.h()},h:function(){w(n,"class","svelte-1sf8s4q"),w(e,"class","work-card svelte-1sf8s4q"),w(r,"class","wrapper svelte-1sf8s4q")},m:function(t,c){d(t,r,c),m(r,n),m(n,s),m(r,a),m(r,e);for(var f=0;f<y.length;f+=1)y[f].m(e,null);o=!0},p:function(t,r){var n=g(r,1)[0];if(1&n){var s;for(c=t[0],s=0;s<c.length;s+=1){var a=z(t,c,s);y[s]?(y[s].p(a,n),b(y[s],1)):(y[s]=G(a),y[s].c(),b(y[s],1),y[s].m(e,null))}for(q(),s=c.length;s<y.length;s+=1)E(s);S()}},i:function(t){if(!o){for(var r=0;r<c.length;r+=1)b(y[r]);o=!0}},o:function(t){y=y.filter(Boolean);for(var r=0;r<y.length;r+=1)I(y[r]);o=!1},d:function(t){t&&h(r),V(y,t)}}}function O(){return T.apply(this,arguments)}function T(){return(T=M(E.mark((function t(){var r,n;return E.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P("https://salomohutapea-website.firebaseio.com/works.json");case 2:return r=t.sent,t.next=5,r.json();case 5:return n=t.sent,t.abrupt("return",{works:n});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(t,r,n){var s=r.works;return t.$$set=function(t){"works"in t&&n(0,s=t.works)},[s]}var J=function(r){t(f,c);var n=_(f);function f(t){var r;return s(this,f),r=n.call(this),a(o(r),t,F,N,e,{works:0}),r}return f}();export default J;export{O as preload};
