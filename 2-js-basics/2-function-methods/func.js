// displayGreeting 是函数
function displayGreeting() {
    // log 是方法
    console.log('Hello World!');
}

// 调用函数
displayGreeting();

// 函数传参
function displayGreeting2(name) {
    const message = `Hello, ${name}!`;
    console.log(message);
}

displayGreeting2('Haidong'); // Hello, Haidong!

// 默认值
function displayGreeting3(name, salutation='Hello') {
    console.log(`${salutation}, ${name}!`)
}

displayGreeting3('Haidong'); // Hello, Haidong!
displayGreeting3('Haidong', 'Hi'); // Hi, Haidong!

// 返回值
function displayGreetingMsg(name) {
    const message = `Hello, ${name}!`;
    return message;
}

const greetingMsg = displayGreetingMsg('Haidong')

// 函数作为入参
function displayGreetingSend() {
    console.log('3秒过去了');
}

setTimeout(displayGreetingSend, 3000);

// 匿名函数
setTimeout(function() {
    console.log('3秒过去了');
}, 3000);

// 箭头函数 使用 => 就可以跳过 function 关键字
setTimeout(()=> {
    console.log('3秒过去了');
}, 3000);

var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
elements.map(function (element) {
    return element.length;
}); // 返回数组 [8, 6, 7, 9]

// 上面的普通函数可以改写成如下的箭头函数
elements.map((element) => {
    return element.length;
});

// 当箭头函数只有一个参数时，可以省略参数的圆括号
elements.map(element => {
    return element.length;
});

// 当箭头函数的函数体只有一个 return 语句时，可以省略 return 关键字和方法体的花括号
elements.map(element => element.length);

// 在这个例子中，因为我们只需要 length 属性，所以可以使用参数解构
// 需要注意的是字符串 length 是我们想要获得的属性的名称，而 lengthFooBArX 则只是个变量名
// 可以替换成任意合法的变量名
elements.map(({ length: lengthFooBArX }) => lengthFooBArX);