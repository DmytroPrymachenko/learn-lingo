import{r as s,j as e,I as j}from"./index-Dg7Zs4yP.js";import{g as L,q as m,r as T,o as g,S as E,T as F,a as S,b as p}from"./TeachersFilterMobale-B7_79U5l.js";const v=()=>{const[t,c]=s.useState(null),[r,n]=s.useState(null),[d,l]=s.useState(null),[u,h]=s.useState(window.innerWidth),[f,i]=s.useState(!1);s.useEffect(()=>{const a=()=>{h(window.innerWidth)};return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]);const o=L();return s.useEffect(()=>{i(!0);const a=m(T(o,"teachers"));g(a,w=>{const x=w.val();c(x),i(!1)})},[o]),s.useEffect(()=>{t&&l(r||t)},[r,t]),e.jsxs(e.Fragment,{children:[f&&e.jsx(e.Fragment,{children:e.jsx(j,{})}),e.jsxs(E,{children:[u<768?e.jsx(F,{data:t,setTeachersFilter:n}):e.jsx(S,{data:t,setTeachersFilter:n}),e.jsx(p,{dataList:d})]})]})};export{v as default};