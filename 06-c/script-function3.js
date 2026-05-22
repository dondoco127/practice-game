/*
戻り値
let x = floor(random(0, 100)); // random()関数は0以上100未満のランダムな数値を返し、floor()関数は小数点以下を切り捨てる関数。random()関数の戻り値をfloor()関数の引数として渡している。
このコードの実行例の44.4968や44という数値が戻り値
let x = floor(random(0, 100));
↓
let x = fllor(44.4968);
↓
let x = 44;
*/

/*
戻り値ありの関数の定義
function 関数名(引数, 引数, ...) {
    処理する内容
    return 戻り値; ←戻り値を返す
}
    ～どこか別の場所～
関数名(引数, 引数, ...); ←関数の呼び出しと戻り値の受け取り
*/

// 具体例：BMIの計算
function setup(){
    noLoop();
}
function draw(){
    console.log(calcBMI());
}
function calcBMI(){
    let h = 1.72; // 身長
    let w = 63; // 体重
    return w / (h * h); // BMIの計算式
}