"use strict";
// 変数宣言はconstを使う
const message = 'hello,world';
console.log(message);
//配列の要素追加や削除はできる
const arr = ['yamada', 'suzuki'];
arr.push('tanaka'); // ['yamada', 'suzuki', 'tanaka']
arr.shift(); //['suzuki', 'tanaka']
console.log(arr.length, arr);
//再代入が必要な時のみlet
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//型を柔軟に定義できる
//生まれ年は数字か文字列
let birthYear;
birthYear = 1999; //ok
birthYear = '平成'; //ok
// birthYear = null; //NG
//特定の値のみに限定する
let direction;
direction = '東'; //ok
// direction = '右'; //NG
//組み合わせも可能
let currentYear;
//booleanリテラル
const flag = true;
//boolean→string
console.log(String(flag));
console.log(flag.toString());
//boolean→number
console.log(Number(flag)); //true:1, false:0
//booleanリテラル
// const flag: boolean = true;
//数値型(number)
const age = 21;
//数値型(bigint)→targetがES2020未満は使えない
// const hugenum: bigint = 9000n;
console.log(Math.pow(2, 3));
