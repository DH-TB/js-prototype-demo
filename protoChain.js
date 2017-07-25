//每个构造函数都是Function的实例
let Obj = function(){};
let o = new Obj();

console.log(Object.prototype);  //=> {}
console.log(Function.prototype);//=> function () {}
console.log(String.prototype);  //=> ""

console.log(Function);
//=>function Function() { [native code] }
console.log(Object);
//=>function Object() { [native code] }

console.log(Function.constructor);
//function Function() { [native code] }
console.log(Object.constructor);
//function Function() { [native code] }

console.log(Function.__proto__);
//function () {}
console.log(Object.__proto__);
//function () {}
console.log(Obj.__proto__);
//function () {}

console.log(Function.prototype);
//function () {}
console.log(Object.prototype);
//{}
console.log(Obj.prototype);
//{}

console.log(o.__proto__ === Obj.prototype);
//true
console.log(o.__proto__.constructor ===Obj.prototype.constructor);
//true
console.log(Obj===o.constructor);
//true,都是构造函数function(){}

console.log(Obj.__proto__ === Function.prototype);
//true
console.log(Obj.__proto__.constructor === Function);
//=> true Obj.__proto__指向Function.prototype，
//所以它的constructor是Function

console.log(o instanceof Obj);
//=> true
console.log(o instanceof Object);
//=> true  o不仅是Obj的实例，也是Object的实例
