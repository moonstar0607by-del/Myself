"use strict";
// object表示一个js对象类型
// object表示一个非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型
let a4; // a的类型被推断为object
a4 = {};
a4 = function () { };
// {}用来指定对象中可以包含哪些属性，属性的类型是什么
// 语法：{属性名:属性类型,属性名:属性类型}
// 在属性名后面加上？，表示该属性是可选的
let b4; // b的类型被推断为{name: string}，表示一个具有name属性的对象
b4 = { name: 'Mstr' };
let c4; // c的类型被推断为{name: string, age?: number}，表示一个具有name属性和可选的age属性的对象
c4 = { name: 'Mstr', age: 18 };
c4 = { name: 'Mstr' };
// [propName:string]:any表示任意数量的属性，属性名是字符串类型，属性值是任意类型
let d4; // d的类型被推断为{name: string, [propName: string]: any}，表示一个具有name属性和任意数量的其他属性的对象
d4 = { name: 'Mstr', age: 18, gender: 'male' };
//限制参数结构和返回值
let e4; // e的类型被推断为(e41: number, e42: number) => number，表示一个接收两个number类型参数并返回一个number类型的函数
e4 = function (n41, n42) {
    return n41 + n42;
};
/*数组的类型声明：
    类型[]
    Array<类型>
*/
//列表、数组;一般存储相同类型的value
let f4; // f的类型被推断为string[]，表示一个字符串类型的数组
f4 = ['a', 'b', 'c'];
let g4; // g的类型被推断为number[]，表示一个数字类型的数组
g4 = [1, 2, 3];
let h4; // h的类型被推断为Array<number>，表示一个数字类型的数组
h4 = [1, 2, 3];
/*
元组：固定长度的数组
    语法：[类型，类型，类型]
*/
let i4; // i的类型被推断为[string, string]，表示一个长度为2的字符串类型的元组
i4 = ['hello', 'world'];
/*
    enum 枚举
    枚举类型用于定义一组命名的常量，可以是数字或字符串
    语法：
    enum 枚举名{
*/
let j4; // j的类型被推断为Color，表示一个枚举类型的变量
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 0] = "female";
})(Gender || (Gender = {}));
let k4; // k的类型被推断为{name: string, gender: number}，表示一个具有name和gender属性的对象
k4 = {
    name: 'Mstr',
    gender: Gender.male
};
console.log(k4.name); // 输出'Mstr'
console.log(k4.gender === Gender.male); // 输出true
