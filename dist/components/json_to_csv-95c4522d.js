class e{static flatten(e){if(!e||!e.length)return;const t=Object.keys(e[0]);e.map(e=>{t.map(t=>{let n=null===e[t]||void 0===e[t]?"":e[t].toString();if("[object Object]"===n&&(n=JSON.stringify(e[t])),n.search(/("|,|\n)/g)>=0)if("["===n[0]){let i=JSON.parse(n);"groups"===t?i.map(n=>{e[t+".name"]=n.name}):i.map(n=>{e[t+"."+n]=n}),delete e[t]}else if("{"===n[0]){let i=JSON.parse(n);Object.keys(i).map(n=>{i[n]=["cpu","mem","cuda_shares","cuda_device"].includes(n)&&"string"==typeof i[n]?"":i[n],e[t+"."+n]=i[n]}),delete e[t]}else n.includes("GMT")?e[t]=n.split(",").join(""):n.includes(",")&&(n=n.split(","))})})}static exportToCsv(t,n){if(!n||!n.length)return;e.flatten(n);const i=Object.keys(n[0]),s=i.join(",")+"\n"+n.map(e=>i.map(t=>{let n="";return e[t]&&"object"==typeof e[t]?(n=JSON.stringify(e[t]),n=n.replace(/"/g,'""'),n.search(/("|,|\n)/g)>=0&&(n=`"${n}"`)):n=null===e[t]||void 0===e[t]?"":e[t].toString(),n}).join(",")).join("\n"),a=new Blob([s],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(a,t);else{const e=document.createElement("a");if(void 0!==e.download){const n=URL.createObjectURL(a);e.setAttribute("href",n),e.setAttribute("download",t),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)}}}}export{e as J};
