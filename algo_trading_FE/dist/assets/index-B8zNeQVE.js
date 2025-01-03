import{c as x,j as e,r as l,m,k as j,d as k,G as r,g as f,T as a,n,B as v,a as y,W as C,ae as B,f as S}from"./index-Dqf28ZN6.js";const L=x(e.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),A=x(e.jsx("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"}),"Logout"),R=({text:o})=>{const[i,h]=l.useState(!0),d=m(),s=j(t=>t.customization.availableBrokers||[]);l.useEffect(()=>{h(!1)},[]);const c=()=>d("/dashboard/broker/add-broker"),p=()=>{g.mutate()},u="https://backend.jetalgosoftware.com",g=k(()=>S.delete(`${u}/broker/upstox/logout/upstox?uuid=lqjenfljwrben`,{headers:{accesstoken:localStorage.getItem("upstox_access_token")}}),{onSuccess:()=>{dispatch({type:SET_AVIALABLE_BROKERS,payload:[]}),localStorage.removeItem("upstox_access_token"),d("/dashboard/broker/add-broker")},onError:t=>{console.error("Logout Error:",t)}});return e.jsxs(r,{container:!0,spacing:f,justifyContent:"center",alignContent:"flex-start",sx:{minHeight:"80vh",pt:2,borderLeft:1,borderColor:"grey.400",height:"FitScreen"},children:[" ",e.jsxs(r,{container:!0,item:!0,justifyContent:"space-between",alignItems:"center",mb:2,px:3,sx:{position:"sticky",top:0,zIndex:1,height:"40px"},children:[e.jsx(a,{variant:"h3",fontWeight:"bold",color:"primary.main",sx:{paddingTop:1},children:"Brokers"}),s.length!=0?e.jsx(n,{variant:"contained",color:"primary",startIcon:e.jsx(L,{}),onClick:c,sx:{borderRadius:2,padding:"6px 12px",boxShadow:"none",backgroundColor:"#123591","&:hover":{backgroundColor:"#0e265a"}},children:"Add Broker"}):null]}),s.length===0?e.jsx(w,{handleAddBroker:c}):e.jsx(r,{item:!0,xs:12,children:e.jsx(r,{container:!0,spacing:3,children:s.map((t,b)=>e.jsx(r,{item:!0,xs:9,sm:6,md:4,children:e.jsx(E,{broker:t,handleLogout:p})},b))})})]})},w=({handleAddBroker:o})=>e.jsxs(r,{item:!0,xs:12,md:6,textAlign:"center",children:[e.jsx(v,{display:"flex",justifyContent:"center",mb:2,children:e.jsx("img",{src:"https://web.algorooms.com/static/media/broker.f7382bf4a577d51366641db39ab94138.svg",alt:"No Brokers",style:{maxWidth:"400px",height:"auto"},loading:"lazy"})}),e.jsx(a,{variant:"h6",gutterBottom:!0,children:"No Brokers found. Please Add brokers!"}),e.jsx(n,{sx:{border:"2px dashed gray",borderRadius:"4px",padding:"8px 16px","&:hover":{borderColor:"black"}},onClick:o,children:"+ Add Broker"})]}),E=({broker:o,handleLogout:i})=>e.jsxs(y,{sx:{borderRadius:4,boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)",transition:"transform 0.2s ease-in-out","&:hover":{transform:"translateY(-5px)",boxShadow:"0 8px 20px rgba(0, 0, 0, 0.2)"},textAlign:"center",padding:2,height:"200px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.jsx(C,{onClick:()=>navigate("/dashboard/broker/dashboard"),children:e.jsx(a,{variant:"h6",color:"primary.main",gutterBottom:!0,sx:{fontWeight:"bold",textTransform:"uppercase",letterSpacing:"1px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:o.broker})}),e.jsx(B,{sx:{justifyContent:"center"},children:e.jsx(n,{variant:"outlined",color:"error",size:"small",onClick:()=>i(),startIcon:e.jsx(A,{}),sx:{borderRadius:2,padding:"6px 12px"},children:"Log Out"})})]});export{R as default};
