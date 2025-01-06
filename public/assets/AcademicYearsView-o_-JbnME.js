import{r as l,u as $,j as e,L as b,b as v}from"./index-D_ufnm_m.js";import{u as Y}from"./http-hook-Bu37qFrk.js";import{M as D}from"./ModalBottomClose-R6qTd47U.js";import{P as T}from"./plus-CbNxCR3Z.js";import{C as E}from"./chevron-down-BnWxrOwq.js";import"./createLucideIcon-BhK4CwgT.js";const f=i=>{const d=i.substring(0,4),s=i.substring(4);return`${d}/${parseInt(d)+1} ${s==="1"?"Ganjil":"Genap"}`},K=()=>{const[i,d]=l.useState({}),[s,m]=l.useState({title:"",message:"",onConfirm:null}),[y,r]=l.useState(!1),[o,h]=l.useState(),{isLoading:p,sendRequest:n}=Y(),N=$();l.useEffect(()=>{(async()=>{try{const t=await n("https://ppgacademicsystem-production.up.railway.app/api/academicYears?populate=teachingGroupYears");h(t)}catch{}})()},[n]);const w=a=>{d(t=>({...t,[a]:!t[a]}))},C=(a,t)=>g=>{g.stopPropagation(),console.log(t);const u=async()=>{const j=`https://ppgacademicsystem-production.up.railway.app/api/academicYears/activate/${t}`;try{const c=await n(j,"POST",null,{"Content-Type":"application/json"});m({title:"Berhasil!",message:c.message,onConfirm:null});const x=await n("https://ppgacademicsystem-production.up.railway.app/api/academicYears?populate=teachingGroupYears");h(x)}catch{}};m({title:"Konfirmasi Aktivasi",message:`Aktivasi tahun ajaran ${f(a)}?`,onConfirm:u}),r(!0)},A=(a,t)=>{console.log(a);const g=async()=>{r(!1);const u=`https://ppgacademicsystem-production.up.railway.app/api/academicYears/${t}`;console.log(u);const j=JSON.stringify({academicYearId:t});let c;try{c=await n(u,"DELETE",j,{"Content-Type":"application/json"}),r(!0),m({title:"Berhasil!",message:c.message,onConfirm:null});const x=await n("https://ppgacademicsystem-production.up.railway.app/api/academicYears?populate=teachingGroupYears");h(x)}catch{}};m({title:"Konfirmasi Penghapusan",message:`Hapus Tahun Ajaran: ${f(a)}?`,onConfirm:g}),r(!0)},k=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>r(!1),className:`${s.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:s.onConfirm?"Batal":"Tutup"}),s.onConfirm&&e.jsx("button",{onClick:s.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return e.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs(D,{isOpen:y,onClose:()=>r(!1),title:s.title,footer:e.jsx(k,{}),children:[p&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(b,{size:32})}),!p&&s.message]}),e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:"Daftar Tahun Ajaran"}),e.jsx(v,{to:"/settings/academic/new",children:e.jsxs("button",{className:"inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200",children:[e.jsx(T,{className:"w-4 h-4 mr-2"}),"Tambah"]})})]}),(!o||p)&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(b,{size:32})}),o&&!p&&e.jsxs(e.Fragment,{children:[o.academicYears.length===0&&e.jsx("div",{className:"bg-white rounded-md shadow-md p-6 border border-gray-200",children:e.jsxs("p",{className:"text-gray-700 text-center",children:["Belum ada tahun ajaran. ",e.jsx(v,{to:"/settings/academic/new",className:"text-blue-500 hover:underline",children:"Buat baru"})]})}),o.academicYears.length>0&&e.jsx("div",{className:"flex flex-col items-stretch gap-4",children:o.academicYears.map(a=>e.jsxs("div",{className:`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300
                  ${a.isActive?"border-2 border-green-400 ring-2 ring-green-100":"border border-gray-200"}`,children:[e.jsxs("div",{onClick:()=>w(a._id),className:"cursor-pointer p-6 hover:bg-gray-50 transition-colors duration-200",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("h2",{className:"text-xl font-medium text-gray-800",children:f(a.name)}),e.jsx(E,{className:`w-5 h-5 text-gray-500 transition-transform duration-200
                        ${i[a._id]?"transform rotate-180":""}`})]}),e.jsx("div",{className:"flex justify-between items-center text-gray-600",children:e.jsxs("span",{children:[a.teachingGroupYears.length," Kelompok Ajar terdaftar"]})}),a.isActive===!0?e.jsx("div",{className:"inline-block mt-2 px-2 py-1 text-sm text-green-600 bg-green-100 rounded",children:"Active"}):e.jsx("button",{className:"btn-primary-outline mt-2",onClick:C(a.name,a._id),children:"Aktifkan"})]}),e.jsx("div",{className:`overflow-hidden transition-all duration-300
                    ${i[a._id]?"max-h-96":"max-h-0"}`,children:e.jsxs("div",{className:"px-6 pb-6 bg-gray-50 border-t border-gray-200",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2 mt-4",children:"Kelompok Ajar terdaftar:"}),a.teachingGroupYears.length>0?e.jsx("ul",{className:"space-y-2",children:a.teachingGroupYears.map(t=>e.jsx("li",{className:"text-gray-700 bg-white p-3 rounded border border-gray-200 hover:border-gray-300 transition-colors duration-200",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{children:[t.teachingGroupId.name," "]}),e.jsx("div",{className:`p-1 border rounded-md border-gray-300 italic ${t.isActive?"text-green-400 border-green-400":"text-red-400 border-red-400"}`,children:t.isActive?"Aktif":"Nonaktif"})]})},t._id))}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-gray-400 italic",children:"Belum ada Kelompok Ajar yang mendaftarkan diri"}),e.jsxs("div",{className:"mt-4 flex justify-end",children:[e.jsx("button",{onClick:()=>N(`/settings/academic/${a._id}`),className:"px-2 italic text-gray-500 hover:underline hover:text-blue-500 hover:cursor-pointer",children:"Edit Tahun Ajaran"}),e.jsx("button",{onClick:()=>A(a.name,a.id),className:"px-2 italic text-gray-500 hover:underline hover:text-red-500 hover:cursor-pointer",children:"Hapus Tahun Ajaran"})]})]})]})})]},a._id))})]})]})})};export{K as default};