//TS를 활용해서 표현식문, 선언형 방식의 프로그래밍 코드도 생성할 수 있는데 이러한 방식의 프로그래밍 형식을 "함수형프로그래밍 "

//"함수형프로그래밍" 을 최적화된 결과값을 도출하려면
//"순수함수의 조건에 충족"

//순수함수:side-effect 부작용 없는 함수
//불순함수
//1) 함수의 실행문 안에 입력 혹은 출력 관련된 코드가 없어야한다.
//2) 함수의 매개변수가 반드시 const 형식의 변수값 readonly 형식의 값
//3) 함수의 실행문 영역에서 발생된 결과값을 즉시 반환 할 수 있어야한다 !
//4) 함수의 실행문에 비동기 코드가 없어야한다.

const sample01 = 1;
const impure = (sample01: number) => {};

const a = 1;
const b = 2;
const pureFunc = (a: number, b: number) => {
  return a + b;
};

// const sest01 = (array: readonly number[] )=> {

//   array.push(1)
//   array.splice(0,1)
// }

//1) 원시타입 :number,string, boolean null undefined symbol
//2) 객체타입 : array object funtion

// JS 에서 원시타입 객체타입에 따라서 해당 값을 복사하는 방식도 차이가 난다.

// let original = 1;
// let copied = original;

// copied += 2;
// console.log(original, copied);

//배열은 객체타입
//객체타입을 복사 : 얕은복사

const originalArray = [5, 3, 9, 7];
const shallowArray = originalArray;
shallowArray[0] = 0;
console.log(originalArray, shallowArray);

const oArray = [1, 2, 3, 4];
const deepCopiedArray = [...oArray];
console.log(oArray, deepCopiedArray);


//const 키워드를 사용할 때 원시타입이 아닌 객체 타입의 경의우에는 안에 담긴 갓ㅂ이 변경!
//재할당을 허용하겠다는 것이 아니라 기본적인 객체 타입의 속성을 유지하지 않는 것 뿐이다 !
//const 정의한 값에는 특정한 사유가 없다면, 값을 변경해주지 않는 것이 좋습니다.
