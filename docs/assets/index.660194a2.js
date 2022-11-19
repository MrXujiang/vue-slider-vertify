import{r as de,a as oe,o as b,c as E,b as c,F as fe,d as ve,u as p,e as he,f as pe,w as me,g as _e,t as A,h as ge,i as ye,j as we,k as v,l as Ce,m as ke,n as k,p as Ne,q as be,P as Re,s as Se,v as Ie,x as $e,y as De}from"./vendor.6cf2b239.js";const Te=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function d(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(t){if(t.ep)return;t.ep=!0;const l=d(t);fetch(t.href,l)}};Te();var Ee=[{compName:"Vertify",compZhName:"\u6ED1\u52A8\u9A8C\u8BC1\u7801",compDesc:"\u8FD9\u662F\u4E00\u4E2A\u6ED1\u52A8\u9A8C\u8BC1\u7801",compClassName:"vertify"}];const Me={class:"xi-doc"},Le={setup(o){const r=de({links:Ee.map(d=>({path:`/components/${d.compName}`,name:d.compZhName}))});return(d,i)=>{const t=oe("router-link"),l=oe("router-view");return b(),E("div",Me,[c("aside",null,[(b(!0),E(fe,null,ve(p(r).links,(n,f)=>(b(),pe(t,{key:f,to:n.path},{default:me(()=>[_e(A(n.name),1)]),_:2},1032,["to"]))),128))]),c("main",null,[he(l)])])}}},Pe="modulepreload",se={},xe="/MY-Kit/",Xe=function(r,d){return!d||d.length===0?r():Promise.all(d.map(i=>{if(i=`${xe}${i}`,i in se)return;se[i]=!0;const t=i.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${l}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":Pe,t||(n.as="script",n.crossOrigin=""),n.href=i,document.head.appendChild(n),t)return new Promise((f,N)=>{n.addEventListener("load",f),n.addEventListener("error",N)})})).then(()=>r())},Ae=[{title:"\u6ED1\u52A8\u9A8C\u8BC1\u7801",name:"Vertify",path:"/components/Vertify",component:()=>Xe(()=>import("./README.f43c9627.js"),["assets/README.f43c9627.js","assets/vendor.6cf2b239.js"])}],Be={history:ge(),routes:Ae,scrollBehavior(o,r){if(o.path!==r.path)return{top:0}}},Ve=ye(Be);function B(o,r){return Math.round(Math.random()*(r-o)+o)}function ae(o,r){return o+r}function Oe(o){return o*o}var re=(o,r)=>{const d=o.__vccOpts||o;for(const[i,t]of r)d[i]=t;return d};const V=o=>(Ne("data-v-3d8a32f9"),o=o(),be(),o),Ye={className:"canvasArea"},qe=["width","height"],Fe=["width","height"],We=["className"],je=V(()=>c("div",{className:"sliderIcon"},"\u2192",-1)),He=[je],Ke={className:"sliderText"},Ue=V(()=>c("div",{className:"loadingIcon"},null,-1)),Ze=V(()=>c("span",null,"\u52A0\u8F7D\u4E2D...",-1)),ze=[Ue,Ze],Ge=we({props:{width:{default:320},visible:{type:Boolean,default:!0},height:{default:160},refreshIcon:{default:"http://cdn.dooring.cn/dr/icon12.png"},l:{default:42},r:{default:9},imgUrl:{default:""},text:{default:""},onDraw:null,onCustomVertify:null,onBeforeRefresh:null,onSuccess:null,onFail:null,onRefresh:null},emits:["click"],setup(o){const r=o,{text:d,l:i,r:t,imgUrl:l,width:n,height:f,visible:N,onBeforeRefresh:Y,onRefresh:q,onFail:F,onSuccess:W,onCustomVertify:j,onDraw:H}=r,R=v(!1),S=v(0),_=v("sliderContainer"),K=v(d),M=v(null),m=v(null),L=v(null),I=v(!1),U=v([]),P=v(0),Z=v(0),g=v(0),$=v(0),y=Math.PI,w=i+t*2+3,z=(e,s,a,u)=>{e.beginPath(),e.moveTo(s,a),e.arc(s+i/2,a-t+2,t,.72*y,2.26*y),e.lineTo(s+i,a),e.arc(s+i+t-2,a+i/2,t,1.21*y,2.78*y),e.lineTo(s+i,a+i),e.lineTo(s,a+i),e.arc(s+t-2,a+i/2,t+.4,2.76*y,1.24*y,!0),e.lineTo(s,a),e.lineWidth=2,e.fillStyle="rgba(255, 255, 255, 0.7)",e.strokeStyle="rgba(255, 255, 255, 0.7)",e.stroke(),e.globalCompositeOperation="destination-over",u==="fill"?e.fill():e.clip()},x=()=>l||`https://picsum.photos/id/${B(0,1084)}/${n}/${f}`,le=e=>{const s=new Image;return s.crossOrigin="Anonymous",s.onload=e,s.onerror=()=>{s.setSrc(x())},s.setSrc=a=>{if(window.navigator.userAgent.indexOf("Trident")>-1){const h=new XMLHttpRequest;h.onloadend=function(C){const te=new FileReader;te.readAsDataURL(C.target.response),te.onloadend=function(X){var ne;s.src=(ne=X==null?void 0:X.target)==null?void 0:ne.result}},h.open("GET",a),h.responseType="blob",h.send()}else s.src=a},s.setSrc(x()),s},ce=e=>{const s=M.value.getContext("2d"),a=m.value.getContext("2d");g.value=B(w+10,n-(w+10)),$.value=B(10+t*2,f-(w+10)),z(s,g.value,$.value,"fill"),z(a,g.value,$.value,"clip"),s.drawImage(e,0,0,n,f),a.drawImage(e,0,0,n,f);const u=$.value-t*2-1,h=a.getImageData(g.value-3,u,w,w);m.value.width=w,a.putImageData(h,0,u)},G=()=>{const e=le(()=>{R.value=!1,ce(e)});L.value=e},D=()=>{const e=M.value.getContext("2d"),s=m.value.getContext("2d");S.value=0,_.value="sliderContainer",m.value.width=n,m.value.style.left=0+"px",e.clearRect(0,0,n,f),s.clearRect(0,0,n,f),Y&&Y(),R.value=!0,L.value.setSrc(x())},ue=()=>{D(),typeof q=="function"&&q()},J=()=>{const e=U.value,s=e.reduce(ae)/e.length,a=e.map(C=>C-s),u=Math.sqrt(a.map(Oe).reduce(ae)/e.length),h=parseInt(m.value.style.left);return{spliced:Math.abs(h-g.value)<10,verified:u!==0,left:h,destX:g.value}},T=function(e){P.value=e.clientX||e.touches[0].clientX,Z.value=e.clientY||e.touches[0].clientY,I.value=!0},Q=e=>{if(!I.value)return!1;e.preventDefault();const s=e.clientX||e.touches[0].clientX,a=e.clientY||e.touches[0].clientY,u=s-P.value,h=a-Z.value;if(u<0||u+38>=n)return!1;S.value=u;const C=(n-40-20)/(n-40)*u;m.value.style.left=C+"px",_.value="sliderContainer sliderContainer_active",U.value.push(h),H&&H(C)},ee=e=>{if(!I.value||(I.value=!1,(e.clientX||e.changedTouches[0].clientX)===P.value))return!1;_.value="sliderContainer";const{spliced:a,verified:u}=j?j(J()):J();a?u?(_.value="sliderContainer sliderContainer_success",typeof W=="function"&&W()):(_.value="sliderContainer sliderContainer_fail",K.value="\u8BF7\u518D\u8BD5\u4E00\u6B21",D()):(_.value="sliderContainer sliderContainer_fail",typeof F=="function"&&F(),setTimeout(D.bind(this),1e3))};return Ce(()=>{G()}),ke(()=>N,()=>{N&&(L.value?D():G())}),(e,s)=>(b(),E("div",{className:"vertifyWrap",style:k({width:p(n)+"px",margin:"0 auto",display:p(N)?"":"none"}),onMousemove:Q,onMouseup:ee,onTouchmove:Q,onTouchend:ee},[c("div",Ye,[c("canvas",{ref:(a,u)=>{u.canvasRef=a,M.value=a},width:p(n),height:p(f)},null,8,qe),c("canvas",{ref:(a,u)=>{u.blockRef=a,m.value=a},className:"block",width:p(n),height:p(f),onMousedown:T,onTouchstart:T},null,40,Fe)]),c("div",{className:_.value,style:k({pointerEvents:R.value?"none":"auto",width:p(n)+"px"})},[c("div",{className:"sliderMask",style:k({width:S.value+"px"})},[c("div",{className:"slider",style:k({left:S.value+"px"}),onMousedown:T,onTouchstart:T},He,36)],4),c("div",Ke,A(K.value),1)],12,We),c("div",{className:"refreshIcon",onClick:ue,style:k({backgroundImage:`url(${o.refreshIcon})`})},null,4),c("div",{className:"loadingContainer",style:k({width:p(n)+"px",height:p(f)+"px",display:R.value?"":"none"})},ze,4)],36))}});var Je=re(Ge,[["__scopeId","data-v-3d8a32f9"]]);const O={install(o){o.component("vertify",Je)}},Qe={install(o){var r;(r=O.install)==null||r.call(O,o)}};const et={props:{compName:{type:String,default:"",require:!0},demoName:{type:String,default:"",require:!0}},data(){return{sourceCode:"",codeVisible:!1}},computed:{previewSourceCode(){return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g,"'@tencent/my-kit'")}},async mounted(){this.compName&&this.demoName&&(this.sourceCode=await fetch(`/MY-Kit/packages/${this.compName}/docs/${this.demoName}.vue`).then(o=>o.text())),await this.$nextTick(),Re.highlightAll()},methods:{async copyCode(){},showSourceCode(){this.codeVisible=!this.codeVisible}}},tt={class:"mykit-preview"},nt={class:"source-code"},ot={class:"language-html"},st={class:"language-html"},at={class:"preview-bottom"};function rt(o,r,d,i,t,l){return b(),E("div",tt,[c("section",null,[Se(o.$slots,"default")]),Ie(c("div",nt,[c("pre",ot,[c("code",st,A(l.previewSourceCode),1)])],512),[[$e,t.codeVisible]]),c("div",at,[c("span",{name:"Code",onClick:r[0]||(r[0]=(...n)=>l.showSourceCode&&l.showSourceCode(...n))},"\u67E5\u770B\u4EE3\u7801")])])}var it=re(et,[["render",rt]]);const ie=De(Le);ie.component("Preview",it);ie.use(Qe).use(Ve).mount("#app");