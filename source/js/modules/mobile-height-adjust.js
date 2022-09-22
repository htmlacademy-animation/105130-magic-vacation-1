export default () => {
  let setVH = function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(`--vh`, `${vh}px`);
  };

  setVH();

  window.addEventListener(`resize`, setVH);
};
