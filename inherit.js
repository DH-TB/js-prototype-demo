function Shape(){
    this.name = "shape";
    this.toString = function(){
        return this.name;
    }
}
function TwoShape(){
    this.name = "2 shape";
}
function Triangle(){
    this.name = "Triangle";
}

TwoShape.prototype = new Shape();
Triangle.prototype = new TwoShape();

console.log(TwoShape.prototype.constructor==Triangle.prototype.constructor);
//true,都是构造函数Shape
console.log(Triangle.prototype);
//[object Object] {name: "2 shape",toString: function (){return this.name;}}
console.log(TwoShape.prototype);
////[object Object] {name: "shape",toString: function (){return this.name;}}

let my = new Triangle();
let my1 = new TwoShape();

console.log(my.toString());
//"Triangle"  可以访问原型链上的方法
console.log(my.constructor);
//构造函数Shape
console.log(Shape.constructor);
//function Function() { [native code] }
console.log(my1.constructor==my.constructor);
//true