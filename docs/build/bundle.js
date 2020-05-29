var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function l(){return Object.create(null)}function i(e){e.forEach(n)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function a(e){return null==e?"":e}function r(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function h(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function p(e){return document.createTextNode(e)}function g(){return p(" ")}function y(){return p("")}function $(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.data!==t&&(e.data=t)}let w;function E(e){w=e}function x(){const e=function(){if(!w)throw new Error("Function called outside component initialization");return w}();return(t,n)=>{const l=e.$$.callbacks[t];if(l){const i=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);l.slice().forEach(t=>{t.call(e,i)})}}}const k=[],L=[],_=[],B=[],I=Promise.resolve();let M=!1;function K(e){_.push(e)}let S=!1;const N=new Set;function C(){if(!S){S=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];E(t),O(t.$$)}for(k.length=0;L.length;)L.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];N.has(t)||(N.add(t),t())}_.length=0}while(k.length);for(;B.length;)B.pop()();M=!1,S=!1,N.clear()}}function O(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}const A=new Set;let H;function T(){H={r:0,c:[],p:H}}function D(){H.r||i(H.c),H=H.p}function V(e,t){e&&e.i&&(A.delete(e),e.i(t))}function j(e,t,n,l){if(e&&e.o){if(A.has(e))return;A.add(e),H.c.push(()=>{A.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}}function z(e){e&&e.c()}function F(e,t,l){const{fragment:s,on_mount:c,on_destroy:a,after_update:r}=e.$$;s&&s.m(t,l),K(()=>{const t=c.map(n).filter(o);a?a.push(...t):i(t),e.$$.on_mount=[]}),r.forEach(K)}function J(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function U(e,t){-1===e.$$.dirty[0]&&(k.push(e),M||(M=!0,I.then(C)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(t,n,o,s,c,a,r=[-1]){const d=w;E(t);const f=n.props||{},m=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:c,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:l(),dirty:r};let h=!1;if(m.ctx=o?o(t,f,(e,n,...l)=>{const i=l.length?l[0]:n;return m.ctx&&c(m.ctx[e],m.ctx[e]=i)&&(m.bound[e]&&m.bound[e](i),h&&U(t,e)),n}):[],m.update(),h=!0,i(m.before_update),m.fragment=!!s&&s(m.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);m.fragment&&m.fragment.l(e),e.forEach(u)}else m.fragment&&m.fragment.c();n.intro&&V(t.$$.fragment),F(t,n.target,n.anchor),C()}E(d)}class R{$destroy(){J(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function q(t){let n,l,i;return{c(){n=h("svg"),l=h("path"),v(l,"fill","currentColor"),v(l,"d",t[0]),v(n,"aria-hidden","true"),v(n,"class",i=a(t[1])+" svelte-p8vizn"),v(n,"role","img"),v(n,"xmlns","http://www.w3.org/2000/svg"),v(n,"viewBox",t[2])},m(e,t){d(e,n,t),r(n,l)},p(e,[t]){1&t&&v(l,"d",e[0]),2&t&&i!==(i=a(e[1])+" svelte-p8vizn")&&v(n,"class",i),4&t&&v(n,"viewBox",e[2])},i:e,o:e,d(e){e&&u(n)}}}function G(e,n,l){let{icon:i}=n,o=[],s="",a="";return e.$set=e=>{l(4,n=t(t({},n),c(e))),"icon"in e&&l(3,i=e.icon)},e.$$.update=()=>{8&e.$$.dirty&&l(2,a="0 0 "+i.icon[0]+" "+i.icon[1]),l(1,s="fa-svelte "+(n.class?n.class:"")),8&e.$$.dirty&&l(0,o=i.icon[4])},n=c(n),[o,s,a,i]}class P extends R{constructor(e){super(),W(this,e,G,q,s,{icon:3})}}var Q={prefix:"fas",iconName:"edit",icon:[576,512,[],"f044","M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"]},X={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"]},Y={prefix:"fas",iconName:"paper-plane",icon:[512,512,[],"f1d8","M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"]},Z={prefix:"fas",iconName:"plus",icon:[448,512,[],"f067","M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]},ee={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]},te={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"]};class ne{constructor(e,t,n){this.name=e,this.editable_fields=t,this.show_fields=n}getKey(e){return e[0]}makeCapitalLead(e){return e[0].toUpperCase()+e.substr(1)}getValue(e){return e[1]}resetEditMode(e){this.editable_fields.forEach(t=>{document.getElementById(this.name+t+e).setAttribute("disabled","true")}),document.getElementById(this.name+"options-default"+e).classList.remove("hidden"),document.getElementById(this.name+"options-default"+e).classList.add("shown"),document.getElementById(this.name+"options-edit"+e).classList.remove("shown"),document.getElementById(this.name+"options-edit"+e).classList.add("hidden")}resetDeleteMode(e){document.getElementById(this.name+"options-default"+e).classList.remove("hidden"),document.getElementById(this.name+"options-default"+e).classList.add("shown"),document.getElementById(this.name+"options-delete"+e).classList.remove("shown"),document.getElementById(this.name+"options-delete"+e).classList.add("hidden")}setEditMode(e){this.editable_fields.forEach(t=>{document.getElementById(this.name+t+e).removeAttribute("disabled")}),document.getElementById(this.name+"options-default"+e).classList.add("hidden"),document.getElementById(this.name+"options-default"+e).classList.remove("shown"),document.getElementById(this.name+"options-edit"+e).classList.remove("hidden"),document.getElementById(this.name+"options-edit"+e).classList.add("shown")}setDeleteMode(e){document.getElementById(this.name+"options-default"+e).classList.add("hidden"),document.getElementById(this.name+"options-default"+e).classList.remove("shown"),document.getElementById(this.name+"options-delete"+e).classList.remove("hidden"),document.getElementById(this.name+"options-delete"+e).classList.add("shown")}gatherUpdates(e,t){const n={};return Object.entries(t[0]).forEach(t=>{n[this.getKey(t)]=document.getElementById(this.name+this.getKey(t)+e).value}),n}isShowField(e){let t=!1;return 0===this.show_fields.length&&(t=!0),this.show_fields.forEach(n=>{Object.keys(n)[0]===e&&(t=!0)}),t}getShowFieldWidth(e){let t="";return this.show_fields.forEach(n=>{Object.keys(n)[0]===e&&(t=n[e])}),t}}function le(e,t,n){const l=e.slice();return l[34]=t[n],l[36]=n,l}function ie(e,t,n){const l=e.slice();return l[34]=t[n],l}function oe(e,t,n){const l=e.slice();return l[31]=t[n],l[33]=n,l}function se(e){let t,n,l,i,o;const s=[ae,ce],c=[];function a(e,n){return 1&n[0]&&(t=!!Array.isArray(e[0])),t?0:1}return n=a(e,[-1]),l=c[n]=s[n](e),{c(){l.c(),i=y()},m(e,t){c[n].m(e,t),d(e,i,t),o=!0},p(e,t){let o=n;n=a(e,t),n===o?c[n].p(e,t):(T(),j(c[o],1,1,()=>{c[o]=null}),D(),l=c[n],l||(l=c[n]=s[n](e),l.c()),V(l,1),l.m(i.parentNode,i))},i(e){o||(V(l),o=!0)},o(e){j(l),o=!1},d(e){c[n].d(e),e&&u(i)}}}function ce(t){let n,l=JSON.stringify(t[0])+"";return{c(){n=p(l)},m(e,t){d(e,n,t)},p(e,t){1&t[0]&&l!==(l=JSON.stringify(e[0])+"")&&b(n,l)},i:e,o:e,d(e){e&&u(n)}}}function ae(e){let t,n,l,i,o=e[2].includes(Ee),s=e[0],c=[];for(let t=0;t<s.length;t+=1)c[t]=ye(oe(e,s,t));const a=e=>j(c[e],1,1,()=>{c[e]=null});let r=o&&$e(e);return{c(){t=m("table");for(let e=0;e<c.length;e+=1)c[e].c();n=g(),r&&r.c(),l=y(),v(t,"class","svelte-a9ek5x")},m(e,o){d(e,t,o);for(let e=0;e<c.length;e+=1)c[e].m(t,null);d(e,n,o),r&&r.m(e,o),d(e,l,o),i=!0},p(e,n){if(196351&n[0]){let l;for(s=e[0],l=0;l<s.length;l+=1){const i=oe(e,s,l);c[l]?(c[l].p(i,n),V(c[l],1)):(c[l]=ye(i),c[l].c(),V(c[l],1),c[l].m(t,null))}for(T(),l=s.length;l<c.length;l+=1)a(l);D()}4&n[0]&&(o=e[2].includes(Ee)),o?r?(r.p(e,n),4&n[0]&&V(r,1)):(r=$e(e),r.c(),V(r,1),r.m(l.parentNode,l)):r&&(T(),j(r,1,1,()=>{r=null}),D())},i(e){if(!i){for(let e=0;e<s.length;e+=1)V(c[e]);V(r),i=!0}},o(e){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)j(c[e]);j(r),i=!1},d(e){e&&u(t),f(c,e),e&&u(n),r&&r.d(e),e&&u(l)}}}function re(e){let t,n,l,i,o;return{c(){t=m("td"),n=m("textarea"),n.value=l=e[9].makeCapitalLead(e[34]),n.disabled=!0,v(n,"class","svelte-a9ek5x"),v(t,"class",i="headline "+(!1===e[9].isShowField(e[34])?"hidden":"shown")+" svelte-a9ek5x"),v(t,"width",o=e[9].getShowFieldWidth(e[34]))},m(e,l){d(e,t,l),r(t,n)},p(e,s){1&s[0]&&l!==(l=e[9].makeCapitalLead(e[34]))&&(n.value=l),1&s[0]&&i!==(i="headline "+(!1===e[9].isShowField(e[34])?"hidden":"shown")+" svelte-a9ek5x")&&v(t,"class",i),1&s[0]&&o!==(o=e[9].getShowFieldWidth(e[34]))&&v(t,"width",o)},d(e){e&&u(t)}}}function de(e){let t,n,l,i,o,s,c,a,f,h,p,y,$=e[2].includes(we),b=e[2].includes(be),w=e[2].includes(xe),E=e[2].includes(be),x=e[2].includes(we),k=$&&ue(e),L=b&&fe(e),_=w&&me(e),B=E&&he(e),I=x&&pe(e);return{c(){t=m("td"),n=m("div"),k&&k.c(),l=g(),L&&L.c(),i=g(),_&&_.c(),s=g(),c=m("div"),B&&B.c(),f=g(),h=m("div"),I&&I.c(),v(n,"id",o=e[1]+"options-default"+e[33]),v(n,"class","options shown svelte-a9ek5x"),v(c,"id",a=e[1]+"options-edit"+e[33]),v(c,"class","options hidden svelte-a9ek5x"),v(h,"id",p=e[1]+"options-delete"+e[33]),v(h,"class","options hidden svelte-a9ek5x"),v(t,"class","svelte-a9ek5x")},m(e,o){d(e,t,o),r(t,n),k&&k.m(n,null),r(n,l),L&&L.m(n,null),r(n,i),_&&_.m(n,null),r(t,s),r(t,c),B&&B.m(c,null),r(t,f),r(t,h),I&&I.m(h,null),y=!0},p(e,t){4&t[0]&&($=e[2].includes(we)),$?k?(k.p(e,t),4&t[0]&&V(k,1)):(k=ue(e),k.c(),V(k,1),k.m(n,l)):k&&(T(),j(k,1,1,()=>{k=null}),D()),4&t[0]&&(b=e[2].includes(be)),b?L?(L.p(e,t),4&t[0]&&V(L,1)):(L=fe(e),L.c(),V(L,1),L.m(n,i)):L&&(T(),j(L,1,1,()=>{L=null}),D()),4&t[0]&&(w=e[2].includes(xe)),w?_?(_.p(e,t),4&t[0]&&V(_,1)):(_=me(e),_.c(),V(_,1),_.m(n,null)):_&&(T(),j(_,1,1,()=>{_=null}),D()),(!y||2&t[0]&&o!==(o=e[1]+"options-default"+e[33]))&&v(n,"id",o),4&t[0]&&(E=e[2].includes(be)),E?B?(B.p(e,t),4&t[0]&&V(B,1)):(B=he(e),B.c(),V(B,1),B.m(c,null)):B&&(T(),j(B,1,1,()=>{B=null}),D()),(!y||2&t[0]&&a!==(a=e[1]+"options-edit"+e[33]))&&v(c,"id",a),4&t[0]&&(x=e[2].includes(we)),x?I?(I.p(e,t),4&t[0]&&V(I,1)):(I=pe(e),I.c(),V(I,1),I.m(h,null)):I&&(T(),j(I,1,1,()=>{I=null}),D()),(!y||2&t[0]&&p!==(p=e[1]+"options-delete"+e[33]))&&v(h,"id",p)},i(e){y||(V(k),V(L),V(_),V(B),V(I),y=!0)},o(e){j(k),j(L),j(_),j(B),j(I),y=!1},d(e){e&&u(t),k&&k.d(),L&&L.d(),_&&_.d(),B&&B.d(),I&&I.d()}}}function ue(e){let t,n,l,i;const o=new P({props:{icon:e[3]}});function s(...t){return e[24](e[33],...t)}return{c(){t=m("div"),z(o.$$.fragment),v(t,"class","options red svelte-a9ek5x"),v(t,"title","Delete"),v(t,"aria-label",n=e[1]+e[9].getKey(e[34])+e[33]+"delete")},m(e,n,c){d(e,t,n),F(o,t,null),l=!0,c&&i(),i=$(t,"click",s)},p(i,o){e=i,(!l||3&o[0]&&n!==(n=e[1]+e[9].getKey(e[34])+e[33]+"delete"))&&v(t,"aria-label",n)},i(e){l||(V(o.$$.fragment,e),l=!0)},o(e){j(o.$$.fragment,e),l=!1},d(e){e&&u(t),J(o),i()}}}function fe(e){let t,n,l;const i=new P({props:{icon:e[4]}});function o(...t){return e[25](e[33],...t)}return{c(){t=m("div"),z(i.$$.fragment),v(t,"class","options green svelte-a9ek5x"),v(t,"title","Edit")},m(e,s,c){d(e,t,s),F(i,t,null),n=!0,c&&l(),l=$(t,"click",o)},p(t,n){e=t},i(e){n||(V(i.$$.fragment,e),n=!0)},o(e){j(i.$$.fragment,e),n=!1},d(e){e&&u(t),J(i),l()}}}function me(e){let t,n,l;const i=new P({props:{icon:e[7]}});function o(...t){return e[26](e[33],...t)}return{c(){t=m("div"),z(i.$$.fragment),v(t,"class","options blue svelte-a9ek5x"),v(t,"title","Details")},m(e,s,c){d(e,t,s),F(i,t,null),n=!0,c&&l(),l=$(t,"click",o)},p(t,n){e=t},i(e){n||(V(i.$$.fragment,e),n=!0)},o(e){j(i.$$.fragment,e),n=!1},d(e){e&&u(t),J(i),l()}}}function he(e){let t,n,l,o,s,c;const a=new P({props:{icon:e[5]}});function r(...t){return e[27](e[33],...t)}const f=new P({props:{icon:e[6]}});function h(...t){return e[28](e[33],...t)}return{c(){t=m("div"),z(a.$$.fragment),n=g(),l=m("div"),z(f.$$.fragment),v(t,"class","options green svelte-a9ek5x"),v(t,"title","Update"),v(l,"class","options red svelte-a9ek5x"),v(l,"title","Cancel"),v(l,"aria-label",o=e[1]+e[9].getKey(e[34])+e[33]+"editCancel")},m(e,o,u){d(e,t,o),F(a,t,null),d(e,n,o),d(e,l,o),F(f,l,null),s=!0,u&&i(c),c=[$(t,"click",r),$(l,"click",h)]},p(t,n){e=t,(!s||3&n[0]&&o!==(o=e[1]+e[9].getKey(e[34])+e[33]+"editCancel"))&&v(l,"aria-label",o)},i(e){s||(V(a.$$.fragment,e),V(f.$$.fragment,e),s=!0)},o(e){j(a.$$.fragment,e),j(f.$$.fragment,e),s=!1},d(e){e&&u(t),J(a),e&&u(n),e&&u(l),J(f),i(c)}}}function pe(e){let t,n,l,o,s,c,a;const r=new P({props:{icon:e[5]}});function f(...t){return e[29](e[33],...t)}const h=new P({props:{icon:e[6]}});function p(...t){return e[30](e[33],...t)}return{c(){t=m("div"),z(r.$$.fragment),l=g(),o=m("div"),z(h.$$.fragment),v(t,"class","options green svelte-a9ek5x"),v(t,"title","Delete"),v(t,"aria-label",n=e[1]+e[9].getKey(e[34])+e[33]+"deleteConfirmation"),v(o,"class","options red svelte-a9ek5x"),v(o,"title","Cancel"),v(o,"aria-label",s=e[1]+e[9].getKey(e[34])+e[33]+"deleteCancel")},m(e,n,s){d(e,t,n),F(r,t,null),d(e,l,n),d(e,o,n),F(h,o,null),c=!0,s&&i(a),a=[$(t,"click",f),$(o,"click",p)]},p(l,i){e=l,(!c||3&i[0]&&n!==(n=e[1]+e[9].getKey(e[34])+e[33]+"deleteConfirmation"))&&v(t,"aria-label",n),(!c||3&i[0]&&s!==(s=e[1]+e[9].getKey(e[34])+e[33]+"deleteCancel"))&&v(o,"aria-label",s)},i(e){c||(V(r.$$.fragment,e),V(h.$$.fragment,e),c=!0)},o(e){j(r.$$.fragment,e),j(h.$$.fragment,e),c=!1},d(e){e&&u(t),J(r),e&&u(l),e&&u(o),J(h),i(a)}}}function ge(e){let t,n,l,i,o,s,c,f,h,$,w,E,x,k,L,_=e[9].getValue(e[34])+"",B=Object.entries(e[31]).length-1===e[36],I=B&&de(e);return{c(){t=m("td"),n=m("textarea"),s=g(),c=m("div"),f=p(_),x=g(),I&&I.c(),k=y(),v(n,"id",l=""+(e[1]+e[9].getKey(e[34])+e[33])),v(n,"aria-label",i=""+(e[1]+e[9].getKey(e[34])+e[33])),n.value=o=e[9].getValue(e[34]),n.disabled=!0,v(n,"class","svelte-a9ek5x"),v(c,"class","hidden svelte-a9ek5x"),v(c,"id",h=e[1]+e[9].getKey(e[34])+e[33]+"copy"),v(c,"aria-label",$=e[1]+e[9].getKey(e[34])+e[33]+"copy"),v(t,"class",w=a(!1===e[9].isShowField(e[9].getKey(e[34]))?"hidden":"shown")+" svelte-a9ek5x"),v(t,"width",E=e[9].getShowFieldWidth(e[9].getKey(e[34])))},m(e,l){d(e,t,l),r(t,n),r(t,s),r(t,c),r(c,f),d(e,x,l),I&&I.m(e,l),d(e,k,l),L=!0},p(e,s){(!L||3&s[0]&&l!==(l=""+(e[1]+e[9].getKey(e[34])+e[33])))&&v(n,"id",l),(!L||3&s[0]&&i!==(i=""+(e[1]+e[9].getKey(e[34])+e[33])))&&v(n,"aria-label",i),(!L||1&s[0]&&o!==(o=e[9].getValue(e[34])))&&(n.value=o),(!L||1&s[0])&&_!==(_=e[9].getValue(e[34])+"")&&b(f,_),(!L||3&s[0]&&h!==(h=e[1]+e[9].getKey(e[34])+e[33]+"copy"))&&v(c,"id",h),(!L||3&s[0]&&$!==($=e[1]+e[9].getKey(e[34])+e[33]+"copy"))&&v(c,"aria-label",$),(!L||1&s[0]&&w!==(w=a(!1===e[9].isShowField(e[9].getKey(e[34]))?"hidden":"shown")+" svelte-a9ek5x"))&&v(t,"class",w),(!L||1&s[0]&&E!==(E=e[9].getShowFieldWidth(e[9].getKey(e[34]))))&&v(t,"width",E),1&s[0]&&(B=Object.entries(e[31]).length-1===e[36]),B?I?(I.p(e,s),1&s[0]&&V(I,1)):(I=de(e),I.c(),V(I,1),I.m(k.parentNode,k)):I&&(T(),j(I,1,1,()=>{I=null}),D())},i(e){L||(V(I),L=!0)},o(e){j(I),L=!1},d(e){e&&u(t),e&&u(x),I&&I.d(e),e&&u(k)}}}function ye(e){let t,n,l,i,o=0===e[33]&&function(e){let t,n,l,i=Object.keys(e[31]),o=[];for(let t=0;t<i.length;t+=1)o[t]=re(ie(e,i,t));return{c(){t=m("tr");for(let e=0;e<o.length;e+=1)o[e].c();n=g(),l=m("td"),l.innerHTML='<textarea value="" disabled="" class="svelte-a9ek5x"></textarea>',v(l,"id","labelOptions"),v(l,"class","headline svelte-a9ek5x")},m(e,i){d(e,t,i);for(let e=0;e<o.length;e+=1)o[e].m(t,null);r(t,n),r(t,l)},p(e,l){if(513&l[0]){let s;for(i=Object.keys(e[31]),s=0;s<i.length;s+=1){const c=ie(e,i,s);o[s]?o[s].p(c,l):(o[s]=re(c),o[s].c(),o[s].m(t,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=i.length}},d(e){e&&u(t),f(o,e)}}}(e),s=Object.entries(e[31]),c=[];for(let t=0;t<s.length;t+=1)c[t]=ge(le(e,s,t));const a=e=>j(c[e],1,1,()=>{c[e]=null});return{c(){o&&o.c(),t=g(),n=m("tr");for(let e=0;e<c.length;e+=1)c[e].c();l=g(),v(n,"class","row svelte-a9ek5x")},m(e,s){o&&o.m(e,s),d(e,t,s),d(e,n,s);for(let e=0;e<c.length;e+=1)c[e].m(n,null);r(n,l),i=!0},p(e,t){if(0===e[33]&&o.p(e,t),196351&t[0]){let i;for(s=Object.entries(e[31]),i=0;i<s.length;i+=1){const o=le(e,s,i);c[i]?(c[i].p(o,t),V(c[i],1)):(c[i]=ge(o),c[i].c(),V(c[i],1),c[i].m(n,l))}for(T(),i=s.length;i<c.length;i+=1)a(i);D()}},i(e){if(!i){for(let e=0;e<s.length;e+=1)V(c[e]);i=!0}},o(e){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)j(c[e]);i=!1},d(e){o&&o.d(e),e&&u(t),e&&u(n),f(c,e)}}}function $e(t){let n,l,i,o,s,c;const a=new P({props:{icon:t[8]}});return{c(){n=m("div"),z(a.$$.fragment),l=g(),i=m("br"),o=m("br"),v(n,"class","options svelte-a9ek5x"),v(n,"id","options-create"),v(n,"title","Create")},m(e,r,u){d(e,n,r),F(a,n,null),d(e,l,r),d(e,i,r),d(e,o,r),s=!0,u&&c(),c=$(n,"click",t[16])},p:e,i(e){s||(V(a.$$.fragment,e),s=!0)},o(e){j(a.$$.fragment,e),s=!1},d(e){e&&u(n),J(a),e&&u(l),e&&u(i),e&&u(o),c()}}}function ve(e){let t,n,l=void 0!==e[0]&&se(e);return{c(){t=m("main"),l&&l.c()},m(e,i){d(e,t,i),l&&l.m(t,null),n=!0},p(e,n){void 0!==e[0]?l?(l.p(e,n),1&n[0]&&V(l,1)):(l=se(e),l.c(),V(l,1),l.m(t,null)):l&&(T(),j(l,1,1,()=>{l=null}),D())},i(e){n||(V(l),n=!0)},o(e){j(l),n=!1},d(e){e&&u(t),l&&l.d()}}}const be="EDIT",we="DELETE",Ee="CREATE",xe="DETAILS";function ke(e,t,n){const l=x(),i=te,o=Q,s=Y,c=ee,a=X,r=Z;let{name:d=""}=t,{show_fields:u=[]}=t,{editable_fields:f=[]}=t,{table:m=[]}=t,{options:h=[]}=t;let p=-1;const g=new ne(d,f,u);function y(e){L(e),p=e;for(let e=0;e<m.length;e++)g.resetEditMode(e);g.setEditMode(e)}function $(e){Object.entries(m[e]).forEach(t=>{document.getElementById(d+g.getKey(t)+e).value=document.getElementById(d+g.getKey(t)+e+"copy").innerText}),g.resetEditMode(e),g.resetDeleteMode(e),p=-1}function v(e){L(e),Object.entries(m[e]).forEach(t=>{document.getElementById(d+g.getKey(t)+e+"copy").innerText=document.getElementById(d+g.getKey(t)+e).value});const t=g.gatherUpdates(e,m);l("update",{id:e,body:t}),g.resetEditMode(e),n(0,m)}function b(e){L(e),g.resetDeleteMode(e),p=e,g.setDeleteMode(e)}function w(e){g.resetEditMode(e),g.resetDeleteMode(e)}function E(e){const t=g.gatherUpdates(e,m);l("delete",{id:e,body:t}),g.resetDeleteMode(e),m.splice(e,1),p=-1,n(0,m)}function k(e){L(e);const t=g.gatherUpdates(e,m);l("details",{id:e,body:t})}function L(e){p!==e&&-1!==p&&$(p)}return e.$set=e=>{"name"in e&&n(1,d=e.name),"show_fields"in e&&n(18,u=e.show_fields),"editable_fields"in e&&n(19,f=e.editable_fields),"table"in e&&n(0,m=e.table),"options"in e&&n(2,h=e.options)},[m,d,h,i,o,s,c,a,r,g,y,$,v,b,w,E,function(){l("create",{})},k,u,f,p,l,-1,L,e=>b(e),e=>y(e),e=>k(e),e=>v(e),e=>$(e),e=>E(e),e=>w(e)]}class Le extends R{constructor(e){super(),W(this,e,ke,ve,s,{name:1,show_fields:18,editable_fields:19,table:0,options:2},[-1,-1])}}function _e(e){let t,n,l,i,o,s,c,a,f;const h=new Le({props:{name:"tableName",show_fields:[{name:"200px"},{sthg:"20%"},{why:"100px"}],editable_fields:["name","why"],options:["CREATE","EDIT","DELETE","DETAILS"],table:e[1]}});return h.$on("delete",e[2]),h.$on("update",e[3]),h.$on("create",e[4]),h.$on("details",Be),{c(){t=m("main"),z(h.$$.fragment),n=g(),l=m("h1"),i=p("Hello "),o=p(e[0]),s=p("!"),c=g(),a=m("p"),a.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',v(l,"class","svelte-u9qvfs"),v(t,"class","svelte-u9qvfs")},m(e,u){d(e,t,u),F(h,t,null),r(t,n),r(t,l),r(l,i),r(l,o),r(l,s),r(t,c),r(t,a),f=!0},p(e,[t]){const n={};2&t&&(n.table=e[1]),h.$set(n),(!f||1&t)&&b(o,e[0])},i(e){f||(V(h.$$.fragment,e),f=!0)},o(e){j(h.$$.fragment,e),f=!1},d(e){e&&u(t),J(h)}}}function Be(e){e.detail.id;const t=e.detail.body;console.log(JSON.stringify(t))}function Ie(e,t,n){let l=[{id:1,name:"A_NAME",sthg:"A_STHG",why:"because"},{id:2,name:"ANOTHER_NAME",sthg:"ANOTHER_STHG",why:"I can"},{id:3,name:"svelte-generic-crud-table",sthg:"Awesome !",why:"!"}],{name:i}=t;return e.$set=e=>{"name"in e&&n(0,i=e.name)},[i,l,function(e){e.detail.id,e.detail.body,console.log(JSON.stringify(e.detail.body))},function(e){const t=e.detail.id,i=e.detail.body;console.log(JSON.stringify(i)),n(1,l[t]=i,l)},function(e){console.log(JSON.stringify(e.detail)),l.push({id:-1,name:"new Element",sthg:"2345",why:"1234"}),n(1,l)}]}return new class extends R{constructor(e){super(),W(this,e,Ie,_e,s,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map