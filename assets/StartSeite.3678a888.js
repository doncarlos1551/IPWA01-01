import{Q as p}from"./QBtn.eb01d7ac.js";import{_ as f,d as g,l as k,r as m,G as w,H as S,a as C,o as a,c as l,i as s,t as I,e as _,f as h,h as v,w as b,p as P,j as B}from"./index.277ccc74.js";import"./QSpinner.8cf27966.js";const N=g({name:"StartSeite",setup(){const e=k(()=>{const i=new Date().getHours();return i<12?"Guten Morgen!":i<18?"Guten Tag!":"Guten Abend!"}),t=m(1);let o;function r(){t.value=t.value%3+1}function c(){o=setInterval(r,3e3)}function u(){clearInterval(o),c()}function d(){u(),t.value===1?t.value=3:t.value-=1}return w(c),S(()=>clearInterval(o)),{aktivesPanel:t,vorherigesPanel:d,naechstesPanel:r,stopUndResetInterval:u,tageszeitBegruessung:e}}}),n=e=>(P("data-v-f1c8f1ac"),e=e(),B(),e),$={class:"startseite"},y=n(()=>s("p",null,"Willkommen auf unserer Webseite! Sch\xF6n, dass Sie sich f\xFCr CO2 Interessieren.",-1)),U={key:0,class:"drei-folien-wechsler__panel"},G=n(()=>s("h2",null,"CO2 und Zukunft",-1)),O=n(()=>s("p",null," CO2 ist schlecht. Lesen Sie auf dieser Webseite nach wieso CO2 schlecht ist... ",-1)),V=[G,O],W={key:1,class:"drei-folien-wechsler__panel"},H=n(()=>s("h2",null,"Nachhaltigkeit",-1)),z={key:2,class:"drei-folien-wechsler__panel"},D=n(()=>s("h2",null,"Umweltbewusstsein",-1)),F=n(()=>s("p",null,"Umweltbewusstsein ist auch gut. Bitte sein Sie umweltbewusst.",-1)),L=[D,F];function M(e,t,o,r,c,u){const d=C("router-link");return a(),l("div",$,[s("h1",null,I(e.tageszeitBegruessung),1),y,s("div",{class:"startseite__drei-folien-wechsler",onClick:t[2]||(t[2]=i=>e.stopUndResetInterval())},[_(p,{round:"",class:"drei-folien-wechsler__button",icon:"chevron_left",onClick:t[0]||(t[0]=i=>e.vorherigesPanel())}),e.aktivesPanel===1?(a(),l("div",U,V)):h("",!0),e.aktivesPanel===2?(a(),l("div",W,[H,s("p",null,[v(" Nachhaltigkeit ist gut. Lesen Sie auf dieser Webseite nach wieso Nachhaltigkeit gut ist... "),_(d,{to:"/nachhaltigkeit"},{default:b(()=>[v("Klicke Hier")]),_:1})])])):h("",!0),e.aktivesPanel===3?(a(),l("div",z,L)):h("",!0),_(p,{round:"",class:"drei-folien-wechsler__button",icon:"chevron_right",onClick:t[1]||(t[1]=i=>e.naechstesPanel())})])])}var j=f(N,[["render",M],["__scopeId","data-v-f1c8f1ac"]]);export{j as default};
