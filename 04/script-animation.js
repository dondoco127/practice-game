// アニメーション
// function draw()は、フレームごとに繰り返し呼び出される関数です。(whileループのようなもの)
// draw()内で初期値を宣言してしまうと、毎フレーム初期化されてしまうため、アニメーションが動かなくなります。

// 例：円が左から右へ移動するアニメーション
let x = 100; // 初期化
let x2 = 100; // 初期化
const R = 25; // 円の半径

function setup(){
    createCanvas(500,200);
    strokeWeight(2);
}

function draw(){
    background(220);
    circle(x, height / 4, 50);
    if(x < 400){ // 繰り返し条件
        x += 5; // 更新式
    }
    

// 例：円が左から右へ移動するアニメーション（ループ）
    circle(x2, height*3 / 4, R * 2);
    x2 += 5; // 更新式
    if(x2 - R >= width){ // 繰り返し条件:円が画面外に出たら
        x2 = -R; // 円を画面の左端に戻す
    }
    
}