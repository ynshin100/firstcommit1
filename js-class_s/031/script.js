//0.상단 인풋태그에 대한 정의가 우선되어야한다.
//버튼태그에 대한 정의가 우선되어야한다.
// 버튼태그에 저장된 속성값을 알아야한다.
//1.상단 인풋태그 입력된 값을 찾아야한다. keyup 이벤트 요소를 사용
//2. 인풋태그에 입력된 값과 매칭되는 값을 버튼 태그의 속성값을 통해서 찾는다.

const searchwordText = document.querySelector("#serch-word-input");
const prefectureList = document.querySelectorAll("#prefecture-list button");

searchwordText.addEventListener("keyup", () => {
  const searchword = searchwordText.value;
  prefectureList.forEach((element) => {
    if (!searchword || searchword === "") {
      element.classList.remove("hide");
      return;
    }
    const prefectureName = element.dataset.name;
    const phonetic = element.dataset.phonetic;
    if(searchword.charAt(0)) === prefectureName.charAt(0) || searchword.charAt(0) === phonetic.charAt(0) ) {

     element.classList.remove('hide') 
    } else {
      element.classList.add('hide')
    }
  });
});
