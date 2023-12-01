// 사전에 정의해야할 내용부터 정리해보도록 하겠습니다.
//조건:  마우스휠이 스크롤이 되면
//효과 1. 상단부가 사라집
//효과 2. 하단부가 밑에서 올라옴
//효과 3. 중간 부분에서 프로그래스바가 나타남

// 우리의 컴퓨터의 스크롤이동에 대한 값을 도출!!
//=> window.scrollY 값을 도출할 수 있다.

// 위 값이 도출된다면, 위에정리한 1~3까지의 이벤트가 발생되어야한다.
//발생되어야한다 => addEventListener

//상단부가 없어지려면 상단부가 무엇인지를 컴퓨터에게 알려줘야함
//상단부: 헤더 프로그래스바 컨텐츠 랩

//위에 효과인 상단부가 없어지게 됨과 동시에 하단부가 위로 올라옴

//하단부: 컨텐츠랩

//어차피 컴퓨터에게 알려저ㅜ야하는 정의부터 하고 가자

// const header = document.querySelector("header");
// const coverTitle = document.querySelector(".coverTitle");
// const progressBar = document.querySelector(".bar");
// const coverWrap = document.querySelector(".coverWrap");
// const dimd = document.querySelector(".dimd");
// const contWrap = document.querySelector(".contWrap");

// //내가 내리고 있는 마우스 휠에 따른 스크롤 위치
// //그 스크롤의 위치가 전제 문서에서 얼만크이 % 알려줘야함

// let scrollNum = 0;
// let documentHeight = 0;
// let per = 0;
// //현재 내 ㅜ눈우루ㅏ볼수 있는 홤여
// const converHeight = window.innerHeight;
// coverWrap.style.height = converHeight + "px";
// contWrap.style.marginTop = converHeight + "px";

// //현제의 스크롤 위치에 대한 %를 구하는 공식을 담고 있느 함수
// const poercent = (num, totalNum) => {
//   return ((num / totalNum) * 100).toFixed(0);
//   per = percent(scrollNum, documentHeight);
//   progressBar.style.width = per + "%";

//   if (scrollNum >= converHeight) {
//     header.classList.add("fixed");
//   } else {
//     header.classList.remove("fixed");
//     coverTitle.style.top = `${-scrollNum / 5}px`;
//     coverWrap.style.backgroundPosition = `center${-scrollNum / 15}px`;
//     dimd.style.backgroundColor = `rgba(0,0,0,${0.4 + scrollNum / 1000})`;
//   }
// };

// window.addEventListener("scroll", () => {
//   scrollNum = window.scrollY;
//   documentHeight = document.body.scrollHeight;
// });



const header = document.querySelector("header");
const coverTitle = document.querySelector(".coverTitle");
const progressBar = document.querySelector(".bar");
const coverWrap = document.querySelector(".coverWrap");
const dimd = document.querySelector(".dimd"); 
const contWrap = document.querySelector(".contWrap");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

const converHeight = window.innerHeight;
coverWrap.style.height = converHeight + "px";
contWrap.style.marginTop = converHeight + "px";

const percent = (num, totalNum) => {
  per = ((num / totalNum) * 100).toFixed(0);
  progressBar.style.width = per + "%";
  return per;
};

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight;

  percent(scrollNum, documentHeight);

  if (scrollNum >= converHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    coverTitle.style.top = `${-scrollNum / 5}px`;
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
    dimd.style.backgroundColor = `rgba(0,0,0,${0.4 + scrollNum / 1000})`;
  }
});