import{Z as e,$ as n,a0 as a,a1 as r,a2 as t}from"./backend-ai-webui-db9b3c72.js";function s(s,c){const u=s.queryGroup(),o=u.indexOf(s),l=function(e,s,c){if(0==e.length)return null;switch(c){case t:case r:return s+1>e.length-1?0:s+1;case a:case n:return s-1<0?e.length-1:s-1}return null}(u,o,c.code);if(null!=l){const n=u[l];s.rowToElement(n),e(c)}}export{s as r};
