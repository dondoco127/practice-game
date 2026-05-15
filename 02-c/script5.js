function setup() {
    createCanvas(1000, 2000);
    background(220);
    noLoop();
}

// for文のおさらい
function draw() {
    for(let x = 100; x <= 400; x += 100) {
        if(x % 200 == 100){
            fill(255, 128, 0); // 200で割った余りが100のときはオレンジ
        } else {
            fill(255); // 上記条件以外は白
        }
        circle(x, height / 40, 50);
    }

// ループを抜ける（break）
// for(…) {
//     if(条件) {
//         break; // ※に処理が飛ぶ
//     }
// }
// ※ここ

    for(let x2 = 100; x2 <= 400; x2 += 100) {
        square(x2 - 25, height*3 / 40 - 25, 50); // 正方形の描画。square(x座標, y座標, サイズ)。x座標とy座標は正方形左上の点を指定。サイズは辺の長さ。
        if(x2 == 300) {
            break; // x2が300のとき、ループを抜ける。つまり、x2が300のときは正方形は描画されない。
        }
        circle(x2, height*3 / 40, 50); // 円の描画。
    }

    // 入れ子のbreak
    for(let y3 = 100; y3 <= 400; y3 += 100) {
        for(let x3 = 100; x3 <= 400; x3 += 100) {
            if(x3 == 300 && y3 == 200) {
            fill(255, 128, 0); // break前に図形を塗りつぶし
            break;
        }
        circle(x3, y3 + 300, 50);
        }
    }

    // 繰り返しを途中で切り上げて次の繰り返しに進む（continue）
    // for(…; …; カウンタ変数の更新※) {
    //     ～処理A～
    //     if(条件) {
    //         continue; // 処理Bをスキップして※に処理が飛ぶ
    //     }
    //     ～処理B～
    // }
    noFill();
    for(let x4 = 100; x4 <= 400; x4 += 100) {
        square(x4 - 25, height / 2 - 25, 50); // 正方形の描画
        if(x4 == 300) {
            continue; // x4が300のとき、処理Bをスキップして次の繰り返しに進む。つまり、x4が300のときは円は描画されない。
        }
        circle(x4, height / 2, 50); // 円の描画。
    }

}