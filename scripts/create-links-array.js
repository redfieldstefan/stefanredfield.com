// import { link } from 'fs';
// import links from '../data/links.json';
import pickPage from "./pick-page";

// const createLinksArray = ((target) => {
//   const body = target || document.getElementsByTagName('body')[0]
//   const nav = document.createElement('nav')

//   links.pages.forEach((page) => {
//     const wrap = document.createElement('div')
//     wrap.className = 'frame-wrap'
//     const a = document.createElement('a')
//     a.href = `./${page}`
//     const iframe = document.createElement('iframe')
//     iframe.className = 'frame'
//     const root = document.location.href.split('.com')[0]
//     iframe.src = `./${page}?minimal=true`
//     a.appendChild(iframe)
//     wrap.appendChild(a)
//     nav.appendChild(wrap)

//     if (document.location.pathname.includes(page)) {
//       wrap.style.outline = '2px solid red'
//     }
//   })

//   body.appendChild(nav)
// })()

const createLink = (() => {
  const page = pickPage();

  const match = !window.location.pathname && page === "index.html" || `/${page}` === window.location.pathname;

  if (!match) {
    return window.location.replace(`/${page}`);
  }

  return;
})();

export default createLink;
