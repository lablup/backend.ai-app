import{Z as t,r as e}from"./backend-ai-webui-37336f10.js";
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class i extends HTMLElement{static get version(){return"23.0.7"}}customElements.define("vaadin-lumo-styles",i);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const r=t=>class extends t{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"theme"===t&&this._setTheme(i)}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,s=[];function o(e,i,r={}){var o;e&&(o=e,h(customElements.get(o))&&console.warn(`The custom element definition for "${e}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),i=function(e=[]){return[e].flat(1/0).filter((e=>e instanceof t||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(i),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,i,r):s.push({themeFor:e,styles:i,include:r.include,moduleId:r.moduleId})}function n(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():s}function a(t=""){let e=0;return 0===t.indexOf("lumo-")||0===t.indexOf("material-")?e=1:0===t.indexOf("vaadin-")&&(e=2),e}function l(t){const e=[];return t.include&&[].concat(t.include).forEach((t=>{const i=n().find((e=>e.moduleId===t));i?e.push(...l(i),...i.styles):console.warn(`Included moduleId ${t} not found in style registry`)}),t.styles),e}function d(t){const e=t+"-default-theme",i=n().filter((i=>i.moduleId!==e&&function(t,e){return(t||"").split(" ").some((t=>new RegExp("^"+t.split("*").join(".*")+"$").test(e)))}(i.themeFor,t))).map((t=>({...t,styles:[...l(t),...t.styles],includePriority:a(t.moduleId)}))).sort(((t,e)=>e.includePriority-t.includePriority));return i.length>0?i:n().filter((t=>t.moduleId===e))}function h(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}const c=t=>class extends(r(t)){static finalize(){super.finalize();const t=this.prototype._template;t&&!h(this)&&function(t,e){const i=document.createElement("style");i.innerHTML=t.map((t=>t.cssText)).join("\n"),e.content.appendChild(i)}(this.getStylesForThis(),t)}static finalizeStyles(t){const e=this.getStylesForThis();return t?[t,...e]:e}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),e=(t?t.constructor.__themes:[])||[];this.__themes=[...e,...d(this.is)];const i=this.__themes.flatMap((t=>t.styles));return i.filter(((t,e)=>e===i.lastIndexOf(t)))}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,u=e`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,_=document.createElement("template");_.innerHTML=`<style>${u.toString().replace(":host","html")}</style>`,document.head.appendChild(_.content);const p=e`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;o("",p,{moduleId:"lumo-color"});o("",[p,e`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`],{moduleId:"lumo-color-legacy"});
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const m=document.createElement("template");m.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n',document.head.appendChild(m.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const f=e`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,g=document.createElement("template");g.innerHTML=`<style>${f.toString().replace(":host","html")}</style>`,document.head.appendChild(g.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const b=e`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,v=document.createElement("template");v.innerHTML=`<style>${b.toString().replace(":host","html")}</style>`,document.head.appendChild(v.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const y=e`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,w=document.createElement("template");w.innerHTML=`<style>${y.toString().replace(":host","html")}</style>`,document.head.appendChild(w.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const C=e`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`;o("",e`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`,{moduleId:"lumo-typography"});const x=document.createElement("template");x.innerHTML=`<style>${C.toString().replace(":host","html")}</style>`,document.head.appendChild(x.content),o("vaadin-checkbox",e`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='checkbox'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
      flex: none;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--lumo-size-m) / 2 + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"}),
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let A,P,S=/(url\()([^)]*)(\))/g,E=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function I(t,e){if(t&&E.test(t))return t;if("//"===t)return t;if(void 0===A){A=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",A="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),A)try{return new URL(t,e).href}catch(e){return t}return P||(P=document.implementation.createHTMLDocument("temp"),P.base=P.createElement("base"),P.head.appendChild(P.base),P.anchor=P.createElement("a"),P.body.appendChild(P.anchor)),P.base.href=e,P.anchor.href=t,P.anchor.href||t}function T(t,e){return t.replace(S,(function(t,i,r,s){return i+"'"+I(r.replace(/["']/g,""),e)+"'"+s}))}function O(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const z=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const R=z&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})();let N=window.Polymer&&window.Polymer.rootPath||O(document.baseURI||window.location.href),k=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,F=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,L=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,D=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,M=window.Polymer&&window.Polymer.legacyOptimizations||!1,H=window.Polymer&&window.Polymer.legacyWarnings||!1,B=window.Polymer&&window.Polymer.syncInitialRender||!1,V=window.Polymer&&window.Polymer.legacyUndefined||!1,$=window.Polymer&&window.Polymer.orderedComputed||!1,G=!0;let W=window.Polymer&&window.Polymer.removeNestedTemplates||!1,U=window.Polymer&&window.Polymer.fastDomIf||!1,j=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Y=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,q=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,K=0;const J=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let i=K++;return function(r){let s=r.__mixinSet;if(s&&s[i])return r;let o=e,n=o.get(r);if(!n){n=t(r),o.set(r,n);let e=Object.create(n.__mixinSet||s||null);e[i]=!0,n.__mixinSet=e}return n}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let X={},Z={};function Q(t,e){X[t]=Z[t.toLowerCase()]=e}function tt(t){return X[t]||Z[t.toLowerCase()]}class et extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=tt(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,r){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=I(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=O(e)}return this.__assetpath}register(t){if(t=t||this.id){if(L&&void 0!==tt(t))throw Q(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Q(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}et.prototype.modules=X,customElements.define("dom-module",et);function it(t){return et.import(t)}function rt(t){const e=T((t.body?t.body:t).textContent,t.baseURI),i=document.createElement("style");return i.textContent=e,i}function st(t){const e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...ot(e[t]));return i}function ot(t){const e=it(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...at(e));const i=e.querySelector("template");i&&t.push(...nt(i,e.assetpath)),e._styles=t}return e._styles}function nt(t,e){if(!t._styles){const i=[],r=t.content.querySelectorAll("style");for(let t=0;t<r.length;t++){let s=r[t],o=s.getAttribute("include");o&&i.push(...st(o).filter((function(t,e,i){return i.indexOf(t)===e}))),e&&(s.textContent=T(s.textContent,e)),i.push(s)}t._styles=i}return t._styles}function at(t){const e=[],i=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<i.length;t++){let r=i[t];if(r.import){const t=r.import,i=r.hasAttribute("shady-unscoped");if(i&&!t._unscopedStyle){const e=rt(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=rt(t));e.push(i?t._unscopedStyle:t._style)}}return e}function lt(t){let e=t.trim().split(/\s+/),i="";for(let t=0;t<e.length;t++)i+=dt(e[t]);return i}function dt(t){let e=it(t);if(e&&void 0===e._cssText){let t=function(t){let e="",i=at(t);for(let t=0;t<i.length;t++)e+=i[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),i=e.querySelector("template");i&&(t+=function(t,e){let i="";const r=nt(t,e);for(let t=0;t<r.length;t++){let e=r[t];e.parentNode&&e.parentNode.removeChild(e),i+=e.textContent}return i}(i,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}const ht=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ct(t){return t.indexOf(".")>=0}function ut(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function _t(t,e){return 0===t.indexOf(e+".")}function pt(t,e){return 0===e.indexOf(t+".")}function mt(t,e,i){return e+i.slice(t.length)}function ft(t,e){return t===e||_t(t,e)||pt(t,e)}function gt(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let r=t[i].toString().split(".");for(let t=0;t<r.length;t++)e.push(r[t])}return e.join(".")}return t}function bt(t){return Array.isArray(t)?gt(t).split("."):t.toString().split(".")}function vt(t,e,i){let r=t,s=bt(e);for(let t=0;t<s.length;t++){if(!r)return;r=r[s[t]]}return i&&(i.path=s.join(".")),r}function yt(t,e,i){let r=t,s=bt(e),o=s[s.length-1];if(s.length>1){for(let t=0;t<s.length-1;t++){if(r=r[s[t]],!r)return}r[o]=i}else r[e]=i;return s.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wt={},Ct=/-[a-z]/g,xt=/([A-Z])/g;function At(t){return wt[t]||(wt[t]=t.indexOf("-")<0?t:t.replace(Ct,(t=>t[1].toUpperCase())))}function Pt(t){return wt[t]||(wt[t]=t.replace(xt,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let St=0,Et=0,It=[],Tt=0,Ot=!1,zt=document.createTextNode("");new window.MutationObserver((function(){Ot=!1;const t=It.length;for(let e=0;e<t;e++){let t=It[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}It.splice(0,t),Et+=t})).observe(zt,{characterData:!0});const Rt={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},Nt={run:t=>(Ot||(Ot=!0,zt.textContent=Tt++),It.push(t),St++),cancel(t){const e=t-Et;if(e>=0){if(!It[e])throw new Error("invalid async handle: "+t);It[e]=null}}},kt=Nt,Ft=J((t=>class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,i){let r=this.__data[t],s=this._shouldPropertyChange(t,e,r);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=r),this.__data[t]=e,this.__dataPending[t]=e),s}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,kt.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(t,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,i)),this.__dataCounter--}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,r){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,r)}_attributeToProperty(t,e,i){if(!this.__serializing){const r=this.__dataAttributes,s=r&&r[t]||t;this[s]=this._deserializeValue(e,i||this.constructor.typeForProperty(s))}}_propertyToAttribute(t,e,i){this.__serializing=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,i){const r=this._serializeValue(e);"class"!==i&&"name"!==i&&"slot"!==i||(t=ht(t)),void 0===r?t.removeAttribute(i):t.setAttribute(i,r)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})),Lt={};let Dt=HTMLElement.prototype;for(;Dt;){let t=Object.getOwnPropertyNames(Dt);for(let e=0;e<t.length;e++)Lt[t[e]]=!0;Dt=Object.getPrototypeOf(Dt)}const Mt=J((t=>{const e=Ft(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(At(t[e]))}static attributeNameForProperty(t){return Pt(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const i=this;i.hasAttribute(t)||this._valueToNodeAttribute(i,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(e){i=t}break;case Array:try{i=JSON.parse(t)}catch(e){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!Lt[e]){let i=t[e];void 0!==i&&(t.__data?t._setPendingProperty(e,i):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})),Ht={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Bt=!1,Vt=!1;function $t(t){(function(){if(!Bt){Bt=!0;const t=document.createElement("textarea");t.placeholder="a",Vt=t.placeholder===t.textContent}return Vt})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}function Gt(t){let e=t.getAttribute("is");if(e&&Ht[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;)t.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return t}function Wt(t,e){let i=e.parentInfo&&Wt(t,e.parentInfo);if(!i)return t;for(let t=i.firstChild,r=0;t;t=t.nextSibling)if(e.parentIndex===r++)return t}function Ut(t,e,i,r){r.id&&(e[r.id]=i)}function jt(t,e,i){if(i.events&&i.events.length)for(let r,s=0,o=i.events;s<o.length&&(r=o[s]);s++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function Yt(t,e,i,r){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=r)}const qt=J((t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(e),i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let r=!1,s=t;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(e.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(s,e,i)||r,$t(s),s.firstChild&&this._parseTemplateChildNodes(s,e,i),s.hasAttributes&&s.hasAttributes()&&(r=this._parseTemplateNodeAttributes(s,e,i)||r),r||i.noted}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName)for(let r,s=t.firstChild,o=0;s;s=r){if("template"==s.localName&&(s=Gt(s)),r=s.nextSibling,s.nodeType===Node.TEXT_NODE){let i=r;for(;i&&i.nodeType===Node.TEXT_NODE;)s.textContent+=i.textContent,r=i.nextSibling,t.removeChild(i),i=r;if(e.stripWhiteSpace&&!s.textContent.trim()){t.removeChild(s);continue}}let n={parentIndex:o,parentInfo:i};this._parseTemplateNode(s,e,n)&&(n.infoIndex=e.nodeInfoList.push(n)-1),s.parentNode&&o++}}static _parseTemplateNestedTemplate(t,e,i){let r=t,s=this._parseTemplate(r,e);return(s.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),i.templateInfo=s,!0}static _parseTemplateNodeAttributes(t,e,i){let r=!1,s=Array.from(t.attributes);for(let o,n=s.length-1;o=s[n];n--)r=this._parseTemplateNodeAttribute(t,e,i,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(t,e,i,r,s){return"on-"===r.slice(0,3)?(t.removeAttribute(r),i.events=i.events||[],i.events.push({name:r.slice(3),value:s}),!0):"id"===r&&(i.id=s,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let i=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,r=e.content||t.content,s=document.importNode(r,!0);s.__noInsertionPoint=!e.hasInsertionPoint;let o=s.nodeList=new Array(i.length);s.$={};for(let t,r=0,n=i.length;r<n&&(t=i[r]);r++){let i=o[r]=Wt(s,t);Ut(0,s.$,i,t),Yt(0,i,t,e),jt(this,i,t)}return s=s,s}_addMethodEventListenerToNode(t,e,i,r){let s=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(r=r||t,0,i);return this._addEventListenerToNode(t,e,s),s}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Kt=0;const Jt=[],Xt={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Zt=/[A-Z]/;function Qt(t,e,i){let r=t[e];if(r){if(!t.hasOwnProperty(e)&&(r=t[e]=Object.create(t[e]),i))for(let t in r){let e=r[t],i=r[t]=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]}}else r=t[e]={};return r}function te(t,e,i,r,s,o){if(e){let n=!1;const a=Kt++;for(let l in i){let d=e[s?ut(l):l];if(d)for(let e,h=0,c=d.length;h<c&&(e=d[h]);h++)e.info&&e.info.lastRun===a||s&&!ie(l,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,l,i,r,e.info,s,o),n=!0)}return n}return!1}function ee(t,e,i,r,s,o,n,a){let l=!1,d=e[n?ut(r):r];if(d)for(let e,h=0,c=d.length;h<c&&(e=d[h]);h++)e.info&&e.info.lastRun===i||n&&!ie(r,e.trigger)||(e.info&&(e.info.lastRun=i),e.fn(t,r,s,o,e.info,n,a),l=!0);return l}function ie(t,e){if(e){let i=e.name;return i==t||!(!e.structured||!_t(i,t))||!(!e.wildcard||!pt(i,t))}return!0}function re(t,e,i,r,s){let o="string"==typeof s.method?t[s.method]:s.method,n=s.property;o?o.call(t,t.__data[n],r[n]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function se(t,e,i){let r=ut(e);if(r!==e){return oe(t,Pt(r)+"-changed",i[e],e),!0}return!1}function oe(t,e,i,r){let s={value:i,queueProperty:!0};r&&(s.path=r),ht(t).dispatchEvent(new CustomEvent(e,{detail:s}))}function ne(t,e,i,r,s,o){let n=(o?ut(e):e)!=e?e:null,a=n?vt(t,n):t.__data[e];n&&void 0===a&&(a=i[e]),oe(t,s.eventName,a,n)}function ae(t,e,i,r,s){let o=t.__data[e];k&&(o=k(o,s.attrName,"attribute",t)),t._propertyToAttribute(e,s.attrName,o)}function le(t,e,i,r){let s=t[Xt.COMPUTE];if(s)if($){Kt++;const o=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const i=t[Xt.COMPUTE];let r,{counts:s,ready:o,total:n}=function(t){const e=t.__computeInfo,i={},r=t[Xt.COMPUTE],s=[];let o=0;for(let t in e){const r=e[t];o+=i[t]=r.args.filter((t=>!t.literal)).length+(r.dynamicFn?1:0)}for(let t in r)e[t]||s.push(t);return{counts:i,ready:s,total:o}}(t);for(;r=o.shift();){e.set(r,e.size);const t=i[r];t&&t.forEach((t=>{const e=t.info.methodInfo;--n,0==--s[e]&&o.push(e)}))}if(0!==n){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),n=[];for(let t in e)he(t,s,n,o,r);let a;for(;a=n.shift();)ce(t,"",e,i,a)&&he(a.methodInfo,s,n,o,r);Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let o=e;for(;te(t,s,o,i,r);)Object.assign(i,t.__dataOld),Object.assign(e,t.__dataPending),o=t.__dataPending,t.__dataPending=null}}const de=(t,e,i)=>{let r=0,s=e.length-1,o=-1;for(;r<=s;){const n=r+s>>1,a=i.get(e[n].methodInfo)-i.get(t.methodInfo);if(a<0)r=n+1;else{if(!(a>0)){o=n;break}s=n-1}}o<0&&(o=s+1),e.splice(o,0,t)},he=(t,e,i,r,s)=>{const o=e[s?ut(t):t];if(o)for(let e=0;e<o.length;e++){const n=o[e];n.info.lastRun===Kt||s&&!ie(t,n.trigger)||(n.info.lastRun=Kt,de(n.info,i,r))}};function ce(t,e,i,r,s){let o=be(t,e,i,r,s);if(o===Jt)return!1;let n=s.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[n]?t._setPendingProperty(n,o,!0):(t[n]=o,!1)}function ue(t,e,i,r,s,o,n){i.bindings=i.bindings||[];let a={kind:r,target:s,parts:o,literal:n,isCompound:1!==o.length};if(i.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||Pt(s)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let r=a.parts[i];r.compoundIndex=i,_e(t,e,a,r,l)}}function _e(t,e,i,r,s){if(!r.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let o=r.dependencies,n={index:s,binding:i,part:r,evaluator:t};for(let i=0;i<o.length;i++){let r=o[i];"string"==typeof r&&(r=xe(r),r.wildcard=!0),t._addTemplatePropertyEffect(e,r.rootProperty,{fn:pe,info:n,trigger:r})}}}function pe(t,e,i,r,s,o,n){let a=n[s.index],l=s.binding,d=s.part;if(o&&d.source&&e.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let r=i[e];e=mt(d.source,l.target,e),a._setPendingPropertyOrPath(e,r,!1,!0)&&t._enqueueClient(a)}else{let n=s.evaluator._evaluateBinding(t,d,e,i,r,o);n!==Jt&&function(t,e,i,r,s){s=function(t,e,i,r){if(i.isCompound){let s=t.__dataCompoundStorage[i.target];s[r.compoundIndex]=e,e=s.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,s,i,r),k&&(s=k(s,i.target,i.kind,e));if("attribute"==i.kind)t._valueToNodeAttribute(e,s,i.target);else{let r=i.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?e[Xt.READ_ONLY]&&e[Xt.READ_ONLY][r]||e._setPendingProperty(r,s)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,s)}}(t,a,l,d,n)}}function me(t,e){if(e.isCompound){let i=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),r=e.parts,s=new Array(r.length);for(let t=0;t<r.length;t++)s[t]=r[t].literal;let o=e.target;i[o]=s,e.literal&&"property"==e.kind&&("className"===o&&(t=ht(t)),t[o]=e.literal)}}function fe(t,e,i){if(i.listenerEvent){let r=i.parts[0];t.addEventListener(i.listenerEvent,(function(t){!function(t,e,i,r,s){let o,n=t.detail,a=n&&n.path;a?(r=mt(i,r,a),o=n&&n.value):o=t.currentTarget[i],o=s?!o:o,e[Xt.READ_ONLY]&&e[Xt.READ_ONLY][r]||!e._setPendingPropertyOrPath(r,o,!0,Boolean(a))||n&&n.queueProperty||e._invalidateProperties()}(t,e,i.target,r.source,r.negate)}))}}function ge(t,e,i,r,s,o){o=e.static||o&&("object"!=typeof o||o[e.methodName]);let n={methodName:e.methodName,args:e.args,methodInfo:s,dynamicFn:o};for(let s,o=0;o<e.args.length&&(s=e.args[o]);o++)s.literal||t._addPropertyEffect(s.rootProperty,i,{fn:r,info:n,trigger:s});return o&&t._addPropertyEffect(e.methodName,i,{fn:r,info:n}),n}function be(t,e,i,r,s){let o=t._methodHost||t,n=o[s.methodName];if(n){let r=t._marshalArgs(s.args,e,i);return r===Jt?Jt:n.apply(o,r)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const ve=[],ye=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function we(t){let e="";for(let i=0;i<t.length;i++){e+=t[i].literal||""}return e}function Ce(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:ve};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let i=xe(t);return i.literal||(e.static=!1),i}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function xe(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},r=e[0];switch("-"===r&&(r=e[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=ut(e),i.structured=ct(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function Ae(t,e,i){let r=vt(t,i);return void 0===r&&(r=e[i]),r}function Pe(t,e,i,r){const s={indexSplices:r};V&&!t._overrideLegacyUndefined&&(e.splices=s),t.notifyPath(i+".splices",s),t.notifyPath(i+".length",e.length),V&&!t._overrideLegacyUndefined&&(s.indexSplices=[])}function Se(t,e,i,r,s,o){Pe(t,e,i,[{index:r,addedCount:s,removed:o,object:e,type:"splice"}])}const Ee=J((t=>{const e=qt(Mt(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Xt}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Ie.length){let t=Ie[Ie.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Xt.READ_ONLY];for(let i in t)e&&e[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==Xt.READ_ONLY);let r=Qt(this,e,!0)[t];r||(r=this[e][t]=[]),r.push(i)}_removePropertyEffect(t,e,i){let r=Qt(this,e,!0)[t],s=r.indexOf(i);s>=0&&r.splice(s,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Xt.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Xt.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Xt.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Xt.COMPUTE)}_setPendingPropertyOrPath(t,e,i,r){if(r||ut(Array.isArray(t)?t[0]:t)!==t){if(!r){let i=vt(this,t);if(!(t=yt(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let r=t.__dataLinkedPaths;if(r){let s;for(let o in r){let n=r[o];pt(o,e)?(s=mt(o,n,e),t._setPendingPropertyOrPath(s,i,!0,!0)):pt(n,e)&&(s=mt(n,o,e),t._setPendingPropertyOrPath(s,i,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||("className"===e&&(t=ht(t)),t[e]=i)}_setPendingProperty(t,e,i){let r=this.__dataHasPaths&&ct(t),s=r?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,s[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),r?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(r||this[Xt.NOTIFY]&&this[Xt.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let i=t[e];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let i in t)!e&&this[Xt.READ_ONLY]&&this[Xt.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,i){let r,s=this.__dataHasPaths;this.__dataHasPaths=!1,le(this,e,i,s),r=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,i,s),this._flushClients(),te(this,this[Xt.REFLECT],e,i,s),te(this,this[Xt.OBSERVE],e,i,s),r&&function(t,e,i,r,s){let o,n,a=t[Xt.NOTIFY],l=Kt++;for(let n in e)e[n]&&(a&&ee(t,a,l,n,i,r,s)||s&&se(t,n,i))&&(o=!0);o&&(n=t.__dataHost)&&n._invalidateProperties&&n._invalidateProperties()}(this,r,e,i,s),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,i){this[Xt.PROPAGATE]&&te(this,this[Xt.PROPAGATE],t,e,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,i)}_runEffectsForTemplate(t,e,i,r){const s=(e,r)=>{te(this,t.propertyEffects,e,i,r,t.nodeList);for(let s=t.firstChild;s;s=s.nextSibling)this._runEffectsForTemplate(s,e,i,r)};t.runEffects?t.runEffects(s,e,r):s(e,r)}linkPaths(t,e){t=gt(t),e=gt(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=gt(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let i={path:""};Pe(this,vt(this,t,i),i.path,e)}get(t,e){return vt(e||this,t)}set(t,e,i){i?yt(i,t,e):this[Xt.READ_ONLY]&&this[Xt.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},r=vt(this,t,i),s=r.length,o=r.push(...e);return e.length&&Se(this,r,i.path,s,e.length,[]),o}pop(t){let e={path:""},i=vt(this,t,e),r=Boolean(i.length),s=i.pop();return r&&Se(this,i,e.path,i.length,0,[s]),s}splice(t,e,i,...r){let s,o={path:""},n=vt(this,t,o);return e<0?e=n.length-Math.floor(-e):e&&(e=Math.floor(e)),s=2===arguments.length?n.splice(e):n.splice(e,i,...r),(r.length||s.length)&&Se(this,n,o.path,e,r.length,s),s}shift(t){let e={path:""},i=vt(this,t,e),r=Boolean(i.length),s=i.shift();return r&&Se(this,i,e.path,0,0,[s]),s}unshift(t,...e){let i={path:""},r=vt(this,t,i),s=r.unshift(...e);return e.length&&Se(this,r,i.path,0,e.length,[]),s}notifyPath(t,e){let i;if(1==arguments.length){let r={path:""};e=vt(this,t,r),i=r.path}else i=Array.isArray(t)?gt(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,Xt.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let r={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,Xt.OBSERVE,{fn:re,info:r,trigger:{name:t}}),i&&this._addPropertyEffect(e,Xt.OBSERVE,{fn:re,info:r,trigger:{name:e}})}_createMethodObserver(t,e){let i=Ce(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");ge(this,i,Xt.OBSERVE,be,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Xt.NOTIFY,{fn:ne,info:{eventName:Pt(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Xt.REFLECT,{fn:ae,info:{attrName:e}})}_createComputedProperty(t,e,i){let r=Ce(e);if(!r)throw new Error("Malformed computed expression '"+e+"'");const s=ge(this,r,Xt.COMPUTE,ce,t,i);Qt(this,"__computeInfo")[t]=s}_marshalArgs(t,e,i){const r=this.__data,s=[];for(let o=0,n=t.length;o<n;o++){let{name:n,structured:a,wildcard:l,value:d,literal:h}=t[o];if(!h)if(l){const t=pt(n,e),s=Ae(r,i,t?e:n);d={path:t?e:n,value:s,base:t?vt(r,n):s}}else d=a?Ae(r,i,n):r[n];if(V&&!this._overrideLegacyUndefined&&void 0===d&&t.length>1)return Jt;s[o]=d}return s}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),r=this.__preBoundTemplateInfo==i;if(!r)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e)if(i=Object.create(i),i.wasPreBound=r,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,r=e.lastChild;i.parent=e,e.lastChild=i,i.previousSibling=r,r?r.nextSibling=i:e.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let r=t.propertyEffects=t.propertyEffects||{};(r[e]=r[e]||[]).push(i)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),Ie.push(this);let i=super._stampTemplate(t,e);if(Ie.pop(),e.nodeList=i.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=i.firstChild;e;e=e.nextSibling)t.push(e)}return i.templateInfo=e,function(t,e){let{nodeList:i,nodeInfoList:r}=e;if(r.length)for(let e=0;e<r.length;e++){let s=r[e],o=i[e],n=s.bindings;if(n)for(let e=0;e<n.length;e++){let i=n[e];me(o,i),fe(o,t,i)}o.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:i,nextSibling:r,parent:s}=e;i?i.nextSibling=r:s&&(s.firstChild=r),r?r.previousSibling=i:s&&(s.lastChild=i),e.nextSibling=e.previousSibling=null;let o=e.childNodes;for(let t=0;t<o.length;t++){let e=o[t];ht(ht(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,i,r){let s=e._parseTemplateNode.call(this,t,i,r);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,i);e&&(t.textContent=we(e)||" ",ue(this,i,r,"text","textContent",e),s=!0)}return s}static _parseTemplateNodeAttribute(t,i,r,s,o){let n=this._parseBindings(o,i);if(n){let e=s,o="property";Zt.test(s)?o="attribute":"$"==s[s.length-1]&&(s=s.slice(0,-1),o="attribute");let a=we(n);return a&&"attribute"==o&&("class"==s&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(s)),t.setAttribute(s,a)),"attribute"==o&&"disable-upgrade$"==e&&t.setAttribute(s,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===o&&(s=At(s)),ue(this,i,r,o,s,n,a),!0}return e._parseTemplateNodeAttribute.call(this,t,i,r,s,o)}static _parseTemplateNestedTemplate(t,i,r){let s=e._parseTemplateNestedTemplate.call(this,t,i,r);const o=t.parentNode,n=r.templateInfo,a="dom-if"===o.localName,l="dom-repeat"===o.localName;W&&(a||l)&&(o.removeChild(t),(r=r.parentInfo).templateInfo=n,r.noted=!0,s=!1);let d=n.hostProps;if(U&&a)d&&(i.hostProps=Object.assign(i.hostProps||{},d),W||(r.parentInfo.noted=!0));else{let t="{";for(let e in d){ue(this,i,r,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return s}static _parseBindings(t,e){let i,r=[],s=0;for(;null!==(i=ye.exec(t));){i.index>s&&r.push({literal:t.slice(s,i.index)});let o=i[1][0],n=Boolean(i[2]),a=i[3].trim(),l=!1,d="",h=-1;"{"==o&&(h=a.indexOf("::"))>0&&(d=a.substring(h+2),a=a.substring(0,h),l=!0);let c=Ce(a),u=[];if(c){let{args:t,methodName:i}=c;for(let e=0;e<t.length;e++){let i=t[e];i.literal||u.push(i)}let r=e.dynamicFns;(r&&r[i]||c.static)&&(u.push(i),c.dynamicFn=!0)}else u.push(a);r.push({source:a,mode:o,negate:n,customEvent:l,signature:c,dependencies:u,event:d}),s=ye.lastIndex}if(s&&s<t.length){let e=t.substring(s);e&&r.push({literal:e})}return r.length?r:null}static _evaluateBinding(t,e,i,r,s,o){let n;return n=e.signature?be(t,i,r,0,e.signature):i!=e.source?vt(t,e.source):o&&ct(i)?vt(t,i):t.__data[i],e.negate&&(n=!n),n}}})),Ie=[];
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Te(t){}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Oe=J((t=>{const e=Ft(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof s?e:null}function r(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=function(t){const e={};for(let i in t){const r=t[i];e[i]="function"==typeof r?{type:r}:r}return e}(i))}t.__ownProperties=e}return t.__ownProperties}class s extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const t=this._properties;this.__observedAttributes=t?Object.keys(t).map((t=>this.prototype._addPropertyToAttributeMap(t))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=r(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.__properties=Object.assign({},t&&t._properties,r(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s})),ze=window.ShadyCSS&&window.ShadyCSS.cssBuild,Re=J((t=>{const e=Oe(Ee(t));function i(t,e,i,r){i.computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,i.computed,r)),i.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===i.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),i.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===i.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),i.observer&&t._createPropertyObserver(e,i.observer,r[i.observer]),t._addPropertyToAttributeMap(e)}function r(t,e,i,r){if(!ze){const s=e.content.querySelectorAll("style"),o=nt(e),n=function(t){let e=it(t);return e?at(e):[]}(i),a=e.content.firstElementChild;for(let i=0;i<n.length;i++){let s=n[i];s.textContent=t._processStyleText(s.textContent,r),e.content.insertBefore(s,a)}let l=0;for(let e=0;e<o.length;e++){let i=o[e],n=s[l];n!==i?(i=i.cloneNode(!0),n.parentNode.insertBefore(i,n)):l++,i.textContent=t._processStyleText(i.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i),q&&ze&&R){const i=e.content.querySelectorAll("style");if(i){let e="";Array.from(i).forEach((t=>{e+=t.textContent,t.parentNode.removeChild(t)})),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}return class extends e{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):M||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)i(this.prototype,e,t[e],t)}static createObservers(t,e){const i=this.prototype;for(let r=0;r<t.length;r++)i._createMethodObserver(t[r],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!L||D)&&(e=et.import(t,"template"),L&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=O(t.url);else{const t=et.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=N,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let i in e){let r=e[i];"value"in r&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[i]=r)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let i=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return T(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;r(this,e,t,i?I(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=ht(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),B&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=I(this.importPath)),I(t,e)}static _parseTemplateContent(t,i,r){return i.dynamicFns=i.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,i,r)}static _addTemplatePropertyEffect(t,i,r){return!H||i in this._properties||r.info.part.signature&&r.info.part.signature.static||r.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,i,r)}}}));
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ne{constructor(t){this.value=t.toString()}toString(){return this.value}}function ke(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Ne)return function(t){if(t instanceof Ne)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const Fe=function(t,...e){const i=document.createElement("template");return i.innerHTML=e.reduce(((e,i,r)=>e+ke(i)+t[r+1]),t[0]),i},Le=Re(HTMLElement);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
let De=0,Me=0;const He=[];let Be=0,Ve=!1;const $e=document.createTextNode("");new window.MutationObserver((function(){Ve=!1;const t=He.length;for(let e=0;e<t;e++){const t=He[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}He.splice(0,t),Me+=t})).observe($e,{characterData:!0});const Ge={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},We={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},Ue={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},je={run(t){Ve||(Ve=!0,$e.textContent=Be,Be+=1),He.push(t);const e=De;return De+=1,e},cancel(t){const e=t-Me;if(e>=0){if(!He[e])throw new Error("invalid async handle: "+t);He[e]=null}}},Ye="string"==typeof document.head.style.touchAction,qe="__polymerGestures",Ke="__polymerGesturesHandled",Je="__polymerGesturesTouchAction",Xe=["mousedown","mousemove","mouseup","click"],Ze=[0,1,4,2],Qe=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function ti(t){return Xe.indexOf(t)>-1}let ei=!1;function ii(t){ti(t)}!function(){try{const t=Object.defineProperty({},"passive",{get(){ei=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const ri=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),si={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function oi(t){const e=t.type;if(!ti(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Qe&&(e=Ze[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}const ni={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ai(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function li(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const di=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],hi={},ci=[];function ui(t){const e=di(t);return e.length>0?e[0]:t.target}function _i(t){const e=t.type,i=t.currentTarget.__polymerGestures;if(!i)return;const r=i[e];if(!r)return;if(!t[Ke]&&(t[Ke]={},"touch"===e.slice(0,5))){const i=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(ni.touch.id=i.identifier),ni.touch.id!==i.identifier)return;Ye||"touchstart"!==e&&"touchmove"!==e||function(t){const e=t.changedTouches[0],i=t.type;if("touchstart"===i)ni.touch.x=e.clientX,ni.touch.y=e.clientY,ni.touch.scrollDecided=!1;else if("touchmove"===i){if(ni.touch.scrollDecided)return;ni.touch.scrollDecided=!0;const i=function(t){let e="auto";const i=di(t);for(let t,r=0;r<i.length;r++)if(t=i[r],t[Je]){e=t[Je];break}return e}(t);let r=!1;const s=Math.abs(ni.touch.x-e.clientX),o=Math.abs(ni.touch.y-e.clientY);t.cancelable&&("none"===i?r=!0:"pan-x"===i?r=o>s:"pan-y"===i&&(r=s>o)),r?t.preventDefault():bi("track")}}(t)}const s=t[Ke];if(!s.skip){for(let e,i=0;i<ci.length;i++)e=ci[i],r[e.name]&&!s[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let i,o=0;o<ci.length;o++)i=ci[o],r[i.name]&&!s[i.name]&&(s[i.name]=!0,i[e](t))}}function pi(t,e,i){return!!hi[e]&&(function(t,e,i){const r=hi[e],s=r.deps,o=r.name;let n=t[qe];n||(t[qe]=n={});for(let e,i,r=0;r<s.length;r++)e=s[r],ri&&ti(e)&&"click"!==e||(i=n[e],i||(n[e]=i={_count:0}),0===i._count&&t.addEventListener(e,_i,ii(e)),i[o]=(i[o]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),r.touchAction&&fi(t,r.touchAction)}(t,e,i),!0)}function mi(t){ci.push(t);for(let e=0;e<t.emits.length;e++)hi[t.emits[e]]=t}function fi(t,e){Ye&&t instanceof HTMLElement&&je.run((()=>{t.style.touchAction=e})),t[Je]=e}function gi(t,e,i){const r=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=i,t.dispatchEvent(r),r.defaultPrevented){const t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function bi(t){const e=function(t){for(let e,i=0;i<ci.length;i++){e=ci[i];for(let i,r=0;r<e.emits.length;r++)if(i=e.emits[r],i===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function vi(t,e,i,r){e&&gi(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:r,prevent:function(t){return bi(t)}})}function yi(t,e,i){if(t.prevent)return!1;if(t.started)return!0;const r=Math.abs(t.x-e),s=Math.abs(t.y-i);return r>=5||s>=5}function wi(t,e,i){if(!e)return;const r=t.moves[t.moves.length-2],s=t.moves[t.moves.length-1],o=s.x-t.x,n=s.y-t.y;let a,l=0;r&&(a=s.x-r.x,l=s.y-r.y),gi(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:o,dy:n,ddx:a,ddy:l,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),r=i;for(;r&&r.shadowRoot&&!window.ShadyDOM;){const s=r;if(r=r.shadowRoot.elementFromPoint(t,e),s===r)break;r&&(i=r)}return i}(i.clientX,i.clientY)}})}function Ci(t,e,i){const r=Math.abs(e.clientX-t.x),s=Math.abs(e.clientY-t.y),o=ui(i||e);!o||si[o.localName]&&o.hasAttribute("disabled")||(isNaN(r)||isNaN(s)||r<=25&&s<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;const e=ui(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const i=e.getBoundingClientRect(),r=t.pageX,s=t.pageY;return!(r>=i.left&&r<=i.right&&s>=i.top&&s<=i.bottom)}return!1}(e))&&(t.prevent||gi(o,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */mi({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){li(this.info)},mousedown:function(t){if(!oi(t))return;const e=ui(t),i=this;ai(this.info,(t=>{oi(t)||(vi("up",e,t),li(i.info))}),(t=>{oi(t)&&vi("up",e,t),li(i.info)})),vi("down",e,t)},touchstart:function(t){vi("down",ui(t),t.changedTouches[0],t)},touchend:function(t){vi("up",ui(t),t.changedTouches[0],t)}}),mi({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,li(this.info)},mousedown:function(t){if(!oi(t))return;const e=ui(t),i=this,r=t=>{const r=t.clientX,s=t.clientY;yi(i.info,r,s)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&bi("tap"),i.info.addMove({x:r,y:s}),oi(t)||(i.info.state="end",li(i.info)),e&&wi(i.info,e,t),i.info.started=!0)};ai(this.info,r,(t=>{i.info.started&&r(t),li(i.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){const e=ui(t),i=t.changedTouches[0],r=i.clientX,s=i.clientY;yi(this.info,r,s)&&("start"===this.info.state&&bi("tap"),this.info.addMove({x:r,y:s}),wi(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){const e=ui(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),wi(this.info,e,i))}}),mi({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){oi(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){oi(t)&&Ci(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Ci(this.info,t.changedTouches[0],t)}});const xi=J((t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),Ai=J((t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",(t=>{this._onKeyDown(t)})),this.addEventListener("keyup",(t=>{this._onKeyUp(t)}))}_onKeyDown(t){}_onKeyUp(t){}})),Pi=t=>class extends(xi(Ai(t))){get _activeKeys(){return[" "]}ready(){super.ready(),pi(this,"down",(t=>{this._shouldSetActive(t)&&this._setActive(!0)})),pi(this,"up",(()=>{this._setActive(!1)}))}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&this._setActive(!0)}_onKeyUp(t){super._onKeyUp(t),this._activeKeys.includes(t.key)&&this._setActive(!1)}_setActive(t){this.toggleAttribute("active",t)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Si=J((t=>class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((t=>{t.hostConnected&&t.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((t=>{t.hostDisconnected&&t.hostDisconnected()}))}addController(t){this.__controllers.add(t),void 0!==this.$&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ei{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run((()=>{this._timer=null,Ii.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Ii.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof Ei?t._cancelAsync():t=new Ei,t.setConfig(e,i),t}}let Ii=new Set;function Ti(t){Ii.add(t)}function Oi(){const t=Boolean(Ii.size);return Ii.forEach((t=>{try{t.flush()}catch(t){setTimeout((()=>{throw t}))}})),t}const zi=()=>{let t;do{t=Oi()}while(t)};
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ri{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,i){const{scrollLeft:r}=i;if("rtl"!==e||!t)return r;switch(t){case"negative":return i.scrollWidth-i.clientWidth+r;case"reverse":return i.scrollWidth-i.clientWidth-r;default:return r}}static setNormalizedScrollLeft(t,e,i,r){if("rtl"===e&&t)switch(t){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+r;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-r;break;default:i.scrollLeft=r}else i.scrollLeft=r}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ni=[];let ki;function Fi(t,e,i=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=i&&t.removeAttribute("dir")}function Li(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const t=Li();Ni.forEach((e=>{Fi(e,t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Di=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0}}}static finalize(){super.finalize(),ki||(ki=Ri.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),Fi(this,Li(),null))}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"dir"!==t)return;const r=Li(),s=i===r&&-1===Ni.indexOf(this),o=!i&&e&&-1===Ni.indexOf(this),n=i!==r&&e===r;s||o?(this.__subscribe(),Fi(this,r,i)):n&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(t,e,i){("dir"!==i||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,i)}_attributeToProperty(t,e,i){"dir"!==t||e?super._attributeToProperty(t,e,i):this.dir=""}__subscribe(t=!0){t?-1===Ni.indexOf(this)&&Ni.push(this):Ni.indexOf(this)>-1&&Ni.splice(Ni.indexOf(this),1)}__getNormalizedScrollLeft(t){return Ri.getNormalizedScrollLeft(ki,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return Ri.setNormalizedScrollLeft(ki,this.getAttribute("dir")||"ltr",t,e)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;let Mi;G=!1,window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){};const Hi=new Set,Bi=t=>class extends(Di(t)){static get version(){return"23.0.7"}static finalize(){super.finalize();const{is:t}=this;t&&!Hi.has(t)&&(window.Vaadin.registrations.push(this),Hi.add(t),window.Vaadin.developmentModeCallback&&(Mi=Ei.debounce(Mi,Ue,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),Ti(Mi)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Vi=J((t=>class extends t{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((t=>{this._delegateAttribute(t,this[t])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((t=>{this._delegateProperty(t,this[t])}))}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach(((e,i)=>{this._delegateAttribute(e,t[i])}))}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach(((e,i)=>{this._delegateProperty(e,t[i])}))}_delegateAttribute(t,e){this.stateTarget&&("invalid"===t&&this._delegateAttribute("aria-invalid",!!e&&"true"),"boolean"==typeof e?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}})),$i=J((t=>class extends t{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this.inputElement.value=null!=t?t:"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_onInput(t){this.__userInput=t.isTrusted,this.value=t.target.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(""!==t&&null!=t),""===t&&void 0===e||this.__userInput||this._forwardInputValue(t)}})),Gi=J((t=>class extends(Vi(xi($i(t)))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(t){this._toggleChecked(t.target.checked)}_toggleChecked(t){this.checked=t}}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
let Wi=!1;window.addEventListener("keydown",(()=>{Wi=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{Wi=!1}),{capture:!0});const Ui=J((t=>class extends t{get _keyboardActive(){return Wi}ready(){this.addEventListener("focusin",(t=>{this._shouldSetFocus(t)&&this._setFocused(!0)})),this.addEventListener("focusout",(t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}})),ji=t=>class extends(xi(t)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),t?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):e&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&-1!==t&&(this._lastTabIndex=t,this.tabindex=-1)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Yi=J((t=>class extends(Ui(ji(t))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){void 0!==t&&this.focusElement&&(this.focusElement.tabIndex=t,-1!==t&&(this.tabindex=void 0)),this.disabled&&t&&(-1!==t&&(this._lastTabIndex=t),this.tabindex=void 0)}}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function qi(t,e,i){return{index:t,removed:e,addedCount:i}}function Ki(t,e,i,r,s,o){let n,a=0,l=0,d=Math.min(i-e,o-s);if(0==e&&0==s&&(a=function(t,e,i){for(let r=0;r<i;r++)if(!Xi(t[r],e[r]))return r;return i}(t,r,d)),i==t.length&&o==r.length&&(l=function(t,e,i){let r=t.length,s=e.length,o=0;for(;o<i&&Xi(t[--r],e[--s]);)o++;return o}(t,r,d-a)),s+=a,o-=l,(i-=l)-(e+=a)==0&&o-s==0)return[];if(e==i){for(n=qi(e,[],0);s<o;)n.removed.push(r[s++]);return[n]}if(s==o)return[qi(e,[],i-e)];let h=function(t){let e=t.length-1,i=t[0].length-1,r=t[e][i],s=[];for(;e>0||i>0;){if(0==e){s.push(2),i--;continue}if(0==i){s.push(3),e--;continue}let o,n=t[e-1][i-1],a=t[e-1][i],l=t[e][i-1];o=a<l?a<n?a:n:l<n?l:n,o==n?(n==r?s.push(0):(s.push(1),r=n),e--,i--):o==a?(s.push(3),e--,r=a):(s.push(2),i--,r=l)}return s.reverse(),s}(function(t,e,i,r,s,o){let n=o-s+1,a=i-e+1,l=new Array(n);for(let t=0;t<n;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let i=1;i<n;i++)for(let o=1;o<a;o++)if(Xi(t[e+o-1],r[s+i-1]))l[i][o]=l[i-1][o-1];else{let t=l[i-1][o]+1,e=l[i][o-1]+1;l[i][o]=t<e?t:e}return l}(t,e,i,r,s,o));n=void 0;let c=[],u=e,_=s;for(let t=0;t<h.length;t++)switch(h[t]){case 0:n&&(c.push(n),n=void 0),u++,_++;break;case 1:n||(n=qi(u,[],0)),n.addedCount++,u++,n.removed.push(r[_]),_++;break;case 2:n||(n=qi(u,[],0)),n.addedCount++,u++;break;case 3:n||(n=qi(u,[],0)),n.removed.push(r[_]),_++}return n&&c.push(n),c}function Ji(t,e){return Ki(t,0,t.length,e,0,e.length)}function Xi(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Zi(t){return"slot"===t.localName}let Qi=class{static getFlattenedNodes(t){const e=ht(t);return Zi(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map((t=>Zi(t)?ht(t=t).assignedNodes({flatten:!0}):[t])).reduce(((t,e)=>t.concat(e)),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Zi(this._target)?this._listenSlots([this._target]):ht(this._target).children&&(this._listenSlots(ht(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(t=>{this._processMutations(t)})):(this._nativeChildrenObserver=new MutationObserver((t=>{this._processMutations(t)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Zi(this._target)?this._unlistenSlots([this._target]):ht(this._target).children&&(this._unlistenSlots(ht(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Nt.run((()=>this.flush())))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=Ji(e,this._effectiveNodes);for(let e,r=0;r<i.length&&(e=i[r]);r++)for(let i,r=0;r<e.removed.length&&(i=e.removed[r]);r++)t.removedNodes.push(i);for(let r,s=0;s<i.length&&(r=i[s]);s++)for(let i=r.index;i<r.index+r.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let r=!1;return(t.addedNodes.length||t.removedNodes.length)&&(r=!0,this.callback.call(this._target,t)),r}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Zi(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];Zi(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class tr extends EventTarget{constructor(t,e,i,r){super(),this.host=t,this.slotName=e,this.slotFactory=i,this.slotInitializer=r,this.defaultId=tr.generateId(e,t)}static generateId(t,e){const i=t||"default",r=`${At(i)}Id`;return this[r]=1+this[r]||0,`${i}-${e.localName}-${this[r]}`}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:i}=this;let r=this.defaultNode;return!r&&i&&(r=i(t),r instanceof Element&&(""!==e&&r.setAttribute("slot",e),this.node=r,this.defaultNode=r)),r&&t.appendChild(r),r}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find((e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t))}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,i=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Qi(i,(t=>{const e=this.node,i=t.addedNodes.find((t=>t!==e));t.removedNodes.length&&t.removedNodes.forEach((t=>{this.teardownNode(t)})),i&&(e&&e.isConnected&&this.host.removeChild(e),this.node=i,i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i)))}))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class er extends tr{constructor(t,e){super(t,"input",(()=>document.createElement("input")),((t,i)=>{t.value&&i.setAttribute("value",t.value),t.type&&i.setAttribute("type",t.type);const r=er._uniqueInputId=1+er._uniqueInputId||0;t._inputId=`${t.localName}-${r}`,i.id=t._inputId,"function"==typeof e&&e(i)}))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ir extends tr{constructor(t){super(t,"label",(()=>document.createElement("label")),((t,e)=>{this.__updateLabelId(e),this.__updateDefaultLabel(this.label),this.__observeLabel(e)}))}get labelId(){return this.node.id}initCustomNode(t){this.__updateLabelId(t);const e=this.__hasLabel(t);this.__toggleHasLabel(e)}teardownNode(t){this.__labelObserver&&this.__labelObserver.disconnect();let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e));const i=this.__hasLabel(e);this.__toggleHasLabel(i)}setLabel(t){this.label=t,this.__updateDefaultLabel(t)}__hasLabel(t){return!!t&&(t.children.length>0||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__observeLabel(t){this.__labelObserver=new MutationObserver((t=>{t.forEach((t=>{const e=t.target,i=e===this.node;if("attributes"===t.type)i&&e.id!==this.defaultId&&this.__updateLabelId(e);else if(i||e.parentElement===this.node){const t=this.__hasLabel(this.node);this.__toggleHasLabel(t)}}))})),this.__labelObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(t){this.host.toggleAttribute("has-label",t),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:t,node:this.node}}))}__updateDefaultLabel(t){if(this.defaultNode&&(this.defaultNode.textContent=t,this.defaultNode===this.node)){const e=this.__isNotEmpty(t);this.__toggleHasLabel(e)}}__updateLabelId(t){t.id||(t.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rr=J((t=>class extends(Si(t)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new ir(this),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sr{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",(t=>{this.__initLabel(t.detail.node)})),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class or{constructor(t,e,i){this.sourceSlot=t,this.targetFactory=e,this.copyCallback=i,t&&t.addEventListener("slotchange",(()=>{this.__copying?this.__copying=!1:this.__checkAndCopyNodesToSlotTarget()}))}hostConnected(){this.__sourceSlotObserver=new MutationObserver((()=>this.__checkAndCopyNodesToSlotTarget())),this.__checkAndCopyNodesToSlotTarget()}__checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();const t=this.targetFactory();if(!t)return;this.__slotTargetClones&&(this.__slotTargetClones.forEach((e=>{e.parentElement===t&&t.removeChild(e)})),delete this.__slotTargetClones);const e=this.sourceSlot.assignedNodes({flatten:!0}).filter((t=>!(t.nodeType==Node.TEXT_NODE&&""===t.textContent.trim())));e.length>0&&(t.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(e,t))}__copyNodesToSlotTarget(t,e){this.__slotTargetClones=this.__slotTargetClones||[],t.forEach((t=>{const i=t.cloneNode(!0);this.__slotTargetClones.push(i),e.appendChild(i),this.__sourceSlotObserver.observe(t,{attributes:!0,childList:!0,subtree:!0,characterData:!0})})),"function"==typeof this.copyCallback&&this.copyCallback(t)}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nr extends(rr(Gi(Yi(Pi(Bi(c(Si(Le)))))))){static get is(){return"vaadin-checkbox"}static get template(){return Fe`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-checkbox-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div class="vaadin-checkbox-wrapper">
          <div part="checkbox"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}connectedCallback(){super.connectedCallback(),this._inputController||(this._inputController=new er(this,(t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(this._inputController),this.addController(new sr(this.inputElement,this._labelController)),this.addController(new or(this.$.noop,(()=>this._labelController.node),(()=>this.__warnDeprecated()))))}__warnDeprecated(){console.warn('WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.\nPlease use <label slot="label"> wrapper or the label property instead.')}_shouldSetActive(t){return"a"!==t.target.localName&&super._shouldSetActive(t)}_toggleChecked(t){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(t)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function ar(t){window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(t):t.querySelector("template")&&console.warn(`WARNING: <template> inside <${t.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */customElements.define(nr.is,nr),o("vaadin-grid",e`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='row'][last][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    [ios] [part~='row'][dragstart] [part~='cell'] {
      background: var(--lumo-primary-color-50pct);
    }

    #scroller:not([ios]) [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='left']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='right']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"}),o("vaadin-checkbox",e`
    :host(.vaadin-grid-select-all-checkbox) {
      font-size: var(--lumo-font-size-m);
    }
  `,{moduleId:"vaadin-grid-select-all-checkbox-lumo"});const lr=t=>class extends t{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"===this.localName)return;const t=this.parentNode;return t&&"vaadin-grid-column-group"===t.localName&&t.resizable||!1}},frozen:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),requestAnimationFrame((()=>{this._grid&&this._allCells.forEach((t=>{t._content.parentNode||this._grid.appendChild(t._content)}))}))}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame((()=>{this._grid||this._allCells.forEach((t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)}))})),this._gridValue=void 0}ready(){super.ready(),ar(this)}_findHostGrid(){let t=this;for(;t&&!/^vaadin.*grid(-pro)?$/.test(t.localName);)t=t.assignedSlot?t.assignedSlot.parentNode:t.parentNode;return t||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter((t=>t))}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach((e=>e.style.flexGrow=t))}_orderChanged(t){this._allCells.forEach((e=>e.style.order=t))}_widthChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach((e=>e.style.width=t))}_frozenChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",t),this._allCells.forEach((e=>e.toggleAttribute("frozen",t))),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(t){this._allCells.forEach((e=>e.toggleAttribute("last-frozen",t))),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=t)}_generateHeader(t){return t.substr(t.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,(t=>t.toUpperCase()))}_reorderStatusChanged(t){this._allCells.forEach((e=>e.setAttribute("reorder-status",t)))}_resizableChanged(t,e){void 0!==t&&void 0!==e&&e&&[e].concat(this._emptyCells).forEach((e=>{if(e){const i=e.querySelector('[part~="resize-handle"]');if(i&&e.removeChild(i),t){const t=document.createElement("div");t.setAttribute("part","resize-handle"),e.appendChild(t)}}}))}_textAlignChanged(t){if(void 0===t)return;if(-1===["start","end","center"].indexOf(t))return void console.warn('textAlign can only be set as "start", "end" or "center"');let e;"ltr"===getComputedStyle(this._grid).direction?"start"===t?e="left":"end"===t&&(e="right"):"start"===t?e="right":"end"===t&&(e="left"),this._allCells.forEach((i=>{i._content.style.textAlign=t,getComputedStyle(i._content).textAlign!==t&&(i._content.style.textAlign=e)}))}_hiddenChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",t),!!t!=!!this._previousHidden&&this._grid&&(!0===t&&this._allCells.forEach((t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)})),this._grid._debouncerHiddenChanged=Ei.debounce(this._grid._debouncerHiddenChanged,We,(()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)})),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=t}_runRenderer(t,e,i){const r=[e._content,this];i&&i.item&&r.push(i),t.apply(this,r)}__renderCellsContent(t,e){!this.hidden&&this._grid&&e.forEach((e=>{if(!e.parentElement)return;const i=this._grid.__getRowModel(e.parentElement);t&&(e._renderer!==t&&this._clearCellContent(e),e._renderer=t,(i.item||t===this._headerRenderer||t===this._footerRenderer)&&this._runRenderer(t,e,i))}))}_clearCellContent(t){t._content.innerHTML="",delete t._content._$litPart$}_renderHeaderCellContent(t,e){e&&t&&(this.__renderCellsContent(t,[e]),this._grid&&this._grid.__updateHeaderFooterRowVisibility(e.parentElement))}_onHeaderRendererOrBindingChanged(t,e,...i){this._renderHeaderCellContent(t,e)}_renderBodyCellsContent(t,e){e&&t&&this.__renderCellsContent(t,e)}_onRendererOrBindingChanged(t,e,...i){this._renderBodyCellsContent(t,e)}_renderFooterCellContent(t,e){e&&t&&(this.__renderCellsContent(t,[e]),this._grid&&this._grid.__updateHeaderFooterRowVisibility(e.parentElement))}_onFooterRendererOrBindingChanged(t,e){this._renderFooterCellContent(t,e)}__setTextContent(t,e){t.textContent!==e&&(t.textContent=e)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(t,e,{item:i}){this.path&&this.__setTextContent(t,this.get(this.path,i))}_defaultFooterRenderer(){}_computeHeaderRenderer(t,e){return t||(null!=e?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(t){return t||this._defaultRenderer}_computeFooterRenderer(t){return t||this._defaultFooterRenderer}};class dr extends(lr(Di(Le))){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_cells:Array}}}customElements.define(dr.is,dr),
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
o("vaadin-grid",e`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      transform: translateX(var(--_grid-horizontal-scroll-position));
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      transform: translateX(var(--_grid-horizontal-scroll-position));
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) *:is(#items, #header, #footer, [frozen]) {
      transform: none;
    }

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }
  `,{moduleId:"vaadin-grid-styles"});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let hr=!1,cr=[],ur=[];function _r(){hr=!0,requestAnimationFrame((function(){hr=!1,function(t){for(;t.length;)pr(t.shift())}(cr),setTimeout((function(){!function(t){for(let e=0,i=t.length;e<i;e++)pr(t.shift())}(ur)}))}))}function pr(t){const e=t[0],i=t[1],r=t[2];try{i.apply(e,r)}catch(t){setTimeout((()=>{throw t}))}}function mr(t,e,i){hr||_r(),ur.push([t,e,i])}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fr=t=>t.test(navigator.userAgent),gr=t=>t.test(navigator.platform),br=fr(/Android/),vr=fr(/Chrome/)&&/Google Inc/.test(navigator.vendor);const yr=fr(/Firefox/),wr=gr(/^iPad/)||gr(/^Mac/)&&navigator.maxTouchPoints>1,Cr=gr(/^iPhone/)||wr,xr=fr(/^((?!chrome|android).)*safari/i),Ar=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}})(),Pr=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),Sr=Pr&&Pr[1]>=8,Er={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var t=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,t-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(t){t=this._clamp(t,0,this._maxVirtualStart),this.grid&&(t-=t%this._itemsPerRow),this._virtualStartVal=t},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(t){(t%=this._physicalCount)<0&&(t=this._physicalCount+t),this.grid&&(t-=t%this._itemsPerRow),this._physicalStartVal=t},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(t){this._physicalCountVal=t},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var t=this._firstVisibleIndexVal;if(null==t){var e=this._physicalTop+this._scrollOffset;t=this._iterateItems(((t,i)=>(e+=this._getPhysicalSizeIncrement(t))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0))||0,this._firstVisibleIndexVal=t}return t},get lastVisibleIndex(){var t=this._lastVisibleIndexVal;if(null==t){if(this.grid)t=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var e=this._physicalTop+this._scrollOffset;this._iterateItems(((i,r)=>{e<this._scrollBottom&&(t=r),e+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=t}return t},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler:function(){var t=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),e=t-this._scrollPosition,i=e>=0;if(this._scrollPosition=t,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(e)>this._physicalSize&&this._physicalSize>0){e-=this._scrollOffset;var r=Math.round(e/this._physicalAverage)*this._itemsPerRow;this._virtualStart+=r,this._physicalStart+=r,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var s=this._getReusables(i);i?(this._physicalTop=s.physicalTop,this._virtualStart+=s.indexes.length,this._physicalStart+=s.indexes.length):(this._virtualStart-=s.indexes.length,this._physicalStart-=s.indexes.length),this._update(s.indexes,i?null:s.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),je)}},_getReusables:function(t){var e,i,r,s=[],o=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount,d=this._physicalTop+this._scrollOffset,h=this._physicalBottom+this._scrollOffset,c=this._scrollPosition,u=this._scrollBottom;for(t?(e=this._physicalStart,i=c-d):(e=this._physicalEnd,i=h-u);i-=r=this._getPhysicalSizeIncrement(e),!(s.length>=l||i<=o);)if(t){if(a+s.length+1>=this._virtualCount)break;if(d+r>=c-this._scrollOffset)break;s.push(e),d+=r,e=(e+1)%l}else{if(n-s.length<=0)break;if(d+this._physicalSize-r<=u)break;s.push(e),d-=r,e=0===e?l-1:e-1}return{indexes:s,physicalTop:d-this._scrollOffset}},_update:function(t,e){if(!(t&&0===t.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(t),this._updateMetrics(t),e)for(;e.length;){var i=e.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(t){var e=this._clamp(this._physicalCount+t,3,this._virtualCount-this._virtualStart);if(e=this._convertIndexToCompleteRow(e),this.grid){var i=e%this._itemsPerRow;i&&e-i<=this._physicalCount&&(e+=this._itemsPerRow),e-=i}var r=e-this._physicalCount,s=Math.round(.5*this._physicalCount);if(!(r<0)){if(r>0){var o=window.performance.now();[].push.apply(this._physicalItems,this._createPool(r));for(var n=0;n<r;n++)this._physicalSizes.push(0);this._physicalCount+=r,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=r),this._update(),this._templateCost=(window.performance.now()-o)/r,s=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===s||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,s)),Ue):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,s),je))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var t=this._getReusables(!0);this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length,this._update(t.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_gridChanged:function(t,e){void 0!==e&&(this.notifyResize(),zi(),t&&this._updateGridMetrics())},_itemsChanged:function(t){if("items"===t.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,We);else if("items.splices"===t.path){if(this._adjustVirtualIndex(t.value.indexSplices),this._virtualCount=this.items?this.items.length:0,t.value.indexSplices.some((function(t){return t.addedCount>0||t.removed.length>0}))){var e=this._getActiveElement();this.contains(e)&&e.blur()}var i=t.value.indexSplices.some((function(t){return t.index+t.addedCount>=this._virtualStart&&t.index<=this._virtualEnd}),this);this._isClientFull()&&!i||this._debounce("_render",this._render,We)}else"items.length"!==t.path&&this._forwardItemPath(t.path,t.value)},_iterateItems:function(t,e){var i,r,s,o;if(2===arguments.length&&e){for(o=0;o<e.length;o++)if(i=e[o],r=this._computeVidx(i),null!=(s=t.call(this,i,r)))return s}else{for(i=this._physicalStart,r=this._virtualStart;i<this._physicalCount;i++,r++)if(null!=(s=t.call(this,i,r)))return s;for(i=0;i<this._physicalStart;i++,r++)if(null!=(s=t.call(this,i,r)))return s}},_computeVidx:function(t){return t>=this._physicalStart?this._virtualStart+(t-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+t},_updateMetrics:function(t){zi();var e=0,i=0,r=this._physicalAverageCount,s=this._physicalAverage;this._iterateItems(((t,r)=>{i+=this._physicalSizes[t],this._physicalSizes[t]=this._physicalItems[t].offsetHeight,e+=this._physicalSizes[t],this._physicalAverageCount+=this._physicalSizes[t]?1:0}),t),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+e-i,this._itemsPerRow=1),this._physicalAverageCount!==r&&(this._physicalAverage=Math.round((s*r+e)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var t=this._physicalTop;if(this.grid){var e=this._itemsPerRow*this._itemWidth,i=(this._viewportWidth-e)/2;this._iterateItems(((e,r)=>{var s=r%this._itemsPerRow,o=Math.floor(s*this._itemWidth+i);this._isRTL&&(o*=-1),this.translate3d(o+"px",t+"px",0,this._physicalItems[e]),this._shouldRenderNextRow(r)&&(t+=this._rowHeight)}))}else{const e=[];this._iterateItems(((i,r)=>{const s=this._physicalItems[i];this.translate3d(0,t+"px",0,s),t+=this._physicalSizes[i];const o=s.id;o&&e.push(o)})),e.length&&this.setAttribute("aria-owns",e.join(" "))}},_getPhysicalSizeIncrement:function(t){return this.grid?this._computeVidx(t)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[t]},_shouldRenderNextRow:function(t){return t%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var t=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==t){this._physicalTop-=t;var e=this._scrollPosition;!Sr&&e>0&&this._resetScrollPosition(e-t)}},_resetScrollPosition:function(t){this.scrollTarget&&t>=0&&(this._scrollTop=t,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(t){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((t=(t=(t=t||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(t){if(!("number"!=typeof t||t<0||t>this.items.length-1)&&(zi(),0!==this._physicalCount)){t=this._clamp(t,0,this._virtualCount-1),(!this._isIndexRendered(t)||t>=this._maxVirtualStart)&&(this._virtualStart=this.grid?t-2*this._itemsPerRow:t-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var e=this._physicalStart,i=this._virtualStart,r=0,s=this._hiddenContentSize;i<t&&r<=s;)r+=this._getPhysicalSizeIncrement(e),e=(e+1)%this._physicalCount,i+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+r),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),We)},updateSizeForItem:function(t){return this.updateSizeForIndex(this.items.indexOf(t))},updateSizeForIndex:function(t){return this._isIndexRendered(t)?(this._updateMetrics([this._getPhysicalIndex(t)]),this._positionItems(),null):null},_convertIndexToCompleteRow:function(t){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(t/this._itemsPerRow)*this._itemsPerRow:t},_isIndexRendered:function(t){return t>=this._virtualStart&&t<=this._virtualEnd},_isIndexVisible:function(t){return t>=this.firstVisibleIndex&&t<=this.lastVisibleIndex},_getPhysicalIndex:function(t){return(this._physicalStart+(t-this._virtualStart))%this._physicalCount},_clamp:function(t,e,i){return Math.min(i,Math.max(e,t))},_debounce:function(t,e,i){this._debouncers=this._debouncers||{},this._debouncers[t]=Ei.debounce(this._debouncers[t],i,e.bind(this)),Ti(this._debouncers[t])}};class Ir{constructor({createElements:t,updateElement:e,scrollTarget:i,scrollContainer:r,elementsContainer:s,reorderElements:o}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=i,this.scrollContainer=r,this.elementsContainer=s||r,this.reorderElements=o,this._maxPages=1.3,this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500},this.__resizeObserver=new ResizeObserver((()=>this._resizeHandler())),"visible"===getComputedStyle(this.scrollTarget).overflow&&(this.scrollTarget.style.overflow="auto"),"static"===getComputedStyle(this.scrollContainer).position&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",(()=>this._scrollHandler())),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",(t=>this.__onWheel(t))),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",(()=>this.__mouseDown=!0)),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()})))}_manageFocus(){}_removeFocusedItem(){}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(t){if("number"!=typeof t||isNaN(t)||0===this.size||!this.scrollTarget.offsetHeight)return;t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let i=Math.floor(t/this.size*this._virtualCount);this._virtualCount-i<e?(i=this._virtualCount-(this.size-t),this._vidxOffset=this.size-this._virtualCount):i<e?t<1e3?(i=t,this._vidxOffset=0):(i=1e3,this._vidxOffset=t-i):this._vidxOffset=t-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler()}flush(){0!==this.scrollTarget.offsetHeight&&(this._resizeHandler(),zi(),this._scrollHandler(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(t=0,e=this.size-1){this.__getVisibleElements().forEach((i=>{i.__virtualIndex>=t&&i.__virtualIndex<=e&&this.__updateElement(i,i.__virtualIndex,!0)}))}__updateElement(t,e,i){t.style.minHeight&&(t.style.minHeight=""),this.__preventElementUpdates||t.__lastUpdatedIndex===e&&!i||(this.updateElement(t,e),t.__lastUpdatedIndex=e),0===t.offsetHeight&&(t.style.minHeight="200px")}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find((e=>e.__virtualIndex===t));return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;let e,i;if(this.__preventElementUpdates=!0,t>0&&(e=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(e)),this.__size=t,zi(),this._itemsChanged({path:"items"}),zi(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);const r=this.__getIndexScrollOffset(e);void 0!==i&&void 0!==r&&(this._scrollTop+=i-r)}this.elementsContainer.children.length||requestAnimationFrame((()=>this._resizeHandler())),this.__preventElementUpdates=!1,this._resizeHandler(),zi()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,1e5)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=Boolean("rtl"===t.direction),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),i=document.createDocumentFragment();return e.forEach((t=>{t.style.position="absolute",i.appendChild(t),this.__resizeObserver.observe(t)})),this.elementsContainer.appendChild(i),e}_assignModels(t){this._iterateItems(((t,e)=>{const i=this._physicalItems[t];i.hidden=e>=this.size,i.hidden?delete i.__lastUpdatedIndex:(i.__virtualIndex=e+(this._vidxOffset||0),this.__updateElement(i,i.__virtualIndex))}),t)}_isClientFull(){return setTimeout((()=>this.__clientFull=!0)),this.__clientFull||super._isClientFull()}translate3d(t,e,i,r){r.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0)),super._scrollHandler(),this.reorderElements&&(this.__scrollReorderDebouncer=Ei.debounce(this.__scrollReorderDebouncer,Ge.after(this.timeouts.SCROLL_REORDER),(()=>this.__reorderElements()))),this.__previousScrollTop=this._scrollTop}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame)return this._deltaYAcc+=e,void t.preventDefault();e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=Ei.debounce(this.__debouncerWheelAnimationFrame,We,(()=>this._wheelAnimationFrame=!1));const i=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=Ei.debounce(this._debouncerIgnoreNewWheel,Ge.after(this.timeouts.IGNORE_WHEEL),(()=>this._ignoreNewWheel=!1))):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(t,e,i){return t!==this.scrollTarget&&t!==this.scrollTarget.getRootNode().host&&(!(!this._canScroll(t,e,i)||-1===["auto","scroll"].indexOf(getComputedStyle(t).overflow))||(t!==this&&t.parentElement?this._hasScrolledAncestor(t.parentElement,e,i):void 0))}_canScroll(t,e,i){return i>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||i<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter((t=>!t.hidden))}__reorderElements(){if(this.__mouseDown)return void(this.__pendingReorder=!0);this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),i=e.find((t=>t.contains(this.elementsContainer.getRootNode().activeElement)||t.contains(this.scrollTarget.getRootNode().activeElement)))||e[0];if(!i)return;const r=i.__virtualIndex-t,s=e.indexOf(i)-r;if(s>0)for(let t=0;t<s;t++)this.elementsContainer.appendChild(e[t]);else if(s<0)for(let t=e.length+s;t<e.length;t++)this.elementsContainer.insertBefore(e[t],e[0]);if(xr){const{transform:t}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout((()=>this.scrollTarget.style.transform=t))}}_adjustVirtualIndexOffset(t){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),e=t*this.size;this._vidxOffset=Math.round(e-t*this._virtualCount)}else{const t=this._vidxOffset,e=1e3,i=100;0===this._scrollTop?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<e&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset)));const r=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=r,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-e&&this._vidxOffset<r&&(this._vidxOffset+=Math.min(r-this._vidxOffset,i),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}}Object.setPrototypeOf(Ir.prototype,Er);class Tr{constructor(t){this.__adapter=new Ir(t)}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Or=t=>class extends t{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(t){return t.filter((t=>t.some((t=>t.headerRenderer||t.path||t.header)))).length}_a11yGetFooterRowCount(t){return t.filter((t=>t.some((t=>t.headerRenderer)))).length}_a11yUpdateGridSize(t,e){if(void 0===t||void 0===e)return;const i=e[e.length-1];this.$.table.setAttribute("aria-rowcount",t+this._a11yGetHeaderRowCount(e)+this._a11yGetFooterRowCount(e)),this.$.table.setAttribute("aria-colcount",i&&i.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach(((t,e)=>t.setAttribute("aria-rowindex",e+1)))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach(((t,e)=>t.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+e+1)))}_a11yUpdateRowRowindex(t,e){t.setAttribute("aria-rowindex",e+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(t,e){t.setAttribute("aria-selected",Boolean(e)),Array.from(t.children).forEach((t=>t.setAttribute("aria-selected",Boolean(e))))}_a11yUpdateRowExpanded(t){this.__isRowExpandable(t)?t.setAttribute("aria-expanded","false"):this.__isRowCollapsible(t)?t.setAttribute("aria-expanded","true"):t.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(t,e){e>0||this.__isRowCollapsible(t)||this.__isRowExpandable(t)?t.setAttribute("aria-level",e+1):t.removeAttribute("aria-level")}_a11ySetRowDetailsCell(t,e){Array.from(t.children).forEach((t=>{t!==e&&t.setAttribute("aria-controls",e.id)}))}_a11yUpdateCellColspan(t,e){t.setAttribute("aria-colspan",Number(e))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((t=>{let e=t.parentNode;for(;e&&"vaadin-grid-cell-content"!==e.localName;)e=e.parentNode;if(e&&e.assignedSlot){e.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(t.direction)]||"none")}}))}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,zr=t=>class extends t{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(t){const e=t.detail.model,i=e?e.item:null;i&&(this.activeItem=this._itemsEqual(this.activeItem,i)?null:i)}_onClick(t){if(t.defaultPrevented)return;const e=t.composedPath(),i=e[e.indexOf(this.$.table)-3];if(!i||i.getAttribute("part").indexOf("details-cell")>-1)return;const r=i._content,s=this.getRootNode().activeElement;r.contains(s)||this._isFocusable(t.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}))}_isFocusable(t){return Rr(t)}},Rr=t=>{if(!t.parentNode)return!1;const e=-1!==Array.from(t.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter((t=>"cell body-cell"!==t.getAttribute("part"))).indexOf(t);return!t.disabled&&e};function Nr(t,e){return t.split(".").reduce(((t,e)=>t[e]),e)}function kr(t,e,i){if(0===i.length)return!1;let r=!0;for(const s in t){const o=t[s].path;if(!o||-1===o.indexOf("."))continue;void 0===Nr(o.replace(/\.[^.]*$/,""),i[0])&&(console.warn(`Path "${o}" used for ${e} does not exist in all of the items, ${e} is disabled.`),r=!1)}return r}function Fr(t){return[void 0,null].indexOf(t)>=0?"":isNaN(t)?t.toString():t}function Lr(t,e){return(t=Fr(t))<(e=Fr(e))?-1:t>e?1:0}const Dr=t=>(e,i)=>{let r=t?[...t]:[];e.filters&&kr(e.filters,"filtering",r)&&(r=function(t,e){return t.filter((t=>e.every((e=>{const i=Fr(Nr(e.path,t)),r=Fr(e.value).toString().toLowerCase();return i.toString().toLowerCase().includes(r)}))))}(r,e.filters)),Array.isArray(e.sortOrders)&&e.sortOrders.length&&kr(e.sortOrders,"sorting",r)&&(r=function(t,e){return t.sort(((t,i)=>e.map((e=>"asc"===e.direction?Lr(Nr(e.path,t),Nr(e.path,i)):"desc"===e.direction?Lr(Nr(e.path,i),Nr(e.path,t)):0)).reduce(((t,e)=>0!==t?t:e),0)))}(r,e.sortOrders));const s=Math.min(r.length,e.pageSize),o=e.page*s,n=o+s;i(r.slice(o,n),r.length)},Mr=t=>class extends t{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(t){const e=Dr(this.items);e.__items=t,this.setProperties({_arrayDataProvider:e,size:t.length,dataProvider:e})}__dataProviderOrItemsChanged(t,e,i){i&&(this._arrayDataProvider?t!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):e?this._arrayDataProvider.__items===e?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(e):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):e&&this.__setArrayDataProvider(e))}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Hr(t,e,i){let r=1;t.forEach((t=>{r%10==0&&(r+=1),t._order=i+r*e,r+=1}))}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Br=t=>class extends t{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),pi(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(t){this.hasAttribute("reordering")&&t.preventDefault()}_onTouchStart(t){this._startTouchReorderTimeout=setTimeout((()=>{this._onTrackStart({detail:{x:t.touches[0].clientX,y:t.touches[0].clientY}})}),100)}_onTouchMove(t){this._draggedColumn&&t.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(t){if("start"===t.detail.state){const e=t.composedPath(),i=e[e.indexOf(this.$.header)-2];if(!i||!i._content)return;if(i._content.contains(this.getRootNode().activeElement))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(t)}else"track"===t.detail.state?this._onTrack(t):"end"===t.detail.state&&this._onTrackEnd(t)}_onTrackStart(t){if(!this.columnReorderingAllowed)return;const e=t.composedPath&&t.composedPath();if(e&&e.filter((t=>t.hasAttribute&&t.hasAttribute("draggable")))[0])return;const i=this._cellFromPoint(t.detail.x,t.detail.y);if(i&&-1!==i.getAttribute("part").indexOf("header-cell")){for(this.toggleAttribute("reordering",!0),this._draggedColumn=i._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(i),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(t.detail.x,this._touchDevice?t.detail.y-50:t.detail.y),this._autoScroller()}}_onTrack(t){if(!this._draggedColumn)return;const e=this._cellFromPoint(t.detail.x,t.detail.y);if(!e)return;const i=this._getTargetColumn(e,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,i)&&this._isSwappableByPosition(i,t.detail.x)&&this._swapColumnOrders(this._draggedColumn,i),this._updateGhostPosition(t.detail.x,this._touchDevice?t.detail.y-50:t.detail.y),this._lastDragClientX=t.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter((t=>!t.hidden)).sort(((t,e)=>t._order-e._order))}_cellFromPoint(t,e){t=t||0,e=e||0,this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const i=this.shadowRoot.elementFromPoint(t,e);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),i&&i._column)return i}_updateGhostPosition(t,e){const i=this._reorderGhost.getBoundingClientRect(),r=t-i.width/2,s=e-i.height/2,o=parseInt(this._reorderGhost._left||0),n=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=o-(i.left-r),this._reorderGhost._top=n-(i.top-s),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(t){const e=this._reorderGhost;e.textContent=t._content.innerText;const i=window.getComputedStyle(t);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach((t=>e.style[t]=i[t])),e}_updateOrders(t,e){void 0!==t&&void 0!==e&&(t[0].forEach((t=>t._order=0)),Hr(t[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(t,e){Array.from(t.parentNode.children).filter((e=>/column/.test(e.localName)&&this._isSwapAllowed(e,t))).forEach((t=>t._reorderStatus=e))}_autoScroller(){if(this._lastDragClientX){const t=this._lastDragClientX-this.getBoundingClientRect().right+50,e=this.getBoundingClientRect().left-this._lastDragClientX+50;t>0?this.$.table.scrollLeft+=t/10:e>0&&(this.$.table.scrollLeft-=e/10)}this._draggedColumn&&setTimeout((()=>this._autoScroller()),10)}_isSwapAllowed(t,e){if(t&&e){const i=t!==e,r=t.parentElement===e.parentElement,s=t.frozen===e.frozen;return i&&r&&s}}_isSwappableByPosition(t,e){const i=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter((e=>t.contains(e._column)))[0],r=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),s=i.getBoundingClientRect();return s.left>r.left?e>s.right-r.width:e<s.left+r.width}_swapColumnOrders(t,e){const i=t._order;t._order=e._order,e._order=i,this._updateLastFrozen(),this._updateFirstAndLastColumn()}_getTargetColumn(t,e){if(t&&e){let i=t._column;for(;i.parentElement!==e.parentElement&&i!==this;)i=i.parentElement;return i.parentElement===e.parentElement?i:t._column}}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Vr=t=>class extends t{ready(){super.ready();const t=this.$.scroller;pi(t,"track",this._onHeaderTrack.bind(this)),t.addEventListener("touchmove",(e=>t.hasAttribute("column-resizing")&&e.preventDefault())),t.addEventListener("contextmenu",(t=>"resize-handle"==t.target.getAttribute("part")&&t.preventDefault())),t.addEventListener("mousedown",(t=>"resize-handle"===t.target.getAttribute("part")&&t.preventDefault()))}_onHeaderTrack(t){const e=t.target;if("resize-handle"===e.getAttribute("part")){let i=e.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);"vaadin-grid-column-group"===i.localName;)i=Array.prototype.slice.call(i._childColumns,0).sort((function(t,e){return t._order-e._order})).filter((function(t){return!t.hidden})).pop();const r=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),s=r.filter((t=>t._column===i))[0];if(s.offsetWidth){const e=getComputedStyle(s._content),r=10+parseInt(e.paddingLeft)+parseInt(e.paddingRight)+parseInt(e.borderLeftWidth)+parseInt(e.borderRightWidth)+parseInt(e.marginLeft)+parseInt(e.marginRight),o=s.offsetWidth+(this.__isRTL?s.getBoundingClientRect().left-t.detail.x:t.detail.x-s.getBoundingClientRect().right);i.width=Math.max(r,o)+"px",i.flexGrow=0}r.sort((function(t,e){return t._column._order-e._column._order})).forEach((function(t,e,i){e<i.indexOf(s)&&(t._column.width=t.offsetWidth+"px",t._column.flexGrow=0)})),"end"===t.detail.state&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:i}}))),this._resizeHandler()}}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,$r=class t{constructor(t,e,i){this.grid=t,this.parentCache=e,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter((t=>this.itemCaches[t].isLoading()))[0])}getItemForIndex(t){const{cache:e,scaledIndex:i}=this.getCacheAndIndex(t);return e.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce(((t,e)=>{const i=this.itemCaches[e];return i.updateSize(),t+i.effectiveSize}),0):0}ensureSubCacheForScaledIndex(e){if(!this.itemCaches[e]){const i=new t(this.grid,this,this.items[e]);this.itemCaches[e]=i,this.grid._loadPage(0,i)}}getCacheAndIndex(t){let e=t;const i=Object.keys(this.itemCaches);for(let t=0;t<i.length;t++){const r=Number(i[t]),s=this.itemCaches[r];if(e<=r)return{cache:this,scaledIndex:e};if(e<=r+s.effectiveSize)return s.getCacheAndIndex(e-r-1);e-=s.effectiveSize}return{cache:this,scaledIndex:e}}},Gr=t=>class extends t{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new $r(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,value:()=>new Set}}}static get observers(){return["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(t){const e=t-this._cache.size;this._cache.size+=e,this._cache.effectiveSize+=e,this._effectiveSize=this._cache.effectiveSize}_getItem(t,e){if(t>=this._effectiveSize)return;e.index=t;const{cache:i,scaledIndex:r}=this._cache.getCacheAndIndex(t),s=i.items[r];s?(e.toggleAttribute("loading",!1),this._updateItem(e,s),this._isExpanded(s)&&i.ensureSubCacheForScaledIndex(r)):(e.toggleAttribute("loading",!0),this._loadPage(this._getPageForIndex(r),i))}getItemId(t){return this.itemIdPath?this.get(this.itemIdPath,t):t}_isExpanded(t){return this.__expandedKeys.has(this.getItemId(t))}_expandedItemsChanged(){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}_itemIdPathChanged(){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach((t=>{this.__expandedKeys.add(this.getItemId(t))})))}expandItem(t){this._isExpanded(t)||(this.expandedItems=[...this.expandedItems,t])}collapseItem(t){this._isExpanded(t)&&(this.expandedItems=this.expandedItems.filter((e=>!this._itemsEqual(e,t))))}_getIndexLevel(t){let{cache:e}=this._cache.getCacheAndIndex(t),i=0;for(;e.parentCache;)e=e.parentCache,i+=1;return i}_loadPage(t,e){if(!e.pendingRequests[t]&&this.dataProvider){this._setLoading(!0),e.pendingRequests[t]=!0;const i={page:t,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:e.parentItem};this.dataProvider(i,((r,s)=>{void 0!==s?e.size=s:i.parentItem&&(e.size=r.length);const o=Array.from(this.$.items.children).map((t=>t._item));r.forEach(((i,r)=>{const s=t*this.pageSize+r;e.items[s]=i,this._isExpanded(i)&&o.indexOf(i)>-1&&e.ensureSubCacheForScaledIndex(s)})),this._hasData=!0,delete e.pendingRequests[t],this._debouncerApplyCachedData=Ei.debounce(this._debouncerApplyCachedData,Ge.after(0),(()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter((t=>!t.hidden)).forEach((t=>{this._cache.getItemForIndex(t.index)&&this._getItem(t.index,t)})),this.__scrollToPendingIndex()})),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()}))}}_getPageForIndex(t){return Math.floor(t/this.pageSize)}clearCache(){this._cache=new $r(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(t,e){void 0!==e&&t!==e&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(t,e){void 0!==e&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=Ei.debounce(this._debouncerCheckSize,Ge.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(t,e){return this.getItemId(t)===this.getItemId(e)}_getItemIndexInArray(t,e){let i=-1;return e.forEach(((e,r)=>{this._itemsEqual(e,t)&&(i=r)})),i}scrollToIndex(t){super.scrollToIndex(t),isNaN(t)||!this._cache.isLoading()&&this.clientHeight||(this.__pendingScrollToIndex=t)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const t=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(t)}}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Wr="between",Ur="on-top-or-between",jr="on-grid",Yr="on-top",qr="above",Kr="below",Jr="empty",Xr=t=>class extends t{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",(t=>{this.dropMode&&(t.preventDefault(),t.stopPropagation())}))}_onDragStart(t){if(this.rowsDraggable){let e=t.target;if("vaadin-grid-cell-content"===e.localName&&(e=e.assignedSlot.parentNode.parentNode),e.parentNode!==this.$.items)return;if(t.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const t=e.style.transform;e.style.top=/translateY\((.*)\)/.exec(t)[1],e.style.transform="none",requestAnimationFrame((()=>{e.style.top="",e.style.transform=t}))}const i=e.getBoundingClientRect();this._ios?t.dataTransfer.setDragImage(e):t.dataTransfer.setDragImage(e,t.clientX-i.left,t.clientY-i.top);let r=[e];this._isSelected(e._item)&&(r=this.__getViewportRows().filter((t=>this._isSelected(t._item))).filter((t=>!this.dragFilter||this.dragFilter(this.__getRowModel(t))))),t.dataTransfer.setData("text",this.__formatDefaultTransferData(r)),e.setAttribute("dragstart",r.length>1?r.length:""),this.style.setProperty("--_grid-drag-start-x",t.clientX-i.left+20+"px"),this.style.setProperty("--_grid-drag-start-y",t.clientY-i.top+10+"px"),requestAnimationFrame((()=>{e.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})}));const s=new CustomEvent("grid-dragstart",{detail:{draggedItems:r.map((t=>t._item)),setDragData:(e,i)=>t.dataTransfer.setData(e,i),setDraggedItemsCount:t=>e.setAttribute("dragstart",t)}});s.originalEvent=t,this.dispatchEvent(s)}}_onDragEnd(t){this.toggleAttribute("dragging-rows",!1),t.stopPropagation();const e=new CustomEvent("grid-dragend");e.originalEvent=t,this.dispatchEvent(e)}_onDragLeave(t){t.stopPropagation(),this._clearDragStyles()}_onDragOver(t){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(t.clientY))return void this._clearDragStyles();let e=t.composedPath().filter((t=>"tr"===t.localName))[0];if(this._effectiveSize&&this.dropMode!==jr)if(e&&e.parentNode===this.$.items){const i=e.getBoundingClientRect();if(this._dropLocation=Yr,this.dropMode===Wr){const e=t.clientY-i.top<i.bottom-t.clientY;this._dropLocation=e?qr:Kr}else this.dropMode===Ur&&(t.clientY-i.top<i.height/3?this._dropLocation=qr:t.clientY-i.top>i.height/3*2&&(this._dropLocation=Kr))}else{if(e)return;if(this.dropMode!==Wr&&this.dropMode!==Ur)return;e=Array.from(this.$.items.children).filter((t=>!t.hidden)).pop(),this._dropLocation=Kr}else this._dropLocation=Jr;if(e&&e.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);t.stopPropagation(),t.preventDefault(),this._dropLocation===Jr?this.toggleAttribute("dragover",!0):e?(this._dragOverItem=e._item,e.getAttribute("dragover")!==this._dropLocation&&e.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(t){if(this.__dndAutoScrolling)return!0;const e=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top,r=e-t+this.__dndAutoScrollThreshold,s=t-i+this.__dndAutoScrollThreshold;let o=0;if(s>0?o=2*s:r>0&&(o=2*-r),o){const t=this.$.table.scrollTop;this.$.table.scrollTop+=o;if(t!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout((()=>this.__dndAutoScrolling=!1),20),!0}}__getViewportRows(){const t=this.$.header.getBoundingClientRect().bottom,e=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter((i=>{const r=i.getBoundingClientRect();return r.bottom>t&&r.top<e}))}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach((t=>t.removeAttribute("dragover")))}_onDrop(t){if(this.dropMode){t.stopPropagation(),t.preventDefault();const e=t.dataTransfer.types&&Array.from(t.dataTransfer.types).map((e=>({type:e,data:t.dataTransfer.getData(e)})));this._clearDragStyles();const i=new CustomEvent("grid-drop",{bubbles:t.bubbles,cancelable:t.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:e}});i.originalEvent=t,this.dispatchEvent(i)}}__formatDefaultTransferData(t){return t.map((t=>Array.from(t.children).filter((t=>!t.hidden&&-1===t.getAttribute("part").indexOf("details-cell"))).sort(((t,e)=>t._column._order>e._column._order?1:-1)).map((t=>t._content.textContent.trim())).filter((t=>t)).join("\t"))).join("\n")}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter((t=>!t.hidden)).forEach((t=>{this._filterDragAndDrop(t,this.__getRowModel(t))}))}_filterDragAndDrop(t,e){const i=this.loading||t.hasAttribute("loading"),r=!this.rowsDraggable||i||this.dragFilter&&!this.dragFilter(e),s=!this.dropMode||i||this.dropFilter&&!this.dropFilter(e);Array.from(t.children).map((t=>t._content)).forEach((t=>{r?t.removeAttribute("draggable"):t.setAttribute("draggable",!0)})),t.toggleAttribute("drag-disabled",!!r),t.toggleAttribute("drop-disabled",!!s)}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Zr=t=>class extends t{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(t){for(let e=0;e<t.length;e++)if("vaadin-grid-column-group"===t[e].localName)return!0;return!1}_getChildColumns(t){return Qi.getFlattenedNodes(t).filter(this._isColumnElement)}_flattenColumnGroups(t){return t.map((t=>"vaadin-grid-column-group"===t.localName?this._getChildColumns(t):[t])).reduce(((t,e)=>t.concat(e)),[])}_getColumnTree(){const t=Qi.getFlattenedNodes(this).filter(this._isColumnElement),e=[t];let i=t;for(;this._hasColumnGroups(i);)i=this._flattenColumnGroups(i),e.push(i);return e}_updateColumnTree(){const t=this._getColumnTree();this._arrayEquals(t,this._columnTree)||(this._columnTree=t)}_addNodeObserver(){this._observer=new Qi(this,(t=>{const e=t=>t.filter(this._isColumnElement).length>0;if(e(t.addedNodes)||e(t.removedNodes)){const e=t.removedNodes.flatMap((t=>t._allCells)),i=t=>e.filter((e=>e._content.contains(t))).length;this.__removeSorters(this._sorters.filter(i)),this.__removeFilters(this._filters.filter(i)),this._updateColumnTree()}this._debouncerCheckImports=Ei.debounce(this._debouncerCheckImports,Ge.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()}))}_arrayEquals(t,e){if(!t||!e||t.length!=e.length)return!1;for(let i=0,r=t.length;i<r;i++)if(t[i]instanceof Array&&e[i]instanceof Array){if(!this._arrayEquals(t[i],e[i]))return!1}else if(t[i]!=e[i])return!1;return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach((t=>{const e=this.querySelector(t);!e||e instanceof Le||console.warn(`Make sure you have imported the required module for <${t}> element.`)}))}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((t=>this._updateFirstAndLastColumnForRow(t)))}_updateFirstAndLastColumnForRow(t){Array.from(t.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort(((t,e)=>t._column._order-e._column._order)).forEach(((t,e,i)=>{t.toggleAttribute("first-column",0===e),t.toggleAttribute("last-column",e===i.length-1)}))}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(t.localName)}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Qr=t=>class extends t{getEventContext(t){const e={},i=t.composedPath(),r=i[i.indexOf(this.$.table)-3];return r?(e.section=["body","header","footer","details"].filter((t=>r.getAttribute("part").indexOf(t)>-1))[0],r._column&&(e.column=r._column),"body"!==e.section&&"details"!==e.section||Object.assign(e,this.__getRowModel(r.parentElement)),e):e}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,ts=t=>class extends t{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(t){t.stopPropagation(),this.__addFilter(t.target),this.__applyFilters()}__removeFilters(t){0!=t.length&&(this._filters=this._filters.filter((e=>t.indexOf(e)<0)),this.__applyFilters())}__addFilter(t){-1===this._filters.indexOf(t)&&this._filters.push(t)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map((t=>({path:t.path,value:t.value})))}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,es=t=>class extends t{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",(()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0})),this.addEventListener("mouseup",(()=>this._isMousedown=!1)))}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(t){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach((e=>{t&&this.__isCell(this[e])?this[e]=this[e].parentElement:!t&&this.__isRow(this[e])&&(this[e]=this[e].firstElementChild)}))}_focusableChanged(t,e){e&&e.setAttribute("tabindex","-1"),t&&this._updateGridSectionFocusTarget(t)}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const t=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach((t=>{if(t.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=t;else if(this._itemsFocusable.parentElement){const e=[...this._itemsFocusable.parentElement.children].indexOf(this._itemsFocusable);this._itemsFocusable=t.children[e]}})),t&&this._itemsFocusable.focus()}_onKeyDown(t){const e=t.key;let i;switch(e){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":i="Navigation";break;case"Enter":case"Escape":case"F2":i="Interaction";break;case"Tab":i="Tab";break;case" ":i="Space"}this._detectInteracting(t),this.interacting&&"Interaction"!==i&&(i=void 0),i&&this[`_on${i}KeyDown`](t,e)}_ensureScrolledToIndex(t){[...this.$.items.children].find((e=>e.index===t))?this.__scrollIntoViewport(t):this.scrollToIndex(t)}__isRowExpandable(t){if(this.itemHasChildrenPath){const e=t._item;return e&&this.get(this.itemHasChildrenPath,e)&&!this._isExpanded(e)}}__isRowCollapsible(t){return this._isExpanded(t._item)}__isDetailsCell(t){return t.matches('[part~="details-cell"]')}__isCell(t){return t instanceof HTMLTableCellElement}__isRow(t){return t instanceof HTMLTableRowElement}__getIndexOfChildElement(t){return Array.prototype.indexOf.call(t.parentNode.children,t)}_onNavigationKeyDown(t,e){t.preventDefault();const i=this._lastVisibleIndex-this._firstVisibleIndex-1;let r=0,s=0;switch(e){case"ArrowRight":r=this.__isRTL?-1:1;break;case"ArrowLeft":r=this.__isRTL?1:-1;break;case"Home":this.__rowFocusMode||t.ctrlKey?s=-1/0:r=-1/0;break;case"End":this.__rowFocusMode||t.ctrlKey?s=1/0:r=1/0;break;case"ArrowDown":s=1;break;case"ArrowUp":s=-1;break;case"PageDown":s=i;break;case"PageUp":s=-i}const o=t.composedPath().find((t=>this.__isRow(t))),n=t.composedPath().find((t=>this.__isCell(t)));if(this.__rowFocusMode&&!o||!this.__rowFocusMode&&!n)return;const a=this.__isRTL?"ArrowLeft":"ArrowRight",l=this.__isRTL?"ArrowRight":"ArrowLeft";if(e===a){if(this.__rowFocusMode)return this.__isRowExpandable(o)?void this.expandItem(o._item):(this.__rowFocusMode=!1,void this._onCellNavigation(o.firstElementChild,0,0))}else if(e===l)if(this.__rowFocusMode){if(this.__isRowCollapsible(o))return void this.collapseItem(o._item)}else{if(n===[...o.children].sort(((t,e)=>t._order-e._order))[0]||this.__isDetailsCell(n))return this.__rowFocusMode=!0,void this._onRowNavigation(o,0)}this.__rowFocusMode?this._onRowNavigation(o,s):this._onCellNavigation(n,r,s)}_onRowNavigation(t,e){const{dstRow:i}=this.__navigateRows(e,t);i&&i.focus()}__getIndexInGroup(t,e){return t.parentNode===this.$.items?void 0!==e?e:t.index:this.__getIndexOfChildElement(t)}__navigateRows(t,e,i){const r=this.__getIndexInGroup(e,this._focusedItemIndex),s=e.parentNode,o=(s===this.$.items?this._effectiveSize:s.children.length)-1;let n=Math.max(0,Math.min(r+t,o));if(s!==this.$.items){if(n>r)for(;n<o&&s.children[n].hidden;)n+=1;else if(n<r)for(;n>0&&s.children[n].hidden;)n-=1;return this.toggleAttribute("navigating",!0),{dstRow:s.children[n]}}let a=!1;if(i){const o=this.__isDetailsCell(i);if(s===this.$.items){const i=e._item,s=this._cache.getItemForIndex(n);a=o?0===t:1===t&&this._isDetailsOpened(i)||-1===t&&n!==r&&this._isDetailsOpened(s),a!==o&&(1===t&&a||-1===t&&!a)&&(n=r)}}return this._ensureScrolledToIndex(n),this._focusedItemIndex=n,this.toggleAttribute("navigating",!0),{dstRow:[...s.children].find((t=>!t.hidden&&t.index===n)),dstIsRowDetails:a}}_onCellNavigation(t,e,i){const r=t.parentNode,{dstRow:s,dstIsRowDetails:o}=this.__navigateRows(i,r,t);if(!s)return;const n=this.__getIndexOfChildElement(t),a=this.__isDetailsCell(t),l=r.parentNode,d=this.__getIndexInGroup(r,this._focusedItemIndex);if(void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=a?0:this._getColumns(l,d).filter((t=>!t.hidden))[n]._order),o){[...s.children].find((t=>this.__isDetailsCell(t))).focus()}else{const t=this.__getIndexInGroup(s,this._focusedItemIndex),r=this._getColumns(l,t).filter((t=>!t.hidden)),o=r.map((t=>t._order)).sort(((t,e)=>t-e)),n=o.length-1,d=o.indexOf(o.slice(0).sort(((t,e)=>Math.abs(t-this._focusedColumnOrder)-Math.abs(e-this._focusedColumnOrder)))[0]),h=0===i&&a?d:Math.max(0,Math.min(d+e,n));h!==d&&(this._focusedColumnOrder=void 0);const c=r.reduce(((t,e,i)=>(t[e._order]=i,t)),{})[o[h]],u=s.children[c];this._scrollHorizontallyToCell(u),u.focus()}}_onInteractionKeyDown(t,e){const i=t.composedPath()[0],r="input"===i.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(i.type);let s;switch(e){case"Enter":s=!this.interacting||!r;break;case"Escape":s=!1;break;case"F2":s=!this.interacting}const{cell:o}=this._getGridEventLocation(t);if(this.interacting!==s&&null!==o)if(s){const e=o._content.querySelector("[focus-target]")||[...o._content.querySelectorAll("*")].find((t=>this._isFocusable(t)));e&&(t.preventDefault(),e.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else t.preventDefault(),this._focusedColumnOrder=void 0,o.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0)}_predictFocusStepTarget(t,e){const i=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let r=i.indexOf(t);for(r+=e;r>=0&&r<=i.length-1;){let t=i[r];if(t&&!this.__rowFocusMode&&(t=i[r].parentNode),t&&!t.hidden)break;r+=e}return i[r]}_onTabKeyDown(t){const e=this._predictFocusStepTarget(t.composedPath()[0],t.shiftKey?-1:1);if(t.stopPropagation(),e===this.$.table)this.$.table.focus();else if(e===this.$.focusexit)this.$.focusexit.focus();else if(e===this._itemsFocusable){let i=e;const r=this.__isRow(e)?e:e.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),r.index!==this._focusedItemIndex&&this.__isCell(e)){const t=Array.from(r.children).indexOf(this._itemsFocusable),e=Array.from(this.$.items.children).find((t=>!t.hidden&&t.index===this._focusedItemIndex));e&&(i=e.children[t])}t.preventDefault(),i.focus()}else t.preventDefault(),e.focus();this.toggleAttribute("navigating",!0)}_onSpaceKeyDown(t){t.preventDefault();const e=t.composedPath()[0],i=this.__isRow(e);!i&&e._content&&e._content.firstElementChild||this.dispatchEvent(new CustomEvent(i?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(i?e:e.parentElement)}}))}_onKeyUp(t){if(!/^( |SpaceBar)$/.test(t.key)||this.interacting)return;t.preventDefault();const e=t.composedPath()[0];if(e._content&&e._content.firstElementChild){const t=this.hasAttribute("navigating");e._content.firstElementChild.click(),this.toggleAttribute("navigating",t)}}_onFocusIn(t){this._isMousedown||this.toggleAttribute("navigating",!0);const e=t.composedPath()[0];e===this.$.table||e===this.$.focusexit?(this._predictFocusStepTarget(e,e===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(t)}_onFocusOut(t){this.toggleAttribute("navigating",!1),this._detectInteracting(t)}_onContentFocusIn(t){const{section:e,cell:i,row:r}=this._getGridEventLocation(t);if(this._detectInteracting(t),e&&(i||r)&&(this._activeRowGroup=e,this.$.header===e?this._headerFocusable=this.__rowFocusMode?r:i:this.$.items===e?this._itemsFocusable=this.__rowFocusMode?r:i:this.$.footer===e&&(this._footerFocusable=this.__rowFocusMode?r:i),i)){const e=this.getEventContext(t);i.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:e}}))}this._detectFocusedItemIndex(t)}_detectInteracting(t){const e=t.composedPath().some((t=>"vaadin-grid-cell-content"===t.localName));this._setInteracting(e)}_detectFocusedItemIndex(t){const{section:e,row:i}=this._getGridEventLocation(t);e===this.$.items&&(this._focusedItemIndex=i.index)}_updateGridSectionFocusTarget(t){if(!t)return;const e=this._getGridSectionFromFocusTarget(t),i=this.interacting&&e===this._activeRowGroup;t.tabIndex=i?-1:0}_preventScrollerRotatingCellFocus(t,e){t.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),e===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(t,e){let i=this._columnTree.length-1;return t===this.$.header?i=e:t===this.$.footer&&(i=this._columnTree.length-1-e),this._columnTree[i]}__isValidFocusable(t){return this.$.table.contains(t)&&t.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach((t=>{if(!this.__isValidFocusable(this[`_${t}Focusable`])){const e=[...this.$[t].children].find((t=>t.offsetHeight)),i=e?[...e.children].find((t=>!t.hidden)):null;e&&i&&(this[`_${t}Focusable`]=this.__rowFocusMode?e:i)}})),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const t=this.__getFirstVisibleItem(),e=t?[...t.children].find((t=>!t.hidden)):null;e&&t&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__rowFocusMode?t:e)}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(t){if(t.hasAttribute("frozen")||this.__isDetailsCell(t))return;const e=t.getBoundingClientRect(),i=t.parentNode,r=Array.from(i.children).indexOf(t),s=this.$.table.getBoundingClientRect();let o=s.left,n=s.right;for(let t=r-1;t>=0;t--){const e=i.children[t];if(!e.hasAttribute("hidden")&&!this.__isDetailsCell(e)&&e.hasAttribute("frozen")){o=e.getBoundingClientRect().right;break}}for(let t=r+1;t<i.children.length;t++){const e=i.children[t];if(!e.hasAttribute("hidden")&&!this.__isDetailsCell(e)&&e.hasAttribute("frozen")){n=e.getBoundingClientRect().left;break}}e.left<o&&(this.$.table.scrollLeft+=Math.round(e.left-o)),e.right>n&&(this.$.table.scrollLeft+=Math.round(e.right-n))}_getGridEventLocation(t){const e=t.composedPath(),i=e.indexOf(this.$.table);return{section:i>=1?e[i-1]:null,row:i>=2?e[i-2]:null,cell:i>=3?e[i-3]:null}}_getGridSectionFromFocusTarget(t){return t===this._headerFocusable?this.$.header:t===this._itemsFocusable?this.$.items:t===this._footerFocusable?this.$.footer:null}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,is=t=>class extends t{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver((t=>{t.forEach((({target:t})=>{this._updateDetailsCellHeight(t.parentElement)})),this.__virtualizer.__adapter._resizeHandler()}))}_rowDetailsRendererChanged(t){t&&this._columnTree&&Array.from(this.$.items.children).forEach((t=>{if(!t.querySelector("[part~=details-cell]")){this._updateRow(t,this._columnTree[this._columnTree.length-1]);const e=this._isDetailsOpened(t._item);this._toggleDetailsCell(t,e)}}))}_detailsOpenedItemsChanged(t,e){"detailsOpenedItems.length"!==t.path&&t.value&&[...this.$.items.children].forEach((t=>{(t.hasAttribute("details-opened")||e&&this._isDetailsOpened(t._item))&&this._updateItem(t,t._item)}))}_configureDetailsCell(t){t.setAttribute("part","cell details-cell"),t.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(t)}_toggleDetailsCell(t,e){const i=t.querySelector('[part~="details-cell"]');i&&(i.hidden=!e,i.hidden||this.rowDetailsRenderer&&(i._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(t){const e=t.querySelector('[part~="details-cell"]');e&&(e.hidden?t.style.removeProperty("padding-bottom"):t.style.setProperty("padding-bottom",`${e.offsetHeight}px`))}_updateDetailsCellHeights(){[...this.$.items.children].forEach((t=>{this._updateDetailsCellHeight(t)}))}_isDetailsOpened(t){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(t,this.detailsOpenedItems)}openItemDetails(t){this._isDetailsOpened(t)||(this.detailsOpenedItems=[...this.detailsOpenedItems,t])}closeItemDetails(t){this._isDetailsOpened(t)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter((e=>!this._itemsEqual(e,t))))}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,rs=500,ss=t=>class extends t{static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(t){this.$.table.scrollTop=t}get _scrollLeft(){return this.$.table.scrollLeft}ready(){super.ready(),this.$.outerscroller=document.createElement("div"),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",(t=>{const e=t.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=t.composedPath()[e-1]})),this.$.items.addEventListener("focusout",(()=>this._rowWithFocusedElement=void 0)),this.$.table.addEventListener("scroll",(()=>this._afterScroll()))}scrollToIndex(t){t=Math.min(this._effectiveSize-1,Math.max(0,t)),this.__virtualizer.scrollToIndex(t),this.__scrollIntoViewport(t)}__scrollIntoViewport(t){const e=[...this.$.items.children].find((e=>e.index===t));if(e){const t=e.getBoundingClientRect(),i=this.$.footer.getBoundingClientRect().top,r=this.$.header.getBoundingClientRect().bottom;t.bottom>i?this.$.table.scrollTop+=t.bottom-i:t.top<r&&(this.$.table.scrollTop-=r-t.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame((()=>this.$.scroller.toggleAttribute("scrolling",!0)))),this._debounceScrolling=Ei.debounce(this._debounceScrolling,Ge.after(rs),(()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)}))}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow()}_updateOverflow(){let t="";const e=this.$.table;e.scrollTop<e.scrollHeight-e.clientHeight&&(t+=" bottom"),e.scrollTop>0&&(t+=" top"),e.scrollLeft<e.scrollWidth-e.clientWidth&&(t+=" right"),e.scrollLeft>0&&(t+=" left"),this._debounceOverflow=Ei.debounce(this._debounceOverflow,We,(()=>{const e=t.trim();e.length>0&&this.getAttribute("overflow")!==e?this.setAttribute("overflow",e):0==e.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}))}_frozenCellsChanged(){this._debouncerCacheElements=Ei.debounce(this._debouncerCacheElements,je,(()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((function(t){t.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this.__updateHorizontalScrollPosition()})),this._updateLastFrozen()}_updateLastFrozen(){if(!this._columnTree)return;const t=this._columnTree[this._columnTree.length-1].slice(0);t.sort(((t,e)=>t._order-e._order));const e=t.reduce(((t,e,i)=>(e._lastFrozen=!1,e.frozen&&!e.hidden?i:t)),void 0);void 0!==e&&(t[e]._lastFrozen=!0)}__updateHorizontalScrollPosition(){if(this.$.table.style.setProperty("--_grid-horizontal-scroll-position",-this._scrollLeft+"px"),this.__isRTL){const t=`translate(${this.__getNormalizedScrollLeft(this.$.table)+this.$.table.clientWidth-this.$.table.scrollWidth}px, 0)`;for(let e=0;e<this._frozenCells.length;e++)this._frozenCells[e].style.transform=t}}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,os=t=>class extends t{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(t){return this.selectedItems&&this._getItemIndexInArray(t,this.selectedItems)>-1}selectItem(t){this._isSelected(t)||(this.selectedItems=[...this.selectedItems,t])}deselectItem(t){this._isSelected(t)&&(this.selectedItems=this.selectedItems.filter((e=>!this._itemsEqual(e,t))))}_toggleItem(t){-1===this._getItemIndexInArray(t,this.selectedItems)?this.selectItem(t):this.deselectItem(t)}_selectedItemsChanged(){this.requestContentUpdate()}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,ns=t=>class extends t{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(t){const e=t.target;t.stopPropagation(),this.__updateSorter(e),this.__applySorters()}__removeSorters(t){0!=t.length&&(this._sorters=this._sorters.filter((e=>t.indexOf(e)<0)),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(((t,e)=>t._order=this._sorters.length>1?e:null),this)}__updateSorter(t){if(t.direction||-1!==this._sorters.indexOf(t))if(t._order=null,this.multiSort)this._removeArrayItem(this._sorters,t),t.direction&&this._sorters.unshift(t),this.__updateSortOrders();else if(t.direction){const e=this._sorters.filter((e=>e!=t));this._sorters=[t],e.forEach((t=>{t._order=null,t.direction=null}))}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map((t=>({path:t.path,direction:t.direction})))}_removeArrayItem(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,as=t=>class extends t{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter((t=>!t.hidden)).forEach((t=>this._generateCellClassNames(t,this.__getRowModel(t))))}_generateCellClassNames(t,e){Array.from(t.children).forEach((t=>{if(t.__generatedClasses&&t.__generatedClasses.forEach((e=>t.classList.remove(e))),this.cellClassNameGenerator){const i=this.cellClassNameGenerator(t._column,e);t.__generatedClasses=i&&i.split(" ").filter((t=>t.length>0)),t.__generatedClasses&&t.__generatedClasses.forEach((e=>t.classList.add(e)))}}))}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class ls extends(Bi(c(Gr(Mr(Zr(zr(ss(os(ns(is(es(Or(ts(Br(Vr(Qr(Xr(as(ji(Le)))))))))))))))))))){static get template(){return Fe`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:xr},_ios:{type:Boolean,value:Cr},_firefox:{type:Boolean,value:yr},_android:{type:Boolean,value:br},_touchDevice:{type:Boolean,value:Ar},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1}__getFirstVisibleItem(){return this._getVisibleRows().find((t=>this._isInViewport(t)))}get _firstVisibleIndex(){const t=this.__getFirstVisibleItem();return t?t.index:void 0}__getLastVisibleItem(){return this._getVisibleRows().reverse().find((t=>this._isInViewport(t)))}get _lastVisibleIndex(){const t=this.__getLastVisibleItem();return t?t.index:void 0}_isInViewport(t){const e=this.$.table.getBoundingClientRect(),i=t.getBoundingClientRect(),r=this.$.header.getBoundingClientRect().height,s=this.$.footer.getBoundingClientRect().height;return i.bottom>e.top+r&&i.top<e.bottom-s}_getVisibleRows(){return Array.from(this.$.items.children).filter((t=>!t.hidden)).sort(((t,e)=>t.index-e.index))}ready(){super.ready(),this.__virtualizer=new Tr({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver((()=>setTimeout((()=>this.__updateFooterPositioning())))).observe(this.$.footer),ar(this)}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"dir"===t&&(this.__isRTL="rtl"===i)}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&"td"===t.localName)return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){const i=this._getVisibleRows().find((e=>e._item===t)),r=i&&[...i.children].find((t=>t._column===e));r&&r.focus()}_effectiveSizeChanged(t,e,i,r){if(e&&i&&r){const i=this.shadowRoot.activeElement,r=this.__getBodyCellCoordinates(i);e.size=t,e.update(),e.flush(),r&&i.parentElement.hidden&&this.__focusBodyCell(r),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter((t=>t.clientHeight)).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}__getIntrinsicWidth(t){const e=t.width,i=t.flexGrow;t.width="auto",t.flexGrow=0;const r=t._allCells.filter((t=>!this.$.items.contains(t)||this._isInViewport(t.parentElement))).reduce(((t,e)=>Math.max(t,e.offsetWidth+1)),0);return t.flexGrow=i,t.width=e,r}__getDistributedWidth(t,e){if(null==t||t===this)return 0;const i=Math.max(this.__getIntrinsicWidth(t),this.__getDistributedWidth(t.parentElement,t));if(!e)return i;const r=i,s=t._visibleChildColumns.map((t=>this.__getIntrinsicWidth(t))).reduce(((t,e)=>t+e),0),o=Math.max(0,r-s),n=this.__getIntrinsicWidth(e)/s*o;return this.__getIntrinsicWidth(e)+n}_recalculateColumnWidths(t){this.__virtualizer.flush(),t.forEach((t=>{t.width=`${this.__getDistributedWidth(t)}px`}))}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const t=this._getColumns().filter((t=>!t.hidden&&t.autoWidth));this._recalculateColumnWidths(t)}}_createScrollerRows(t){const e=[];for(let i=0;i<t;i++){const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(t,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(t)}var i,r,s;return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach((t=>t.isConnected&&t.notifyPath&&t.notifyPath("_cells.*",t._cells))),i=this,r=()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._afterScroll(),this.__itemsReceived()},hr||_r(),cr.push([i,r,s]),e}_createCell(t){const e="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+1||0),i=document.createElement("vaadin-grid-cell-content");i.setAttribute("slot",e);const r=document.createElement(t);r.id=e.replace("-content-","-"),r.setAttribute("tabindex","-1"),r.setAttribute("role","td"===t?"gridcell":"columnheader");const s=document.createElement("slot");return s.setAttribute("name",e),r.appendChild(s),r._content=i,i.addEventListener("mousedown",(()=>{if(vr){const t=e=>{const s=i.contains(this.getRootNode().activeElement),o=e.composedPath().includes(i);!s&&o&&r.focus(),document.removeEventListener("mouseup",t,!0)};document.addEventListener("mouseup",t,!0)}else setTimeout((()=>{i.contains(this.getRootNode().activeElement)||r.focus()}))})),r}_updateRow(t,e,i,r,s){i=i||"body";const o=document.createDocumentFragment();Array.from(t.children).forEach((t=>t._vacant=!0)),t.innerHTML="",e.filter((t=>!t.hidden)).forEach(((e,n,a)=>{let l;if("body"===i){if(e._cells=e._cells||[],l=e._cells.filter((t=>t._vacant))[0],l||(l=this._createCell("td"),e._cells.push(l)),l.setAttribute("part","cell body-cell"),t.appendChild(l),n===a.length-1&&this.rowDetailsRenderer){this._detailsCells=this._detailsCells||[];const e=this._detailsCells.filter((t=>t._vacant))[0]||this._createCell("td");-1===this._detailsCells.indexOf(e)&&this._detailsCells.push(e),e._content.parentElement||o.appendChild(e._content),this._configureDetailsCell(e),t.appendChild(e),this._a11ySetRowDetailsCell(t,e),e._vacant=!1}e.notifyPath&&!s&&e.notifyPath("_cells.*",e._cells)}else{const s="header"===i?"th":"td";r||"vaadin-grid-column-group"===e.localName?(l=e[`_${i}Cell`]||this._createCell(s),l._column=e,t.appendChild(l),e[`_${i}Cell`]=l):(e._emptyCells=e._emptyCells||[],l=e._emptyCells.filter((t=>t._vacant))[0]||this._createCell(s),l._column=e,t.appendChild(l),-1===e._emptyCells.indexOf(l)&&e._emptyCells.push(l)),l.setAttribute("part",`cell ${i}-cell`),this.__updateHeaderFooterRowVisibility(t)}l._content.parentElement||o.appendChild(l._content),l._vacant=!1,l._column=e})),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__updateHeaderFooterRowVisibility(t){if(!t)return;const e=Array.from(t.children).filter((e=>{const i=e._column;if(i._emptyCells&&i._emptyCells.indexOf(e)>-1)return!1;if(t.parentElement===this.$.header){if(i.headerRenderer)return!0;if(null===i.header)return!1;if(i.path||void 0!==i.header)return!0}else if(i.footerRenderer)return!0;return!1}));t.hidden!==!e.length&&(t.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),this._columnTree&&(t.toggleAttribute("first",0===e),t.toggleAttribute("last",e===this._effectiveSize-1),t.toggleAttribute("odd",e%2),this._a11yUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.recalculateColumnWidths()}_renderColumnTree(t){for(Array.from(this.$.items.children).forEach((e=>this._updateRow(e,t[t.length-1],null,!1,!0)));this.$.header.children.length<t.length;){const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.header.appendChild(t);const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.footer.appendChild(e)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach(((e,i)=>this._updateRow(e,t[i],"header",i===t.length-1))),Array.from(this.$.footer.children).forEach(((e,i)=>this._updateRow(e,t[t.length-1-i],"footer",0===i))),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames()}__updateFooterPositioning(){this._firefox&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(t,e){t._item=e;const i=this.__getRowModel(t);this._toggleDetailsCell(t,i.detailsOpened),this._a11yUpdateRowLevel(t,i.level),this._a11yUpdateRowSelected(t,i.selected),t.toggleAttribute("expanded",i.expanded),t.toggleAttribute("selected",i.selected),t.toggleAttribute("details-opened",i.detailsOpened),this._generateCellClassNames(t,i),this._filterDragAndDrop(t,i),Array.from(t.children).forEach((t=>{if(t._renderer){const e=t._column||this;t._renderer.call(e,t._content,e,i)}})),this._updateDetailsCellHeight(t),this._a11yUpdateRowExpanded(t,i.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning()}_onAnimationEnd(t){0===t.animationName.indexOf("vaadin-grid-appear")&&(t.stopPropagation(),this.__itemsReceived(),requestAnimationFrame((()=>{this.__scrollToPendingIndex()})))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach((t=>{t.forEach((t=>{t._renderHeaderAndFooter()}))})),this.__updateVisibleRows())}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}notifyResize(){console.warn("WARNING: Since Vaadin 22, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(ls.is,ls);export{ut as $,Pi as A,j as B,Si as C,Di as D,Bi as E,Ui as F,dr as G,ft as H,$i as I,mt as J,Ai as K,sr as L,Rt as M,Nt as N,Rr as O,Le as P,G as Q,F as R,tr as S,ji as T,Mt as U,Tr as V,ze as W,Y as X,Te as Y,vt as Z,U as _,c as a,Ji as a0,lt as a1,lr as a2,Hr as a3,je as a4,Qi as b,mr as c,pi as d,yr as e,Ei as f,Yi as g,Fe as h,Cr as i,er as j,xi as k,Ar as l,J as m,rr as n,Vi as o,ar as p,Re as q,o as r,fi as s,Ge as t,Ee as u,L as v,ht as w,H as x,M as y,z};
