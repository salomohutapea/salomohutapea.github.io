import{S as s,i as a,s as t,e,a as r,b as l,f as o,c,d as n,h as f,j as i,k as m,n as h,t as u,q as p,g as v,x as g}from"./client.6220203f.js";import{b as d}from"./browser-ponyfill.7fccbaa1.js";function k(s,a,t){const e=s.slice();return e[4]=a[t],e}function w(s){let a,t,u,p;return{c(){a=e("div"),t=e("img"),p=r(),this.h()},l(s){a=l(s,"DIV",{class:!0});var e=o(a);t=l(e,"IMG",{src:!0,alt:!0,class:!0}),p=c(e),e.forEach(n),this.h()},h(){t.src!==(u=s[4])&&f(t,"src",u),f(t,"alt","Work"),f(t,"class","svelte-1fu3m8o"),f(a,"class","svelte-1fu3m8o")},m(s,e){i(s,a,e),m(a,t),m(a,p)},p:h,d(s){s&&n(a)}}}function b(s){let a,t,d,b,E,j,x,I,W,y,D=s[0].name+"",H=s[0].desc+"";document.title=a="Work - "+s[0].name;let S=s[0].images,V=[];for(let a=0;a<S.length;a+=1)V[a]=w(k(s,S,a));return{c(){t=r(),d=e("div"),b=e("h2"),E=u(D),j=r(),x=e("h4"),I=u(H),W=r(),y=e("section");for(let s=0;s<V.length;s+=1)V[s].c();this.h()},l(s){p('[data-svelte="svelte-1o039mm"]',document.head).forEach(n),t=c(s),d=l(s,"DIV",{class:!0});var a=o(d);b=l(a,"H2",{class:!0});var e=o(b);E=v(e,D),e.forEach(n),j=c(a),x=l(a,"H4",{class:!0});var r=o(x);I=v(r,H),r.forEach(n),W=c(a),y=l(a,"SECTION",{class:!0});var f=o(y);for(let s=0;s<V.length;s+=1)V[s].l(f);f.forEach(n),a.forEach(n),this.h()},h(){f(b,"class","svelte-1fu3m8o"),f(x,"class","svelte-1fu3m8o"),f(y,"class","svelte-1fu3m8o"),f(d,"class","svelte-1fu3m8o")},m(s,a){i(s,t,a),i(s,d,a),m(d,b),m(b,E),m(d,j),m(d,x),m(x,I),m(d,W),m(d,y);for(let s=0;s<V.length;s+=1)V[s].m(y,null)},p(s,[t]){if(1&t&&a!==(a="Work - "+s[0].name)&&(document.title=a),1&t){let a;for(S=s[0].images,a=0;a<S.length;a+=1){const e=k(s,S,a);V[a]?V[a].p(e,t):(V[a]=w(e),V[a].c(),V[a].m(y,null))}for(;a<V.length;a+=1)V[a].d(1);V.length=S.length}},i:h,o:h,d(s){s&&n(t),s&&n(d),g(V,s)}}}async function E({params:s}){const a=await d("https://salomohutapea-website.firebaseio.com/works.json");return{works:await a.json(),params:s}}function j(s,a,t){let{works:e}=a,{params:r}=a;for(var l=0;l<e.length;l++)if(e[l].slug===r.slug){var o=e[l];break}return s.$$set=s=>{"works"in s&&t(1,e=s.works),"params"in s&&t(2,r=s.params)},[o,e,r]}export default class extends s{constructor(s){super(),a(this,s,j,b,t,{works:1,params:2})}}export{E as preload};
