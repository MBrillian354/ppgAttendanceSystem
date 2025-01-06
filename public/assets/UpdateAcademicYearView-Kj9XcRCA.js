import{r as s,a as v,u as Y,j as a,L as f}from"./index-D_ufnm_m.js";import{u as A}from"./http-hook-Bu37qFrk.js";import{D as S}from"./DynamicForm-tTOpBJS-.js";import{E as w}from"./ErrorCard-BcVIfwSZ.js";import{M as T}from"./ModalBottomClose-R6qTd47U.js";import"./iconify-icon-C1YYA-Pd.js";const O=()=>{const[e,l]=s.useState({title:"",message:"",onConfirm:null}),[x,i]=s.useState(!1),{isLoading:t,error:o,sendRequest:r,setError:g}=A(),[y,$]=s.useState(!1),[c,h]=s.useState(),m=v().academicYearId,j=Y();s.useEffect(()=>{(async()=>{try{const n=await r(`https://ppgacademicsystem-production.up.railway.app/api/academicYears/${m}`);h(n.academicYear)}catch{}})()},[r]);const b=async d=>{console.log("Updating ... ");const n=`https://ppgacademicsystem-production.up.railway.app/api/academicYears/${m}`,p=JSON.stringify({name:d.name});console.log(p);let u;try{u=await r(n,"PATCH",p,{"Content-Type":"application/json"})}catch(N){l({title:"Gagal!",message:N.message,onConfirm:null}),i(!0)}l({title:"Berhasil!",message:u.message,onConfirm:null}),i(!0)},C=()=>a.jsxs("div",{className:"flex gap-2 items-center",children:[a.jsx("button",{onClick:()=>{i(!1),!o&&j(-1)},className:`${e.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:e.onConfirm?"Batal":"Tutup"}),e.onConfirm&&a.jsx("button",{onClick:e.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return a.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[a.jsxs(T,{isOpen:x,onClose:()=>i(!1),title:e.title,footer:a.jsx(C,{}),children:[t&&a.jsx("div",{className:"flex justify-center mt-16",children:a.jsx(f,{size:32})}),!t&&e.message]}),a.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${y?"opacity-0":"opacity-100"}`,children:[o&&a.jsx("div",{className:"px-2",children:a.jsx(w,{error:o,onClear:()=>g(null)})}),a.jsx(S,{title:"Aktifkan Tahun Ajaran",subtitle:"Sistem Akademik Digital",fields:[{name:"name",label:"Nama Tahun Ajaran",type:"text",required:!1,value:(c==null?void 0:c.name)||""}],onSubmit:b,disabled:t,reset:!1,footer:!1,button:a.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:a.jsx("button",{type:"submit",className:`button-primary ${t?"opacity-50 cursor-not-allowed":""}`,disabled:t,children:t?a.jsx(f,{children:"Processing..."}):"Update"})})})]})]})};export{O as default};