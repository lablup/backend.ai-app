import{Z as e,$ as n,a0 as a,a1 as r,a2 as t}from"./backend-ai-webui-e150009d.js";function s(s,u){const c=s.queryGroup(),o=c.indexOf(s),l=function(e,s,u){if(0==e.length)return null;switch(u){case t:case r:return s+1>e.length-1?0:s+1;case a:case n:return s-1<0?e.length-1:s-1}return null}(c,o,u.code);if(null!=l){const n=c[l];s.rowToElement(n),e(u)}}export{s as r};
