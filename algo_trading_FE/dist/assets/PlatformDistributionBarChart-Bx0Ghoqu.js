import{j as l}from"./index-Dqf28ZN6.js";import{C as r,b as n,c as d,B as p,e as i,p as a,a as o,f as g,A as c,P as u}from"./index-B7ujbiOV.js";r.register(n,d,p,i,a,o);const F=()=>{const e={labels:["Week 1","Week 2","Week 3","Week 4"],datasets:[{label:"Logins",data:[300,450,600,700],backgroundColor:"#42A5F5"},{label:"Trades",data:[240,300,450,500],backgroundColor:"#66BB6A"}]},t={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"User Activity Trend (Logins vs Trades)"}},scales:{y:{beginAtZero:!0}}};return l.jsx(g,{data:e,options:t})};r.register(c,a,o);const v=()=>{const e={labels:["North America","Europe","Asia","Other"],datasets:[{data:[400,300,300,200],backgroundColor:["#0088FE","#00C49F","#FFBB28","#FF8042"],hoverOffset:4}]},t={responsive:!0,plugins:{legend:{position:"top"},tooltip:{callbacks:{label:s=>`${s.label}: ${s.raw}`}}}};return l.jsx(u,{data:e,options:t})};r.register(c,a,o,i);const A=()=>{const e={labels:["Active Users","Inactive Users","New Users","Churned Users"],datasets:[{label:"User Status",data:[8500,1e3,2500,700],backgroundColor:["#00C49F","#FF8042","#FFBB28","#0088FE"],borderColor:"#fff",borderWidth:2}]},t={responsive:!0,plugins:{title:{display:!0,text:"User Status Overview",font:{size:20},padding:{bottom:20}},legend:{position:"top"},tooltip:{callbacks:{label:s=>`${s.label}: ${s.raw}`}}}};return l.jsx(u,{data:e,options:t})};r.register(n,d,p,i,a,o);r.register(n,d,p,i,a,o);export{F as A,v as D,A as U};
