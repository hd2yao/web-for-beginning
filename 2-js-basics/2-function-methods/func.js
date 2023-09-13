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