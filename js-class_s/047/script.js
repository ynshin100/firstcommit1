// const array1 = ["곰", "여우", "사자"];
// const array2 = ["서울", "대전", "부산"];

const userList = [
  { id: 1, name: "곰", address: "서울" },
  { id: 2, name: "여우", address: "대전" },
  { id: 3, name: "사자", address: "부산" },
];

const container = document.querySelector(".container");
userList.forEach((userData) => {
  container.innerHTML += ` <div class= "card">
<h2>${userData.name}</h2>
<p>지역 ${userData.address}</p>
</div>`;
});
