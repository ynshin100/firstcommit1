"use strict";
//TS 객체 & 함수 난이도가 있다 ! = >객체의 타입을 정의할 때, 객체 안에 포함되어 있는 각각의 요소의 타입을 정의해야하기 때문에
//TS =>  JS 기본 지식 !
//함수 안에 매개변수의 타입을 각각 정의해야하기 때문
//반환하는 결과값에 타입도 정의 !
Object.defineProperty(exports, "__esModule", { value: true });
// function add(a:any,b:any) {
// return a + b ;
function add(a, b) {
    return a + b;
}
add(1, 2);
console.log(add(1, 2));
//함수가 항상 return문을 사용하지 않는다!
//아래 형식의 함수 타입은 불출분하다!
//타입스크립트에서는 retrun 문이 없는 반환값을 주지 않는 함수의 결과값에 대한 타입을 별도로 타입 정의! void로 정의 
function printMe(name, age) {
    console.log(`name${name},age:${age}`);
}
console.log(printMe("park", 20));
//꼭 함수의 타입정의가 위처럼만 가능할까 ?
//함수 시그니처 방식으로도 타입을 정의 !
//
//익명함수
// let printMe01 = function(name:string,age:number):void
let printMe01 = function (name, age) {
    console.log(`${name}, ${age}`);
};
//화살표 함수 
let printMe02 = () => { };
let f = function (a, b) { };
let g = function (c, d) { };
//# sourceMappingURL=index04.js.map