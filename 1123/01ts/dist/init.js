"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const init = (callback) => {
    console.log("default initialization finished");
    callback();
    console.log('all initialization finished');
};
exports.init = init;
//# sourceMappingURL=init.js.map