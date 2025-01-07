import pickPage from "./pick-page";

const pickIframe = (() => {
  console.log("runs")
  const page = pickPage();

  console.log("page in other func", page)


  const main = document.getElementById('main');
  const iframe = document.createElement('iframe');

  iframe.id = "iframe";
  iframe.src = page;

  main.appendChild(iframe)

  return;
})();

window.pickIframe = pickIframe;

export default pickIframe;
