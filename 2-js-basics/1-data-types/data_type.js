// 格式化字符串
// 连接
let myString1 = 'Hello';
let myString2 = 'World';

myString1 + myString2 + '!';
// 1 + 1 = 2;
// '1' + '1' = '11'
// 1 + '1' = '11'

// 模板字符串
// 是另一种格式化字符串的方式，使用反引号而非引号
// 任何非纯文本的内容都要放到 ${} 占位符内，可以是任何可能是字符串的变量
let myStr1 = "Hello";
let myStr2 = 'World';

`${myStr1} ${myStr2}!` // Hello World!
`${myStr1}, ${myStr2}!` // Hello, World!
