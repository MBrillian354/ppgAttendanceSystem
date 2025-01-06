import{r as s,u as h,A as g,j as e,b as f,L as j}from"./index-DjI7ZG_S.js";import{u as N}from"./http-hook-D44mLOTF.js";import{P as y}from"./plus-vkBv9P5N.js";import"./createLucideIcon-CnKyH5OX.js";const C=()=>{const[d,x]=s.useState();s.useState(""),s.useState({title:"",message:"",onConfirm:null}),s.useState(!1);const{isLoading:o,sendRequest:n}=N();s.useState(!1),s.useState(null);const p=h(),a=s.useContext(g);s.useEffect(()=>{const t=a.userRole==="admin"?"http://localhost:5000/api/teachers":`http://localhost:5000/api/teachers/sub-branch/${a.userTeachingGroupId}`;console.log(t),(async()=>{try{const r=await n(t);x(r.teachers)}catch{}})()},[n]);const u=t=>t==null?void 0:t.split(" ").map(i=>i[0]).join("").toUpperCase().slice(0,2);return e.jsx("div",{className:"min-h-screen px-4 py-8 md:p-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:"Daftar Tenaga Pendidik"}),a.userRole==="admin"&&e.jsx(f,{to:"/settings/users/new",children:e.jsxs("button",{className:"button-primary pl-[12px] ",children:[e.jsx(y,{className:"w-4 h-4 mr-2"}),"Tambah"]})})]}),o&&e.jsx("div",{className:"flex justify-center mt-16",children:e.jsx(j,{size:32})}),d&&e.jsx("div",{className:"bg-white shadow-sm rounded-md overflow-hidden",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{className:" border-b",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2 md:p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}),e.jsx("th",{className:"p-2 md:p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),e.jsx("th",{className:"p-2 md:p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"NID"}),e.jsx("th",{className:"p-2 md:p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nama"}),a.userRole==="admin"&&e.jsx("th",{className:"p-2 md:p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"PC"}),a.userRole==="admin"&&e.jsx("th",{className:"p-2 md:p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Kelompok Ajar"}),e.jsx("th",{className:"p-2 md:p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Profile"})]})}),e.jsxs("tbody",{className:"divide-y divide-gray-200",children:[d.map(t=>{var i,r,l,m,c;return e.jsxs("tr",{onClick:()=>p(`/dashboard/teachers/${t._id}`),className:"hover:bg-gray-50 hover:cursor-pointer transition",children:[e.jsx("td",{className:"p-2 md:p-4",children:t.image?e.jsx("img",{src:t!=null&&t.image?`http://localhost:5000/api/${t.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",alt:t.name,className:"w-10 h-10 rounded-full"}):e.jsx("div",{className:"w-10 h-10 rounded-full bg-green-200 text-green-500 hidden md:flex items-center justify-center font-medium",children:u(t.name)})}),e.jsxs("td",{className:"pl-2",children:[" ",e.jsx("div",{className:`py-2 px-4 text-sm text-center w-min border rounded-md ${t.positionEndDate?"text-red-500 bg-red-100":"text-green-500 bg-green-100"}`,children:t.positionEndDate?"Tidak Aktif":"Aktif"})]}),e.jsx("td",{className:"p-2 md:p-4 text-sm text-gray-900",children:t.nid}),e.jsx("td",{className:"p-2 md:p-4 text-sm text-gray-900",children:t.name}),a.userRole==="admin"&&e.jsx("td",{className:"p-2 md:p-4 text-sm text-gray-500",children:(r=(i=t==null?void 0:t.userId)==null?void 0:i.teachingGroupId)==null?void 0:r.name}),a.userRole==="admin"&&e.jsx("td",{className:"p-2 md:p-4 text-sm text-gray-500",children:(c=(m=(l=t==null?void 0:t.userId)==null?void 0:l.teachingGroupId)==null?void 0:m.branchId)==null?void 0:c.name}),e.jsx("td",{className:`p-2 md:p-4 text-sm text-gray-900 ${t.isProfileComplete?"text-green-500":"text-red-500 hover:underline cursor-pointer"}`,children:t.isProfileComplete?"Lengkap":"Lengkapi"})]},t._id)}),d.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"p-4 text-center italic text-gray-500",children:"Tidak ada data"})})]})]})})]})})};export{C as default};
