/*
编写一段程序，列出 1-20 中所有 3 的倍数，将它们输出到控制台。
**/

assignment = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

assignment();