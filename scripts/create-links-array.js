// import { link } from 'fs';
// import links from '../data/links.json';

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

const pickPage = (() => {
  let page;
  const links = [
    "2-20-2023.html",
    "2-23-2023.html",
    "2-24-2023.html",
    "2-27-2023.html",
    "3-29-2023.html",
    "3-31-2023.html",
    "4-10-2023.html",
    "4-17-2023.html",
    "4-4-2023.html",
    "4-5-2023.html",
    "index.html"
  ];

  const cookies = document.cookie.split(";")
      .map(function(cookieString) {
          return cookieString.trim().split("=");
      })
      .reduce(function(acc, curr) {
          acc[curr[0]] = curr[1];
          return acc;
      }, {});

  if (cookies['page-index']) {
    page = links[cookies['page-index']];
  } else {
    const randomWholeNum = (max = 0) => {
      return Math.floor(Math.random() * max)
    }
  
    const index = randomWholeNum(links.length);
    const milliseconds = 5000;
    const expiryDate = new Date(Date.now() + milliseconds).toUTCString()

    document.cookie = `page-index=${index}; expires=${expiryDate}`

    page = links[index];
  }

  const match = !window.location.pathname && page === "index.html" || `/${page}` === window.location.pathname;

  if (!match) {
    return window.location.replace(`/${page}`);
  }

  return;
})();

export default pickPage;
