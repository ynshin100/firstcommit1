"use strict";
//추상클래스 개념 !
//타입스크립트 안에서도 구조분해할당
//객체선언 !! = > 프로퍼팅 구성 !
//key & value 구성 => 어떤 외부 변수를 선언 ! 할당
Object.defineProperty(exports, "__esModule", { value: true });
let address = {
    country: "korea",
    city: "Seoul",
    addrss1: "Gangnam-gu",
    addrss2: "sinsa-gu",
    addrss3: "789 street",
};
const { country, city, ...detail } = address;
console.log(detail);
let a = { x: 0 };
let b = { y: 0 };
let coord = { ...{ x: 0 }, ...{ y: 0 } }; //절차 지향언어
console.log(coord);
//objcet 객체 타입 영역에서의 이단아 !
let person = {
    name: "jack",
    age: 32,
};
//타입 변환 장치
// <> 재네릭 타입
person.name;
let obj = { name: "jack" };
let name0 = obj.name;
let name1 = obj.name;
let name2 = obj.name;
console.log(name0, name1, name2);
//# sourceMappingURL=index.js.map