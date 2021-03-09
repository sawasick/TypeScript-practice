"use strict";
// 変数宣言はconstを使う
const message = 'hello,world';
console.log(message);
//配列の要素追加や削除はできる
const arr = ['yamada', 'suzuki'];
arr.push('tanaka'); //
arr.shift();
console.log(arr.length, arr);
//再代入が必要な時のみlet
for (let i = 0; i < 5; i++) {
    console.log(i);
}
