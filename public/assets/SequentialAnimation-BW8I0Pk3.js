import{j as a,R as o}from"./index-DjI7ZG_S.js";import{m as e}from"./proxy-B0VEXGqS.js";const l=({variant:t=1,children:n})=>{const s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}};let i;switch(t){case 1:i={hidden:{opacity:0,y:-25},visible:{opacity:1,y:0}};break;case 2:i={hidden:{opacity:0,y:25},visible:{opacity:1,y:0}};break;case 3:i={hidden:{opacity:0,x:-25},visible:{opacity:1,x:0}};break;case 4:i={hidden:{opacity:0,x:25},visible:{opacity:1,x:0}};break;case 5:i={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}};break;case 6:i={hidden:{opacity:0},visible:{opacity:1,x:[0,-10,10,-10,10,0],transition:{duration:.5}}};break;default:i={hidden:{opacity:0,y:-25},visible:{opacity:1,y:0}}}return a.jsx(e.div,{variants:s,initial:"hidden",animate:"visible",className:"sequential-animation-container",children:o.Children.map(n,c=>a.jsx(e.div,{variants:i,children:c}))})};export{l as S};
