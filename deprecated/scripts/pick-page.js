const pickPage = () => {
  let page;
  const links = [
    "2-23-2023.html",
    "2-24-2023.html",
    "2-27-2023.html",
    "3-29-2023.html",
    "4-10-2023.html",
    "4-17-2023.html",
    "4-5-2023.html"
  ];

  const cookies = document.cookie.split(";")
    .map(function (cookieString) {
      return cookieString.trim().split("=");
    })
    .reduce(function (acc, curr) {
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

  return page;
};

window.pickPage = pickPage;

export default pickPage;
