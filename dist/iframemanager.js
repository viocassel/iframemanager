/*!
 * iframemanager v1.2.4
 * Author Orest Bida
 * Released under the MIT License
 */
(()=>{'use strict';const e='click',t='{data-id}',o='accept',n='reject',c='c-h-n',i='c-h-b',s='show-ph';let r,a,l,f,d,u={},m={},v={},p='',h={},b=new Map,w='api';const _=['onload','onerror','src'],g=e=>'function'==typeof e,$=e=>'string'==typeof e,S=e=>a.createElement(e),T=()=>S('div'),x=()=>{const e=S('button');return e.type='button',e},y=(e,t)=>e.className=t,I=(e,t)=>e.classList.add(t),P=(e,t)=>e.appendChild(t),D=e=>e&&Object.keys(e)||[],k=(e,t)=>{for(const o in t)C(e,o,t[o])},E=e=>{const t=e.dataset,o={},n='data-iframe-',c=e.getAttributeNames().filter((e=>e.slice(0,12)===n)).map((e=>e.slice(12))),i=e.querySelector('[data-placeholder]'),s=i&&i.hasAttribute('data-visible');s&&i.removeAttribute('data-visible');const r=i&&i.cloneNode(!0);for(const t of c)o[t]=e.getAttribute(n+t);return{t:t.id,o:t.title,i:t.thumbnail,l:t.params,u:e,m:null,v:i,p:r,h:null,_:!1,g:!1,$:!0,S:'widget'in t,T:s,I:o}},M=(e,t)=>{const o=u[e];if('IntersectionObserver'in r){const e=new IntersectionObserver((n=>{for(const c of n)c.isIntersecting&&(O(t,o[c.target.dataset.index]),e.unobserve(c.target))}));for(const t of o)e.observe(t.u)}},O=(e,o)=>{const n=e=>{o.h.style.backgroundImage=`url('${e}')`;const t=new Image;t.onload=()=>I(o.h,'loaded'),t.src=e};if($(o.i))''!==o.i&&n(o.i);else if(g(e))e(o.t,(e=>n(e)));else if($(e)){const c=e.replace(t,o.t);n(c)}},j=(e,o)=>{if(e._)return;if(e._=!0,e.v){const t=e.p.cloneNode(!0);e.v.replaceWith(t),e.v=t}const n=o.iframe;if(g(o.onAccept))return void o.onAccept(e.u,(t=>{if(!(t instanceof HTMLIFrameElement))return!1;k(t,n),k(t,e.I),e.P=t,e._=!0,I(e.u,i),(!e.T||e.S)&&I(e.u,s)}));e.P=S('iframe');const c=o.iframe,r=e.l||c&&c.params;let a=(o.embedUrl||'').replace(t,e.t);e.o&&(e.P.title=e.o),r&&$(r)&&(a+='?'===r.slice(0,1)?r:`?${r}`),e.P.onload=()=>{I(e.u,i),e.P.onload=void 0,g(n&&n.onload)&&n.onload(e.t,e.P)},k(e.P,n),k(e.P,e.I),e.P.src=a,P(e.m,e.P)},C=(e,t,o)=>{_.includes(t)||e.setAttribute(t,o)},L=e=>{I(e.u,c),e.$=!1},N=e=>{e.u.classList.remove(c,i,s),e.$=!0},A=e=>(e=a.cookie.match(`(^|;)\\s*${e}\\s*=\\s*([^;]+)`))?e.pop():'',F=(t,o,n)=>{const i=u[t],s=o.languages;i.forEach((i=>{if(!i.g&&s){const r=s[p],l=r&&r.loadBtn,f=r&&r.notice,d=r&&r.loadAllBtn,u=a.createElement('div'),m=T(),v=T(),h=T(),b=T();y(u,'cll'),i.m=u;const _=()=>{L(i),j(i,o)};if(l){const t=x();t.textContent=l,y(t,'c-l-b'),t.addEventListener(e,_),P(b,t)}if(d){const o=x();o.textContent=d,y(o,l?'c-la-b':'c-l-b'),o.addEventListener(e,(()=>{_(),w=e,q.acceptService(t)})),P(b,o)}const g=T(),D=T(),k=T(),E=T(),M=T();y(g,'cc-text'),y(E,'c-bg-i'),i.h=E,y(k,'c-ld'),$(i.i)&&''===i.i||y(D,'c-bg');const O=i.o,C=a.createDocumentFragment();if(O){const e=S('span');y(e,'c-tl'),e.insertAdjacentHTML('beforeend',O),P(C,e)}P(g,C),m&&g.insertAdjacentHTML('beforeend',f||''),P(v,g),y(M,'c-t-cn'),y(v,'c-n-t'),y(h,'c-n-c'),y(m,'c-nt'),y(b,'c-n-a'),P(M,v),(l||d)&&P(M,b),P(h,M),P(m,h),P(D,E),P(u,m),(o.thumbnailUrl||i.i)&&P(u,D),P(u,k),n&&I(i.u,c),i.u.prepend(u),i.g=!0,setTimeout((()=>I(i.u,'c-an')),20)}}))},G=(e,t)=>{const o=u[e];o.forEach((n=>{n._||((e,n)=>{m[n]||(m[n]=new IntersectionObserver((e=>{if(v[n])m[n].disconnect();else for(let c=0;c<e.length;++c)e[c].isIntersecting&&(c=>{const i=e[c].target,s=i.dataset.index;j(o[s],t),setTimeout((()=>{L(o[s])}),50*c),m[n].unobserve(i)})(c)}))),m[n].observe(e)})(n.u,e)}))},H=(e,t)=>e in t?e:D(t).length>0?p in t?p:D(t)[0]:void 0,J=(e,t)=>{const{cookie:o}=t;A(o.name)||(e=>{const{hostname:t,protocol:o}=location,n=e.name,c=new Date,i=e.path||'/',s=864e5*(e.expiration||182),r=e.sameSite||'Lax',l=e.domain||t;c.setTime(c.getTime()+s);let f=n+'=1'+(0!==s?`; Expires=${c.toUTCString()}`:'')+`; Path=${i}`+`; SameSite=${r}`;l.indexOf('.')>-1&&(f+=`; Domain=${l}`),'https:'===o&&(f+='; Secure'),a.cookie=f})(o),G(e,t)},V=(e,t)=>{const{cookie:o}=t;A(o.name)&&(e=>{const t=e.name,o=e.path||'/',n=e.domain||location.hostname;a.cookie=`${t}=; Path=${o}; Domain=${n}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`})(o),((e,t)=>{const o=u[e];for(let e=0;e<o.length;e++)(e=>{var n;o[e]._&&(g(t.onReject)?(t.onReject(o[e].P,o[e].u,(()=>N(o[e]))),o[e]._=!1):((n=o[e]).P&&n.P.remove(),n._=!1)),N(o[e])})(e)})(e,t)},W=(e,t,o)=>{g(d)&&d({eventSource:{type:w,service:e,action:t},changedServices:o})},q={acceptService:e=>{const t=[];if('all'===e){for(const e of f)v[e]=!1,b.get(e)||(b.set(e,!0),J(e,h[e]),t.push(e));t.length>0&&W(e,o,t)}else f.includes(e)&&(v[e]=!1,b.get(e)||(b.set(e,!0),J(e,h[e]),t.push(e),W(e,o,t)));w='api'},rejectService:e=>{const t=[];if('all'===e){for(const e of f)v[e]=!0,V(e,h[e]),b.get(e)&&(b.set(e,!1),t.push(e));t.length>0&&W(e,n,t)}else f.includes(e)&&(v[e]=!0,V(e,h[e]),b.get(e)&&(b.set(e,!1),t.push(e),W(e,n,t)))},childExists:async({parent:e=r,childProperty:t,childSelector:o='iframe',timeout:n=1e3,maxTimeout:c=15e3})=>{let i=1;const s=t?()=>e[t]:()=>e.querySelector(o);return new Promise((e=>{const t=()=>{if(s()||i++*n>c)return e(void 0!==s());setTimeout(t,n)};t()}))},getState:()=>({services:new Map(b),acceptedServices:[...b].filter((([e,t])=>!!t)).map((([e])=>e))}),getConfig:()=>l,run:e=>{if(a=document,r=window,l=e,h=l.services,d=l.onChange,f=D(h),0===f.length)return;p=l.currLang;const t=h[f[0]].languages;!0===l.autoLang?p=H(navigator.language.slice(0,2).toLowerCase(),t):$(l.currLang)&&(p=H(l.currLang,t));for(const e of f){const t=h[e],o=t.cookie=t.cookie||{},n=o.name=o.name||`im_${e}`,c=A(n);b.set(e,!!c),u[e]=[];const i=a.querySelectorAll(`div[data-service="${e}"]`),s=i.length;if(0!==s){for(let t=0;t<s;t++)i[t].dataset.index=t,u[e].push(E(i[t]));c?(F(e,t,!0),G(e,t)):F(e,t,!1),M(e,t.thumbnailUrl)}}}},z='iframemanager';'undefined'==typeof window||g(window[z])||(window[z]=()=>q)})();