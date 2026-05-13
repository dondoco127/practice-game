//練習問題、円を描画する
const DIA = 200;
let x;
function setup(){
    createCanvas(300, 300); // スケッチにキャンバス要素を作成してピクセル単位で設定。createCanvas(w, h)
    background(220); // 背景色の指定。0黒→255白。background(R, G, B)を0～255で指定する方法もある。
    noLoop(); // ループ終了
}
function draw(){
    x = width / 2;
    circle(x, height / 2, DIA); // 円の描画。circle(x, y, d)、x,y：円の中心の座標、d：円の直径。(150, 150, 200)

    fill(128, 0, 128); // 次に描画する図形の色指定。
    x -= DIA / 4;
    circle(x, height / 2, DIA/2);

    fill(0, 128, 128);
    x += DIA / 2;
    circle(x, height / 2, DIA/4);
}