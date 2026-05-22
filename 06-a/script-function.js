// 関数
// 関数は、特定のタスクを実行するためのコードのブロックです。関数を定義することで、同じコードを何度も繰り返し使用することができます。

/* 関数の定義
function 関数名(引数) {　←関数の定義
     処理する内容（関数が呼び出されるまで実行されない）
}
*/

// 関数の呼び出し
// 関数名(引数);　←関数の呼び出し（上の定義の中身が実行される、何度でも呼べる）

// 引数、戻り値なしの関数定義
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(220);
    if(keyIsPressed) {
        if(key == 'a') {
            drawFace();
            triangle(width / 2, height / 2, width / 2 - 20, height / 2 +50, width / 2 +20, height / 2 +50);
            // triangle(x1, y1, x2, y2, x3, y3);　←三角形を描く関数,引数は、三角形の頂点の座標
        } else if(key == 'b') {
            drawFace();
        } else if(key == 'c') {
            circle(width / 2, height / 2, 300);
        } 
    } else {
            text('Press a, b, or c', width / 2 - 50, height / 2);
    }
}
function drawFace() { // drawFace関数の定義
    circle(width / 2, height / 2, 300);
    circle(width / 2 - 70, height / 2 - 20, 50);
    circle(width / 2 + 70, height / 2 - 20, 50);
}