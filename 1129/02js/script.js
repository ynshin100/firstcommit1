// const h1 = document.querySelector("h1");
// const progressBar = document.querySelector(".bar");
// let scrollNum = 0;
// let documentHeight = 0;
// let per = 0;

// const percent = (num, totoalNum) => {
//   return ((num / totoalNum) * 100).toFixed(0);
// };

// window.addEventListener("scroll", () => {
//   scrollNum = window.scrollY;
//   documentHeight = document.body.scrollHeight - window.innerHeight;
//   per = percent(scrollNum, documentHeight) + "%";
//   h1.imnnerText = per;
//   progressBar.style = per;
// });

const h1 = document.querySelector("h1");
const progressBar = document.querySelector(".bar");
let scrollNum = 0;
let documentHeight = 0;
let per = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight) + "%";
  h1.innerText = per; // 수정: h1.imnnerText -> h1.innerText
  progressBar.style.width = per; // 수정: progressBar.style = per -> progressBar.style.width = per
});