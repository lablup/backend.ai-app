import{y as e,N as n,G as t}from"./backend-ai-console-52da7ce1.js";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=new WeakMap,o=e(e=>o=>{if(!(o instanceof n))throw new Error("unsafeHTML can only be used in text bindings");const s=a.get(o);if(void 0!==s&&t(e)&&e===s.value&&o.value===s.fragment)return;const r=document.createElement("template");r.innerHTML=e;const c=document.importNode(r.content,!0);o.setValue(c),a.set(o,{value:e,fragment:c})});export{o as u};
