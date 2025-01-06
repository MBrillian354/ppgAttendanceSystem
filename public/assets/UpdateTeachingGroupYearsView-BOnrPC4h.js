import{r as n,a as v,u as S,j as e,L as p}from"./index-DjI7ZG_S.js";import{u as T}from"./http-hook-D44mLOTF.js";import{D as A}from"./DynamicForm-D8f1P9ga.js";import{E as k}from"./ErrorCard-Drp33CnV.js";import{M as E}from"./ModalBottomClose-De-hj65x.js";import"./iconify-icon-C1YYA-Pd.js";const O=()=>{const[s,m]=n.useState({title:"",message:"",onConfirm:null}),[f,r]=n.useState(!1),{isLoading:a,error:i,sendRequest:l,setError:g}=T(),[h,I]=n.useState(!1),[t,x]=n.useState(),j=v().teachingGroupYearId,b=S();n.useEffect(()=>{(async()=>{try{const o=await l(`http://localhost:5000/api/teachingGroupYears/${j}`);x(o.teachingGroupYear)}catch{}})()},[l]);const y=async c=>{console.log("Updating ... ");const o="http://localhost:5000/api/teachingGroupYears/activate",u=JSON.stringify({teachingGroupYearId:t._id,semesterTarget:c.semesterTarget});console.log(u);let d;try{d=await l(o,"PATCH",u,{"Content-Type":"application/json"})}catch(N){m({title:"Gagal!",message:N.message,onConfirm:null}),r(!0)}m({title:"Berhasil!",message:d.message,onConfirm:null}),r(!0)},C=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{r(!1),!i&&b(-1)},className:`${s.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:s.onConfirm?"Batal":"Tutup"}),s.onConfirm&&e.jsx("button",{onClick:s.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return e.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[e.jsxs(E,{isOpen:f,onClose:()=>r(!1),title:s.title,footer:e.jsx(C,{}),children:[a&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(p,{size:32})}),!a&&s.message]}),e.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${h?"opacity-0":"opacity-100"}`,children:[i&&e.jsx("div",{className:"px-2",children:e.jsx(k,{error:i,onClear:()=>g(null)})}),e.jsx(A,{title:"Aktifkan Tahun Ajaran",subtitle:t==null?void 0:t.name,fields:[{name:"name",label:"Nama Tahun Ajaran",type:"text",required:!1,disabled:!0,value:(t==null?void 0:t.name)||""},{name:"semesterTarget",label:"Target Pertemuan Selama 1 Semester",type:"number",required:!0,value:(t==null?void 0:t.semesterTarget)||""}],onSubmit:y,disabled:a,reset:!1,footer:!1,button:e.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:e.jsx("button",{type:"submit",className:`button-primary ${a?"opacity-50 cursor-not-allowed":""}`,disabled:a,children:a?e.jsx(p,{children:"Processing..."}):"Aktifkan"})})})]})]})};export{O as default};