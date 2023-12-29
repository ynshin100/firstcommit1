// JS 오름차순, 내림차순 어떻게 정렬하는가 ?
// JS 오름차순, 내림차순 정렬하기 위한 함수 ?
// = sort()
//sort()는 정렬하고자하는 아이템의 첫번째 요소를 기준으로 정렬한다.

// const number01 = [10, 3, 8, 4, 1];
// number01.sort();

// const number02 = [10, 3, 8, 4, 1];
// const compare02 = (a, b) => {
//   return a - b;
// };

// number02.sort(compare02);

// const number03 = [10, 3, 8, 4, 1];
// const compare03 = (a, b) => {
//   return b - a;
// };

// number02.sort(compare02);

// console.log(number01);
// console.log(number02);
// console.log(number03);

const userDataList = [
  { id: 2, name: "곰" },
  { id: 77, name: "여유" },
  { id: 7, name: "사자" },
  { id: 58, name: "기린" },
  { id: 12, name: "다람쥐" },
  { id: 5, name: "코끼리" },
];

const userList = document.querySelector(".user_list");
const ascending = document.querySelector(".ascending");

const descending = document.querySelector(".descending");

const updateList = () => {
  let listHtml = "";
  for (let data of userDataList) {
    listHtml += ` <li>${data.id}:${data.name}</li>`;
  }
  updateList();
};

const sortByAscending = () => {
  userDataList.sort((a, b) => {
    return a.id - b.id;
  });
  updateList();
};

const sortByDescending = () => {};

ascending.addEventListener("click", () => {
  sortByAscending();
});

descending.addEventListener("click", () => {
  sortByDescending();
});
