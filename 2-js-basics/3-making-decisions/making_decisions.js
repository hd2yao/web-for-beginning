// if 语句
if (condition) {
    // 如果 condition 为 true，将会执行此处的代码
}

let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
    console.log("Getting a new laptop!");
}

// if else 语句
if (currentMoney >= laptopPrice) {
    console.log("Getting a new laptop!");
}
else {
    console.log("Can't afford a new laptop, yet!");
}

// 用逻辑运算符来构造条件和决定
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20)

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
    console.log("Getting a new laptop!");
}
else {
    console.log("Can't afford a new laptop, yet!");
}

// 三元表达式
// let variable = condition ? <若为 true 则返回这个> : <若为 false 则返回这个>
let firstNum = 20;
let secondNum = 10;
let biggerNum = firstNum > secondNum ? firstNum : secondNum;