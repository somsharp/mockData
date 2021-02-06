import{g as o,c as n}from"./p-62d15a4b.js";import{OVERLAY_BACK_BUTTON_PRIORITY as t}from"./p-f3a0c163.js";let e=0;const a=new WeakMap,s=o=>({create:n=>d(o,n),dismiss:(n,t,e)=>m(document,n,t,o,e),getTop:async()=>f(document,o)}),i=s("ion-alert"),r=s("ion-action-sheet"),c=s("ion-picker"),u=s("ion-popover"),p=o=>{const n=document;l(n);const t=e++;o.overlayIndex=t,o.hasAttribute("id")||(o.id="ion-overlay-"+t)},d=(o,n)=>customElements.whenDefined(o).then(()=>{const t=document,e=t.createElement(o);return e.classList.add("overlay-hidden"),Object.assign(e,n),h(t).appendChild(e),e.componentOnReady()}),l=o=>{0===e&&(e=1,o.addEventListener("focusin",n=>{const t=f(o);if(t&&t.backdropDismiss&&!j(t,n.target)){const o=t.querySelector("input,button");o&&o.focus()}}),o.addEventListener("ionBackButton",n=>{const e=f(o);e&&e.backdropDismiss&&n.detail.register(t,()=>e.dismiss(void 0,E))}),o.addEventListener("keyup",n=>{if("Escape"===n.key){const n=f(o);n&&n.backdropDismiss&&n.dismiss(void 0,E)}}))},m=(o,n,t,e,a)=>{const s=f(o,e,a);return s?s.dismiss(n,t):Promise.reject("overlay does not exist")},f=(o,n,t)=>{const e=((o,n)=>(void 0===n&&(n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(o.querySelectorAll(n)).filter(o=>o.overlayIndex>0)))(o,n);return void 0===t?e[e.length-1]:e.find(o=>o.id===t)},y=async(t,e,a,s,i)=>{if(t.presented)return;t.presented=!0,t.willPresent.emit();const r=o(t),c=t.enterAnimation?t.enterAnimation:n.get(e,"ios"===r?a:s);await k(t,c,t.el,i)&&t.didPresent.emit(),t.keyboardClose&&t.el.focus()},v=async(t,e,s,i,r,c,u)=>{if(!t.presented)return!1;t.presented=!1;try{t.el.style.setProperty("pointer-events","none"),t.willDismiss.emit({data:e,role:s});const p=o(t),d=t.leaveAnimation?t.leaveAnimation:n.get(i,"ios"===p?r:c);"gesture"!==s&&await k(t,d,t.el,u),t.didDismiss.emit({data:e,role:s}),a.delete(t)}catch(p){console.error(p)}return t.el.remove(),!0},h=o=>o.querySelector("ion-app")||o.body,k=async(o,t,e,s)=>{e.classList.remove("overlay-hidden");const i=t(e.shadowRoot||o.el,s);o.animated&&n.getBoolean("animated",!0)||i.duration(0),o.keyboardClose&&i.beforeAddWrite(()=>{const o=e.ownerDocument.activeElement;o&&o.matches("input, ion-input, ion-textarea")&&o.blur()});const r=a.get(o)||[];return a.set(o,[...r,i]),await i.play(),!0},b=(o,n)=>{let t;const e=new Promise(o=>t=o);return g(o,n,o=>{t(o.detail)}),e},g=(o,n,t)=>{const e=a=>{o.removeEventListener(n,e),t(a)};o.addEventListener(n,e)},w=o=>"cancel"===o||o===E,j=(o,n)=>{for(;n;){if(n===o)return!0;n=n.parentElement}return!1},x=o=>o(),B=(o,t)=>{if("function"==typeof o)return n.get("_zoneGate",x)(()=>{try{return o(t)}catch(n){console.error(n)}})},E="backdrop";export{E as B,y as a,c as b,a as c,v as d,b as e,u as f,r as g,i as h,w as i,p,B as s}