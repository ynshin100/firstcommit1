//JS에서 split이라는 메서드는 어떤 역할을 할까요?
//문자열을 배열로 변환(*간주)
//어느 구분영역에서 해당 아이템을 잘라서 배열의 독립 요소로 간주하게 할 것인가 정의 !
//merry christ mas => ["merrychrist","mas"]

export const split = (str: string, delim: string = ""): string[] =>
  str.split(delim);

// export const split = (str: string, delim: string = ""): string[] =>{

//     return str.split(delim);

// }


  //실행문 : cpu에서 함수 실행결과 값을 자동으로 인식하지 못하기 때문에 return
  //표현식문: cpu에서 함수실행결과 값을 자동으로 인식함 return 을 안써두된다.
  // 표현식문
