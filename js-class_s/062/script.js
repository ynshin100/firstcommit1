const userDataList = [
  { id: 1, name: "곰", age: 18 },
  { id: 2, name: "여우", age: 27 },
  { id: 3, name: "사자", age: 32 },
  { id: 4, name: "얼룩말", age: 41 },
  { id: 5, name: "기린", age: 56 },
];

const userList = document.querySelector(".user_list");
const updateList = (fillteredLis) => {
  let listHtml = "";
  for (let adta of fillteredLis) {
    listHtml += `<li>${data.name}:${data.age}세</li>`;
  }
  userList.innerHTML = listHtml;
};

const onclickButton = (e) => {
  const button = e.target;
  const targetAge = button.dataset.age;
  const fillteredList = userDataList.fillter((data) => data.age >= targetAge);
  updateList(fillteredList);
};
const button = document.querySelectoralAll(".button");
button.forEach((element) => {
  element.addEventListener("click", (e) => {
    onclickButton(e);
  });
});
