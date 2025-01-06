import{_ as k,r as y,o as j,j as s,u as N,A as T,a as R,L as I}from"./index-DjI7ZG_S.js";import{u as O}from"./http-hook-D44mLOTF.js";import{S as C}from"./SequentialAnimation-BW8I0Pk3.js";import{I as L}from"./iconify-BsPfAMaL.js";import{c as $}from"./createLucideIcon-CnKyH5OX.js";import"./proxy-B0VEXGqS.js";import"./iconify-icon-C1YYA-Pd.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=$("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=$("SquareCheck",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);class o{constructor(e,t,a,i,r){this._legacyCanvasSize=o.DEFAULT_CANVAS_SIZE,this._preferredCamera="environment",this._maxScansPerSecond=25,this._lastScanTimestamp=-1,this._destroyed=this._flashOn=this._paused=this._active=!1,this.$video=e,this.$canvas=document.createElement("canvas"),a&&typeof a=="object"?this._onDecode=t:(console.warn(a||i||r?"You're using a deprecated version of the QrScanner constructor which will be removed in the future":"Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),this._legacyOnDecode=t),t=typeof a=="object"?a:{},this._onDecodeError=t.onDecodeError||(typeof a=="function"?a:this._onDecodeError),this._calculateScanRegion=t.calculateScanRegion||(typeof i=="function"?i:this._calculateScanRegion),this._preferredCamera=t.preferredCamera||r||this._preferredCamera,this._legacyCanvasSize=typeof a=="number"?a:typeof i=="number"?i:this._legacyCanvasSize,this._maxScansPerSecond=t.maxScansPerSecond||this._maxScansPerSecond,this._onPlay=this._onPlay.bind(this),this._onLoadedMetaData=this._onLoadedMetaData.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this._updateOverlay=this._updateOverlay.bind(this),e.disablePictureInPicture=!0,e.playsInline=!0,e.muted=!0;let d=!1;if(e.hidden&&(e.hidden=!1,d=!0),document.body.contains(e)||(document.body.appendChild(e),d=!0),a=e.parentElement,t.highlightScanRegion||t.highlightCodeOutline){if(i=!!t.overlay,this.$overlay=t.overlay||document.createElement("div"),r=this.$overlay.style,r.position="absolute",r.display="none",r.pointerEvents="none",this.$overlay.classList.add("scan-region-highlight"),!i&&t.highlightScanRegion){this.$overlay.innerHTML='<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';try{this.$overlay.firstElementChild.animate({transform:["scale(.98)","scale(1.01)"]},{duration:400,iterations:1/0,direction:"alternate",easing:"ease-in-out"})}catch{}a.insertBefore(this.$overlay,this.$video.nextSibling)}t.highlightCodeOutline&&(this.$overlay.insertAdjacentHTML("beforeend",'<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'),this.$codeOutlineHighlight=this.$overlay.lastElementChild)}this._scanRegion=this._calculateScanRegion(e),requestAnimationFrame(()=>{let m=window.getComputedStyle(e);m.display==="none"&&(e.style.setProperty("display","block","important"),d=!0),m.visibility!=="visible"&&(e.style.setProperty("visibility","visible","important"),d=!0),d&&(console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."),e.style.opacity="0",e.style.width="0",e.style.height="0",this.$overlay&&this.$overlay.parentElement&&this.$overlay.parentElement.removeChild(this.$overlay),delete this.$overlay,delete this.$codeOutlineHighlight),this.$overlay&&this._updateOverlay()}),e.addEventListener("play",this._onPlay),e.addEventListener("loadedmetadata",this._onLoadedMetaData),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("resize",this._updateOverlay),this._qrEnginePromise=o.createQrEngine()}static set WORKER_PATH(e){console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.")}static async hasCamera(){try{return!!(await o.listCameras(!1)).length}catch{return!1}}static async listCameras(e=!1){if(!navigator.mediaDevices)return[];let t=async()=>(await navigator.mediaDevices.enumerateDevices()).filter(i=>i.kind==="videoinput"),a;try{e&&(await t()).every(i=>!i.label)&&(a=await navigator.mediaDevices.getUserMedia({audio:!1,video:!0}))}catch{}try{return(await t()).map((i,r)=>({id:i.deviceId,label:i.label||(r===0?"Default Camera":`Camera ${r+1}`)}))}finally{a&&(console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"),o._stopVideoStream(a))}}async hasFlash(){let e;try{if(this.$video.srcObject){if(!(this.$video.srcObject instanceof MediaStream))return!1;e=this.$video.srcObject}else e=(await this._getCameraStream()).stream;return"torch"in e.getVideoTracks()[0].getSettings()}catch{return!1}finally{e&&e!==this.$video.srcObject&&(console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"),o._stopVideoStream(e))}}isFlashOn(){return this._flashOn}async toggleFlash(){this._flashOn?await this.turnFlashOff():await this.turnFlashOn()}async turnFlashOn(){if(!this._flashOn&&!this._destroyed&&(this._flashOn=!0,this._active&&!this._paused))try{if(!await this.hasFlash())throw"No flash available";await this.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:!0}]})}catch(e){throw this._flashOn=!1,e}}async turnFlashOff(){this._flashOn&&(this._flashOn=!1,await this._restartVideoStream())}destroy(){this.$video.removeEventListener("loadedmetadata",this._onLoadedMetaData),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("resize",this._updateOverlay),this._destroyed=!0,this._flashOn=!1,this.stop(),o._postWorkerMessage(this._qrEnginePromise,"close")}async start(){if(this._destroyed)throw Error("The QR scanner can not be started as it had been destroyed.");if((!this._active||this._paused)&&(window.location.protocol!=="https:"&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,!document.hidden))if(this._paused=!1,this.$video.srcObject)await this.$video.play();else try{let{stream:e,facingMode:t}=await this._getCameraStream();!this._active||this._paused?o._stopVideoStream(e):(this._setVideoMirror(t),this.$video.srcObject=e,await this.$video.play(),this._flashOn&&(this._flashOn=!1,this.turnFlashOn().catch(()=>{})))}catch(e){if(!this._paused)throw this._active=!1,e}}stop(){this.pause(),this._active=!1}async pause(e=!1){if(this._paused=!0,!this._active)return!0;this.$video.pause(),this.$overlay&&(this.$overlay.style.display="none");let t=()=>{this.$video.srcObject instanceof MediaStream&&(o._stopVideoStream(this.$video.srcObject),this.$video.srcObject=null)};return e?(t(),!0):(await new Promise(a=>setTimeout(a,300)),this._paused?(t(),!0):!1)}async setCamera(e){e!==this._preferredCamera&&(this._preferredCamera=e,await this._restartVideoStream())}static async scanImage(e,t,a,i,r=!1,d=!1){let m,g=!1;t&&("scanRegion"in t||"qrEngine"in t||"canvas"in t||"disallowCanvasResizing"in t||"alsoTryWithoutScanRegion"in t||"returnDetailedScanResult"in t)?(m=t.scanRegion,a=t.qrEngine,i=t.canvas,r=t.disallowCanvasResizing||!1,d=t.alsoTryWithoutScanRegion||!1,g=!0):console.warn(t||a||i||r||d?"You're using a deprecated api for scanImage which will be removed in the future.":"Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),t=!!a;try{let x,v;[a,x]=await Promise.all([a||o.createQrEngine(),o._loadImage(e)]),[i,v]=o._drawToCanvas(x,m,i,r);let p;if(a instanceof Worker){let l=a;t||o._postWorkerMessageSync(l,"inversionMode","both"),p=await new Promise((n,c)=>{let w,h,_,f=-1;h=S=>{S.data.id===f&&(l.removeEventListener("message",h),l.removeEventListener("error",_),clearTimeout(w),S.data.data!==null?n({data:S.data.data,cornerPoints:o._convertPoints(S.data.cornerPoints,m)}):c(o.NO_QR_CODE_FOUND))},_=S=>{l.removeEventListener("message",h),l.removeEventListener("error",_),clearTimeout(w),c("Scanner error: "+(S?S.message||S:"Unknown Error"))},l.addEventListener("message",h),l.addEventListener("error",_),w=setTimeout(()=>_("timeout"),1e4);let b=v.getImageData(0,0,i.width,i.height);f=o._postWorkerMessageSync(l,"decode",b,[b.data.buffer])})}else p=await Promise.race([new Promise((l,n)=>window.setTimeout(()=>n("Scanner error: timeout"),1e4)),(async()=>{try{var[l]=await a.detect(i);if(!l)throw o.NO_QR_CODE_FOUND;return{data:l.rawValue,cornerPoints:o._convertPoints(l.cornerPoints,m)}}catch(n){if(l=n.message||n,/not implemented|service unavailable/.test(l))return o._disableBarcodeDetector=!0,o.scanImage(e,{scanRegion:m,canvas:i,disallowCanvasResizing:r,alsoTryWithoutScanRegion:d});throw`Scanner error: ${l}`}})()]);return g?p:p.data}catch(x){if(!m||!d)throw x;let v=await o.scanImage(e,{qrEngine:a,canvas:i,disallowCanvasResizing:r});return g?v:v.data}finally{t||o._postWorkerMessage(a,"close")}}setGrayscaleWeights(e,t,a,i=!0){o._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:e,green:t,blue:a,useIntegerApproximation:i})}setInversionMode(e){o._postWorkerMessage(this._qrEnginePromise,"inversionMode",e)}static async createQrEngine(e){if(e&&console.warn("Specifying a worker path is not required and not supported anymore."),e=()=>k(()=>import("./qr-scanner-worker.min-D85Z9gVD.js"),[]).then(a=>a.createWorker()),!(!o._disableBarcodeDetector&&"BarcodeDetector"in window&&BarcodeDetector.getSupportedFormats&&(await BarcodeDetector.getSupportedFormats()).includes("qr_code")))return e();let t=navigator.userAgentData;return t&&t.brands.some(({brand:a})=>/Chromium/i.test(a))&&/mac ?OS/i.test(t.platform)&&await t.getHighEntropyValues(["architecture","platformVersion"]).then(({architecture:a,platformVersion:i})=>/arm/i.test(a||"arm")&&13<=parseInt(i||"13")).catch(()=>!0)?e():new BarcodeDetector({formats:["qr_code"]})}_onPlay(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay(),this.$overlay&&(this.$overlay.style.display=""),this._scanFrame()}_onLoadedMetaData(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_calculateScanRegion(e){let t=Math.round(.6666666666666666*Math.min(e.videoWidth,e.videoHeight));return{x:Math.round((e.videoWidth-t)/2),y:Math.round((e.videoHeight-t)/2),width:t,height:t,downScaledWidth:this._legacyCanvasSize,downScaledHeight:this._legacyCanvasSize}}_updateOverlay(){requestAnimationFrame(()=>{if(this.$overlay){var e=this.$video,t=e.videoWidth,a=e.videoHeight,i=e.offsetWidth,r=e.offsetHeight,d=e.offsetLeft,m=e.offsetTop,g=window.getComputedStyle(e),x=g.objectFit,v=t/a,p=i/r;switch(x){case"none":var l=t,n=a;break;case"fill":l=i,n=r;break;default:(x==="cover"?v>p:v<p)?(n=r,l=n*v):(l=i,n=l/v),x==="scale-down"&&(l=Math.min(l,t),n=Math.min(n,a))}var[c,w]=g.objectPosition.split(" ").map((_,f)=>{const b=parseFloat(_);return _.endsWith("%")?(f?r-n:i-l)*b/100:b});g=this._scanRegion.width||t,p=this._scanRegion.height||a,x=this._scanRegion.x||0;var h=this._scanRegion.y||0;v=this.$overlay.style,v.width=`${g/t*l}px`,v.height=`${p/a*n}px`,v.top=`${m+w+h/a*n}px`,a=/scaleX\(-1\)/.test(e.style.transform),v.left=`${d+(a?i-c-l:c)+(a?t-x-g:x)/t*l}px`,v.transform=e.style.transform}})}static _convertPoints(e,t){if(!t)return e;let a=t.x||0,i=t.y||0,r=t.width&&t.downScaledWidth?t.width/t.downScaledWidth:1;t=t.height&&t.downScaledHeight?t.height/t.downScaledHeight:1;for(let d of e)d.x=d.x*r+a,d.y=d.y*t+i;return e}_scanFrame(){!this._active||this.$video.paused||this.$video.ended||("requestVideoFrameCallback"in this.$video?this.$video.requestVideoFrameCallback.bind(this.$video):requestAnimationFrame)(async()=>{if(!(1>=this.$video.readyState)){var e=Date.now()-this._lastScanTimestamp,t=1e3/this._maxScansPerSecond;e<t&&await new Promise(i=>setTimeout(i,t-e)),this._lastScanTimestamp=Date.now();try{var a=await o.scanImage(this.$video,{scanRegion:this._scanRegion,qrEngine:this._qrEnginePromise,canvas:this.$canvas})}catch(i){if(!this._active)return;this._onDecodeError(i)}!o._disableBarcodeDetector||await this._qrEnginePromise instanceof Worker||(this._qrEnginePromise=o.createQrEngine()),a?(this._onDecode?this._onDecode(a):this._legacyOnDecode&&this._legacyOnDecode(a.data),this.$codeOutlineHighlight&&(clearTimeout(this._codeOutlineHighlightRemovalTimeout),this._codeOutlineHighlightRemovalTimeout=void 0,this.$codeOutlineHighlight.setAttribute("viewBox",`${this._scanRegion.x||0} ${this._scanRegion.y||0} ${this._scanRegion.width||this.$video.videoWidth} ${this._scanRegion.height||this.$video.videoHeight}`),this.$codeOutlineHighlight.firstElementChild.setAttribute("points",a.cornerPoints.map(({x:i,y:r})=>`${i},${r}`).join(" ")),this.$codeOutlineHighlight.style.display="")):this.$codeOutlineHighlight&&!this._codeOutlineHighlightRemovalTimeout&&(this._codeOutlineHighlightRemovalTimeout=setTimeout(()=>this.$codeOutlineHighlight.style.display="none",100))}this._scanFrame()})}_onDecodeError(e){e!==o.NO_QR_CODE_FOUND&&console.log(e)}async _getCameraStream(){if(!navigator.mediaDevices)throw"Camera not found.";let e=/^(environment|user)$/.test(this._preferredCamera)?"facingMode":"deviceId",t=[{width:{min:1024}},{width:{min:768}},{}],a=t.map(i=>Object.assign({},i,{[e]:{exact:this._preferredCamera}}));for(let i of[...a,...t])try{let r=await navigator.mediaDevices.getUserMedia({video:i,audio:!1}),d=this._getFacingMode(r)||(i.facingMode?this._preferredCamera:this._preferredCamera==="environment"?"user":"environment");return{stream:r,facingMode:d}}catch{}throw"Camera not found."}async _restartVideoStream(){let e=this._paused;await this.pause(!0)&&!e&&this._active&&await this.start()}static _stopVideoStream(e){for(let t of e.getTracks())t.stop(),e.removeTrack(t)}_setVideoMirror(e){this.$video.style.transform="scaleX("+(e==="user"?-1:1)+")"}_getFacingMode(e){return(e=e.getVideoTracks()[0])?/rear|back|environment/i.test(e.label)?"environment":/front|user|face/i.test(e.label)?"user":null:null}static _drawToCanvas(e,t,a,i=!1){a=a||document.createElement("canvas");let r=t&&t.x?t.x:0,d=t&&t.y?t.y:0,m=t&&t.width?t.width:e.videoWidth||e.width,g=t&&t.height?t.height:e.videoHeight||e.height;return i||(i=t&&t.downScaledWidth?t.downScaledWidth:m,t=t&&t.downScaledHeight?t.downScaledHeight:g,a.width!==i&&(a.width=i),a.height!==t&&(a.height=t)),t=a.getContext("2d",{alpha:!1}),t.imageSmoothingEnabled=!1,t.drawImage(e,r,d,m,g,0,0,a.width,a.height),[a,t]}static async _loadImage(e){if(e instanceof Image)return await o._awaitImageLoad(e),e;if(e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement||e instanceof SVGImageElement||"OffscreenCanvas"in window&&e instanceof OffscreenCanvas||"ImageBitmap"in window&&e instanceof ImageBitmap)return e;if(e instanceof File||e instanceof Blob||e instanceof URL||typeof e=="string"){let t=new Image;t.src=e instanceof File||e instanceof Blob?URL.createObjectURL(e):e.toString();try{return await o._awaitImageLoad(t),t}finally{(e instanceof File||e instanceof Blob)&&URL.revokeObjectURL(t.src)}}else throw"Unsupported image type."}static async _awaitImageLoad(e){e.complete&&e.naturalWidth!==0||await new Promise((t,a)=>{let i=r=>{e.removeEventListener("load",i),e.removeEventListener("error",i),r instanceof ErrorEvent?a("Image load error"):t()};e.addEventListener("load",i),e.addEventListener("error",i)})}static async _postWorkerMessage(e,t,a,i){return o._postWorkerMessageSync(await e,t,a,i)}static _postWorkerMessageSync(e,t,a,i){if(!(e instanceof Worker))return-1;let r=o._workerMessageId++;return e.postMessage({id:r,type:t,data:a},i),r}}o.DEFAULT_CANVAS_SIZE=400;o.NO_QR_CODE_FOUND="No QR code found";o._disableBarcodeDetector=!1;o._workerMessageId=0;const P="/assets/store-scanner-beep-90395-hQk9Q5dh.mp3",H=()=>{const u=y.useRef(null),e=y.useRef(null),[t,a]=y.useState(!1),[i,r]=y.useState(null),[d,m]=y.useState(!1),{state:g,dispatch:x}=y.useContext(j),[v,p]=y.useState(0);y.useEffect(()=>{let h;return(async()=>{if(u.current){h=new o(u.current,async f=>{d||await w(f.data)},{returnDetailedScanResult:!0});try{await h.start(),a(!0)}catch(f){console.error("Camera access denied or unavailable:",f)}}else console.error("Video element not found")})(),()=>{h==null||h.destroy(),a(!1)}},[d]),y.useEffect(()=>{p(d?100:0)},[d]);const l=h=>{const _=new Date,f=_.getHours(),b=_.getMinutes(),[S,E]=h.split(":").map(Number);return f>S||f===S&&b>E?"Terlambat":(f<S||f===S&&b<E,"Hadir")},n=h=>{x({type:"SET_STATUS",payload:h})};let c;const w=async h=>{m(!0);const _=g.studentList.some(f=>f.studentId.nis===h);r(_?{nis:h,status:l(g.classStartTime),name:g.studentList.find(f=>f.studentId.nis===h).studentId.name}:"Kode QR tidak dikenali!"),e.current&&e.current.play(),c={id:h,newStatus:l(g.classStartTime),timestamp:Date.now()},n(c),console.log(c),e.current&&await new Promise(f=>{e.current.onended=f}),setTimeout(()=>{m(!1)},50)};return s.jsxs("div",{className:"flex flex-col items-center justify-center h-full w-full p-4",children:[s.jsxs("div",{className:"relative w-72 h-72 border-2 border-gray-700 shadow-md rounded-md overflow-hidden",children:[d===!0?s.jsx("div",{className:" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:s.jsx(C,{variant:typeof i=="string"?6:2,children:i&&s.jsx("div",{className:"flex-col text-center",children:typeof i=="string"?s.jsx("p",{className:"text-red-500 font-semibold text-base",children:i}):s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"text-gray-700 text-lg",children:i.name}),s.jsx("p",{className:"text-gray-700 text-lg",children:i.nis}),s.jsx("p",{className:"text-green-500 font-bold text-2xl",children:i.status})]})})})}):s.jsx("video",{ref:u,className:"absolute inset-0 w-full h-full object-cover",playsInline:!0}),s.jsxs("div",{className:"absolute inset-[8.25%] w-5/6 h-5/6 pointer-events-none",children:[s.jsx("div",{className:"absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white"}),s.jsx("div",{className:"absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-white"}),s.jsx("div",{className:"absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white"}),s.jsx("div",{className:"absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white"})]})]}),s.jsx("audio",{ref:e,src:P,preload:"auto"})]})},A=()=>{const[u,e]=y.useState(new Date);y.useEffect(()=>{const r=setInterval(()=>{e(new Date)},1e3);return()=>{clearInterval(r)}},[]);const t=r=>r.toLocaleDateString("id-ID",{day:"2-digit",timeZone:"Asia/Jakarta"}),a=r=>r.toLocaleDateString("id-ID",{month:"long",year:"numeric",timeZone:"Asia/Jakarta"}),i=r=>r.toLocaleTimeString("id-ID",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",timeZone:"Asia/Jakarta"});return s.jsxs("div",{className:"flex items-center",children:[s.jsx("span",{className:"font-semibold text-2xl mr-3",children:t(u)}),s.jsxs("span",{className:"mr-2",children:[a(u),","]}),s.jsxs("span",{className:"",children:[i(u)," WIB"]})]})},F=()=>{const{state:u,dispatch:e}=y.useContext(j);return s.jsxs("div",{className:"border-2 border-primary rounded-full p-2 text-medium text-primary",children:[u.studentList.filter(t=>t.status==="Hadir").length,"/",u.studentList.length]})},W=()=>s.jsxs("div",{className:"card-basic rounded-2xl mb-0 justify-between items-center",children:[s.jsx(A,{}),s.jsx(F,{})]}),V=()=>{const{state:u,dispatch:e}=y.useContext(j),t=y.useRef(u.studentList),{isLoading:a,error:i,sendRequest:r}=O(),d=async n=>{try{const c="http://localhost:5000/api/attendances/",w=JSON.stringify({updates:n});console.log(w);const h=await r(c,"PATCH",w,{"Content-Type":"application/json"});console.log("Successfully updated statuses:",h)}catch(c){console.error("Error updating statuses:",c)}};y.useEffect(()=>{const n=[];u.studentList.forEach((c,w)=>{const h=t.current[w];h&&(h.status!==c.status||h.attributes!==c.attributes||h.notes!==c.notes)&&n.push({attendanceId:c._id,status:c.status,attributes:c.attributes,notes:c.notes,timestamp:c.timestamp})}),n.length>0&&d(n),t.current=u.studentList},[u.studentList]);const m=(n,c,w=Date.now())=>{e({type:"SET_STATUS",payload:{id:n,newStatus:c,timestamp:w}})},g=(n,c)=>{e({type:"SET_ATTRIBUTE",payload:{id:n,newAttributes:c}})},x=n=>{e({type:"TOGGLE_SELECTED",payload:{id:n}})},v=()=>{e({type:"TOGGLE_SELECT_ALL"})},p=(n,c=Date.now())=>{e({type:"APPLY_BULK_STATUS",payload:{newStatus:n,timestamp:c}})},l=n=>{switch(n){case"Hadir":return"bg-blue-500/50";case"Terlambat":return"bg-yellow-500/50";case"Sakit":return"bg-violet-500/50";case"Izin":return"bg-orange-500/50";default:return"bg-red-500/50"}};return s.jsxs("div",{className:"p-4 space-y-4 bg-white rounded-2xl",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("h1",{className:"text-lg font-medium",children:"Daftar Hadir"}),u.studentList.length!==0&&(a?s.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[s.jsx(M,{size:24,className:"animate-spin"}),s.jsx("span",{className:"text-xs text-gray-600",children:"Menyimpan otomatis..."})]}):i?s.jsx(L,{icon:"mdi:cloud-alert-outline",width:"24",height:"24"}):s.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[s.jsx(L,{icon:"ci:cloud-check",width:"24",height:"24"}),s.jsx("span",{className:"text-xs text-gray-600",children:"Perubahan tersimpan"})]}))]}),u.studentList.length!==0?s.jsxs("div",{className:"inline-flex items-center",children:[s.jsxs("label",{className:"flex items-center cursor-pointer relative",htmlFor:"check-2",children:[s.jsx("input",{type:"checkbox",checked:u.selectAll,onChange:v,className:"peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary",id:"check-2"}),s.jsx("span",{className:"absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:s.jsx(D,{})})]}),s.jsx("label",{className:"cursor-pointer ml-2 text-sm",htmlFor:"check-2",children:"Pilih Semua"})]}):s.jsx("div",{className:"italic text-gray-500 mt-2",children:"Daftar hadir kosong"}),s.jsx("div",{className:"flex flex-col",children:u.studentList.map(n=>s.jsxs("div",{className:`p-4 mx-[-1rem] min-h-20 flex items-center gap-4 border-b ${l(n.status)} transition-all duration-500`,children:[s.jsxs("label",{className:"flex items-center cursor-pointer relative",htmlFor:n.studentId.nis,children:[s.jsx("input",{type:"checkbox",checked:!!n.isSelected,onChange:()=>x(n.studentId.nis),className:"peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary",id:n.studentId.nis,disabled:n.status==="Hadir"||n.status==="Terlambat"}),s.jsx("span",{className:"absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",children:s.jsx(D,{})})]}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex gap-2 items-center",children:[s.jsx("img",{src:`http://localhost:5000/api/${n.studentId.image}`,alt:"Profile",className:"rounded-full size-10 shrink-0"}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("div",{className:"uppercase",children:n.studentId.name}),s.jsx("div",{className:"text-xs text-gray-800",children:n.studentId.nis})]})]}),s.jsxs("div",{className:"space-x-2",children:[s.jsxs("select",{value:n.status||"",onChange:c=>m(n.studentId.nis,c.target.value),className:"mt-2 border p-1 rounded-full active:ring-2 active:ring-blue-300",disabled:n.status==="Hadir"||n.status==="Terlambat",children:[s.jsx("option",{value:null,children:"Tanpa Keterangan"}),s.jsx("option",{value:"Hadir",disabled:!0,children:"Hadir"}),s.jsx("option",{value:"Terlambat",disabled:!0,children:"Terlambat"}),s.jsx("option",{value:"Sakit",children:"Sakit"}),s.jsx("option",{value:"Izin",children:"Izin"})]}),s.jsxs("select",{value:n.attributes||"",onChange:c=>g(n.studentId.nis,c.target.value==="true"),className:"mt-2 border p-1 rounded-full active:ring-2 active:ring-blue-300",children:[s.jsx("option",{value:"false",children:"Atribut Tidak Lengkap"}),s.jsx("option",{value:"true",children:"Atribut Lengkap"})]})]})]})]},n.studentId.nis))}),u.studentList.length!==0&&s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{onClick:()=>p("Sakit"),className:"btn-mobile-secondary-outline",disabled:u.studentList.filter(n=>n.isSelected===!0).length===0,children:"Sakit"}),s.jsx("button",{onClick:()=>p("Izin"),className:"btn-mobile-danger-outline",disabled:u.studentList.filter(n=>n.isSelected===!0).length===0,children:"Izin"})]})})]})},J=()=>{const{error:u,sendRequest:e,setError:t}=O(),[a,i]=y.useState(!0),{state:r,dispatch:d,fetchAttendanceData:m}=y.useContext(j),g=N(),v=y.useContext(T).userClassIds,p=R().classId;y.useEffect(()=>{i(!0);let n;p?(n=new Date().toLocaleDateString("en-CA"),m(p,n,d)):g("/scan/select-class"),i(!1)},[v,p]);const l=async()=>{if(i(!0),r.studentList.length===0){const n="http://localhost:5000/api/attendances/create-new-attendances",c=JSON.stringify({classId:p});try{await e(n,"POST",c,{"Content-Type":"application/json"});const w=new Date().toLocaleDateString("en-CA");await m(p,w,d),g(`/scan/class/${p}`,{replace:!0})}catch(w){console.error(w)}}i(!1)};return console.log(r),s.jsxs("div",{className:"flex flex-col pb-24",children:[s.jsx(C,{variant:2,children:s.jsx(W,{})}),a&&s.jsx("div",{className:"flex justify-center mt-16 ",children:s.jsx(I,{size:32})}),!a&&s.jsxs(C,{variant:2,children:[r.studentList.length===0&&!a&&s.jsxs("div",{className:"card-basic m-4 justify-between items-center flex flex-col gap-2",children:[s.jsx("button",{onClick:()=>l(),className:"btn-mobile-primary rounded-full w-full",disabled:r.isTeachingGroupYearActivated===!1,children:"Buat daftar hadir hari ini"}),r.isTeachingGroupYearActivated===!1?s.jsx("span",{className:"text-danger",children:"Tahun ajaran belum aktif, hubungi Kelompok Ajar!"}):""]}),r.studentList.length!==0&&!a&&s.jsx("div",{className:"card-basic m-4",children:s.jsx(H,{})}),s.jsx(V,{})]})]})};export{J as default};
