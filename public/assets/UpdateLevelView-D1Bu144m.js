import{r as n,a as N,u as v,j as e,L as m}from"./index-DjI7ZG_S.js";import{u as S}from"./http-hook-D44mLOTF.js";import{D as k}from"./DynamicForm-D8f1P9ga.js";import{E as T}from"./ErrorCard-Drp33CnV.js";import{M as $}from"./ModalBottomClose-De-hj65x.js";import"./iconify-icon-C1YYA-Pd.js";const O=()=>{const[a,f]=n.useState({title:"",message:"",onConfirm:null}),[h,r]=n.useState(!1),{isLoading:s,error:i,sendRequest:l,setError:x}=S(),[g,D]=n.useState(!1),[t,b]=n.useState(),u=N().teachingGroupId,j=v();n.useEffect(()=>{(async()=>{try{const o=await l(`http://localhost:5000/api/levels/branches/sub-branches/${u}`);b(o.teachingGroup),console.log(o),console.log(o.teachingGroup)}catch{}})()},[l]);const y=async c=>{const o=`http://localhost:5000/api/levels/branches/sub-branches/${u}`,d=JSON.stringify({name:c.name,address:c.address});console.log(d);let p;try{p=await l(o,"PATCH",d,{"Content-Type":"application/json"})}catch{}f({title:"Berhasil!",message:p.message,onConfirm:null}),r(!0)},C=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{r(!1),!i&&j(-1)},className:`${a.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:a.onConfirm?"Batal":"Tutup"}),a.onConfirm&&e.jsx("button",{onClick:a.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return e.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[!t&&s&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(m,{size:32})}),e.jsxs($,{isOpen:h,onClose:()=>r(!1),title:a.title,footer:e.jsx(C,{}),children:[s&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(m,{size:32})}),!s&&a.message]}),e.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${g?"opacity-0":"opacity-100"}`,children:[i&&e.jsx(T,{error:i,onClear:()=>x(null)}),e.jsx(k,{title:"Update Data Kelompok Ajar",subtitle:"Sistem Akademik Digital",fields:[{name:"name",label:"Nama Kelompok Ajar",placeholder:"Nama Lengkap",type:"text",required:!0,value:(t==null?void 0:t.name)||""},{name:"address",label:"Alamat",type:"textarea",required:!0,value:(t==null?void 0:t.address)||""}],onSubmit:y,disabled:s,reset:!1,footer:!1,button:e.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:e.jsx("button",{type:"submit",className:`button-primary ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,children:s?e.jsx(m,{children:"Processing..."}):"Update"})})})]})]})};export{O as default};