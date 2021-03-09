// 変数宣言はconstを使う
const message: string = 'hello,world';
console.log(message);

//配列の要素追加や削除はできる
const arr: string[] = ['yamada', 'suzuki'];
arr.push('tanaka'); // ['yamada', 'suzuki', 'tanaka']
arr.shift(); //['suzuki', 'tanaka']
console.log(arr.length, arr);

//再代入が必要な時のみlet
for (let i = 0; i < 5; i++) {
	console.log(i);
}

//型を柔軟に定義できる
//生まれ年は数字か文字列
let birthYear: number | string;
birthYear = 1999; //ok
birthYear = '平成'; //ok
// birthYear = null; //NG

//特定の値のみに限定する
let direction: '東' | '西' | '南' | '北';
direction = '東'; //ok
// direction = '右'; //NG

//組み合わせも可能
let currentYear: number | '令和';
