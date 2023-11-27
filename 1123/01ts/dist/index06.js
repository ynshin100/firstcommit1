"use strict";
//함수에 대한 타입 정의방법
//함수 표현식!!  => 고차함수 접근
//세상에 모든 코드가 객체지향의 친절한 형태로 개발되자 않기 때문 !
// 우리가 그동안 함수를 사용할때마다 function 갈겼다 !
Object.defineProperty(exports, "__esModule", { value: true });
// let add = new Function("a", "b", "return a +b");
// let result = add(1, 2);
// console.log(result);
function add(a, b) {
    return a + b;
}
//함수는 객체 이다
console.log(add(100, 20));
let add2 = function (a, b) {
    return a + b;
};
console.log(add2(20, 20));
// 1) 자바스크립트에서 함수는 변수에 할당
//2) 다른 함수의 인자값 = 매개변수로 
//# sourceMappingURL=index06.js.map