"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getName(o) {
    return o != undefined ? o.name : "unknown name";
}
let n = getName(undefined);
console.log(n);
console.log(getName({ name: "park" }));
function getAge(o) {
    return o != undefined && o.age ? o.age : 0;
}
console.log(getAge(undefined));
console.log(getAge(null));
console.log(getAge({ age: 32 }));
//# sourceMappingURL=index05.js.map