// 常量必须被初始化
const MY_VARIABLE = 123;

// 引用无法被修改
// 简单数值
const PI = 3.14;
PI = 2; // 报错
// 对象引用会受保护
const obj1 = { a: 2 };
obj1 = { b: 3}; // 报错
// 对象的值不会受保护
const obj2 = { a: 3 }
obj2.a = 2; // 允许 