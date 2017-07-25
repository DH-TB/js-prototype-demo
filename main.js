function Person(name){              //构造函数
    this.name=name;
}
Person.prototype.behavior = function(){
    console.log("this is a "+this.name);
};
let person1=new Person('name');
let person2=new Person('name1');  //实例化对象

console.log(Person.prototype);
//behavior = function(){alert("this is a "+this.name);}
console.log(person1.prototype);
//undefined
console.log(Person.prototype.isPrototypeOf(person1));
//true

console.log(Person.prototype.constructor);
//原型对象内部也有一个指针（constructor属性）指向构造函数
console.log(Person.prototype.constructor==person1.constructor);
//true

console.log(person1.behavior==person2.behavior);
// true  
person1.behavior();
//"this is a name"
person2.behavior();
//"this is a name1"
console.log(person1.__proto__==person2.__proto__);
//true,是behavior