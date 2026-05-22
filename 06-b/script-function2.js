// 引数ありの関数の定義
/*
function 関数名(引数, 引数, ...) {
    処理する内容
}
    ～どこか別の場所～
関数名(引数, 引数, ...); ←関数の呼び出し
*/

let x = 100;

const num = 8;
let cols = [];

function setup(){
    createCanvas(400, 400);
    background(220);
    for(let i = 0; i < num; i++){
        cols.push(random(0, 255));
    }
}
function draw(){
    fill(127, 0, 255);
    circle(x, height / 4, 50);

    orangeCircle(200); // 関数の呼び出し
    blueCircle(x + 200); // 関数の呼び出し

    for(let i = 1; i < num; i++){
        myfunc(i);
    }
}

/*関数定義*/
function orangeCircle(x) {
    fill(255, 127, 0); // オレンジ指定
    circle(x, height / 4, 50);
}

function blueCircle(x) {
    fill(0, 127, 255); // 青指定
    circle(x, height / 4, 50);
}
function myfunc(idx){
    fill(cols[idx]);
    circle(idx * 50, height*3 / 4, 50);
}

// スコープ
// 関数の外で宣言された変数はグローバル変数／global variable
// 関数の中で宣言された変数はローカル変数／local variable。関数定義の{}の中だけで有効。
// for文の中だけで有効な変数はブロックスコープ変数／block-scoped variable
// 変数のスコープは、変数が有効な範囲のこと。