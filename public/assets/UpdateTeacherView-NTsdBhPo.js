import{r as i,A as $,a as L,u as w,j as t,L as h}from"./index-p3Hu8WjZ.js";import{u as D}from"./http-hook-Bc_7FVas.js";import{D as S}from"./DynamicForm-BsrUhyTC.js";import{E as P}from"./ErrorCard-DZa76Si8.js";import{M as O}from"./ModalBottomClose-DszyqmvT.js";import{F as q}from"./FileUpload-kq8N9AOW.js";import{I as A}from"./iconify-DZu7RBmL.js";import"./iconify-icon-C1YYA-Pd.js";const J=()=>{const[n,g]=i.useState({title:"",message:"",onConfirm:null}),[b,l]=i.useState(!1),{isLoading:s,error:p,sendRequest:m,setError:x}=D(),[y,B]=i.useState(!1),[e,j]=i.useState(),[v,C]=i.useState(),d=i.useRef(),c=i.useContext($),f=L().id,N=w();i.useEffect(()=>{(async()=>{const u=c.userRole!=="teacher"?`https://ppg-academic-system-06d5f9396d18.herokuapp.com/api/teachers/${f}`:`https://ppg-academic-system-06d5f9396d18.herokuapp.com/api/teachers/user/${c.userId}`;try{const a=await m(u);j(a.teacher);const o=new Date(a.teacher.dateOfBirth);C(o.toISOString().split("T")[0])}catch{}})()},[m]);const k=async r=>{const u="https://ppg-academic-system-06d5f9396d18.herokuapp.com/api/teachers/",a=new FormData;a.append("name",r.name),a.append("phone",r.phone),a.append("dateOfBirth",r.dateOfBirth),a.append("gender",r.gender),a.append("address",r.address),a.append("position",r.position),a.append("parentName",r.parentName),a.append("userId",c.userId),a.append("teacherId",f),d.current.files[0]&&a.append("image",d.current.files[0]),console.log(r),console.log(a);let o;try{o=await m(u,"PATCH",a),console.log(o)}catch{}g({title:"Berhasil!",message:o.message,onConfirm:null}),l(!0)},I=()=>t.jsxs("div",{className:"flex gap-2 items-center",children:[t.jsx("button",{onClick:()=>{l(!1),!p&&N(-1)},className:`${n.onConfirm?"btn-danger-outline":"button-primary mt-0 "}`,children:n.onConfirm?"Batal":"Tutup"}),n.onConfirm&&t.jsx("button",{onClick:n.onConfirm,className:"button-primary mt-0 ",children:"Ya"})]});return t.jsxs("div",{className:"m-auto max-w-md mt-14 md:mt-8",children:[t.jsxs(O,{isOpen:b,onClose:()=>l(!1),title:n.title,footer:t.jsx(I,{}),children:[s&&t.jsx("div",{className:"flex justify-center mt-16",children:t.jsx(h,{size:32})}),!s&&n.message]}),t.jsxs("div",{className:`pb-24 transition-opacity duration-300 ${y?"opacity-0":"opacity-100"}`,children:[p&&t.jsx(P,{error:p,onClear:()=>x(null)}),t.jsx(S,{customDescription:t.jsx("div",{className:"relative",children:t.jsx("div",{className:"",children:t.jsx(q,{ref:d,accept:".jpg,.jpeg,.png",buttonLabel:t.jsx(A,{icon:"jam:upload",width:"24",height:"24"}),buttonClassName:`${s&&"hidden"} border border-gray-600 bg-gray-50 size-9 rounded-full absolute offset bottom-2 right-2 translate-x-1/2 translate-y-1/2`,imgClassName:`${s&&"animate-pulse"} mt-2 rounded-md size-32 md:size-48 shrink-0`,defaultImageSrc:e!=null&&e.image?`https://ppg-academic-system-06d5f9396d18.herokuapp.com/api/${e.image}`:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"})})}),subtitle:"Update Profile Tenaga Pendidik",fields:[{name:"name",label:"Nama Lengkap",placeholder:"Nama Lengkap",type:"text",required:!0,disabled:s,value:(e==null?void 0:e.name)||""},{name:"phone",label:"Nomor WA Aktif",placeholder:"628123456789",type:"text",required:!0,disabled:s,value:(e==null?void 0:e.phone)||""},{name:"position",label:"Posisi",placeholder:"Guru",type:"select",required:!0,disabled:s,value:(e==null?void 0:e.position)||"",options:[{label:"Guru",value:"teacher"},{label:"Asisten",value:"assistant"}]},{name:"dateOfBirth",label:"Tanggal Lahir",placeholder:"PC",type:"date",required:!0,disabled:s,value:v||""},{name:"gender",label:"Jenis Kelamin",type:"select",required:!0,disabled:s,value:(e==null?void 0:e.gender)||"",options:[{label:"Laki-Laki",value:"male"},{label:"Perempuan",value:"female"}]},{name:"address",label:"Alamat",type:"textarea",required:!0,disabled:s,value:(e==null?void 0:e.address)||""}],onSubmit:k,disabled:s,reset:!1,footer:!1,button:t.jsx("div",{className:"flex flex-col justify-stretch mt-4",children:t.jsx("button",{type:"submit",className:`button-primary ${s?"opacity-50 cursor-not-allowed":""}`,disabled:s,children:s?t.jsx(h,{children:"Processing..."}):"Update"})})})]})]})};export{J as default};
