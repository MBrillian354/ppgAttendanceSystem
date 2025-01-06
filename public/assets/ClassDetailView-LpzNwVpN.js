import{r as g,a as D,A as T,j as e,L as f,b as v}from"./index-D_ufnm_m.js";import{u as S}from"./http-hook-Bu37qFrk.js";import{M as _}from"./ModalBottomClose-R6qTd47U.js";import{E as K}from"./ErrorCard-BcVIfwSZ.js";import{c as j}from"./createLucideIcon-BhK4CwgT.js";import{L as R,C as z,a as B}from"./lock-CmMJnK82.js";import{G as C}from"./graduation-cap-DDKN8GMo.js";import{U as I}from"./users-wJEeiZq3.js";import{P as $}from"./plus-CbNxCR3Z.js";import{T as L}from"./trash-Crbui_RV.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=j("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=j("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=j("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]),ee=()=>{const{isLoading:i,error:N,sendRequest:c,setError:Y}=S(),[s,y]=g.useState(),[o,n]=g.useState({title:"",message:"",onConfirm:null}),[b,x]=g.useState(!1),d=D().classId,p=g.useContext(T);g.useEffect(()=>{(async()=>{const r=`https://ppgacademicsystem-production.up.railway.app/api/classes/${d}?populate=all`;try{const t=await c(r);y(t),console.log(t)}catch{}})()},[c,d]);const G=(a,r)=>{const t=async()=>{const h="https://ppgacademicsystem-production.up.railway.app/api/classes/lock",u=JSON.stringify({classId:r});let m;try{m=await c(h,"PATCH",u,{"Content-Type":"application/json"}),n({title:"Berhasil!",message:m.message,onConfirm:null});const l=await c(`https://ppgacademicsystem-production.up.railway.app/api/classes/${r}?populate=all`);y(l)}catch(l){n({title:"Gagal!",message:l.message,onConfirm:null})}};n({title:`Kunci kelas: ${a}?`,message:"Kelas tidak akan bisa di-edit lagi!",onConfirm:t}),x(!0)},M=(a,r)=>{const t=async()=>{const h="https://ppgacademicsystem-production.up.railway.app/api/classes/unlock",u=JSON.stringify({classId:r});let m;try{m=await c(h,"PATCH",u,{"Content-Type":"application/json"}),n({title:"Berhasil!",message:m.message,onConfirm:null});const l=await c(`https://ppgacademicsystem-production.up.railway.app/api/classes/${r}?populate=all`);y(l)}catch(l){n({title:"Gagal!",message:l.message,onConfirm:null})}};n({title:`Buka kelas: ${a}?`,message:"Kelas dapat di-edit kembali",onConfirm:t}),x(!0)},w=(a,r,t)=>{const h=async()=>{const u=a==="teacher"?"https://ppgacademicsystem-production.up.railway.app/api/classes/remove-teacher":"https://ppgacademicsystem-production.up.railway.app/api/classes/remove-student",m=JSON.stringify(a==="teacher"?{classId:d,teacherId:t}:{classId:d,studentId:t});let l;try{l=await c(u,"DELETE",m,{"Content-Type":"application/json"}),n({title:"Berhasil!",message:l.message,onConfirm:null});const k=await c(`https://ppgacademicsystem-production.up.railway.app/api/classes/${d}?populate=all`);y(k)}catch{}};n({title:"Konfirmasi Penghapusan",message:`Hapus ${r} dari kelas ini?`,onConfirm:h}),x(!0)},A=()=>e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("button",{onClick:()=>{x(!1)},className:`${o.onConfirm?"btn-danger-outline":"button-primary mt-0 "} ${i?"opacity-50 cursor-not-allowed":""}`,disabled:i,children:i?e.jsx(f,{}):o.onConfirm?"Batal":"Tutup"}),o.onConfirm&&e.jsx("button",{onClick:o.onConfirm,className:`button-primary mt-0 ${i?"opacity-50 cursor-not-allowed":""}`,children:i?e.jsx(f,{}):"Ya"})]});return e.jsx("div",{className:"min-h-screen bg-gray-50 px-4 py-8 md:p-8 pb-24",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs(_,{isOpen:b,onClose:()=>x(!1),title:o.title,footer:e.jsx(A,{}),children:[i&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(f,{size:32})}),!i&&o.message]}),(!s||i)&&!b&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(f,{size:32})}),N&&e.jsx(K,{error:N,onClear:()=>Y(null)}),s&&!i&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:s.class.name}),!s.class.isLocked&&p.userRole==="admin ka"&&s.class.teachingGroupYearId.academicYearId.isActive===!0&&e.jsxs("button",{onClick:()=>G(s.class.name,s.class._id),disabled:s.class.isLocked,className:`btn-primary-outline font-medium flex flex-row items-start gap-2 ${s.class.isLocked?"text-blue-500 disabled:opacity-100":""}`,children:[e.jsx(O,{size:16}),"Kunci Kelas"]}),s.class.isLocked&&s.class.teachingGroupYearId.academicYearId.isActive===!0&&e.jsxs("button",{className:"btn-primary-outline font-medium flex flex-row items-start gap-2 text-blue-500 disabled:opacity-100",disabled:!0,children:[e.jsx(R,{size:16}),"Kelas Dikunci"]}),s.class.isLocked&&s.class.teachingGroupYearId.isActive===!1&&p.userRole==="admin ka"&&s.class.teachingGroupYearId.academicYearId.isActive===!0&&e.jsxs("button",{onClick:()=>M(s.class.name,s.class._id),className:"btn-danger-outline flex flex-row items-start gap-2 text-gray-600",children:[e.jsx(E,{size:16}),"Buka Kunci"]})]}),e.jsxs("div",{className:"mt-2 flex items-center text-gray-500",children:[e.jsx(P,{className:"mr-2 h-4 w-4"}),e.jsxs("span",{children:[s.class.teachingGroupYearId.teachingGroupId.name," - ",s.class.teachingGroupYearId.name]})]})]}),e.jsxs("div",{className:"flex flex-col gap-4 mb-8 rounded-md border border-gray-200 bg-white p-6 shadow-sm",children:[e.jsxs("div",{className:"flex items-center space-x-2 text-gray-600",children:[e.jsx(z,{className:"h-5 w-5"}),e.jsxs("span",{children:["Kelas Mulai: ",s.class.startTime]})]}),e.jsxs("div",{className:"flex items-center space-x-2 text-gray-600",children:[e.jsx(C,{className:"h-5 w-5"}),e.jsxs("span",{children:[s.class.teachers.length," Guru"]})]}),e.jsxs("div",{className:"flex items-center space-x-2 text-gray-600",children:[e.jsx(I,{className:"h-5 w-5"}),e.jsxs("span",{children:[s.class.students.length," Siswa"]})]}),e.jsxs("div",{className:"flex items-center space-x-2 text-gray-600",children:[e.jsx(B,{className:"h-5 w-5"}),e.jsxs("span",{children:[s.class.attendances.length/s.class.students.length," / ",s.class.teachingGroupYearId.semesterTarget," Pertemuan Terlaksana"]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsxs("div",{className:"mb-4 flex justify-between items-end",children:[e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx(C,{className:"mr-2 h-5 w-5 text-gray-600"}),e.jsx("h2",{className:"text-xl font-medium text-gray-800",children:"Guru"})]}),p.userRole==="admin ka"&&s.class.isLocked===!1&&s.class.teachingGroupYearId.academicYearId.isActive===!0&&e.jsx(v,{to:`/dashboard/classes/${d}/add-teachers/`,children:e.jsxs("button",{className:"button-primary pl-[11px] mt-0",children:[e.jsx($,{className:"w-4 h-4 mr-2"}),"Tambah Guru"]})})]}),e.jsx("div",{className:"overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"pl-6 py-3 text-left text-sm font-medium text-gray-500"}),e.jsx("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500",children:"Nama"}),e.jsx("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500",children:"NID"}),e.jsx("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500",children:"Posisi"}),e.jsx("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500 hidden md:table-cell",children:"Nomor WA"}),p.userRole!=="teacher"&&s.class.isLocked===!1&&s.class.teachingGroupYearId.academicYearId.isActive===!0&&e.jsx("th",{className:"p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Atur"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200",children:[s.class.teachers.map(a=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"p-4 ",children:a.image?e.jsx("img",{src:a!=null&&a.image?`https://ppgacademicsystem-production.up.railway.app/api/${a.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",alt:a.name,className:"w-10 h-10 rounded-full"}):e.jsx("div",{className:"w-10 h-10 rounded-full bg-green-200 text-green-500 hidden md:flex items-center justify-center font-medium",children:getInitials(a.name)})}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-900",children:a.name}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:a.nid}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:a.position}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-600 hidden md:table-cell",children:a.phone}),p.userRole!=="teacher"&&s.class.isLocked===!1&&s.class.teachingGroupYearId.academicYearId.isActive===!0&&e.jsx("td",{className:"flex gap-4 py-4",children:e.jsx("button",{onClick:()=>w("teacher",a.name,a._id),className:"p-3 rounded-full hover:bg-gray-200 text-red-500 hover:text-red-700 transition",children:e.jsx(L,{size:20})})})]},a._id)),s.class.teachers.length===0&&e.jsx("tr",{className:"",children:e.jsx("td",{colSpan:"5",className:"px-6 py-4 text-sm text-gray-500 text-center",children:"Belum ada guru untuk kelas ini"})})]})]})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 flex justify-between items-end",children:[e.jsxs("div",{className:"flex gap-1 items-center",children:[e.jsx(I,{className:"mr-2 h-5 w-5 text-gray-600"}),e.jsx("h2",{className:"text-xl font-medium text-gray-800",children:"Siswa"})]}),s.class.isLocked===!1&&e.jsx(v,{to:`/dashboard/classes/${d}/add-students/`,children:e.jsxs("button",{className:"button-primary pl-[11px] mt-0",children:[e.jsx($,{className:"w-4 h-4 mr-2"}),"Tambah Siswa"]})})]}),e.jsx("div",{className:"overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:"bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"pl-6 py-3 text-left text-sm font-medium text-gray-500"}),e.jsx("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500",children:"NIS"}),e.jsx("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500",children:"Nama"}),p.userRole!=="teacher"&&s.class.isLocked===!1&&s.class.teachingGroupYearId.academicYearId.isActive===!0&&e.jsx("th",{className:"px-6 py-3 text-left text-sm font-medium text-gray-500",children:"Atur"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200",children:[s.class.students.map(a=>e.jsxs("tr",{className:"hover:bg-gray-50",children:[e.jsx("td",{className:"p-4",children:a.image?e.jsx("img",{src:a!=null&&a.image?`https://ppgacademicsystem-production.up.railway.app/api/${a.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",alt:a.name,className:"w-10 h-10 rounded-full"}):e.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-200 text-blue-500 hidden md:flex items-center justify-center font-medium",children:getInitials(a.name)})}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-900",children:a.nis}),e.jsx("td",{className:"px-6 py-4 text-sm text-gray-900",children:a.name}),s.class.isLocked===!1&&s.class.teachingGroupYearId.academicYearId.isActive===!0&&e.jsx("td",{className:"flex gap-4 py-4",children:e.jsx("button",{onClick:()=>w("student",a.name,a._id),className:"p-3 rounded-full  hover:bg-gray-200 text-red-500 hover:text-red-700 transition",children:e.jsx(L,{size:20})})})]},a._id)),s.class.students.length===0&&e.jsx("tr",{className:"",children:e.jsx("td",{colSpan:"4",className:"px-6 py-4 text-sm text-gray-500 text-center",children:"Belum ada siswa terdaftar di kelas ini."})})]})]})})]})]})]})})};export{ee as default};
