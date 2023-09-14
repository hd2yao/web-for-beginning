// 数组 arrays
let myArrays = [];

let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; // "Vanilla"
iceCreamFlavors[4] = "Butter Pecan";
iceCreamFlavors[5] = "Cookie Dough"; // 插入新值
iceCreamFlavors.push("") // 使用数组方法添加新值
iceCreamFlavors.length; // 6 获取数组元素数量


// loops
// for
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

for (let i = 0; i < iceCreamFlavors.length; i++) {
    console.log(iceCreamFlavors[i]);
}