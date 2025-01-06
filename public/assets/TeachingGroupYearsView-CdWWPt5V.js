import{r as m,A as E,u as S,j as e,b as C,L as k}from"./index-DjI7ZG_S.js";import{u as H}from"./http-hook-D44mLOTF.js";import{M as P}from"./ModalBottomClose-De-hj65x.js";import{E as K}from"./ErrorCard-Drp33CnV.js";import{P as L}from"./plus-vkBv9P5N.js";import{T as R}from"./trash-Bt4ltbqE.js";import"./createLucideIcon-CnKyH5OX.js";const q=()=>{const[c,n]=m.useState({title:"",message:"",onConfirm:null}),[w,h]=m.useState(!1),[b,Y]=m.useState(null),[u,x]=m.useState(),{isLoading:f,error:N,sendRequest:o,setError:G}=H(),r=m.useContext(E),j=S();m.useEffect(()=>{(async()=>{try{const s=await o(`http://localhost:5000/api/teachingGroupYears/teachingGroup/${r.userTeachingGroupId}`);x(s)}catch{}})()},[o]);const v=a=>{const s=a.substring(0,4),t=a.substring(4);return`${s}/${parseInt(s)+1} ${t==="1"?"Ganjil":"Genap"}`},y=a=>{Y(b===a?null:a)},T=a=>s=>{s.stopPropagation(),console.log(a),j(`/settings/academic/${a}`)},$=(a,s,t)=>{a.stopPropagation();const p=async()=>{const d="http://localhost:5000/api/teachingGroupYears/deactivate",g=JSON.stringify({teachingGroupYearId:t});let l;try{l=await o(d,"PATCH",g,{"Content-Type":"application/json"}),n({title:"Berhasil!",message:l.message,onConfirm:null});const i=await o(`http://localhost:5000/api/teachingGroupYears/teachingGroup/${r.userTeachingGroupId}`);x(i)}catch(i){n({title:"Gagal!",message:i.message,onConfirm:null})}};n({title:"Konfirmasi",message:`Nonaktifkan tahun ajaran ${v(s)}?`,onConfirm:p}),h(!0)},A=(a,s,t)=>{a.stopPropagation(),console.log(t);const p=async()=>{const d="http://localhost:5000/api/teachingGroupYears/",g=JSON.stringify({teachingGroupYearId:t});let l;try{l=await o(d,"DELETE",g,{"Content-Type":"application/json"}),n({title:"Berhasil!",message:l.message,onConfirm:null});const i=await o(`http://localhost:5000/api/teachingGroupYears/teachingGroup/${r.userTeachingGroupId}`);x(i)}catch(i){n({title:"Gagal!",message:i.message,onConfirm:null})}};n({title:"Konfirmasi Penghapusan",message:`Hapus tahun ajaran ${v(s)}?`,onConfirm:p}),h(!0)},I=(a,s,t)=>{a.stopPropagation(),console.log(t);const p=async()=>{const d="http://localhost:5000/api/classes/";console.log(d);const g=JSON.stringify({classId:t});let l;try{l=await o(d,"DELETE",g,{"Content-Type":"application/json"}),n({title:"Berhasil!",message:l.message,onConfirm:null});const i=await o(`http://localhost:5000/api/teachingGroupYears/teachingGroup/${r.userTeachingGroupId}`);x(i)}catch(i){n({title:"Gagal!",message:i.message,onConfirm:null})}};n({title:"Konfirmasi Penghapusan",message:`Hapus Kelas: ${s}?`,onConfirm:p}),h(!0)},D=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>h(!1),className:`${c.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:c.onConfirm?"Batal":"Tutup"}),c.onConfirm&&e.jsx("button",{onClick:c.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return e.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8",children:e.jsxs("main",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:"Daftar Tahun Ajaran"}),r.userRole==="admin ka"&&e.jsx(C,{to:"/settings/academic/new",children:e.jsxs("button",{className:"button-primary pl-[11px]",children:[e.jsx(L,{className:"w-4 h-4 mr-2"}),"Daftar"]})})]}),e.jsxs(P,{isOpen:w,onClose:()=>h(!1),title:c.title,footer:e.jsx(D,{}),children:[f&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(k,{size:32})}),!f&&c.message]}),(!u||f)&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(k,{size:32})}),N&&e.jsx(K,{error:N,onClear:()=>G(null)}),u&&!f&&e.jsxs(e.Fragment,{children:[u.teachingGroupYears.length===0&&e.jsx("div",{className:"bg-white rounded-md shadow-md p-6 border border-gray-200",children:e.jsx("p",{className:"text-gray-700 text-center",children:"Belum ada tahun ajaran terdaftar."})}),u.teachingGroupYears.length>0&&e.jsx("div",{className:"flex flex-col items-stretch gap-4",children:u.teachingGroupYears.map(a=>e.jsxs("div",{className:`bg-white rounded-md shadow-md overflow-hidden transition-all duration-200
                  ${a.academicYearId.isActive===!0,""}`,children:[e.jsxs("div",{onClick:()=>y(a._id),className:"p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200",children:[e.jsxs("div",{className:"flex md:justify-between items-start md:flex-row flex-col md:items-center",children:[e.jsxs("div",{className:"flex gap-2 flex-row flex-wrap",children:[e.jsx("h2",{className:"text-xl font-medium text-gray-800",children:v(a.academicYearId.name)}),a.academicYearId.isActive&&e.jsxs("div",{className:"inline-block px-2 py-1 text-sm text-blue-600 bg-blue-100 rounded",children:[a.academicYearId.isActive,"Semester Berjalan"]}),e.jsx("div",{className:`inline-block px-2 py-1 text-sm ${a.isActive?"text-green-600 bg-green-100":a.academicYearId.isActive?"text-red-600 bg-red-100":"text-gray-600 bg-gray-100"} rounded`,children:a.isActive?"Aktif":a.academicYearId.isActive?"Nonaktif":"Semester Lewat"})]}),e.jsx("div",{className:" flex items-center gap-2",children:a.academicYearId.isActive&&!a.isActive?e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:()=>j("/settings/academic/classes/new",{state:a.id}),className:"btn-primary-outline m-0 text-gray-700 md:mt-0 mt-6",children:"Tambah Kelas"}),r.userRole==="admin ka"&&e.jsx("div",{onClick:T(a._id),className:"btn-primary-outline m-0 text-gray-700",children:"Aktifkan"}),r.userRole==="admin ka"&&e.jsx("button",{onClick:s=>A(s,a.academicYearId.name,a._id),className:"p-3 rounded-full text-gray-400 hover:bg-gray-200 hover:text-red-500 transition",children:e.jsx(R,{size:20})})]}):r.userRole==="admin ka"&&a.isActive&&e.jsx("div",{onClick:s=>$(s,a.academicYearId.name,a._id),className:"btn-danger-outline m-0 text-gray-700 md:mt-0 mt-6",children:"Nonaktifkan"})})]}),e.jsxs("div",{className:"mt-2 text-gray-700",children:["Jumlah Kelas: ",a.classes.length]}),e.jsxs("div",{className:"mt-2 text-gray-700",children:["Target Semester: ",a.semesterTarget?a.semesterTarget:"Nonaktif"]})]}),e.jsx("div",{className:`overflow-hidden transition-all duration-300 ${b===a._id?"max-h-96":"max-h-0"}`,children:e.jsx("div",{className:"border-t",children:a.classes.length>0?e.jsx("ul",{className:"",children:a.classes.map(s=>e.jsxs("li",{className:"flex justify-start",children:[e.jsx(C,{to:`/dashboard/classes/${s.id}`,className:"grow",children:e.jsx("div",{className:"p-4 border-t text-gray-700 border-gray-200 bg-white hover:bg-gray-100 hover:cursor-pointer",children:s.name})}),r.userRole==="admin ka"&&a.academicYearId.isActive&&!a.isActive&&e.jsx("button",{onClick:t=>I(t,s.name,s.id),className:"border-t px-4 italic text-gray-500 hover:underline hover:text-red-500 hover:cursor-pointer",children:"Hapus Kelas"})]},s._id))}):e.jsxs("p",{className:"p-4 text-gray-500 italic",children:["Tidak ada riwayat kelas.",a.academicYearId.isActive&&e.jsx("span",{onClick:()=>j("/settings/academic/classes/new",{state:a.id}),className:"text-gray-800 hover:underline hover:cursor-pointer",children:"Tambah Kelas"})]})})})]},a._id))})]})]})})};export{q as default};
