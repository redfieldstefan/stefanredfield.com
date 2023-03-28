import hexContrastColor from 'hex-contrast-color';
import rgbHex from 'rgb-hex';

const randomWholeNum = (max = 0) => {
  return Math.floor(Math.random() * max);
};

const blockyGriddyPatterny = (() => {
  const min = 10;
  const max = 20;
  const maxY = window.innerHeight;
  const maxX = window.innerWidth;

  console.log({maxY, maxX})

  const body = document.getElementsByTagName('body')[0];

  const howManyBlockyOnes = Math.floor(Math.random() * (max - min) + min);

  console.log({howManyBlockyOnes})

  const newBlockyArray = new Array(howManyBlockyOnes).fill(null);

  console.log({newBlockyArray})

  const newBlockyOnes = newBlockyArray.map((index) => {
    const newDiv = document.createElement("div");
    const myShadow = `0px 0px ${randomWholeNum(50)}px ${randomWholeNum(100)}px rgb(0, 0, 0)`;
    newDiv.className="blocky-one"
    newDiv.style.position = 'absolute';
    newDiv.style.top = randomWholeNum(maxY);
    newDiv.style.right = randomWholeNum(maxX);
    newDiv.style.height = randomWholeNum(500);
    newDiv.style.transform = `skew(${randomWholeNum(360)}deg)`;
    newDiv.style["box-shadow"] = `${myShadow}`;
    newDiv.style["-webkit-box-shadow"] = `${myShadow}`;
    newDiv.style["-moz-box-shadow"] = `${myShadow}`;



    return newDiv;
  });

  newBlockyOnes.forEach(one => body.appendChild(one));

  return;
})();

export default blockyGriddyPatterny;