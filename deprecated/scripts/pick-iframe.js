import pickPage from "./pick-page";

const pickIframe = (() => {
  const page = pickPage();

  const main = document.getElementById('main');
  const iframe = document.createElement('iframe');

  iframe.id = "iframe";
  iframe.src = page;

  main.appendChild(iframe)

  return;
})();

window.pickIframe = pickIframe;

export default pickIframe;
