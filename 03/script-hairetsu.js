let dia = 50;

function setup() {
    createCanvas(1000, 1000);
    background(220);
    noLoop();
}

function draw() {
    strokeWeight(3);

    // ループ復習1
    for(let i = 0; i < 6; i++) {
        let x = 50 + i * 100;
        circle(x, height / 10, dia);
    }

    // ループ復習2
    for(let j = 0; j < 6; j++) {
        let x2 = 50 + j * 100;
        circle(x2, height*2 / 10, (dia*j)/2);
    }

    // ループ復習3
    for(let k = 0; k < 6; k++) {
        let x3 = 50 + k * 100;
        if(k % 2 == 0) {
            dia = 100;
        } else {
            dia = 50;
        }
        circle(x3, height*3 / 10, dia);
    }

    // ループ復習4
    dia = 25;
    for(let l = 0; l < 6; l++) {
        let x4 = 50 + l * 100;
        if(l <= 3) {
            dia += 25;
        } else if(l > 3) {
            dia -= 25;
        }
        circle(x4, height*4 / 10, dia);
    }

    // 配列
    let diaAry = [30, 15, 70, 50, 25, 90]; // 配列の宣言。配列は複数の値をまとめて扱うことができるデータ構造。配列の要素は0から数える。
    // let 配列名　= [要素1, 要素2, 要素3, …];　// 配列の宣言。配列の要素はカンマで区切って指定する。
    // 配列名[インデックス]：配列のインデックス番目の要素を指定する。インデックスは0から数える。
    for(let m = 0; m < diaAry.length; m++) { // 配列の要素数はlengthプロパティで取得できる。
        console.log(diaAry[m]); // 配列の1番目の要素をコンソールに表示。配列の要素は0から数える。
        circle(50 + m * 100, height*5 / 10, diaAry[m]); // 配列の要素を円の直径として描画。
    } 

    // 配列の操作
    let ary = [0, 1, 2];
    ary[1] = 'new'; // 配列の2番目の要素を'new'に変更。
    console.log(ary); // [0, 'new', 2]と表示される。

    ary[5] = 5; // 配列の6番目の要素を5に変更。配列の要素数が6未満の場合、空の要素(undefined)が追加される。
    console.log(ary); // [0, 'new', 2, undefined, undefined, 5]と表示される。

    ary = [0, 1, 2]; // 配列を再宣言して初期化。
    ary.push('end'); // 配列の末尾に'end'を追加。配列名.push(要素)は、配列の末尾に要素を追加するメソッド。
    console.log(ary); // [0, 1, 2, 'end']と表示される。

    ary = []; // 要素数0の空の配列の宣言。let 配列名 = [];
    console.log(ary.length); // 0と表示される。

    //乱数
    // random(最小値, 最大値)：最小値以上、最大値未満のランダムな数値を生成する関数。
    // floor(数値)：数値を小数点以下切り捨てて整数にする関数。

    // 乱数で円の描画と塗りつぶしの色をランダムにする。
    ary = []; // 配列を再宣言して初期化。
    for(let n = 0; n < 10; n++) { // nは円のx座標。
        ary.push(floor(random(0, width))); // 配列に0以上width=1000未満のランダムな数値を追加。
    }
    
    let val = random(0, 255);
    fill(val); // 塗りつぶしの色をランダムにする。

    for(let n = 0; n < 10; n++) {
        circle(ary[n], height*6 / 10, 50); // 配列の要素を円の直径として描画。
    }
}