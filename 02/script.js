//'use strict';
// 四則演算や文字列の追加
console.log((10+5)*2/5+4);  // →10
console.log(-5+8);  // →3
console.log(2**3);  // →8
console.log(10%3);  // →1(10÷3は3余り1)
console.log(10+5);  // →15

console.log('Hello' + ' ' + 'World' + '!!');  // →Hello World!!
console.log('1足す1は' +2);  // →1足す1は2

// BMI:体重[kg]/(身長[m]*身長[m])
console.log('体重' + 63 + 'kg／身長' + 172 + 'cmのBMI：');
console.log(63 / (1.72*1.72)); // →21.295..

// 定数の宣言
const weight = 63, height = 1.72;
console.log('体重' + weight + 'kg／身長' + height * 100 + 'cmのBMI：');
console.log(weight / (height*height)); // →21.295..

const who = ' World';
console.log('Hello' + who);
console.log('Good Morning' + who);

// 変数の宣言
let weight01 = 50;
weight01 = 60; // 代入によってweightの値を変更

let who01 = ' World!!';
console.log('Hello' + who01);
who01 = ' Everyone!!'
console.log('Good Morning' + who01);

let x = 10; // 初期値ありの変数宣言（推奨）
let y; // 初期値なしの変数宣言
// 中略
y = 20; // あとから代入

let x01 =10; // 正しい変数宣言
y01 = 20; // letなしでもエラーにはならない
console.log('x:' + x01 + ' y:' + y01); // →x:10 y:20
// 宣言しないと下記のように打ち間違いが起こる
let weight02 = 50;
wieght02 = 80;
console.log(weight02); // →50
// ファイルの先頭（1行目）に'use strict'と記載することで打ち間違いのエラーが表示される
let weight03 = 50;
wieght03 = 80; // →エラー表示
console.log(weight03); // →50

// 代入演算子
let xx = 10;
xx += 5; // +=を代入演算子という。この行の意味はxx = xx + 5
console.log(xx) // →15

// インクリメント、デクリメント
// 1ずつ増やす、減らす
x = 5;
y = ++x + 5;
console.log(x, y); // → ++を前置きする：xは6、yは11になる
x = 5;
y = x++ + 5;
console.log(x, y); // → ++を後置きする：xは6、yは10になる

// 文字列の演算
// 文字列は''もしくは""で囲う
const STR1 = 'Hello', STR2 = 'World'; // 文字列の定数
let str3;
function setup(){ // functionで関数を作成
    noLoop(); // ループを1回で終える（functionは動き続けてしまう）
}
function draw(){
    str3 = STR1 + ' ' + STR2;
    print(str3); // 「Hello World」
}