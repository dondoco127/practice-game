// マウス入力

function setup() {
    createCanvas(500, 500);
    background(220);
    stroke(220); // 図形の線の色を背景と同色に設定
}

function draw() {
    if (mouseIsPressed) { // もしマウスがクリックされたら
        if (mouseButton == LEFT) { // 左クリックの場合
            fill(255, 127, 0);
            circle(mouseX, mouseY, 20); // マウスの位置に円を描く
        } else if (mouseButton == RIGHT) { // 右クリックの場合
            fill(0, 127, 255);
            square(mouseX - 10, mouseY - 10, 20); // マウスの位置に正方形を描く
        }   
    }

    // マウスの位置を表示
    fill(0); // テキストの色を黒に設定
    text(`MouseX: ${mouseX}, MouseY: ${mouseY}`, 10, height - 10); // 画面の左下にマウスの位置を表示

    // キー入力
    if (keyIsPressed) { // もしキーが押されたら
        if (key == 'r') { // 'r'キーが押された場合
            background(220); // 背景をリセットして消す
        } else if (key == 'c') { // 'c'キーが押された場合
            fill(127, 255, 0);
            circle(mouseX, mouseY, 30); // マウスの位置に大きな円を描く
        }
    }
}

// 右クリックしたときにメニューを表示させないためのコード
document.oncontextmenu = (e) => { e.preventDefault(); }