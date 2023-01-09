import{a1 as e,i as t}from"./backend-ai-webui-765175f3.js";
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class r extends HTMLElement{static get version(){return"23.1.6"}}customElements.define("vaadin-lumo-styles",r);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=e=>class extends e{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(e){this._set_theme(e)}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,s=[];function o(t,r,i={}){var o;t&&(o=t,h(customElements.get(o))&&console.warn(`The custom element definition for "${t}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),r=function(t=[]){return[t].flat(1/0).filter((t=>t instanceof e||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(r),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,r,i):s.push({themeFor:t,styles:r,include:i.include,moduleId:i.moduleId})}function n(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():s}function a(e=""){let t=0;return 0===e.indexOf("lumo-")||0===e.indexOf("material-")?t=1:0===e.indexOf("vaadin-")&&(t=2),t}function l(e){const t=[];return e.include&&[].concat(e.include).forEach((e=>{const r=n().find((t=>t.moduleId===e));r?t.push(...l(r),...r.styles):console.warn(`Included moduleId ${e} not found in style registry`)}),e.styles),t}function d(e){const t=`${e}-default-theme`,r=n().filter((r=>r.moduleId!==t&&function(e,t){return(e||"").split(" ").some((e=>new RegExp(`^${e.split("*").join(".*")}$`).test(t)))}(r.themeFor,e))).map((e=>({...e,styles:[...l(e),...e.styles],includePriority:a(e.moduleId)}))).sort(((e,t)=>t.includePriority-e.includePriority));return r.length>0?r:n().filter((e=>e.moduleId===t))}function h(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}const c=e=>class extends(i(e)){static finalize(){if(super.finalize(),this.elementStyles)return;const e=this.prototype._template;e&&!h(this)&&function(e,t){const r=document.createElement("style");r.innerHTML=e.map((e=>e.cssText)).join("\n"),t.content.appendChild(r)}(this.getStylesForThis(),e)}static finalizeStyles(e){const t=this.getStylesForThis();return e?[...super.finalizeStyles(e),...t]:t}static getStylesForThis(){const e=Object.getPrototypeOf(this.prototype),t=(e?e.constructor.__themes:[])||[];this.__themes=[...t,...d(this.is)];const r=this.__themes.flatMap((e=>e.styles));return r.filter(((e,t)=>t===r.lastIndexOf(e)))}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,u=t`
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
`,_=document.createElement("template");_.innerHTML=`<style>${u.toString().replace(":host","html")}</style>`,document.head.appendChild(_.content);const p=t`
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
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
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
`;o("",p,{moduleId:"lumo-color"});o("",[p,t`
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
const f=t`
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
const b=t`
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
`,y=document.createElement("template");y.innerHTML=`<style>${b.toString().replace(":host","html")}</style>`,document.head.appendChild(y.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const v=t`
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
`,C=document.createElement("template");C.innerHTML=`<style>${v.toString().replace(":host","html")}</style>`,document.head.appendChild(C.content);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const w=t`
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
`;o("",t`
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
`,{moduleId:"lumo-typography"});const x=document.createElement("template");x.innerHTML=`<style>${w.toString().replace(":host","html")}</style>`,document.head.appendChild(x.content),o("vaadin-checkbox",t`
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
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let A,E,P=/(url\()([^)]*)(\))/g,S=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function T(e,t){if(e&&S.test(e))return e;if("//"===e)return e;if(void 0===A){A=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",A="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),A)try{return new URL(e,t).href}catch(t){return e}return E||(E=document.implementation.createHTMLDocument("temp"),E.base=E.createElement("base"),E.head.appendChild(E.base),E.anchor=E.createElement("a"),E.body.appendChild(E.anchor)),E.base.href=t,E.anchor.href=e,E.anchor.href||e}function I(e,t){return e.replace(P,(function(e,r,i,s){return r+"'"+T(i.replace(/["']/g,""),t)+"'"+s}))}function z(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const O=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const N=O&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})();let R=window.Polymer&&window.Polymer.rootPath||z(document.baseURI||window.location.href),k=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,F=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,L=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,D=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,M=window.Polymer&&window.Polymer.legacyOptimizations||!1,H=window.Polymer&&window.Polymer.legacyWarnings||!1,B=window.Polymer&&window.Polymer.syncInitialRender||!1,V=window.Polymer&&window.Polymer.legacyUndefined||!1,$=window.Polymer&&window.Polymer.orderedComputed||!1,G=!0;let W=window.Polymer&&window.Polymer.removeNestedTemplates||!1,U=window.Polymer&&window.Polymer.fastDomIf||!1,j=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Y=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,q=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,K=0;const J=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let r=K++;return function(i){let s=i.__mixinSet;if(s&&s[r])return i;let o=t,n=o.get(i);if(!n){n=e(i),o.set(i,n);let t=Object.create(n.__mixinSet||s||null);t[r]=!0,n.__mixinSet=t}return n}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let X={},Z={};function Q(e,t){X[e]=Z[e.toLowerCase()]=t}function ee(e){return X[e]||Z[e.toLowerCase()]}class te extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let r=ee(e);return r&&t?r.querySelector(t):r}return null}attributeChangedCallback(e,t,r,i){t!==r&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=T(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=z(t)}return this.__assetpath}register(e){if(e=e||this.id){if(L&&void 0!==ee(e))throw Q(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,Q(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}te.prototype.modules=X,customElements.define("dom-module",te);function re(e){return te.import(e)}function ie(e){const t=I((e.body?e.body:e).textContent,e.baseURI),r=document.createElement("style");return r.textContent=t,r}function se(e){const t=e.trim().split(/\s+/),r=[];for(let e=0;e<t.length;e++)r.push(...oe(t[e]));return r}function oe(e){const t=re(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...ae(t));const r=t.querySelector("template");r&&e.push(...ne(r,t.assetpath)),t._styles=e}return t._styles}function ne(e,t){if(!e._styles){const r=[],i=e.content.querySelectorAll("style");for(let e=0;e<i.length;e++){let s=i[e],o=s.getAttribute("include");o&&r.push(...se(o).filter((function(e,t,r){return r.indexOf(e)===t}))),t&&(s.textContent=I(s.textContent,t)),r.push(s)}e._styles=r}return e._styles}function ae(e){const t=[],r=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<r.length;e++){let i=r[e];if(i.import){const e=i.import,r=i.hasAttribute("shady-unscoped");if(r&&!e._unscopedStyle){const t=ie(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=ie(e));t.push(r?e._unscopedStyle:e._style)}}return t}function le(e){let t=e.trim().split(/\s+/),r="";for(let e=0;e<t.length;e++)r+=de(t[e]);return r}function de(e){let t=re(e);if(t&&void 0===t._cssText){let e=function(e){let t="",r=ae(e);for(let e=0;e<r.length;e++)t+=r[e].textContent;return t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),r=t.querySelector("template");r&&(e+=function(e,t){let r="";const i=ne(e,t);for(let e=0;e<i.length;e++){let t=i[e];t.parentNode&&t.parentNode.removeChild(t),r+=t.textContent}return r}(r,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const he=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ce(e){return e.indexOf(".")>=0}function ue(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function _e(e,t){return 0===e.indexOf(t+".")}function pe(e,t){return 0===t.indexOf(e+".")}function me(e,t,r){return t+r.slice(e.length)}function fe(e,t){return e===t||_e(e,t)||pe(e,t)}function ge(e){if(Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++){let i=e[r].toString().split(".");for(let e=0;e<i.length;e++)t.push(i[e])}return t.join(".")}return e}function be(e){return Array.isArray(e)?ge(e).split("."):e.toString().split(".")}function ye(e,t,r){let i=e,s=be(t);for(let e=0;e<s.length;e++){if(!i)return;i=i[s[e]]}return r&&(r.path=s.join(".")),i}function ve(e,t,r){let i=e,s=be(t),o=s[s.length-1];if(s.length>1){for(let e=0;e<s.length-1;e++){if(i=i[s[e]],!i)return}i[o]=r}else i[t]=r;return s.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ce={},we=/-[a-z]/g,xe=/([A-Z])/g;function Ae(e){return Ce[e]||(Ce[e]=e.indexOf("-")<0?e:e.replace(we,(e=>e[1].toUpperCase())))}function Ee(e){return Ce[e]||(Ce[e]=e.replace(xe,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Pe=0,Se=0,Te=[],Ie=0,ze=!1,Oe=document.createTextNode("");new window.MutationObserver((function(){ze=!1;const e=Te.length;for(let t=0;t<e;t++){let e=Te[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}Te.splice(0,e),Se+=e})).observe(Oe,{characterData:!0});const Ne={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Re={run:e=>(ze||(ze=!0,Oe.textContent=Ie++),Te.push(e),Pe++),cancel(e){const t=e-Se;if(t>=0){if(!Te[t])throw new Error("invalid async handle: "+e);Te[t]=null}}},ke=Re,Fe=J((e=>class extends e{static createProperties(e){const t=this.prototype;for(let r in e)r in t||t._createPropertyAccessor(r)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,r){let i=this.__data[e],s=this._shouldPropertyChange(e,t,i);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=i),this.__data[e]=t,this.__dataPending[e]=t),s}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ke.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(e,t,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,r)),this.__dataCounter--}_shouldPropertiesChange(e,t,r){return Boolean(t)}_propertiesChanged(e,t,r){}_shouldPropertyChange(e,t,r){return r!==t&&(r==r||t==t)}attributeChangedCallback(e,t,r,i){t!==r&&this._attributeToProperty(e,r),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,r,i)}_attributeToProperty(e,t,r){if(!this.__serializing){const i=this.__dataAttributes,s=i&&i[e]||e;this[s]=this._deserializeValue(t,r||this.constructor.typeForProperty(s))}}_propertyToAttribute(e,t,r){this.__serializing=!0,r=arguments.length<3?this[e]:r,this._valueToNodeAttribute(this,r,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,r){const i=this._serializeValue(t);"class"!==r&&"name"!==r&&"slot"!==r||(e=he(e)),void 0===i?e.removeAttribute(r):e.setAttribute(r,""===i&&window.trustedTypes?window.trustedTypes.emptyScript:i)}_serializeValue(e){return"boolean"==typeof e?e?"":void 0:null!=e?e.toString():void 0}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})),Le={};let De=HTMLElement.prototype;for(;De;){let e=Object.getOwnPropertyNames(De);for(let t=0;t<e.length;t++)Le[e[t]]=!0;De=Object.getPrototypeOf(De)}const Me=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;const He=J((e=>{const t=Fe(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Ae(e[t]))}static attributeNameForProperty(e){return Ee(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const r=this;r.hasAttribute(e)||this._valueToNodeAttribute(r,t,e)}_serializeValue(e){if("object"==typeof e){if(e instanceof Date)return e.toString();if(e){if(Me(e))return e;try{return JSON.stringify(e)}catch(e){return""}}}return super._serializeValue(e)}_deserializeValue(e,t){let r;switch(t){case Object:try{r=JSON.parse(e)}catch(t){r=e}break;case Array:try{r=JSON.parse(e)}catch(t){r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:r=isNaN(e)?String(e):Number(e),r=new Date(r);break;default:r=super._deserializeValue(e,t)}return r}_definePropertyAccessor(e,t){!function(e,t){if(!Le[t]){let r=e[t];void 0!==r&&(e.__data?e._setPendingProperty(t,r):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=r))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})),Be={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ve=!1,$e=!1;function Ge(e){(function(){if(!Ve){Ve=!0;const e=document.createElement("textarea");e.placeholder="a",$e=e.placeholder===e.textContent}return $e})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const We=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(t,r,i)=>{const s=r.getAttribute(i);e&&i.startsWith("on-")?t.setAttribute(i,e.createScript(s,i)):t.setAttribute(i,s)}})();function Ue(e){let t=e.getAttribute("is");if(t&&Be[t]){let r=e;for(r.removeAttribute("is"),e=r.ownerDocument.createElement(t),r.parentNode.replaceChild(e,r),e.appendChild(r);r.attributes.length;){const{name:t}=r.attributes[0];We(e,r,t),r.removeAttribute(t)}}return e}function je(e,t){let r=t.parentInfo&&je(e,t.parentInfo);if(!r)return e;for(let e=r.firstChild,i=0;e;e=e.nextSibling)if(t.parentIndex===i++)return e}function Ye(e,t,r,i){i.id&&(t[i.id]=r)}function qe(e,t,r){if(r.events&&r.events.length)for(let i,s=0,o=r.events;s<o.length&&(i=o[s]);s++)e._addMethodEventListenerToNode(t,i.name,i.value,e)}function Ke(e,t,r,i){r.templateInfo&&(t._templateInfo=r.templateInfo,t._parentTemplateInfo=i)}const Je=J((e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let r=e._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=Boolean(t),r.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,r,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,r){return this._parseTemplateNode(e.content,t,r)}static _parseTemplateNode(e,t,r){let i=!1,s=e;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(t.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(s,t,r)||i,Ge(s),s.firstChild&&this._parseTemplateChildNodes(s,t,r),s.hasAttributes&&s.hasAttributes()&&(i=this._parseTemplateNodeAttributes(s,t,r)||i),i||r.noted}static _parseTemplateChildNodes(e,t,r){if("script"!==e.localName&&"style"!==e.localName)for(let i,s=e.firstChild,o=0;s;s=i){if("template"==s.localName&&(s=Ue(s)),i=s.nextSibling,s.nodeType===Node.TEXT_NODE){let r=i;for(;r&&r.nodeType===Node.TEXT_NODE;)s.textContent+=r.textContent,i=r.nextSibling,e.removeChild(r),r=i;if(t.stripWhiteSpace&&!s.textContent.trim()){e.removeChild(s);continue}}let n={parentIndex:o,parentInfo:r};this._parseTemplateNode(s,t,n)&&(n.infoIndex=t.nodeInfoList.push(n)-1),s.parentNode&&o++}}static _parseTemplateNestedTemplate(e,t,r){let i=e,s=this._parseTemplate(i,t);return(s.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),r.templateInfo=s,!0}static _parseTemplateNodeAttributes(e,t,r){let i=!1,s=Array.from(e.attributes);for(let o,n=s.length-1;o=s[n];n--)i=this._parseTemplateNodeAttribute(e,t,r,o.name,o.value)||i;return i}static _parseTemplateNodeAttribute(e,t,r,i,s){return"on-"===i.slice(0,3)?(e.removeAttribute(i),r.events=r.events||[],r.events.push({name:i.slice(3),value:s}),!0):"id"===i&&(r.id=s,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let r=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,i=t.content||e.content,s=document.importNode(i,!0);s.__noInsertionPoint=!t.hasInsertionPoint;let o=s.nodeList=new Array(r.length);s.$={};for(let e,i=0,n=r.length;i<n&&(e=r[i]);i++){let r=o[i]=je(s,e);Ye(0,s.$,r,e),Ke(0,r,e,t),qe(this,r,e)}return s}_addMethodEventListenerToNode(e,t,r,i){let s=function(e,t,r){return e=e._methodHost||e,function(t){e[r]?e[r](t,t.detail):console.warn("listener method `"+r+"` not defined")}}(i=i||e,0,r);return this._addEventListenerToNode(e,t,s),s}_addEventListenerToNode(e,t,r){e.addEventListener(t,r)}_removeEventListenerFromNode(e,t,r){e.removeEventListener(t,r)}}));
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
 */let Xe=0;const Ze=[],Qe={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},et=/[A-Z]/;function tt(e,t,r){let i=e[t];if(i){if(!e.hasOwnProperty(t)&&(i=e[t]=Object.create(e[t]),r))for(let e in i){let t=i[e],r=i[e]=Array(t.length);for(let e=0;e<t.length;e++)r[e]=t[e]}}else i=e[t]={};return i}function rt(e,t,r,i,s,o){if(t){let n=!1;const a=Xe++;for(let l in r){let d=t[s?ue(l):l];if(d)for(let t,h=0,c=d.length;h<c&&(t=d[h]);h++)t.info&&t.info.lastRun===a||s&&!st(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,r,i,t.info,s,o),n=!0)}return n}return!1}function it(e,t,r,i,s,o,n,a){let l=!1,d=t[n?ue(i):i];if(d)for(let t,h=0,c=d.length;h<c&&(t=d[h]);h++)t.info&&t.info.lastRun===r||n&&!st(i,t.trigger)||(t.info&&(t.info.lastRun=r),t.fn(e,i,s,o,t.info,n,a),l=!0);return l}function st(e,t){if(t){let r=t.name;return r==e||!(!t.structured||!_e(r,e))||!(!t.wildcard||!pe(r,e))}return!0}function ot(e,t,r,i,s){let o="string"==typeof s.method?e[s.method]:s.method,n=s.property;o?o.call(e,e.__data[n],i[n]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function nt(e,t,r){let i=ue(t);if(i!==t){return at(e,Ee(i)+"-changed",r[t],t),!0}return!1}function at(e,t,r,i){let s={value:r,queueProperty:!0};i&&(s.path=i),he(e).dispatchEvent(new CustomEvent(t,{detail:s}))}function lt(e,t,r,i,s,o){let n=(o?ue(t):t)!=t?t:null,a=n?ye(e,n):e.__data[t];n&&void 0===a&&(a=r[t]),at(e,s.eventName,a,n)}function dt(e,t,r,i,s){let o=e.__data[t];k&&(o=k(o,s.attrName,"attribute",e)),e._propertyToAttribute(t,s.attrName,o)}function ht(e,t,r,i){let s=e[Qe.COMPUTE];if(s)if($){Xe++;const o=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const r=e[Qe.COMPUTE];let i,{counts:s,ready:o,total:n}=function(e){const t=e.__computeInfo,r={},i=e[Qe.COMPUTE],s=[];let o=0;for(let e in t){const i=t[e];o+=r[e]=i.args.filter((e=>!e.literal)).length+(i.dynamicFn?1:0)}for(let e in i)t[e]||s.push(e);return{counts:r,ready:s,total:o}}(e);for(;i=o.shift();){t.set(i,t.size);const e=r[i];e&&e.forEach((e=>{const t=e.info.methodInfo;--n,0==--s[t]&&o.push(t)}))}if(0!==n){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),n=[];for(let e in t)ut(e,s,n,o,i);let a;for(;a=n.shift();)_t(e,"",t,r,a)&&ut(a.methodInfo,s,n,o,i);Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let o=t;for(;rt(e,s,o,r,i);)Object.assign(r,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}}const ct=(e,t,r)=>{let i=0,s=t.length-1,o=-1;for(;i<=s;){const n=i+s>>1,a=r.get(t[n].methodInfo)-r.get(e.methodInfo);if(a<0)i=n+1;else{if(!(a>0)){o=n;break}s=n-1}}o<0&&(o=s+1),t.splice(o,0,e)},ut=(e,t,r,i,s)=>{const o=t[s?ue(e):e];if(o)for(let t=0;t<o.length;t++){const n=o[t];n.info.lastRun===Xe||s&&!st(e,n.trigger)||(n.info.lastRun=Xe,ct(n.info,r,i))}};function _t(e,t,r,i,s){let o=vt(e,t,r,i,s);if(o===Ze)return!1;let n=s.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[n]?e._setPendingProperty(n,o,!0):(e[n]=o,!1)}function pt(e,t,r,i,s,o,n){r.bindings=r.bindings||[];let a={kind:i,target:s,parts:o,literal:n,isCompound:1!==o.length};if(r.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Ee(s)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let r=0;r<a.parts.length;r++){let i=a.parts[r];i.compoundIndex=r,mt(e,t,a,i,l)}}function mt(e,t,r,i,s){if(!i.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let o=i.dependencies,n={index:s,binding:r,part:i,evaluator:e};for(let r=0;r<o.length;r++){let i=o[r];"string"==typeof i&&(i=Et(i),i.wildcard=!0),e._addTemplatePropertyEffect(t,i.rootProperty,{fn:ft,info:n,trigger:i})}}}function ft(e,t,r,i,s,o,n){let a=n[s.index],l=s.binding,d=s.part;if(o&&d.source&&t.length>d.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let i=r[t];t=me(d.source,l.target,t),a._setPendingPropertyOrPath(t,i,!1,!0)&&e._enqueueClient(a)}else{let n=s.evaluator._evaluateBinding(e,d,t,r,i,o);n!==Ze&&function(e,t,r,i,s){s=function(e,t,r,i){if(r.isCompound){let s=e.__dataCompoundStorage[r.target];s[i.compoundIndex]=t,t=s.join("")}"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,s,r,i),k&&(s=k(s,r.target,r.kind,t));if("attribute"==r.kind)e._valueToNodeAttribute(t,s,r.target);else{let i=r.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[i]?t[Qe.READ_ONLY]&&t[Qe.READ_ONLY][i]||t._setPendingProperty(i,s)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,i,s)}}(e,a,l,d,n)}}function gt(e,t){if(t.isCompound){let r=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),i=t.parts,s=new Array(i.length);for(let e=0;e<i.length;e++)s[e]=i[e].literal;let o=t.target;r[o]=s,t.literal&&"property"==t.kind&&("className"===o&&(e=he(e)),e[o]=t.literal)}}function bt(e,t,r){if(r.listenerEvent){let i=r.parts[0];e.addEventListener(r.listenerEvent,(function(e){!function(e,t,r,i,s){let o,n=e.detail,a=n&&n.path;a?(i=me(r,i,a),o=n&&n.value):o=e.currentTarget[r],o=s?!o:o,t[Qe.READ_ONLY]&&t[Qe.READ_ONLY][i]||!t._setPendingPropertyOrPath(i,o,!0,Boolean(a))||n&&n.queueProperty||t._invalidateProperties()}(e,t,r.target,i.source,i.negate)}))}}function yt(e,t,r,i,s,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:o};for(let s,o=0;o<t.args.length&&(s=t.args[o]);o++)s.literal||e._addPropertyEffect(s.rootProperty,r,{fn:i,info:n,trigger:s});return o&&e._addPropertyEffect(t.methodName,r,{fn:i,info:n}),n}function vt(e,t,r,i,s){let o=e._methodHost||e,n=o[s.methodName];if(n){let i=e._marshalArgs(s.args,t,r);return i===Ze?Ze:n.apply(o,i)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const Ct=[],wt=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function xt(e){let t="";for(let r=0;r<e.length;r++){t+=e[r].literal||""}return t}function At(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Ct};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let r=Et(e);return r.literal||(t.static=!1),r}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Et(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:t,value:"",literal:!1},i=t[0];switch("-"===i&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':r.value=t.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(t),r.literal=!0}return r.literal||(r.rootProperty=ue(t),r.structured=ce(t),r.structured&&(r.wildcard=".*"==t.slice(-2),r.wildcard&&(r.name=t.slice(0,-2)))),r}function Pt(e,t,r){let i=ye(e,r);return void 0===i&&(i=t[r]),i}function St(e,t,r,i){const s={indexSplices:i};V&&!e._overrideLegacyUndefined&&(t.splices=s),e.notifyPath(r+".splices",s),e.notifyPath(r+".length",t.length),V&&!e._overrideLegacyUndefined&&(s.indexSplices=[])}function Tt(e,t,r,i,s,o){St(e,t,r,[{index:i,addedCount:s,removed:o,object:t,type:"splice"}])}const It=J((e=>{const t=Je(He(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Qe}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(zt.length){let e=zt[zt.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Qe.READ_ONLY];for(let r in e)t&&t[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=e[r])}_addPropertyEffect(e,t,r){this._createPropertyAccessor(e,t==Qe.READ_ONLY);let i=tt(this,t,!0)[e];i||(i=this[t][e]=[]),i.push(r)}_removePropertyEffect(e,t,r){let i=tt(this,t,!0)[e],s=i.indexOf(r);s>=0&&i.splice(s,1)}_hasPropertyEffect(e,t){let r=this[t];return Boolean(r&&r[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Qe.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Qe.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Qe.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Qe.COMPUTE)}_setPendingPropertyOrPath(e,t,r,i){if(i||ue(Array.isArray(e)?e[0]:e)!==e){if(!i){let r=ye(this,e);if(!(e=ve(this,e,t))||!super._shouldPropertyChange(e,t,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,r))return function(e,t,r){let i=e.__dataLinkedPaths;if(i){let s;for(let o in i){let n=i[o];pe(o,t)?(s=me(o,n,t),e._setPendingPropertyOrPath(s,r,!0,!0)):pe(n,t)&&(s=me(n,o,t),e._setPendingPropertyOrPath(s,r,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,r);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,r){r===e[t]&&"object"!=typeof r||("className"===t&&(e=he(e)),e[t]=r)}_setPendingProperty(e,t,r){let i=this.__dataHasPaths&&ce(e),s=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,s[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),i?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(i||this[Qe.NOTIFY]&&this[Qe.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=r),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let r=e[t];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let r in e)!t&&this[Qe.READ_ONLY]&&this[Qe.READ_ONLY][r]||this._setPendingPropertyOrPath(r,e[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,r){let i,s=this.__dataHasPaths;this.__dataHasPaths=!1,ht(this,t,r,s),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,r,s),this._flushClients(),rt(this,this[Qe.REFLECT],t,r,s),rt(this,this[Qe.OBSERVE],t,r,s),i&&function(e,t,r,i,s){let o,n,a=e[Qe.NOTIFY],l=Xe++;for(let n in t)t[n]&&(a&&it(e,a,l,n,r,i,s)||s&&nt(e,n,r))&&(o=!0);o&&(n=e.__dataHost)&&n._invalidateProperties&&n._invalidateProperties()}(this,i,t,r,s),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,r){this[Qe.PROPAGATE]&&rt(this,this[Qe.PROPAGATE],e,t,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,r)}_runEffectsForTemplate(e,t,r,i){const s=(t,i)=>{rt(this,e.propertyEffects,t,r,i,e.nodeList);for(let s=e.firstChild;s;s=s.nextSibling)this._runEffectsForTemplate(s,t,r,i)};e.runEffects?e.runEffects(s,t,i):s(t,i)}linkPaths(e,t){e=ge(e),t=ge(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=ge(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let r={path:""};St(this,ye(this,e,r),r.path,t)}get(e,t){return ye(t||this,e)}set(e,t,r){r?ve(r,e,t):this[Qe.READ_ONLY]&&this[Qe.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let r={path:""},i=ye(this,e,r),s=i.length,o=i.push(...t);return t.length&&Tt(this,i,r.path,s,t.length,[]),o}pop(e){let t={path:""},r=ye(this,e,t),i=Boolean(r.length),s=r.pop();return i&&Tt(this,r,t.path,r.length,0,[s]),s}splice(e,t,r,...i){let s,o={path:""},n=ye(this,e,o);return t<0?t=n.length-Math.floor(-t):t&&(t=Math.floor(t)),s=2===arguments.length?n.splice(t):n.splice(t,r,...i),(i.length||s.length)&&Tt(this,n,o.path,t,i.length,s),s}shift(e){let t={path:""},r=ye(this,e,t),i=Boolean(r.length),s=r.shift();return i&&Tt(this,r,t.path,0,0,[s]),s}unshift(e,...t){let r={path:""},i=ye(this,e,r),s=i.unshift(...t);return t.length&&Tt(this,i,r.path,0,t.length,[]),s}notifyPath(e,t){let r;if(1==arguments.length){let i={path:""};t=ye(this,e,i),r=i.path}else r=Array.isArray(e)?ge(e):e;this._setPendingPropertyOrPath(r,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var r;this._addPropertyEffect(e,Qe.READ_ONLY),t&&(this["_set"+(r=e,r[0].toUpperCase()+r.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,r){let i={property:e,method:t,dynamicFn:Boolean(r)};this._addPropertyEffect(e,Qe.OBSERVE,{fn:ot,info:i,trigger:{name:e}}),r&&this._addPropertyEffect(t,Qe.OBSERVE,{fn:ot,info:i,trigger:{name:t}})}_createMethodObserver(e,t){let r=At(e);if(!r)throw new Error("Malformed observer expression '"+e+"'");yt(this,r,Qe.OBSERVE,vt,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Qe.NOTIFY,{fn:lt,info:{eventName:Ee(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,Qe.REFLECT,{fn:dt,info:{attrName:t}})}_createComputedProperty(e,t,r){let i=At(t);if(!i)throw new Error("Malformed computed expression '"+t+"'");const s=yt(this,i,Qe.COMPUTE,_t,e,r);tt(this,"__computeInfo")[e]=s}_marshalArgs(e,t,r){const i=this.__data,s=[];for(let o=0,n=e.length;o<n;o++){let{name:n,structured:a,wildcard:l,value:d,literal:h}=e[o];if(!h)if(l){const e=pe(n,t),s=Pt(i,r,e?t:n);d={path:e?t:n,value:s,base:e?ye(i,n):s}}else d=a?Pt(i,r,n):i[n];if(V&&!this._overrideLegacyUndefined&&void 0===d&&e.length>1)return Ze;s[o]=d}return s}static addPropertyEffect(e,t,r){this.prototype._addPropertyEffect(e,t,r)}static createPropertyObserver(e,t,r){this.prototype._createPropertyObserver(e,t,r)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,r){this.prototype._createComputedProperty(e,t,r)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let r=this.constructor._parseTemplate(e),i=this.__preBoundTemplateInfo==r;if(!i)for(let e in r.propertyEffects)this._createPropertyAccessor(e);if(t)if(r=Object.create(r),r.wasPreBound=i,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,i=t.lastChild;r.parent=t,t.lastChild=r,r.previousSibling=i,i?i.nextSibling=r:t.firstChild=r}else this.__templateInfo=r;else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(e,t,r){(e.hostProps=e.hostProps||{})[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(r)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),zt.push(this);let r=super._stampTemplate(e,t);if(zt.pop(),t.nodeList=r.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=r.firstChild;t;t=t.nextSibling)e.push(t)}return r.templateInfo=t,function(e,t){let{nodeList:r,nodeInfoList:i}=t;if(i.length)for(let t=0;t<i.length;t++){let s=i[t],o=r[t],n=s.bindings;if(n)for(let t=0;t<n.length;t++){let r=n[t];gt(o,r),bt(o,e,r)}o.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:r,nextSibling:i,parent:s}=t;r?r.nextSibling=i:s&&(s.firstChild=i),i?i.previousSibling=r:s&&(s.lastChild=r),t.nextSibling=t.previousSibling=null;let o=t.childNodes;for(let e=0;e<o.length;e++){let t=o[e];he(he(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,r,i){let s=t._parseTemplateNode.call(this,e,r,i);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,r);t&&(e.textContent=xt(t)||" ",pt(this,r,i,"text","textContent",t),s=!0)}return s}static _parseTemplateNodeAttribute(e,r,i,s,o){let n=this._parseBindings(o,r);if(n){let t=s,o="property";et.test(s)?o="attribute":"$"==s[s.length-1]&&(s=s.slice(0,-1),o="attribute");let a=xt(n);return a&&"attribute"==o&&("class"==s&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(s)),e.setAttribute(s,a)),"attribute"==o&&"disable-upgrade$"==t&&e.setAttribute(s,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===o&&(s=Ae(s)),pt(this,r,i,o,s,n,a),!0}return t._parseTemplateNodeAttribute.call(this,e,r,i,s,o)}static _parseTemplateNestedTemplate(e,r,i){let s=t._parseTemplateNestedTemplate.call(this,e,r,i);const o=e.parentNode,n=i.templateInfo,a="dom-if"===o.localName,l="dom-repeat"===o.localName;W&&(a||l)&&(o.removeChild(e),(i=i.parentInfo).templateInfo=n,i.noted=!0,s=!1);let d=n.hostProps;if(U&&a)d&&(r.hostProps=Object.assign(r.hostProps||{},d),W||(i.parentInfo.noted=!0));else{let e="{";for(let t in d){pt(this,r,i,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return s}static _parseBindings(e,t){let r,i=[],s=0;for(;null!==(r=wt.exec(e));){r.index>s&&i.push({literal:e.slice(s,r.index)});let o=r[1][0],n=Boolean(r[2]),a=r[3].trim(),l=!1,d="",h=-1;"{"==o&&(h=a.indexOf("::"))>0&&(d=a.substring(h+2),a=a.substring(0,h),l=!0);let c=At(a),u=[];if(c){let{args:e,methodName:r}=c;for(let t=0;t<e.length;t++){let r=e[t];r.literal||u.push(r)}let i=t.dynamicFns;(i&&i[r]||c.static)&&(u.push(r),c.dynamicFn=!0)}else u.push(a);i.push({source:a,mode:o,negate:n,customEvent:l,signature:c,dependencies:u,event:d}),s=wt.lastIndex}if(s&&s<e.length){let t=e.substring(s);t&&i.push({literal:t})}return i.length?i:null}static _evaluateBinding(e,t,r,i,s,o){let n;return n=t.signature?vt(e,r,i,0,t.signature):r!=t.source?ye(e,t.source):o&&ce(r)?ye(e,r):e.__data[r],t.negate&&(n=!n),n}}})),zt=[];
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Ot(e){}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Nt=J((e=>{const t=Fe(e);function r(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof s?t:null}function i(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const r=e.properties;r&&(t=function(e){const t={};for(let r in e){const i=e[r];t[r]="function"==typeof i?{type:i}:i}return t}(r))}e.__ownProperties=t}return e.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((e=>this.prototype._addPropertyToAttributeMap(e))):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=r(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=i(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=r(this);this.__properties=Object.assign({},e&&e._properties,i(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s})),Rt=window.ShadyCSS&&window.ShadyCSS.cssBuild,kt=J((e=>{const t=Nt(It(e));function r(e,t,r,i){r.computed&&(r.readOnly=!0),r.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,r.computed,i)),r.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!r.computed):!1===r.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),r.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===r.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),r.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===r.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),r.observer&&e._createPropertyObserver(t,r.observer,i[r.observer]),e._addPropertyToAttributeMap(t)}function i(e,t,r,i){if(!Rt){const s=t.content.querySelectorAll("style"),o=ne(t),n=function(e){let t=re(e);return t?ae(t):[]}(r),a=t.content.firstElementChild;for(let r=0;r<n.length;r++){let s=n[r];s.textContent=e._processStyleText(s.textContent,i),t.content.insertBefore(s,a)}let l=0;for(let t=0;t<o.length;t++){let r=o[t],n=s[l];n!==r?(r=r.cloneNode(!0),n.parentNode.insertBefore(r,n)):l++,r.textContent=e._processStyleText(r.textContent,i)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,r),q&&Rt&&N){const r=t.content.querySelectorAll("style");if(r){let t="";Array.from(r).forEach((e=>{t+=e.textContent,e.parentNode.removeChild(e)})),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):M||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)r(this.prototype,t,e[t],e)}static createObservers(e,t){const r=this.prototype;for(let i=0;i<e.length;i++)r._createMethodObserver(e[i],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof e&&(e=e()),this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!L||D)&&(t=te.import(e,"template"),L&&!t))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=z(e.url);else{const e=te.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=R,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let r in t){let i=t[r];"value"in i&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[r]=i)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let r=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return I(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const r=this.importPath;i(this,t,e,r?T(r):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=he(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),B&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=T(this.importPath)),T(e,t)}static _parseTemplateContent(e,r,i){return r.dynamicFns=r.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,r,i)}static _addTemplatePropertyEffect(e,r,i){return!H||r in this._properties||i.info.part.signature&&i.info.part.signature.static||i.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,r,i)}}})),Ft=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});
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
 */class Lt{constructor(e,t){Ht(e,t);const r=t.reduce(((t,r,i)=>t+Dt(r)+e[i+1]),e[0]);this.value=r.toString()}toString(){return this.value}}function Dt(e){if(e instanceof Lt)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const Mt=function(e,...t){Ht(e,t);const r=document.createElement("template");let i=t.reduce(((t,r,i)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Lt)return Dt(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(r)+e[i+1]),e[0]);return Ft&&(i=Ft.createHTML(i)),r.innerHTML=i,r},Ht=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")},Bt=kt(HTMLElement);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
let Vt=0,$t=0;const Gt=[];let Wt=0,Ut=!1;const jt=document.createTextNode("");new window.MutationObserver((function(){Ut=!1;const e=Gt.length;for(let t=0;t<e;t++){const e=Gt[t];if(e)try{e()}catch(e){setTimeout((()=>{throw e}))}}Gt.splice(0,e),$t+=e})).observe(jt,{characterData:!0});const Yt={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},qt={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},Kt={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Jt={run(e){Ut||(Ut=!0,jt.textContent=Wt,Wt+=1),Gt.push(e);const t=Vt;return Vt+=1,t},cancel(e){const t=e-$t;if(t>=0){if(!Gt[t])throw new Error(`invalid async handle: ${e}`);Gt[t]=null}}},Xt="string"==typeof document.head.style.touchAction,Zt="__polymerGestures",Qt="__polymerGesturesHandled",er="__polymerGesturesTouchAction",tr=["mousedown","mousemove","mouseup","click"],rr=[0,1,4,2],ir=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function sr(e){return tr.indexOf(e)>-1}let or=!1;function nr(e){sr(e)}!function(){try{const e=Object.defineProperty({},"passive",{get(){or=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();const ar=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),lr={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function dr(e){const t=e.type;if(!sr(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!ir&&(t=rr[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}const hr={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function cr(e,t,r){e.movefn=t,e.upfn=r,document.addEventListener("mousemove",t),document.addEventListener("mouseup",r)}function ur(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}const _r=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],pr={},mr=[];function fr(e){const t=_r(e);return t.length>0?t[0]:e.target}function gr(e){const t=e.type,r=e.currentTarget.__polymerGestures;if(!r)return;const i=r[t];if(!i)return;if(!e[Qt]&&(e[Qt]={},"touch"===t.slice(0,5))){const r=e.changedTouches[0];if("touchstart"===t&&1===e.touches.length&&(hr.touch.id=r.identifier),hr.touch.id!==r.identifier)return;Xt||"touchstart"!==t&&"touchmove"!==t||function(e){const t=e.changedTouches[0],r=e.type;if("touchstart"===r)hr.touch.x=t.clientX,hr.touch.y=t.clientY,hr.touch.scrollDecided=!1;else if("touchmove"===r){if(hr.touch.scrollDecided)return;hr.touch.scrollDecided=!0;const r=function(e){let t="auto";const r=_r(e);for(let e,i=0;i<r.length;i++)if(e=r[i],e[er]){t=e[er];break}return t}(e);let i=!1;const s=Math.abs(hr.touch.x-t.clientX),o=Math.abs(hr.touch.y-t.clientY);e.cancelable&&("none"===r?i=!0:"pan-x"===r?i=o>s:"pan-y"===r&&(i=s>o)),i?e.preventDefault():wr("track")}}(e)}const s=e[Qt];if(!s.skip){for(let t,r=0;r<mr.length;r++)t=mr[r],i[t.name]&&!s[t.name]&&t.flow&&t.flow.start.indexOf(e.type)>-1&&t.reset&&t.reset();for(let r,o=0;o<mr.length;o++)r=mr[o],i[r.name]&&!s[r.name]&&(s[r.name]=!0,r[t](e))}}function br(e,t,r){return!!pr[t]&&(function(e,t,r){const i=pr[t],s=i.deps,o=i.name;let n=e[Zt];n||(e[Zt]=n={});for(let t,r,i=0;i<s.length;i++)t=s[i],ar&&sr(t)&&"click"!==t||(r=n[t],r||(n[t]=r={_count:0}),0===r._count&&e.addEventListener(t,gr,nr(t)),r[o]=(r[o]||0)+1,r._count=(r._count||0)+1);e.addEventListener(t,r),i.touchAction&&vr(e,i.touchAction)}(e,t,r),!0)}function yr(e){mr.push(e);for(let t=0;t<e.emits.length;t++)pr[e.emits[t]]=e}function vr(e,t){Xt&&e instanceof HTMLElement&&Jt.run((()=>{e.style.touchAction=t})),e[er]=t}function Cr(e,t,r){const i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=r,e.dispatchEvent(i),i.defaultPrevented){const e=r.preventer||r.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function wr(e){const t=function(e){for(let t,r=0;r<mr.length;r++){t=mr[r];for(let r,i=0;i<t.emits.length;i++)if(r=t.emits[i],r===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function xr(e,t,r,i){t&&Cr(t,e,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:i,prevent:e=>wr(e)})}function Ar(e,t,r){if(e.prevent)return!1;if(e.started)return!0;const i=Math.abs(e.x-t),s=Math.abs(e.y-r);return i>=5||s>=5}function Er(e,t,r){if(!t)return;const i=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],o=s.x-e.x,n=s.y-e.y;let a,l=0;i&&(a=s.x-i.x,l=s.y-i.y),Cr(t,"track",{state:e.state,x:r.clientX,y:r.clientY,dx:o,dy:n,ddx:a,ddy:l,sourceEvent:r,hover:()=>function(e,t){let r=document.elementFromPoint(e,t),i=r;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const s=i;if(i=i.shadowRoot.elementFromPoint(e,t),s===i)break;i&&(r=i)}return r}(r.clientX,r.clientY)})}function Pr(e,t,r){const i=Math.abs(t.clientX-e.x),s=Math.abs(t.clientY-e.y),o=fr(r||t);!o||lr[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(s)||i<=25&&s<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;const t=fr(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const r=t.getBoundingClientRect(),i=e.pageX,s=e.pageY;return!(i>=r.left&&i<=r.right&&s>=r.top&&s<=r.bottom)}return!1}(t))&&(e.prevent||Cr(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:r}))}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */yr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){ur(this.info)},mousedown(e){if(!dr(e))return;const t=fr(e),r=this;cr(this.info,(e=>{dr(e)||(xr("up",t,e),ur(r.info))}),(e=>{dr(e)&&xr("up",t,e),ur(r.info)})),xr("down",t,e)},touchstart(e){xr("down",fr(e),e.changedTouches[0],e)},touchend(e){xr("up",fr(e),e.changedTouches[0],e)}}),yr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ur(this.info)},mousedown(e){if(!dr(e))return;const t=fr(e),r=this,i=e=>{const i=e.clientX,s=e.clientY;Ar(r.info,i,s)&&(r.info.state=r.info.started?"mouseup"===e.type?"end":"track":"start","start"===r.info.state&&wr("tap"),r.info.addMove({x:i,y:s}),dr(e)||(r.info.state="end",ur(r.info)),t&&Er(r.info,t,e),r.info.started=!0)};cr(this.info,i,(e=>{r.info.started&&i(e),ur(r.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(e){const t=fr(e),r=e.changedTouches[0],i=r.clientX,s=r.clientY;Ar(this.info,i,s)&&("start"===this.info.state&&wr("tap"),this.info.addMove({x:i,y:s}),Er(this.info,t,r),this.info.state="track",this.info.started=!0)},touchend(e){const t=fr(e),r=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),Er(this.info,t,r))}}),yr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(e){dr(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click(e){dr(e)&&Pr(this.info,e)},touchstart(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(e){Pr(this.info,e.changedTouches[0],e)}});const Sr=J((e=>class extends e{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}})),Tr=J((e=>class extends e{ready(){super.ready(),this.addEventListener("keydown",(e=>{this._onKeyDown(e)})),this.addEventListener("keyup",(e=>{this._onKeyUp(e)}))}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e)}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}})),Ir=e=>class extends(Sr(Tr(e))){get _activeKeys(){return[" "]}ready(){super.ready(),br(this,"down",(e=>{this._shouldSetActive(e)&&this._setActive(!0)})),br(this,"up",(()=>{this._setActive(!1)}))}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",(e=>{this._activeKeys.includes(e.key)&&this._setActive(!1)}),{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,zr=J((e=>class extends e{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((e=>{e.hostConnected&&e.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((e=>{e.hostDisconnected&&e.hostDisconnected()}))}addController(e){this.__controllers.add(e),void 0!==this.$&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}}));
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
class Or{static debounce(e,t,r){return e instanceof Or?e._cancelAsync():e=new Or,e.setConfig(t,r),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run((()=>{this._timer=null,Nr.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),Nr.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}let Nr=new Set;function Rr(e){Nr.add(e)}function kr(){const e=Boolean(Nr.size);return Nr.forEach((e=>{try{e.flush()}catch(e){setTimeout((()=>{throw e}))}})),e}const Fr=()=>{let e;do{e=kr()}while(e)};
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lr{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,r){const{scrollLeft:i}=r;if("rtl"!==t||!e)return i;switch(e){case"negative":return r.scrollWidth-r.clientWidth+i;case"reverse":return r.scrollWidth-r.clientWidth-i;default:return i}}static setNormalizedScrollLeft(e,t,r,i){if("rtl"===t&&e)switch(e){case"negative":r.scrollLeft=r.clientWidth-r.scrollWidth+i;break;case"reverse":r.scrollLeft=r.scrollWidth-r.clientWidth-i;break;default:r.scrollLeft=i}else r.scrollLeft=i}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dr=[];let Mr;function Hr(e,t,r=e.getAttribute("dir")){t?e.setAttribute("dir",t):null!=r&&e.removeAttribute("dir")}function Br(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const e=Br();Dr.forEach((t=>{Hr(t,e)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Vr=e=>class extends e{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>""===e?null:e}}}}static finalize(){super.finalize(),Mr||(Mr=Lr.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),Hr(this,Br(),null))}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),"dir"!==e)return;const i=Br(),s=r===i&&-1===Dr.indexOf(this),o=!r&&t&&-1===Dr.indexOf(this),n=r!==i&&t===i;s||o?(this.__subscribe(),Hr(this,i,r)):n&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(e,t,r){("dir"!==r||""!==t||e.hasAttribute("dir"))&&super._valueToNodeAttribute(e,t,r)}_attributeToProperty(e,t,r){"dir"!==e||t?super._attributeToProperty(e,t,r):this.dir=""}__subscribe(e=!0){e?Dr.includes(this)||Dr.push(this):Dr.includes(this)&&Dr.splice(Dr.indexOf(this),1)}__getNormalizedScrollLeft(e){return Lr.getNormalizedScrollLeft(Mr,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return Lr.setNormalizedScrollLeft(Mr,this.getAttribute("dir")||"ltr",e,t)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;let $r;G=!1,window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){};const Gr=new Set,Wr=e=>class extends(Vr(e)){static get version(){return"23.1.6"}static finalize(){super.finalize();const{is:e}=this;e&&!Gr.has(e)&&(window.Vaadin.registrations.push(this),Gr.add(e),window.Vaadin.developmentModeCallback&&($r=Or.debounce($r,Kt,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),Rr($r)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;function Ur(e,t){const r=Math.max(e.tabIndex,0),i=Math.max(t.tabIndex,0);return 0===r||0===i?i>r:r>i}function jr(e){const t=e.length;if(t<2)return e;const r=Math.ceil(t/2);return function(e,t){const r=[];for(;e.length>0&&t.length>0;)Ur(e[0],t[0])?r.push(t.shift()):r.push(e.shift());return r.concat(e,t)}(jr(e.slice(0,r)),jr(e.slice(r)))}function Yr(e,t){if(e.nodeType!==Node.ELEMENT_NODE||function(e){const t=e.style;if("hidden"===t.visibility||"none"===t.display)return!0;const r=window.getComputedStyle(e);return"hidden"===r.visibility||"none"===r.display}(e))return!1;const r=e,i=function(e){if(!function(e){return!e.matches('[tabindex="-1"]')&&(e.matches("input, select, textarea, button, object")?e.matches(":not([disabled])"):e.matches("a[href], area[href], iframe, [tabindex], [contentEditable]"))}(e))return-1;const t=e.getAttribute("tabindex")||0;return Number(t)}(r);let s=i>0;i>=0&&t.push(r);let o=[];return o="slot"===r.localName?r.assignedNodes({flatten:!0}):(r.shadowRoot||r).children,[...o].forEach((e=>{s=Yr(e,t)||s})),s}function qr(e){return e.getRootNode().activeElement===e}function Kr(e){const t=[];return Yr(e,t)?jr(t):t}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jr=J((e=>class extends e{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((e=>{this._delegateAttribute(e,this[e])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((e=>{this._delegateProperty(e,this[e])}))}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach(((t,r)=>{this._delegateAttribute(t,e[r])}))}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach(((t,r)=>{this._delegateProperty(t,e[r])}))}_delegateAttribute(e,t){this.stateTarget&&("invalid"===e&&this._delegateAttribute("aria-invalid",!!t&&"true"),"boolean"==typeof t?this.stateTarget.toggleAttribute(e,t):t?this.stateTarget.setAttribute(e,t):this.stateTarget.removeAttribute(e))}_delegateProperty(e,t){this.stateTarget&&(this.stateTarget[e]=t)}})),Xr=J((e=>class extends e{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this.inputElement.value=null!=e?e:"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_onInput(e){this.__userInput=e.isTrusted,this.value=e.target.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(""!==e&&null!=e),""===e&&void 0===t||this.__userInput||this._forwardInputValue(e)}})),Zr=J((e=>class extends(Jr(Sr(Xr(e)))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const t=e.target;this._toggleChecked(t.checked),qr(t)||t.focus()}_toggleChecked(e){this.checked=e}}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
let Qr=!1;window.addEventListener("keydown",(()=>{Qr=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{Qr=!1}),{capture:!0});const ei=J((e=>class extends e{get _keyboardActive(){return Qr}ready(){this.addEventListener("focusin",(e=>{this._shouldSetFocus(e)&&this._setFocused(!0)})),this.addEventListener("focusout",(e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}})),ti=e=>class extends(Sr(e)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),e?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):t&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&-1!==e&&(this._lastTabIndex=e,this.tabindex=-1)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,ri=J((e=>class extends(ei(ti(e))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,t){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):t&&this._removeFocusListeners(t)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_disabledChanged(e,t){super._disabledChanged(e,t),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){void 0!==e&&this.focusElement&&(this.focusElement.tabIndex=e,-1!==e&&(this.tabindex=void 0)),this.disabled&&e&&(-1!==e&&(this._lastTabIndex=e),this.tabindex=void 0)}}));
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
function ii(e,t,r){return{index:e,removed:t,addedCount:r}}function si(e,t,r,i,s,o){let n,a=0,l=0,d=Math.min(r-t,o-s);if(0==t&&0==s&&(a=function(e,t,r){for(let i=0;i<r;i++)if(!ni(e[i],t[i]))return i;return r}(e,i,d)),r==e.length&&o==i.length&&(l=function(e,t,r){let i=e.length,s=t.length,o=0;for(;o<r&&ni(e[--i],t[--s]);)o++;return o}(e,i,d-a)),s+=a,o-=l,(r-=l)-(t+=a)==0&&o-s==0)return[];if(t==r){for(n=ii(t,[],0);s<o;)n.removed.push(i[s++]);return[n]}if(s==o)return[ii(t,[],r-t)];let h=function(e){let t=e.length-1,r=e[0].length-1,i=e[t][r],s=[];for(;t>0||r>0;){if(0==t){s.push(2),r--;continue}if(0==r){s.push(3),t--;continue}let o,n=e[t-1][r-1],a=e[t-1][r],l=e[t][r-1];o=a<l?a<n?a:n:l<n?l:n,o==n?(n==i?s.push(0):(s.push(1),i=n),t--,r--):o==a?(s.push(3),t--,i=a):(s.push(2),r--,i=l)}return s.reverse(),s}(function(e,t,r,i,s,o){let n=o-s+1,a=r-t+1,l=new Array(n);for(let e=0;e<n;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let r=1;r<n;r++)for(let o=1;o<a;o++)if(ni(e[t+o-1],i[s+r-1]))l[r][o]=l[r-1][o-1];else{let e=l[r-1][o]+1,t=l[r][o-1]+1;l[r][o]=e<t?e:t}return l}(e,t,r,i,s,o));n=void 0;let c=[],u=t,_=s;for(let e=0;e<h.length;e++)switch(h[e]){case 0:n&&(c.push(n),n=void 0),u++,_++;break;case 1:n||(n=ii(u,[],0)),n.addedCount++,u++,n.removed.push(i[_]),_++;break;case 2:n||(n=ii(u,[],0)),n.addedCount++,u++;break;case 3:n||(n=ii(u,[],0)),n.removed.push(i[_]),_++}return n&&c.push(n),c}function oi(e,t){return si(e,0,e.length,t,0,t.length)}function ni(e,t){return e===t}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ai(e){return"slot"===e.localName}let li=class{static getFlattenedNodes(e){const t=he(e);return ai(e)?t.assignedNodes({flatten:!0}):Array.from(t.childNodes).map((e=>ai(e)?he(e).assignedNodes({flatten:!0}):[e])).reduce(((e,t)=>e.concat(t)),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){ai(this._target)?this._listenSlots([this._target]):he(this._target).children&&(this._listenSlots(he(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(e=>{this._processMutations(e)})):(this._nativeChildrenObserver=new MutationObserver((e=>{this._processMutations(e)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ai(this._target)?this._unlistenSlots([this._target]):he(this._target).children&&(this._unlistenSlots(he(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Re.run((()=>this.flush())))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let r=e[t];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),r=oi(t,this._effectiveNodes);for(let t,i=0;i<r.length&&(t=r[i]);i++)for(let r,i=0;i<t.removed.length&&(r=t.removed[i]);i++)e.removedNodes.push(r);for(let i,s=0;s<r.length&&(i=r[s]);s++)for(let r=i.index;r<i.index+i.addedCount;r++)e.addedNodes.push(t[r]);this._effectiveNodes=t;let i=!1;return(e.addedNodes.length||e.removedNodes.length)&&(i=!0,this.callback.call(this._target,e)),i}_listenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];ai(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let r=e[t];ai(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}};
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class di extends EventTarget{static generateId(e,t){const r=e||"default",i=`${Ae(r)}Id`;return this[i]=1+this[i]||0,`${r}-${t.localName}-${this[i]}`}constructor(e,t,r,i){super(),this.host=e,this.slotName=t,this.slotFactory=r,this.slotInitializer=i,this.defaultId=di.generateId(t,e)}hostConnected(){if(!this.initialized){let e=this.getSlotChild();e?(this.node=e,this.initCustomNode(e)):e=this.attachDefaultNode(),this.initNode(e),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:e,slotName:t,slotFactory:r}=this;let i=this.defaultNode;return!i&&r&&(i=r(e),i instanceof Element&&(""!==t&&i.setAttribute("slot",t),this.node=i,this.defaultNode=i)),i&&e.appendChild(i),i}getSlotChild(){const{slotName:e}=this;return Array.from(this.host.childNodes).find((t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&""===e))}initNode(e){const{slotInitializer:t}=this;t&&t(this.host,e)}initCustomNode(e){}teardownNode(e){}observe(){const{slotName:e}=this,t=""===e?"slot:not([name])":`slot[name=${e}]`,r=this.host.shadowRoot.querySelector(t);this.__slotObserver=new li(r,(e=>{const t=this.node,r=e.addedNodes.find((e=>e!==t));e.removedNodes.length&&e.removedNodes.forEach((e=>{this.teardownNode(e)})),r&&(t&&t.isConnected&&this.host.removeChild(t),this.node=r,r!==this.defaultNode&&(this.initCustomNode(r),this.initNode(r)))}))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hi extends di{constructor(e,t){super(e,"input",(()=>document.createElement("input")),((e,r)=>{e.value&&r.setAttribute("value",e.value),e.type&&r.setAttribute("type",e.type);const i=hi._uniqueInputId=1+hi._uniqueInputId||0;e._inputId=`${e.localName}-${i}`,r.id=e._inputId,"function"==typeof t&&t(r)}))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ci extends di{constructor(e){super(e,"label",(()=>document.createElement("label")),((e,t)=>{this.__updateLabelId(t),this.__updateDefaultLabel(this.label),this.__observeLabel(t)}))}get labelId(){return this.node.id}initCustomNode(e){this.__updateLabelId(e);const t=this.__hasLabel(e);this.__toggleHasLabel(t)}teardownNode(e){this.__labelObserver&&this.__labelObserver.disconnect();let t=this.getSlotChild();t||e===this.defaultNode||(t=this.attachDefaultNode(),this.initNode(t));const r=this.__hasLabel(t);this.__toggleHasLabel(r)}setLabel(e){this.label=e,this.__updateDefaultLabel(e)}__hasLabel(e){return!!e&&(e.children.length>0||this.__isNotEmpty(e.textContent))}__isNotEmpty(e){return Boolean(e&&""!==e.trim())}__observeLabel(e){this.__labelObserver=new MutationObserver((e=>{e.forEach((e=>{const t=e.target,r=t===this.node;if("attributes"===e.type)r&&t.id!==this.defaultId&&this.__updateLabelId(t);else if(r||t.parentElement===this.node){const e=this.__hasLabel(this.node);this.__toggleHasLabel(e)}}))})),this.__labelObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(e){this.host.toggleAttribute("has-label",e),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:e,node:this.node}}))}__updateDefaultLabel(e){if(this.defaultNode&&(this.defaultNode.textContent=e,this.defaultNode===this.node)){const t=this.__isNotEmpty(e);this.__toggleHasLabel(t)}}__updateLabelId(e){e.id||(e.id=this.defaultId)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ui=J((e=>class extends(zr(e)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new ci(this),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _i{constructor(e,t){this.input=e,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("label-changed",(e=>{this.__initLabel(e.detail.node)})),this.__initLabel(t.node)}__initLabel(e){e&&(e.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&e.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const e=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",e)};this.input.addEventListener("click",e)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pi{constructor(e,t,r){this.sourceSlot=e,this.targetFactory=t,this.copyCallback=r,e&&e.addEventListener("slotchange",(()=>{this.__copying?this.__copying=!1:this.__checkAndCopyNodesToSlotTarget()}))}hostConnected(){this.__sourceSlotObserver=new MutationObserver((()=>this.__checkAndCopyNodesToSlotTarget())),this.__checkAndCopyNodesToSlotTarget()}__checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();const e=this.targetFactory();if(!e)return;this.__slotTargetClones&&(this.__slotTargetClones.forEach((t=>{t.parentElement===e&&e.removeChild(t)})),delete this.__slotTargetClones);const t=this.sourceSlot.assignedNodes({flatten:!0}).filter((e=>!(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())));t.length>0&&(e.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(t,e))}__copyNodesToSlotTarget(e,t){this.__slotTargetClones=this.__slotTargetClones||[],e.forEach((e=>{const r=e.cloneNode(!0);this.__slotTargetClones.push(r),t.appendChild(r),this.__sourceSlotObserver.observe(e,{attributes:!0,childList:!0,subtree:!0,characterData:!0})})),"function"==typeof this.copyCallback&&this.copyCallback(e)}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class mi extends(ui(Zr(ri(Ir(Wr(c(zr(Bt)))))))){static get is(){return"vaadin-checkbox"}static get template(){return Mt`
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
    `}static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("checkbox"),this.value="on"}connectedCallback(){super.connectedCallback(),this._inputController||(this._inputController=new hi(this,(e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(this._inputController),this.addController(new _i(this.inputElement,this._labelController)),this.addController(new pi(this.$.noop,(()=>this._labelController.node),(()=>this.__warnDeprecated()))))}__warnDeprecated(){console.warn('WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.\nPlease use <label slot="label"> wrapper or the label property instead.')}_shouldSetActive(e){return"a"!==e.target.localName&&super._shouldSetActive(e)}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function fi(e){window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(e):e.querySelector("template")&&console.warn(`WARNING: <template> inside <${e.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */customElements.define(mi.is,mi),o("vaadin-grid",t`
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

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
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

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});const gi=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value(){if("vaadin-grid-column-group"===this.localName)return;const e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}},frozen:{type:Boolean,value:!1},frozenToEnd:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_firstFrozenToEnd:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),requestAnimationFrame((()=>{this._grid&&this._allCells.forEach((e=>{e._content.parentNode||this._grid.appendChild(e._content)}))}))}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame((()=>{this._grid||this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}))})),this._gridValue=void 0}ready(){super.ready(),fi(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter((e=>e))}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach((t=>t.style.flexGrow=e))}_orderChanged(e){this._allCells.forEach((t=>t.style.order=e))}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach((t=>t.style.width=e))}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach((t=>t.toggleAttribute("frozen",e))),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach((t=>{this._grid&&t.parentElement===this._grid.$.sizer||t.toggleAttribute("frozen-to-end",e)})),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach((t=>t.toggleAttribute("last-frozen",e))),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach((t=>{this._grid&&t.parentElement===this._grid.$.sizer||t.toggleAttribute("first-frozen-to-end",e)})),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,(e=>e.toUpperCase()))}_reorderStatusChanged(e){this._allCells.forEach((t=>t.setAttribute("reorder-status",e)))}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach((t=>{if(t){const r=t.querySelector('[part~="resize-handle"]');if(r&&t.removeChild(r),e){const e=document.createElement("div");e.setAttribute("part","resize-handle"),t.appendChild(e)}}}))}_textAlignChanged(e){if(void 0===e)return;if(-1===["start","end","center"].indexOf(e))return void console.warn('textAlign can only be set as "start", "end" or "center"');let t;"ltr"===getComputedStyle(this._grid).direction?"start"===e?t="left":"end"===e&&(t="right"):"start"===e?t="right":"end"===e&&(t="left"),this._allCells.forEach((r=>{r._content.style.textAlign=e,getComputedStyle(r._content).textAlign!==e&&(r._content.style.textAlign=t)}))}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach((e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})),this._grid._debouncerHiddenChanged=Or.debounce(this._grid._debouncerHiddenChanged,qt,(()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)})),this._grid._updateFrozenColumn&&this._grid._updateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,t,r){const i=[t._content,this];r&&r.item&&i.push(r),e.apply(this,i)}__renderCellsContent(e,t){!this.hidden&&this._grid&&t.forEach((t=>{if(!t.parentElement)return;const r=this._grid.__getRowModel(t.parentElement);e&&(t._renderer!==e&&this._clearCellContent(t),t._renderer=e,(r.item||e===this._headerRenderer||e===this._footerRenderer)&&this._runRenderer(e,t,r))}))}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,t){t&&e&&(this.__renderCellsContent(e,[t]),this._grid&&this._grid.__updateHeaderFooterRowVisibility(t.parentElement))}_onHeaderRendererOrBindingChanged(e,t,...r){this._renderHeaderCellContent(e,t)}_renderBodyCellsContent(e,t){t&&e&&this.__renderCellsContent(e,t)}_onRendererOrBindingChanged(e,t,...r){this._renderBodyCellsContent(e,t)}_renderFooterCellContent(e,t){t&&e&&(this.__renderCellsContent(e,[t]),this._grid&&this._grid.__updateHeaderFooterRowVisibility(t.parentElement))}_onFooterRendererOrBindingChanged(e,t){this._renderFooterCellContent(e,t)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,t,{item:r}){this.path&&this.__setTextContent(e,this.get(this.path,r))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,t){return e||(null!=t?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}};class bi extends(gi(Vr(Bt))){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_cells:Array}}}customElements.define(bi.is,bi),
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
o("vaadin-grid",t`
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

    [frozen],
    [frozen-to-end] {
      z-index: 2;
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

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
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

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
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
let yi=!1,vi=[],Ci=[];function wi(){yi=!0,requestAnimationFrame((function(){yi=!1,function(e){for(;e.length;)xi(e.shift())}(vi),setTimeout((function(){!function(e){for(let t=0,r=e.length;t<r;t++)xi(e.shift())}(Ci)}))}))}function xi(e){const t=e[0],r=e[1],i=e[2];try{r.apply(t,i)}catch(e){setTimeout((()=>{throw e}))}}function Ai(e,t,r){yi||wi(),Ci.push([e,t,r])}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ei=e=>e.test(navigator.userAgent),Pi=e=>e.test(navigator.platform),Si=Ei(/Android/),Ti=Ei(/Chrome/)&&/Google Inc/.test(navigator.vendor);const Ii=Ei(/Firefox/),zi=Pi(/^iPad/)||Pi(/^Mac/)&&navigator.maxTouchPoints>1,Oi=Pi(/^iPhone/)||zi,Ni=Ei(/^((?!chrome|android).)*safari/i),Ri=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})(),ki=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),Fi=ki&&ki[1]>=8,Li={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const e=this._virtualCount;return Math.max(0,e-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this._virtualStartVal=e},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this._physicalStartVal=e},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(e){this._physicalCountVal=e},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let e=this._firstVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;e=this._iterateItems(((e,r)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return r}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){let e=this._lastVisibleIndexVal;if(null==e){let t=this._physicalTop+this._scrollOffset;this._iterateItems(((r,i)=>{t<this._scrollBottom&&(e=i),t+=this._getPhysicalSizeIncrement(r)})),this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=e-this._scrollPosition;const r=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const e=Math.round(t/this._physicalAverage);this._virtualStart+=e,this._physicalStart+=e,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const e=this._getReusables(r);r?(this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length):(this._virtualStart-=e.indexes.length,this._physicalStart-=e.indexes.length),this._update(e.indexes,r?null:e.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Jt)}},_getReusables(e){let t,r,i;const s=[],o=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const h=this._physicalBottom+this._scrollOffset,c=this._scrollPosition,u=this._scrollBottom;for(e?(t=this._physicalStart,r=c-d):(t=this._physicalEnd,r=h-u);i=this._getPhysicalSizeIncrement(t),r-=i,!(s.length>=l||r<=o);)if(e){if(a+s.length+1>=this._virtualCount)break;if(d+i>=c-this._scrollOffset)break;s.push(t),d+=i,t=(t+1)%l}else{if(n-s.length<=0)break;if(d+this._physicalSize-i<=u)break;s.push(t),d-=i,t=0===t?l-1:t-1}return{indexes:s,physicalTop:d-this._scrollOffset}},_update(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return 0!==this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(e){const t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart)-this._physicalCount;let r=Math.round(.5*this._physicalCount);if(!(t<0)){if(t>0){const e=window.performance.now();[].push.apply(this._physicalItems,this._createPool(t));for(let e=0;e<t;e++)this._physicalSizes.push(0);this._physicalCount+=t,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=t),this._update(),this._templateCost=(window.performance.now()-e)/t,r=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===r||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),Kt):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),Jt))}},_render(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart+=e.indexes.length,this._physicalStart+=e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,qt))},_iterateItems(e,t){let r,i,s,o;if(2===arguments.length&&t){for(o=0;o<t.length;o++)if(r=t[o],i=this._computeVidx(r),null!=(s=e.call(this,r,i)))return s}else{for(r=this._physicalStart,i=this._virtualStart;r<this._physicalCount;r++,i++)if(null!=(s=e.call(this,r,i)))return s;for(r=0;r<this._physicalStart;r++,i++)if(null!=(s=e.call(this,r,i)))return s}},_computeVidx(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics(e){Fr();let t=0,r=0;const i=this._physicalAverageCount,s=this._physicalAverage;this._iterateItems(((e,i)=>{r+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this._physicalSize=this._physicalSize+t-r,this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((s*i+t)/this._physicalAverageCount))},_positionItems(){this._adjustScrollPosition();let e=this._physicalTop;this._iterateItems((t=>{this.translate3d(0,`${e}px`,0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement(e){return this._physicalSizes[e]},_adjustScrollPosition(){const e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop-=e;const t=this._scrollPosition;!Fi&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize(e){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${this._estScrollHeight}px`,this._scrollHeight=this._estScrollHeight)},scrollToIndex(e){if("number"!=typeof e||e<0||e>this.items.length-1)return;if(Fr(),0===this._physicalCount)return;e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=e-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,r=this._virtualStart,i=0;const s=this._hiddenContentSize;for(;r<e&&i<=s;)i+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,r+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",(()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),qt)},_isIndexRendered(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:(e,t,r)=>Math.min(r,Math.max(t,e)),_debounce(e,t,r){this._debouncers=this._debouncers||{},this._debouncers[e]=Or.debounce(this._debouncers[e],r,t.bind(this)),Rr(this._debouncers[e])}};class Di{constructor({createElements:e,updateElement:t,scrollTarget:r,scrollContainer:i,elementsContainer:s,reorderElements:o}){this.isAttached=!0,this._vidxOffset=0,this.createElements=e,this.updateElement=t,this.scrollTarget=r,this.scrollContainer=i,this.elementsContainer=s||i,this.reorderElements=o,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500},this.__resizeObserver=new ResizeObserver((()=>this._resizeHandler())),"visible"===getComputedStyle(this.scrollTarget).overflow&&(this.scrollTarget.style.overflow="auto"),"static"===getComputedStyle(this.scrollContainer).position&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",(()=>this._scrollHandler())),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",(e=>this.__onWheel(e))),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",(()=>this.__mouseDown=!0)),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()})))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(e){if("number"!=typeof e||isNaN(e)||0===this.size||!this.scrollTarget.offsetHeight)return;e=this._clamp(e,0,this.size-1);const t=this.__getVisibleElements().length;let r=Math.floor(e/this.size*this._virtualCount);this._virtualCount-r<t?(r=this._virtualCount-(this.size-e),this._vidxOffset=this.size-this._virtualCount):r<t?e<1e3?(r=e,this._vidxOffset=0):(r=1e3,this._vidxOffset=e-r):this._vidxOffset=e-r,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(r),this.adjustedFirstVisibleIndex!==e&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(e)||0),this._scrollHandler()}flush(){0!==this.scrollTarget.offsetHeight&&(this._resizeHandler(),Fr(),this._scrollHandler(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(e=0,t=this.size-1){this.__getVisibleElements().forEach((r=>{r.__virtualIndex>=e&&r.__virtualIndex<=t&&this.__updateElement(r,r.__virtualIndex,!0)}))}__updateElement(e,t,r){e.style.paddingTop&&(e.style.paddingTop=""),this.__preventElementUpdates||e.__lastUpdatedIndex===t&&!r||(this.updateElement(e,t),e.__lastUpdatedIndex=t);const i=e.offsetHeight;if(0===i)e.style.paddingTop=`${this.__placeholderHeight}px`;else{this.__elementHeightQueue.push(i),this.__elementHeightQueue.shift();const e=this.__elementHeightQueue.filter((e=>void 0!==e));this.__placeholderHeight=Math.round(e.reduce(((e,t)=>e+t),0)/e.length)}}__getIndexScrollOffset(e){const t=this.__getVisibleElements().find((t=>t.__virtualIndex===e));return t?this.scrollTarget.getBoundingClientRect().top-t.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(e){if(e===this.size)return;let t,r;if(this.__preventElementUpdates=!0,e>0&&(t=this.adjustedFirstVisibleIndex,r=this.__getIndexScrollOffset(t)),this.__size=e,Fr(),this._itemsChanged({path:"items"}),Fr(),e>0){t=Math.min(t,e-1),this.scrollToIndex(t);const i=this.__getIndexScrollOffset(t);void 0!==r&&void 0!==i&&(this._scrollTop+=r-i)}this.elementsContainer.children.length||requestAnimationFrame((()=>this._resizeHandler())),this.__preventElementUpdates=!1,this._resizeHandler(),Fr()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(e){this.scrollTarget.scrollTop=e}get items(){return{length:Math.min(this.size,1e5)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const e=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(e){const t=this.createElements(e),r=document.createDocumentFragment();return t.forEach((e=>{e.style.position="absolute",r.appendChild(e),this.__resizeObserver.observe(e)})),this.elementsContainer.appendChild(r),t}_assignModels(e){this._iterateItems(((e,t)=>{const r=this._physicalItems[e];r.hidden=t>=this.size,r.hidden?delete r.__lastUpdatedIndex:(r.__virtualIndex=t+(this._vidxOffset||0),this.__updateElement(r,r.__virtualIndex))}),e)}_isClientFull(){return setTimeout((()=>this.__clientFull=!0)),this.__clientFull||super._isClientFull()}translate3d(e,t,r,i){i.style.transform=`translateY(${t})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const e=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),0!==this._physicalCount){const t=e>=0,r=this._getReusables(!t);r.indexes.length&&(this._physicalTop=r.physicalTop,t?(this._virtualStart-=r.indexes.length,this._physicalStart-=r.indexes.length):(this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length),this._resizeHandler())}this.reorderElements&&(this.__scrollReorderDebouncer=Or.debounce(this.__scrollReorderDebouncer,Yt.after(this.timeouts.SCROLL_REORDER),(()=>this.__reorderElements()))),this.__previousScrollTop=this._scrollTop}__onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;let t=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame)return this._deltaYAcc+=t,void e.preventDefault();t+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=Or.debounce(this.__debouncerWheelAnimationFrame,qt,(()=>this._wheelAnimationFrame=!1));const r=Math.abs(e.deltaX)+Math.abs(t);this._canScroll(this.scrollTarget,e.deltaX,t)?(e.preventDefault(),this.scrollTarget.scrollTop+=t,this.scrollTarget.scrollLeft+=e.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=Or.debounce(this._debouncerIgnoreNewWheel,Yt.after(this.timeouts.IGNORE_WHEEL),(()=>this._ignoreNewWheel=!1))):this._hasResidualMomentum&&r<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():r>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=r}_hasScrolledAncestor(e,t,r){return e!==this.scrollTarget&&e!==this.scrollTarget.getRootNode().host&&(!(!this._canScroll(e,t,r)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,r):void 0))}_canScroll(e,t,r){return r>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||r<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter((e=>!e.hidden))}__reorderElements(){if(this.__mouseDown)return void(this.__pendingReorder=!0);this.__pendingReorder=!1;const e=this._virtualStart+(this._vidxOffset||0),t=this.__getVisibleElements(),r=t.find((e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement)))||t[0];if(!r)return;const i=r.__virtualIndex-e,s=t.indexOf(r)-i;if(s>0)for(let e=0;e<s;e++)this.elementsContainer.appendChild(t[e]);else if(s<0)for(let e=t.length+s;e<t.length;e++)this.elementsContainer.insertBefore(t[e],t[0]);if(Ni){const{transform:e}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout((()=>this.scrollTarget.style.transform=e))}}_adjustVirtualIndexOffset(e){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(e)>1e4){const e=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),t=e*this.size;this._vidxOffset=Math.round(t-e*this._virtualCount)}else{const e=this._vidxOffset,t=1e3,r=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)));const i=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=i,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<i&&(this._vidxOffset+=Math.min(i-this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)))}}}Object.setPrototypeOf(Di.prototype,Li);class Mi{constructor(e){this.__adapter=new Di(e)}get size(){return this.__adapter.size}set size(e){this.__adapter.size=e}scrollToIndex(e){this.__adapter.scrollToIndex(e)}update(e=0,t=this.size-1){this.__adapter.update(e,t)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hi=e=>class extends e{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter((e=>e.some((e=>e.headerRenderer||e.path||e.header)))).length}_a11yGetFooterRowCount(e){return e.filter((e=>e.some((e=>e.headerRenderer)))).length}_a11yUpdateGridSize(e,t){if(void 0===e||void 0===t)return;const r=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",r&&r.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach(((e,t)=>e.setAttribute("aria-rowindex",t+1)))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach(((e,t)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)))}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),Array.from(e.children).forEach((e=>e.setAttribute("aria-selected",Boolean(t))))}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,t){t>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",t+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,t){Array.from(e.children).forEach((e=>{e!==t&&e.setAttribute("aria-controls",t.id)}))}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((e=>{let t=e.parentNode;for(;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;if(t&&t.assignedSlot){t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")}}))}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Bi=e=>class extends e{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,r=t?t.item:null;r&&(this.activeItem=this._itemsEqual(this.activeItem,r)?null:r)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),r=t[t.indexOf(this.$.table)-3];if(!r||r.getAttribute("part").indexOf("details-cell")>-1)return;const i=r._content,s=this.getRootNode().activeElement;i.contains(s)||this._isFocusable(e.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(r.parentElement)}}))}_isFocusable(e){return Vi(e)}},Vi=e=>{if(!e.parentNode)return!1;const t=Array.from(e.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter((e=>"cell body-cell"!==e.getAttribute("part"))).includes(e);return!e.disabled&&t};function $i(e,t){return e.split(".").reduce(((e,t)=>e[t]),t)}function Gi(e,t,r){if(0===r.length)return!1;let i=!0;for(const s in e){const o=e[s].path;if(!o||-1===o.indexOf("."))continue;void 0===$i(o.replace(/\.[^.]*$/,""),r[0])&&(console.warn(`Path "${o}" used for ${t} does not exist in all of the items, ${t} is disabled.`),i=!1)}return i}function Wi(e){return[void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}function Ui(e,t){return(e=Wi(e))<(t=Wi(t))?-1:e>t?1:0}const ji=e=>(t,r)=>{let i=e?[...e]:[];t.filters&&Gi(t.filters,"filtering",i)&&(i=function(e,t){return e.filter((e=>t.every((t=>{const r=Wi($i(t.path,e)),i=Wi(t.value).toString().toLowerCase();return r.toString().toLowerCase().includes(i)}))))}(i,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&Gi(t.sortOrders,"sorting",i)&&(i=function(e,t){return e.sort(((e,r)=>t.map((t=>"asc"===t.direction?Ui($i(t.path,e),$i(t.path,r)):"desc"===t.direction?Ui($i(t.path,r),$i(t.path,e)):0)).reduce(((e,t)=>0!==e?e:t),0)))}(i,t.sortOrders));const s=Math.min(i.length,t.pageSize),o=t.page*s,n=o+s;r(i.slice(o,n),i.length)},Yi=e=>class extends e{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(e){const t=ji(this.items);t.__items=e,this.setProperties({_arrayDataProvider:t,size:e.length,dataProvider:t})}__dataProviderOrItemsChanged(e,t,r){r&&(this._arrayDataProvider?e!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):t?this._arrayDataProvider.__items===t?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(t):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):t&&this.__setArrayDataProvider(t))}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function qi(e,t,r){let i=1;e.forEach((e=>{i%10==0&&(i+=1),e._order=r+i*t,i+=1}))}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ki=e=>class extends e{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),br(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout((()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})}),100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){const t=e.composedPath(),r=t[t.indexOf(this.$.header)-2];if(!r||!r._content)return;if(r._content.contains(this.getRootNode().activeElement))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else"track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.filter((e=>e.hasAttribute&&e.hasAttribute("draggable")))[0])return;const r=this._cellFromPoint(e.detail.x,e.detail.y);if(r&&-1!==r.getAttribute("part").indexOf("header-cell")){for(this.toggleAttribute("reordering",!0),this._draggedColumn=r._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(r),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const r=this._getTargetColumn(t,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,r)&&this._isSwappableByPosition(r,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,r),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter((e=>!e.hidden)).sort(((e,t)=>e._order-t._order))}_cellFromPoint(e,t){e=e||0,t=t||0,this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const r=this.shadowRoot.elementFromPoint(e,t);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),r&&r._column)return r}_updateGhostPosition(e,t){const r=this._reorderGhost.getBoundingClientRect(),i=e-r.width/2,s=t-r.height/2,o=parseInt(this._reorderGhost._left||0),n=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=o-(r.left-i),this._reorderGhost._top=n-(r.top-s),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const r=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach((e=>t.style[e]=r[e])),t}_updateOrders(e,t){void 0!==e&&void 0!==t&&(e[0].forEach((e=>e._order=0)),qi(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){Array.from(e.parentNode.children).filter((t=>/column/.test(t.localName)&&this._isSwapAllowed(t,e))).forEach((e=>e._reorderStatus=t))}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10)}this._draggedColumn&&setTimeout((()=>this._autoScroller()),10)}_isSwapAllowed(e,t){if(e&&t){const r=e!==t,i=e.parentElement===t.parentElement,s=e.frozen&&t.frozen||e.frozenToEnd&&t.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!t.frozen&&!t.frozenToEnd;return r&&i&&s}}_isSwappableByPosition(e,t){const r=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter((t=>e.contains(t._column)))[0],i=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),s=r.getBoundingClientRect();return s.left>i.left?t>s.right-i.width:t<s.left+i.width}_swapColumnOrders(e,t){const r=e._order;e._order=t._order,t._order=r,this._updateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let r=e._column;for(;r.parentElement!==t.parentElement&&r!==this;)r=r.parentElement;return r.parentElement===t.parentElement?r:e._column}}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Ji=e=>class extends e{ready(){super.ready();const e=this.$.scroller;br(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",(t=>e.hasAttribute("column-resizing")&&t.preventDefault())),e.addEventListener("contextmenu",(e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault())),e.addEventListener("mousedown",(e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault()))}_onHeaderTrack(e){const t=e.target;if("resize-handle"===t.getAttribute("part")){let r=t.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);"vaadin-grid-column-group"===r.localName;)r=r._childColumns.slice(0).sort(((e,t)=>e._order-t._order)).filter((e=>!e.hidden)).pop();const i=e.detail.x,s=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),o=s.filter((e=>e._column===r))[0];if(o.offsetWidth){const e=getComputedStyle(o._content),t=10+parseInt(e.paddingLeft)+parseInt(e.paddingRight)+parseInt(e.borderLeftWidth)+parseInt(e.borderRightWidth)+parseInt(e.marginLeft)+parseInt(e.marginRight);let s;const n=o.offsetWidth,a=o.getBoundingClientRect();s=o.hasAttribute("frozen-to-end")?n+(this.__isRTL?i-a.right:a.left-i):n+(this.__isRTL?a.left-i:i-a.right),r.width=`${Math.max(t,s)}px`,r.flexGrow=0}s.sort(((e,t)=>e._column._order-t._column._order)).forEach(((e,t,r)=>{t<r.indexOf(o)&&(e._column.width=`${e.offsetWidth}px`,e._column.flexGrow=0)}));const n=this._frozenToEndCells[0];if(n&&this.$.table.scrollWidth>this.$.table.offsetWidth){const e=n.getBoundingClientRect(),t=i-(this.__isRTL?e.right:e.left);(this.__isRTL&&t<=0||!this.__isRTL&&t>=0)&&(this.$.table.scrollLeft+=t)}"end"===e.detail.state&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:r}}))),this._resizeHandler()}}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Xi=class e{constructor(e,t,r){this.grid=e,this.parentCache=t,this.parentItem=r,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter((e=>this.itemCaches[e].isLoading()))[0])}getItemForIndex(e){const{cache:t,scaledIndex:r}=this.getCacheAndIndex(e);return t.items[r]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce(((e,t)=>{const r=this.itemCaches[t];return r.updateSize(),e+r.effectiveSize}),0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const r=new e(this.grid,this,this.items[t]);this.itemCaches[t]=r,this.grid._loadPage(0,r)}}getCacheAndIndex(e){let t=e;const r=Object.keys(this.itemCaches);for(let e=0;e<r.length;e++){const i=Number(r[e]),s=this.itemCaches[i];if(t<=i)return{cache:this,scaledIndex:t};if(t<=i+s.effectiveSize)return s.getCacheAndIndex(t-i-1);t-=s.effectiveSize}return{cache:this,scaledIndex:t}}},Zi=e=>class extends e{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value(){return new Xi(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems.*)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize}_getItem(e,t){if(e>=this._effectiveSize)return;t.index=e;const{cache:r,scaledIndex:i}=this._cache.getCacheAndIndex(e),s=r.items[i];s?(t.toggleAttribute("loading",!1),this._updateItem(t,s),this._isExpanded(s)&&r.ensureSubCacheForScaledIndex(i)):(t.toggleAttribute("loading",!0),this._loadPage(this._getPageForIndex(i),r))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}__computeExpandedKeys(e,t){const r=t.base||[],i=new Set;return r.forEach((e=>{i.add(this.getItemId(e))})),i}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter((t=>!this._itemsEqual(t,e))))}_getIndexLevel(e){let{cache:t}=this._cache.getCacheAndIndex(e),r=0;for(;t.parentCache;)t=t.parentCache,r+=1;return r}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;const r={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this.dataProvider(r,((i,s)=>{void 0!==s?t.size=s:r.parentItem&&(t.size=i.length);const o=Array.from(this.$.items.children).map((e=>e._item));i.forEach(((r,i)=>{const s=e*this.pageSize+i;t.items[s]=r,this._isExpanded(r)&&o.indexOf(r)>-1&&t.ensureSubCacheForScaledIndex(s)})),this._hasData=!0,delete t.pendingRequests[e],this._debouncerApplyCachedData=Or.debounce(this._debouncerApplyCachedData,Yt.after(0),(()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>{this._cache.getItemForIndex(e.index)&&this._getItem(e.index,e)})),this.__scrollToPendingIndex()})),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()}))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new Xi(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(e,t){void 0!==t&&e!==t&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(e,t){void 0!==t&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=Or.debounce(this._debouncerCheckSize,Yt.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let r=-1;return t.forEach(((t,i)=>{this._itemsEqual(t,e)&&(r=i)})),r}scrollToIndex(e){super.scrollToIndex(e),isNaN(e)||!this._cache.isLoading()&&this.clientHeight||(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(e)}}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,Qi="between",es="on-top-or-between",ts="on-grid",rs="on-top",is="above",ss="below",os="empty",ns=e=>class extends e{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",(e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())}))}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const e=t.style.transform;t.style.top=/translateY\((.*)\)/.exec(e)[1],t.style.transform="none",requestAnimationFrame((()=>{t.style.top="",t.style.transform=e}))}const r=t.getBoundingClientRect();this._ios?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-r.left,e.clientY-r.top);let i=[t];this._isSelected(t._item)&&(i=this.__getViewportRows().filter((e=>this._isSelected(e._item))).filter((e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e))))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(i)),t.setAttribute("dragstart",i.length>1?i.length:""),this.style.setProperty("--_grid-drag-start-x",e.clientX-r.left+20+"px"),this.style.setProperty("--_grid-drag-start-y",e.clientY-r.top+10+"px"),requestAnimationFrame((()=>{t.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})}));const s=new CustomEvent("grid-dragstart",{detail:{draggedItems:i.map((e=>e._item)),setDragData:(t,r)=>e.dataTransfer.setData(t,r),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});s.originalEvent=e,this.dispatchEvent(s)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();let t=e.composedPath().filter((e=>"tr"===e.localName))[0];if(this._effectiveSize&&this.dropMode!==ts)if(t&&t.parentNode===this.$.items){const r=t.getBoundingClientRect();if(this._dropLocation=rs,this.dropMode===Qi){const t=e.clientY-r.top<r.bottom-e.clientY;this._dropLocation=t?is:ss}else this.dropMode===es&&(e.clientY-r.top<r.height/3?this._dropLocation=is:e.clientY-r.top>r.height/3*2&&(this._dropLocation=ss))}else{if(t)return;if(this.dropMode!==Qi&&this.dropMode!==es)return;t=Array.from(this.$.items.children).filter((e=>!e.hidden)).pop(),this._dropLocation=ss}else this._dropLocation=os;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===os?this.toggleAttribute("dragover",!0):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&t.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,r=this.$.footer.getBoundingClientRect().top,i=t-e+this.__dndAutoScrollThreshold,s=e-r+this.__dndAutoScrollThreshold;let o=0;if(s>0?o=2*s:i>0&&(o=2*-i),o){const e=this.$.table.scrollTop;this.$.table.scrollTop+=o;if(e!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout((()=>this.__dndAutoScrolling=!1),20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter((r=>{const i=r.getBoundingClientRect();return i.bottom>e&&i.top<t}))}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach((e=>e.removeAttribute("dragover")))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map((t=>({type:t,data:e.dataTransfer.getData(t)})));this._clearDragStyles();const r=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});r.originalEvent=e,this.dispatchEvent(r)}}__formatDefaultTransferData(e){return e.map((e=>Array.from(e.children).filter((e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell"))).sort(((e,t)=>e._column._order>t._column._order?1:-1)).map((e=>e._content.textContent.trim())).filter((e=>e)).join("\t"))).join("\n")}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter((e=>!e.hidden)).forEach((e=>{this._filterDragAndDrop(e,this.__getRowModel(e))}))}_filterDragAndDrop(e,t){const r=this.loading||e.hasAttribute("loading"),i=!this.rowsDraggable||r||this.dragFilter&&!this.dragFilter(t),s=!this.dropMode||r||this.dropFilter&&!this.dropFilter(t);Array.from(e.children).map((e=>e._content)).forEach((e=>{i?e.removeAttribute("draggable"):e.setAttribute("draggable",!0)})),e.toggleAttribute("drag-disabled",!!i),e.toggleAttribute("drop-disabled",!!s)}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;function as(e,t){if(!e||!t||e.length!==t.length)return!1;for(let r=0,i=e.length;r<i;r++)if(e[r]instanceof Array&&t[r]instanceof Array){if(!as(e[r],t[r]))return!1}else if(e[r]!==t[r])return!1;return!0}const ls=e=>class extends e{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(let t=0;t<e.length;t++)if("vaadin-grid-column-group"===e[t].localName)return!0;return!1}_getChildColumns(e){return li.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map((e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e])).reduce(((e,t)=>e.concat(t)),[])}_getColumnTree(){const e=li.getFlattenedNodes(this).filter(this._isColumnElement),t=[e];let r=e;for(;this._hasColumnGroups(r);)r=this._flattenColumnGroups(r),t.push(r);return t}_updateColumnTree(){const e=this._getColumnTree();as(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new li(this,(e=>{const t=e=>e.filter(this._isColumnElement).length>0;if(t(e.addedNodes)||t(e.removedNodes)){const t=e.removedNodes.flatMap((e=>e._allCells)),r=e=>t.filter((t=>t._content.contains(e))).length;this.__removeSorters(this._sorters.filter(r)),this.__removeFilters(this._filters.filter(r)),this._updateColumnTree()}this._debouncerCheckImports=Or.debounce(this._debouncerCheckImports,Yt.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()}))}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach((e=>{const t=this.querySelector(e);!t||t instanceof Bt||console.warn(`Make sure you have imported the required module for <${e}> element.`)}))}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((e=>this._updateFirstAndLastColumnForRow(e)))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort(((e,t)=>e._column._order-t._column._order)).forEach(((e,t,r)=>{e.toggleAttribute("first-column",0===t),e.toggleAttribute("last-column",t===r.length-1)}))}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,ds=e=>class extends e{getEventContext(e){const t={},r=e.__composedPath||e.composedPath(),i=r[r.indexOf(this.$.table)-3];return i?(t.section=["body","header","footer","details"].filter((e=>i.getAttribute("part").indexOf(e)>-1))[0],i._column&&(t.column=i._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(i.parentElement)),t):t}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,hs=e=>class extends e{static get properties(){return{_filters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){0!==e.length&&(this._filters=this._filters.filter((t=>e.indexOf(t)<0)),this.__applyFilters())}__addFilter(e){-1===this._filters.indexOf(e)&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map((e=>({path:e.path,value:e.value})))}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,cs=e=>class extends e{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",(()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0})),this.addEventListener("mouseup",(()=>this._isMousedown=!1)))}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach((t=>{e&&this.__isCell(this[t])?this[t]=this[t].parentElement:!e&&this.__isRow(this[t])&&(this[t]=this[t].firstElementChild)}))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach((e=>{if(e.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=e;else if(this._itemsFocusable.parentElement){const t=[...this._itemsFocusable.parentElement.children].indexOf(this._itemsFocusable);this._itemsFocusable=e.children[t]}})),e&&this._itemsFocusable.focus()}_onKeyDown(e){const t=e.key;let r;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":r="Navigation";break;case"Enter":case"Escape":case"F2":r="Interaction";break;case"Tab":r="Tab";break;case" ":r="Space"}this._detectInteracting(e),this.interacting&&"Interaction"!==r&&(r=void 0),r&&this[`_on${r}KeyDown`](e,t)}_ensureScrolledToIndex(e){[...this.$.items.children].find((t=>t.index===e))?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const t=e._item;return t&&this.get(this.itemHasChildrenPath,t)&&!this._isExpanded(t)}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,t){e.preventDefault();const r=this._lastVisibleIndex-this._firstVisibleIndex-1;let i=0,s=0;switch(t){case"ArrowRight":i=this.__isRTL?-1:1;break;case"ArrowLeft":i=this.__isRTL?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?s=-1/0:i=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?s=1/0:i=1/0;break;case"ArrowDown":s=1;break;case"ArrowUp":s=-1;break;case"PageDown":s=r;break;case"PageUp":s=-r}const o=e.composedPath().find((e=>this.__isRow(e))),n=e.composedPath().find((e=>this.__isCell(e)));if(this.__rowFocusMode&&!o||!this.__rowFocusMode&&!n)return;const a=this.__isRTL?"ArrowLeft":"ArrowRight",l=this.__isRTL?"ArrowRight":"ArrowLeft";if(t===a){if(this.__rowFocusMode)return this.__isRowExpandable(o)?void this.expandItem(o._item):(this.__rowFocusMode=!1,void this._onCellNavigation(o.firstElementChild,0,0))}else if(t===l)if(this.__rowFocusMode){if(this.__isRowCollapsible(o))return void this.collapseItem(o._item)}else{if(n===[...o.children].sort(((e,t)=>e._order-t._order))[0]||this.__isDetailsCell(n))return this.__rowFocusMode=!0,void this._onRowNavigation(o,0)}this.__rowFocusMode?this._onRowNavigation(o,s):this._onCellNavigation(n,i,s)}_onRowNavigation(e,t){const{dstRow:r}=this.__navigateRows(t,e);r&&r.focus()}__getIndexInGroup(e,t){return e.parentNode===this.$.items?void 0!==t?t:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,t,r){const i=this.__getIndexInGroup(t,this._focusedItemIndex),s=t.parentNode,o=(s===this.$.items?this._effectiveSize:s.children.length)-1;let n=Math.max(0,Math.min(i+e,o));if(s!==this.$.items){if(n>i)for(;n<o&&s.children[n].hidden;)n+=1;else if(n<i)for(;n>0&&s.children[n].hidden;)n-=1;return this.toggleAttribute("navigating",!0),{dstRow:s.children[n]}}let a=!1;if(r){const o=this.__isDetailsCell(r);if(s===this.$.items){const r=t._item,s=this._cache.getItemForIndex(n);a=o?0===e:1===e&&this._isDetailsOpened(r)||-1===e&&n!==i&&this._isDetailsOpened(s),a!==o&&(1===e&&a||-1===e&&!a)&&(n=i)}}return this._ensureScrolledToIndex(n),this._focusedItemIndex=n,this.toggleAttribute("navigating",!0),{dstRow:[...s.children].find((e=>!e.hidden&&e.index===n)),dstIsRowDetails:a}}_onCellNavigation(e,t,r){const i=e.parentNode,{dstRow:s,dstIsRowDetails:o}=this.__navigateRows(r,i,e);if(!s)return;const n=this.__getIndexOfChildElement(e),a=this.__isDetailsCell(e),l=i.parentNode,d=this.__getIndexInGroup(i,this._focusedItemIndex);if(void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=a?0:this._getColumns(l,d).filter((e=>!e.hidden))[n]._order),o){[...s.children].find((e=>this.__isDetailsCell(e))).focus()}else{const e=this.__getIndexInGroup(s,this._focusedItemIndex),i=this._getColumns(l,e).filter((e=>!e.hidden)),o=i.map((e=>e._order)).sort(((e,t)=>e-t)),n=o.length-1,d=o.indexOf(o.slice(0).sort(((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder)))[0]),h=0===r&&a?d:Math.max(0,Math.min(d+t,n));h!==d&&(this._focusedColumnOrder=void 0);const c=i.reduce(((e,t,r)=>(e[t._order]=r,e)),{}),u=c[o[h]],_=s.children[u];this._scrollHorizontallyToCell(_),_.focus()}}_onInteractionKeyDown(e,t){const r=e.composedPath()[0],i="input"===r.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(r.type);let s;switch(t){case"Enter":s=!this.interacting||!i;break;case"Escape":s=!1;break;case"F2":s=!this.interacting}const{cell:o}=this._getGridEventLocation(e);if(this.interacting!==s&&null!==o)if(s){const t=o._content.querySelector("[focus-target]")||[...o._content.querySelectorAll("*")].find((e=>this._isFocusable(e)));t&&(e.preventDefault(),t.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,o.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0)}_predictFocusStepTarget(e,t){const r=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let i=r.indexOf(e);for(i+=t;i>=0&&i<=r.length-1;){let e=r[i];if(e&&!this.__rowFocusMode&&(e=r[i].parentNode),e&&!e.hidden)break;i+=t}return r[i]}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t){if(e.stopPropagation(),t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let r=t;const i=this.__isRow(t)?t:t.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),i.index!==this._focusedItemIndex&&this.__isCell(t)){const e=Array.from(i.children).indexOf(this._itemsFocusable),t=Array.from(this.$.items.children).find((e=>!e.hidden&&e.index===this._focusedItemIndex));t&&(r=t.children[e])}e.preventDefault(),r.focus()}else e.preventDefault(),t.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0],r=this.__isRow(t);!r&&t._content&&t._content.firstElementChild||this.dispatchEvent(new CustomEvent(r?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(r?t:t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/.test(e.key)||this.interacting)return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const e=this.hasAttribute("navigating");t._content.firstElementChild.click(),this.toggleAttribute("navigating",e)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e)}_onContentFocusIn(e){const{section:t,cell:r,row:i}=this._getGridEventLocation(e);if(this._detectInteracting(e),t&&(r||i)&&(this._activeRowGroup=t,this.$.header===t?this._headerFocusable=this.__rowFocusMode?i:r:this.$.items===t?this._itemsFocusable=this.__rowFocusMode?i:r:this.$.footer===t&&(this._footerFocusable=this.__rowFocusMode?i:r),r)){const t=this.getEventContext(e);r.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:t}}))}this._detectFocusedItemIndex(e)}_detectInteracting(e){const t=e.composedPath().some((e=>"vaadin-grid-cell-content"===e.localName));this._setInteracting(t),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:t,row:r}=this._getGridEventLocation(e);t===this.$.items&&(this._focusedItemIndex=r.index)}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),r=this.interacting&&t===this._activeRowGroup;e.tabIndex=r?-1:0}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,t){let r=this._columnTree.length-1;return e===this.$.header?r=t:e===this.$.footer&&(r=this._columnTree.length-1-t),this._columnTree[r]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach((e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const t=[...this.$[e].children].find((e=>e.offsetHeight)),r=t?[...t.children].find((e=>!e.hidden)):null;t&&r&&(this[`_${e}Focusable`]=this.__rowFocusMode?t:r)}})),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),t=e?[...e.children].find((e=>!e.hidden)):null;t&&e&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__rowFocusMode?e:t)}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const t=e.getBoundingClientRect(),r=e.parentNode,i=Array.from(r.children).indexOf(e),s=this.$.table.getBoundingClientRect();let o=s.left,n=s.right;for(let e=i-1;e>=0;e--){const t=r.children[e];if(!t.hasAttribute("hidden")&&!this.__isDetailsCell(t)&&(t.hasAttribute("frozen")||t.hasAttribute("frozen-to-end"))){o=t.getBoundingClientRect().right;break}}for(let e=i+1;e<r.children.length;e++){const t=r.children[e];if(!t.hasAttribute("hidden")&&!this.__isDetailsCell(t)&&(t.hasAttribute("frozen")||t.hasAttribute("frozen-to-end"))){n=t.getBoundingClientRect().left;break}}t.left<o&&(this.$.table.scrollLeft+=Math.round(t.left-o)),t.right>n&&(this.$.table.scrollLeft+=Math.round(t.right-n))}_getGridEventLocation(e){const t=e.composedPath(),r=t.indexOf(this.$.table);return{section:r>=1?t[r-1]:null,row:r>=2?t[r-2]:null,cell:r>=3?t[r-3]:null}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,us=e=>class extends e{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[]},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver((e=>{e.forEach((({target:e})=>{this._updateDetailsCellHeight(e.parentElement)})),this.__virtualizer.__adapter._resizeHandler()}))}_rowDetailsRendererChanged(e){e&&this._columnTree&&Array.from(this.$.items.children).forEach((e=>{if(!e.querySelector("[part~=details-cell]")){this._updateRow(e,this._columnTree[this._columnTree.length-1]);const t=this._isDetailsOpened(e._item);this._toggleDetailsCell(e,t)}}))}_detailsOpenedItemsChanged(e,t){"detailsOpenedItems.length"!==e.path&&e.value&&[...this.$.items.children].forEach((e=>{(e.hasAttribute("details-opened")||t&&this._isDetailsOpened(e._item))&&this._updateItem(e,e._item)}))}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,t){const r=e.querySelector('[part~="details-cell"]');r&&(r.hidden=!t,r.hidden||this.rowDetailsRenderer&&(r._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const t=e.querySelector('[part~="details-cell"]');t&&(t.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${t.offsetHeight}px`))}_updateDetailsCellHeights(){[...this.$.items.children].forEach((e=>{this._updateDetailsCellHeight(e)}))}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter((t=>!this._itemsEqual(t,e))))}}
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,_s=new ResizeObserver((e=>{setTimeout((()=>{e.forEach((e=>{e.target.resizables?e.target.resizables.forEach((t=>{t._onResize(e.contentRect)})):e.target._onResize(e.contentRect)}))}))})),ps=J((e=>class extends e{connectedCallback(){if(super.connectedCallback(),_s.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,_s.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),_s.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),0===t.size&&_s.unobserve(e)),this.__parent=null}}get _observeParent(){return!1}_onResize(e){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}})),ms=500,fs=e=>class extends(ps(e)){static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollLeft(){return this.$.table.scrollLeft}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",(e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]})),this.$.items.addEventListener("focusout",(()=>this._rowWithFocusedElement=void 0)),this.$.table.addEventListener("scroll",(()=>this._afterScroll()))}_onResize(){this._updateOverflow(),this.__updateHorizontalScrollPosition()}scrollToIndex(e){e=Math.min(this._effectiveSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const t=[...this.$.items.children].find((t=>t.index===e));if(t){const e=t.getBoundingClientRect(),r=this.$.footer.getBoundingClientRect().top,i=this.$.header.getBoundingClientRect().bottom;e.bottom>r?this.$.table.scrollTop+=e.bottom-r:e.top<i&&(this.$.table.scrollTop-=i-e.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame((()=>this.$.scroller.toggleAttribute("scrolling",!0)))),this._debounceScrolling=Or.debounce(this._debounceScrolling,Yt.after(ms),(()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)}))}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow()}_updateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top");const r=this.__getNormalizedScrollLeft(t);r>0&&(e+=" start"),r<t.scrollWidth-t.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/gi,(e=>"start"===e?"end":"start"))),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left"),this._debounceOverflow=Or.debounce(this._debounceOverflow,qt,(()=>{const t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):0===t.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}))}_frozenCellsChanged(){this._debouncerCacheElements=Or.debounce(this._debouncerCacheElements,Jt,(()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((e=>{e.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()})),this._updateFrozenColumn()}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);let t,r;e.sort(((e,t)=>e._order-t._order));for(let i=0;i<e.length;i++){const s=e[i];s._lastFrozen=!1,s._firstFrozenToEnd=!1,void 0===r&&s.frozenToEnd&&!s.hidden&&(r=i),s.frozen&&!s.hidden&&(t=i)}void 0!==t&&(e[t]._lastFrozen=!0),void 0!==r&&(e[r]._firstFrozenToEnd=!0)}__updateHorizontalScrollPosition(){const e=this.$.table.scrollWidth,t=this.$.table.clientWidth,r=Math.max(0,this.$.table.scrollLeft),i=this.__getNormalizedScrollLeft(this.$.table),s=`translate(${-r}px, 0)`;this.$.header.style.transform=s,this.$.footer.style.transform=s,this.$.items.style.transform=s;const o=this.__isRTL?i+t-e:r,n=`translate(${o}px, 0)`;for(let e=0;e<this._frozenCells.length;e++)this._frozenCells[e].style.transform=n;const a=`translate(${this.__isRTL?i:r+t-e}px, 0)`;for(let e=0;e<this._frozenToEndCells.length;e++)this._frozenToEndCells[e].style.transform=a;this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",-o+"px")}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,gs=e=>class extends e{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems.*)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems.*)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter((t=>!this._itemsEqual(t,e))))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,t){const r=t.base||[],i=new Set;return r.forEach((e=>{i.add(this.getItemId(e))})),i}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,bs=e=>class extends e{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),t._grid=this,this.__updateSorter(t),this.__applySorters()}__removeSorters(e){0!==e.length&&(this._sorters=this._sorters.filter((t=>e.indexOf(t)<0)),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(((e,t)=>e._order=this._sorters.length>1?t:null),this)}__updateSorter(e){if(e.direction||-1!==this._sorters.indexOf(e))if(e._order=null,this.multiSort)this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders();else if(e.direction){const t=this._sorters.filter((t=>t!==e));this._sorters=[e],t.forEach((e=>{e._order=null,e.direction=null}))}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map((e=>({path:e.path,direction:e.direction})))}_removeArrayItem(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,ys=e=>class extends e{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter((e=>!e.hidden&&!e.hasAttribute("loading"))).forEach((e=>this._generateCellClassNames(e,this.__getRowModel(e))))}_generateCellClassNames(e,t){Array.from(e.children).forEach((e=>{if(e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.remove(t))),this.cellClassNameGenerator){const r=this.cellClassNameGenerator(e._column,t);e.__generatedClasses=r&&r.split(" ").filter((e=>e.length>0)),e.__generatedClasses&&e.__generatedClasses.forEach((t=>e.classList.add(t)))}}))}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class vs extends(Wr(c(Zi(Yi(ls(Bi(fs(gs(bs(us(cs(Hi(hs(Ki(Ji(ds(ns(ys(ti(Bt)))))))))))))))))))){static get template(){return Mt`
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
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:Ni},_ios:{type:Boolean,value:Oi},_firefox:{type:Boolean,value:Ii},_android:{type:Boolean,value:Si},_touchDevice:{type:Boolean,value:Ri},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1}__getFirstVisibleItem(){return this._getVisibleRows().find((e=>this._isInViewport(e)))}get _firstVisibleIndex(){const e=this.__getFirstVisibleItem();return e?e.index:void 0}__getLastVisibleItem(){return this._getVisibleRows().reverse().find((e=>this._isInViewport(e)))}get _lastVisibleIndex(){const e=this.__getLastVisibleItem();return e?e.index:void 0}_isInViewport(e){const t=this.$.table.getBoundingClientRect(),r=e.getBoundingClientRect(),i=this.$.header.getBoundingClientRect().height,s=this.$.footer.getBoundingClientRect().height;return r.bottom>t.top+i&&r.top<t.bottom-s}_getVisibleRows(){return Array.from(this.$.items.children).filter((e=>!e.hidden)).sort(((e,t)=>e.index-t.index))}ready(){super.ready(),this.__virtualizer=new Mi({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver((()=>setTimeout((()=>this.__updateFooterPositioning())))).observe(this.$.footer),fi(this)}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),"dir"===e&&(this.__isRTL="rtl"===r)}__getBodyCellCoordinates(e){if(this.$.items.contains(e)&&"td"===e.localName)return{item:e.parentElement._item,column:e._column}}__focusBodyCell({item:e,column:t}){const r=this._getVisibleRows().find((t=>t._item===e)),i=r&&[...r.children].find((e=>e._column===t));i&&i.focus()}_effectiveSizeChanged(e,t,r,i){if(t&&r&&i){const r=this.shadowRoot.activeElement,i=this.__getBodyCellCoordinates(r);t.size=e,t.update(),t.flush(),i&&r.parentElement.hidden&&this.__focusBodyCell(i),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter((e=>e.clientHeight)).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}__getIntrinsicWidth(e){const t=e.width,r=e.flexGrow;e.width="auto",e.flexGrow=0;const i=e._allCells.filter((e=>!this.$.items.contains(e)||this._isInViewport(e.parentElement))).reduce(((e,t)=>Math.max(e,t.offsetWidth+1)),0);return e.flexGrow=r,e.width=t,i}__getDistributedWidth(e,t){if(null==e||e===this)return 0;const r=Math.max(this.__getIntrinsicWidth(e),this.__getDistributedWidth(e.parentElement,e));if(!t)return r;const i=r,s=e._visibleChildColumns.map((e=>this.__getIntrinsicWidth(e))).reduce(((e,t)=>e+t),0),o=Math.max(0,i-s),n=this.__getIntrinsicWidth(t)/s*o;return this.__getIntrinsicWidth(t)+n}_recalculateColumnWidths(e){this.__virtualizer.flush(),e.forEach((e=>{e.width=`${this.__getDistributedWidth(e)}px`}))}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const e=this._getColumns().filter((e=>!e.hidden&&e.autoWidth));this._recalculateColumnWidths(e)}}_createScrollerRows(e){const t=[];for(let r=0;r<e;r++){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(e)}var r,i,s;return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach((e=>e.isConnected&&e.notifyPath&&e.notifyPath("_cells.*",e._cells))),r=this,i=()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._afterScroll(),this.__itemsReceived()},yi||wi(),vi.push([r,i,s]),t}_createCell(e){const t=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,r=document.createElement("vaadin-grid-cell-content");r.setAttribute("slot",t);const i=document.createElement(e);i.id=t.replace("-content-","-"),i.setAttribute("tabindex","-1"),i.setAttribute("role","td"===e?"gridcell":"columnheader");const s=document.createElement("slot");return s.setAttribute("name",t),i.appendChild(s),i._content=r,r.addEventListener("mousedown",(()=>{if(Ti){const e=t=>{const s=r.contains(this.getRootNode().activeElement),o=t.composedPath().includes(r);!s&&o&&i.focus(),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout((()=>{r.contains(this.getRootNode().activeElement)||i.focus()}))})),i}_updateRow(e,t,r,i,s){r=r||"body";const o=document.createDocumentFragment();Array.from(e.children).forEach((e=>e._vacant=!0)),e.innerHTML="",t.filter((e=>!e.hidden)).forEach(((t,n,a)=>{let l;if("body"===r){if(t._cells=t._cells||[],l=t._cells.filter((e=>e._vacant))[0],l||(l=this._createCell("td"),t._cells.push(l)),l.setAttribute("part","cell body-cell"),e.appendChild(l),n===a.length-1&&this.rowDetailsRenderer){this._detailsCells=this._detailsCells||[];const t=this._detailsCells.filter((e=>e._vacant))[0]||this._createCell("td");-1===this._detailsCells.indexOf(t)&&this._detailsCells.push(t),t._content.parentElement||o.appendChild(t._content),this._configureDetailsCell(t),e.appendChild(t),this._a11ySetRowDetailsCell(e,t),t._vacant=!1}t.notifyPath&&!s&&t.notifyPath("_cells.*",t._cells)}else{const s="header"===r?"th":"td";i||"vaadin-grid-column-group"===t.localName?(l=t[`_${r}Cell`]||this._createCell(s),l._column=t,e.appendChild(l),t[`_${r}Cell`]=l):(t._emptyCells=t._emptyCells||[],l=t._emptyCells.filter((e=>e._vacant))[0]||this._createCell(s),l._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.setAttribute("part",`cell ${r}-cell`),this.__updateHeaderFooterRowVisibility(e)}l._content.parentElement||o.appendChild(l._content),l._vacant=!1,l._column=t})),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__updateHeaderFooterRowVisibility(e){if(!e)return;const t=Array.from(e.children).filter((t=>{const r=t._column;if(r._emptyCells&&r._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(r.headerRenderer)return!0;if(null===r.header)return!1;if(r.path||void 0!==r.header)return!0}else if(r.footerRenderer)return!0;return!1}));e.hidden!==!t.length&&(e.hidden=!t.length),this._resetKeyboardNavigation()}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(e.toggleAttribute("first",0===t),e.toggleAttribute("last",t===this._effectiveSize-1),e.toggleAttribute("odd",t%2),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e){this._renderColumnTree(e),this.recalculateColumnWidths()}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach((t=>this._updateRow(t,e[e.length-1],null,!1,!0)));this.$.header.children.length<e.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach(((t,r)=>this._updateRow(t,e[r],"header",r===e.length-1))),Array.from(this.$.footer.children).forEach(((t,r)=>this._updateRow(t,e[e.length-1-r],"footer",0===r))),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames()}__updateFooterPositioning(){this._firefox&&parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/)[1])<99&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(e,t){e._item=t;const r=this.__getRowModel(e);this._toggleDetailsCell(e,r.detailsOpened),this._a11yUpdateRowLevel(e,r.level),this._a11yUpdateRowSelected(e,r.selected),e.toggleAttribute("expanded",r.expanded),e.toggleAttribute("selected",r.selected),e.toggleAttribute("details-opened",r.detailsOpened),this._generateCellClassNames(e,r),this._filterDragAndDrop(e,r),Array.from(e.children).forEach((e=>{if(e._renderer){const t=e._column||this;e._renderer.call(t,e._content,t,r)}})),this._updateDetailsCellHeight(e),this._a11yUpdateRowExpanded(e,r.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(e.stopPropagation(),this.__itemsReceived(),requestAnimationFrame((()=>{this.__scrollToPendingIndex()})))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(e._item)}}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach((e=>{e.forEach((e=>{e._renderHeaderAndFooter()}))})),this.__updateVisibleRows())}__updateVisibleRows(e,t){this.__virtualizer&&this.__virtualizer.update(e,t)}notifyResize(){console.warn("WARNING: Since Vaadin 22, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(vs.is,vs);export{ye as $,Ir as A,M as B,zr as C,Vr as D,Wr as E,li as F,bi as G,O as H,Xr as I,j as J,Tr as K,_i as L,fe as M,me as N,Ne as O,Bt as P,Re as Q,Vi as R,di as S,c as T,G as U,Mi as V,F as W,He as X,Rt as Y,Y as Z,Ot as _,Oi as a,U as a0,ue as a1,oi as a2,le as a3,gi as a4,qi as a5,Jt as a6,Ai as b,ti as c,ei as d,br as e,Ii as f,Kr as g,Mt as h,qr as i,Or as j,ri as k,hi as l,Sr as m,Ri as n,J as o,fi as p,ui as q,o as r,vr as s,Yt as t,Jr as u,It as v,L as w,he as x,H as y,kt as z};
