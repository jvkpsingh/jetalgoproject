import{u as g,R as x,j as e,M as j,B as u,T as p,a1 as b,ah as v,Y as y,Z as f,au as A,$ as k,D as C,G as s}from"./index-Dqf28ZN6.js";import{C as o}from"./Card-CVcDx-Ru.js";import{_ as T}from"./react-apexcharts.min-BcDk2032.js";import{C as F,A as I,p as D,a as w,P as B}from"./index-B7ujbiOV.js";import{G as R,T as S,M,A as L}from"./TrendingUp-bHEAQAyX.js";import{G as P,P as c,A as O}from"./ActivityLog-BL8AcH-L.js";import"./ArchiveOutlined-Yt_HSPpC.js";const m=[{month:"January",trades:120,revenue:15e3},{month:"February",trades:140,revenue:18e3},{month:"March",trades:100,revenue:12e3},{month:"April",trades:160,revenue:2e4},{month:"May",trades:180,revenue:22e3},{month:"June",trades:150,revenue:19e3},{month:"July",trades:130,revenue:16e3},{month:"August",trades:170,revenue:21e3},{month:"September",trades:110,revenue:14e3},{month:"October",trades:190,revenue:23e3},{month:"November",trades:200,revenue:24e3},{month:"December",trades:220,revenue:26e3}],$=()=>{const r=g(),[a,n]=x.useState("year"),i=[{value:"year",label:"This Year"}],l={chart:{type:"line",toolbar:{show:!1},zoom:{enabled:!1}},colors:[r.palette.primary.main,r.palette.secondary.main],stroke:{curve:"smooth",width:3},markers:{size:5,strokeWidth:2,hover:{size:7}},dataLabels:{enabled:!1},xaxis:{categories:m.map(t=>t.month),labels:{style:{colors:r.palette.text.primary}}},yaxis:[{title:{text:"Number of Trades",style:{color:r.palette.primary.main}},labels:{style:{colors:r.palette.text.primary}}},{opposite:!0,title:{text:"Revenue (in Thousands)",style:{color:r.palette.secondary.main}},labels:{style:{colors:r.palette.text.primary},formatter:t=>`₹${t/1e3}k`}}],tooltip:{theme:"dark",shared:!0,intersect:!1,y:[{formatter:t=>`${t} trades`},{formatter:t=>`₹${t/1e3}k`}]},grid:{borderColor:r.palette.divider},legend:{show:!0,position:"top",horizontalAlign:"right",labels:{colors:r.palette.text.primary}}},d=[{name:"Trades",data:m.map(t=>t.trades)},{name:"Revenue",data:m.map(t=>t.revenue)}];return e.jsxs(j,{children:[e.jsxs(u,{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:"center",mb:2,children:[e.jsx(p,{variant:"h5",sx:{fontWeight:"bold",color:"primary.main",mb:{xs:1,sm:0}},children:"Monthly Trades and Revenue"}),e.jsx(b,{select:!0,value:a,onChange:t=>n(t.target.value),size:"small",sx:{width:{xs:"100%",sm:150}},children:i.map(t=>e.jsx(v,{value:t.value,children:t.label},t.value))})]}),e.jsx(T,{options:l,series:d,type:"line",height:350})]})},h=()=>{const r=[{id:1,message:"New broker registered!",icon:e.jsx(R,{})},{id:2,message:"Trade volume exceeded last month by 20%.",icon:e.jsx(S,{})},{id:3,message:"Revenue report for the last quarter is now available.",icon:e.jsx(M,{})},{id:4,message:"New client acquisition: 50% increase in referrals.",icon:e.jsx(L,{})}];return e.jsxs(u,{sx:{p:2,bgcolor:"background.paper",borderRadius:1,boxShadow:1},children:[e.jsx(p,{variant:"h6",gutterBottom:!0,children:"Trade and Revenue Notifications"}),e.jsx(y,{children:r.map(a=>e.jsxs(x.Fragment,{children:[e.jsxs(f,{children:[e.jsx(A,{children:a.icon}),e.jsx(k,{primary:a.message})]}),e.jsx(C,{})]},a.id))})]})};F.register(I,D,w);const z={labels:["Upstox","Zerodha","Kotak","HDFC Securities","ICICI Direct","Angel Broking","Sharekhan","Others"],datasets:[{label:"Broker Accounts",data:[400,300,300,250,220,150,180,200],backgroundColor:["#0088FE","#00C49F","#FFBB28","#FF8042","#FF6384","#36A2EB","#FFCE56","#C0C0C0"],borderColor:"#fff",borderWidth:2}]},G=()=>e.jsxs("div",{children:[e.jsx("h3",{style:{textAlign:"center"},children:"Broker Account Percentages"}),e.jsx(B,{data:z,options:{responsive:!0,plugins:{legend:{position:"top"},tooltip:{callbacks:{label:r=>{const a=r.label||"",n=r.raw||0,i=r.chart.data.datasets[0].data.reduce((d,t)=>d+t,0),l=(n/i*100).toFixed(2);return`${a}: ${n} (${l}%)`}}}}}})]}),q=()=>e.jsxs(u,{sx:{padding:2,bgcolor:"#f4f4f4",minHeight:"100vh"},children:[e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:12,sm:6,md:3,children:e.jsx(o,{title:"Top Broker",value:"Angel One",icon:e.jsx(P,{}),colorSchemeIndex:0,background:"linear-gradient(45deg, #42A5F5 30%, #0D47A1 90%)"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:3,children:e.jsx(o,{title:"Total Holding",value:"₹37,00,000",icon:e.jsx(c,{}),colorSchemeIndex:0,background:"linear-gradient(45deg, #42A5F5 30%, #0D47A1 90%)"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:3,children:e.jsx(o,{title:"Short Term Trades",value:"25%",icon:e.jsx(c,{}),colorSchemeIndex:0,background:"linear-gradient(45deg, #42A5F5 30%, #0D47A1 90%)"})}),e.jsx(s,{item:!0,xs:12,sm:6,md:3,children:e.jsx(o,{title:"Long Positions",value:"37%",icon:e.jsx(c,{}),colorSchemeIndex:0,background:"linear-gradient(45deg, #42A5F5 30%, #0D47A1 90%)"})})]}),e.jsxs(s,{container:!0,spacing:2,sx:{mt:2},children:[e.jsx(s,{item:!0,xs:12,md:8,children:e.jsx($,{})}),e.jsx(s,{item:!0,xs:12,md:4,children:e.jsx(G,{})})]}),e.jsxs(s,{container:!0,spacing:2,sx:{mt:2},children:[e.jsx(s,{item:!0,xs:12,md:4,children:e.jsx(h,{})}),e.jsx(s,{item:!0,xs:12,md:4,children:e.jsx(O,{})}),e.jsx(s,{item:!0,xs:12,md:4,children:e.jsx(h,{})})]})]});export{q as default};
