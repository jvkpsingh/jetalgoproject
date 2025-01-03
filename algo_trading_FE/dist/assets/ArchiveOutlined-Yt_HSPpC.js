import{ac as H,aw as z,aK as w,a0 as A,a4 as d,aL as O,aM as C,r as U,ad as q,a8 as D,j as a,a9 as E,ab as P,a as V,W as G,G as n,a2 as c,a3 as p}from"./index-Dqf28ZN6.js";function I(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function L(t){return parseFloat(t)}function X(t){return H("MuiSkeleton",t)}z("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const K=["animation","className","component","height","style","variant","width"];let u=t=>t,j,_,y,k;const N=t=>{const{classes:e,variant:r,animation:i,hasChildren:s,width:h,height:o}=t;return P({root:["root",r,i,s&&"withChildren",s&&!h&&"fitContent",s&&!o&&"heightAuto"]},X,e)},W=w(j||(j=u`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),B=w(_||(_=u`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),F=A("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],r.animation!==!1&&e[r.animation],r.hasChildren&&e.withChildren,r.hasChildren&&!r.width&&e.fitContent,r.hasChildren&&!r.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const r=I(t.shape.borderRadius)||"px",i=L(t.shape.borderRadius);return d({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:O(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${r}/${Math.round(i/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&C(y||(y=u`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),W),({ownerState:t,theme:e})=>t.animation==="wave"&&C(k||(k=u`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),B,(e.vars||e).palette.action.hover)),l=U.forwardRef(function(e,r){const i=q({props:e,name:"MuiSkeleton"}),{animation:s="pulse",className:h,component:o="span",height:g,style:R,variant:M="text",width:$}=i,x=D(i,K),b=d({},i,{animation:s,component:o,variant:M,hasChildren:!!x.children}),S=N(b);return a.jsx(F,d({as:o,ref:r,className:E(S.root,h),ownerState:b},x,{style:d({width:$,height:g},R)}))}),lt=()=>a.jsx(V,{children:a.jsx(G,{children:a.jsxs(n,{container:!0,direction:"column",children:[a.jsx(n,{item:!0,children:a.jsxs(n,{container:!0,justifyContent:"space-between",children:[a.jsx(n,{item:!0,children:a.jsx(l,{variant:"rectangular",width:44,height:44})}),a.jsx(n,{item:!0,children:a.jsx(l,{variant:"rectangular",width:34,height:34})})]})}),a.jsx(n,{item:!0,children:a.jsx(l,{variant:"rectangular",sx:{my:2},height:40})}),a.jsx(n,{item:!0,children:a.jsx(l,{variant:"rectangular",height:30})})]})})});var v={},T=p;Object.defineProperty(v,"__esModule",{value:!0});var J=v.default=void 0,Q=T(c()),Y=a;J=v.default=(0,Q.default)((0,Y.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz");var f={},Z=p;Object.defineProperty(f,"__esModule",{value:!0});var tt=f.default=void 0,et=Z(c()),at=a;tt=f.default=(0,et.default)((0,at.jsx)("path",{d:"M13 5v6h1.17L12 13.17 9.83 11H11V5zm2-2H9v6H5l7 7 7-7h-4zm4 15H5v2h14z"}),"GetAppOutlined");var m={},rt=p;Object.defineProperty(m,"__esModule",{value:!0});var it=m.default=void 0,nt=rt(c()),st=a;it=m.default=(0,nt.default)((0,st.jsx)("path",{d:"m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M6.24 5h11.52l.81.97H5.44zM5 19V8h14v11zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"}),"ArchiveOutlined");export{lt as E,l as S,tt as a,it as b,J as d};
