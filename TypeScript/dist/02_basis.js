"use strict";
// 声明一个变量a，同时指定它的类型为number
let e1;
// a的类型设置为了number，所以只能赋值为数字类型
e1 = 10;
// a = 'hello'; // 这行代码会报错，因为a的类型是number，不能赋值为string
let f1; // 声明一个变量f，同时指定它的类型为number或者string
f1 = 20;
// 声明一个变量c，同时指定它的类型为boolean
// 声明变量后直接赋值
let c1 = true;
let d1 = false; // 这里的d会被类型推断为boolean类型
// 如果变量的声明和赋值同时进行，TypeScript会根据赋值的类型来推断变量的类型
// d = 123； 这行代码会报错，因为d的类型是boolean，不能赋值为number
// JS中的函数时不考虑参数的类型和个数的
function sum1(e, f) {
    return e + f;
}
console.log(sum(10, 20)); // 输出30








export {};   // 让这个文件变成"模块"，作用域私有，不再和别的文件共享
