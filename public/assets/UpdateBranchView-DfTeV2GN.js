import{r,a as N,u as v,j as e,L as m}from"./index-DjI7ZG_S.js";import{u as S}from"./http-hook-D44mLOTF.js";import{D as $}from"./DynamicForm-D8f1P9ga.js";import{E as D}from"./ErrorCard-Drp33CnV.js";import{M as E}from"./ModalBottomClose-De-hj65x.js";import"./iconify-icon-C1YYA-Pd.js";const q=()=>{const[a,f]=r.useState({title:"",message:"",onConfirm:null}),[h,o]=r.useState(!1),{isLoading:s,error:i,sendRequest:l,setError:x}=S(),[b,P]=r.useState(!1),[t,j]=r.useState(),d=N().branchId,y=v();r.useEffect(()=>{(async()=>{try{const n=await l(`http://localhost:5000/api/levels/branches/${d}`);j(n.branch),console.log(n),console.log(n.branch)}catch{}})()},[l]);const g=async c=>{const n=`http://localhost:5000/api/levels/branches/sub-branches/${d}`,u=JSON.stringify({name:c.name,address:c.address});console.log(u);let p;try{p=await l(n,"PATCH",u,{"Content-Type":"application/json"})}catch{}f({title:"Berhasil!",message:p.message,onConfirm:null}),o(!0)},C=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{o(!1),!i&&y(-1)},className:`${a.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:a.onConfirm?"Batal":"Tutup"}),a.onConfirm&&e.jsx("button",{onClick:a.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return e.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[!t&&s&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(m,{size:32})}),e.jsxs(E,{isOpen:h,onClose:()=>o(!1),title:a.title,footer:e.jsx(C,{}),children:[s&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(m,{size:32})}),!s&&a.message]}),e.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${b?"opacity-0":"opacity-100"}`,children:[i&&e.jsx(D,{error:i,onClear:()=>x(null)}),e.jsx($,{title:"Update Data PC",subtitle:"Sistem Akademik Digital",fields:[{name:"name",label:"Nama PC",placeholder:"Nama PC",type:"text",required:!0,value:(t==null?void 0:t.name)||""},{name:"address",label:"Alamat",type:"textarea",required:!0,value:(t==null?void 0:t.address)||""}],onSubmit:g,disabled:s,reset:!1,footer:!1,button:e.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:e.jsx("button",{type:"submit",className:`button-primary ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,children:s?e.jsx(m,{children:"Processing..."}):"Update"})})})]})]})};export{q as default};
