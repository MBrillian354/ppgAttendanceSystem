import{r as i,A as j,a as N,j as e,L as y,b as h,N as p}from"./index-p3Hu8WjZ.js";import{u as v}from"./http-hook-Bc_7FVas.js";import{E as w}from"./ErrorCard-DZa76Si8.js";import{I as r}from"./iconify-DZu7RBmL.js";import{P as k}from"./pencil-kkGW12cW.js";import"./iconify-icon-C1YYA-Pd.js";import"./createLucideIcon-_SAVRkLg.js";const E=()=>{const{isLoading:x,sendRequest:n}=v(),[o,u]=i.useState([]),[s,g]=i.useState(null),[f,b]=i.useState(),d=i.useContext(j),c=N().teacherId,m=t=>new Date(t).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric",timeZone:"Asia/Jakarta"});return i.useEffect(()=>{(async()=>{const l=d.userRole!=="teacher"?`https://ppg-academic-system-06d5f9396d18.herokuapp.com/api/teachers/${c}`:`https://ppg-academic-system-06d5f9396d18.herokuapp.com/api/teachers/user/${d.userId}`;try{const a=await n(l);console.log(a.teacher),b(a.teacher.isProfileComplete),u([{label:"NID",value:a.teacher.nid,icon:e.jsx(r,{icon:"icon-park-outline:id-card-h",width:"24",height:"24"})},{label:"Nomor HP",value:a.teacher.phone,icon:e.jsx(r,{icon:"tabler:phone",width:"24",height:"24"})},{label:"Tanggal Lahir",value:m(a.teacher.dateOfBirth),icon:e.jsx(r,{icon:"material-symbols:date-range-outline",width:"24",height:"24"})},{label:"Jenis Kelamin",value:a.teacher.gender?a.teacher.gender==="male"?"Laki-laki":"Perempuan":"",icon:e.jsx(r,{icon:"tabler:gender-bigender",width:"24",height:"24"})},{label:"Domisili",value:a.teacher.address,icon:e.jsx(r,{icon:"ph:map-pin-bold",width:"24",height:"24"})},{label:"Posisi",value:a.teacher.position?a.teacher.position==="teacher"?"Guru":"Asisten":"",icon:e.jsx(r,{icon:"material-symbols:category-outline-rounded",width:"24",height:"24"})},{label:"Mulai Masa Tugas",value:m(a.teacher.positionStartDate),icon:e.jsx(r,{icon:"lucide:briefcase",width:"24",height:"24"})}]),g({name:a.teacher.name,nid:a.teacher.nid,image:a.teacher.image,branch:a.teacher.userId.teachingGroupId.branchId.name,teachingGroup:a.teacher.userId.teachingGroupId.name})}catch{}})()},[n]),e.jsxs("div",{className:"min-h-screen bg-gray-50 p-4 md:p-8 pb-24",children:[x&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(y,{size:32})}),o.length>0&&s&&e.jsxs(e.Fragment,{children:[!f&&e.jsx(h,{to:`/dashboard/teachers/${c}/update`,children:e.jsx(w,{error:"Profile belum lengkap! Lengkapi",onClear:()=>setError(null)})}),e.jsx("h1",{className:"text-2xl font-medium mb-6 text-gray-700",children:"Biodata Tenaga Pendidik"}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 md:gap-8",children:[e.jsxs("div",{className:"card-basic border mx-0 py-12 flex flex-col items-center flex-1 basis-96 min-w-80 md:max-w-96",children:[e.jsx("img",{src:s!=null&&s.image?`https://ppg-academic-system-06d5f9396d18.herokuapp.com/api/${s.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",alt:"Profile",className:"mt-2 rounded-md size-48 md:size-64 shrink-0"}),e.jsx("h2",{className:"mt-4 text-lg font-normal",children:s.name}),e.jsx("p",{className:"mt-2 text-gray-600",children:s.nid}),e.jsxs("div",{className:"mt-4 flex flex-col md:flex-row gap-2 text-center",children:[e.jsx(p,{to:"",className:"badge-primary",children:s.branch}),e.jsx(p,{to:"",className:"badge-primary",children:s.teachingGroup})]})]}),e.jsxs("div",{className:"card-basic p-8 flex flex-col border mx-0 flex-1 justify-start",children:[e.jsx("h2",{className:"text-lg mb-8",children:"Profile Tenaga Pendidik"}),e.jsx("ul",{className:"space-y-6",children:o.map((t,l)=>e.jsxs("li",{className:"flex items-center gap-2 mb-2",children:[t.icon&&e.jsx("div",{className:"text-primary",children:t.icon}),e.jsxs("span",{className:"font-semibold",children:[t.label,":"]}),e.jsx("span",{className:"font-medium text-gray-700",children:t.value})]},l))}),e.jsx(h,{to:`/dashboard/teachers/${c}/update`,className:"place-self-end",children:e.jsxs("button",{className:"button-primary pl-[11px] mt-6 md:mt-0",children:[e.jsx(k,{className:"w-4 h-4 mr-2"}),"Edit Profile"]})})]})]})]})]})};export{E as default};
