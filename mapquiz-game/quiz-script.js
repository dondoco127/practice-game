
    // 定数と変数の設定

const dialog = document.getElementById('howtoDialog'); // 遊び方ダイアログの要素を取得
const dialogOpen = document.getElementById('openHowtoDialogButton'); // 遊び方ダイアログを表示するボタンの要素を取得
const dialogClose = document.getElementById('closeHowtoDialogButton'); // 遊び方ダイアログを閉じるボタンの要素を取得

const resultDialog = document.getElementById('resetDialog') // リザルトダイアログの要素を取得
const resetButton = document.getElementById('resetButton'); // リザルトダイアログを表示するボタンの要素を取得
const dialogResultCls = document.getElementById('resultDialogButton') // リザルトダイアログを閉じるボタンの要素を取得

const startButton = document.getElementById('startButton'); // スタートボタンの要素を取得
const nextButton = document.getElementById('nextButton'); // 次へボタンの要素を取得

const answerInput = document.getElementById('answerInput'); // ユーザーの入力を受け取るテキストフィールドの要素を取得
const p = document.getElementById('resultText'); // 正誤表示の要素を取得

let score = 0; // スコアを定義して初期化
let quizCnt = 0; // 問題カウントを定義して初期化
let isGameActive = false; // ゲームが進行中かどうかを示すフラグを初期化、false：ゲームしてない　true：ゲーム中
let maskMap = ''; // fillMap関数内の定数mapをグローバル化するための変数：初期化
let maskName = null; // fillMap関数内の定数nameをグローバル化するための変数：初期化
let maskAnswer; // 正誤判定機能内の定数answerをグローバル化するための変数：初期化

let dataCodeList = []; // 都道府県のデータコードを格納する配列
for (let i = 1; i <= 47; i++) { // dataCodeListに1～47の数字を格納 → shufflMap関数で要素の並びをランダムにする
        dataCodeList.push(i); // 配列名.push(引数)； ← 配列の要素の最後尾に引数を格納する
}
// console.log(dataCodeList); // → [1, 2, 3, ..., 47]

// 各ボタンの初期状態
// false：活性状態　true：非活性状態
// startButton.disabled = false;
resetButton.disabled = true;
nextButton.disabled = true;
answerInput.disabled = true;



    // 遊び方ダイアログの操作

dialogOpen.addEventListener('click', () => {
    dialog.showModal();
}); // 遊び方ボタンがクリックされたときにダイアログを表示するイベントリスナーを追加

dialogClose.addEventListener('click', () => {
    dialog.close();
}); // 閉じるボタンがクリックされたときにダイアログを閉じるイベントリスナーを追加 



    // ゲームのロジック

// ゲーム開始の操作
startButton.addEventListener('click', () => {  // スタートボタンがクリックされたら{}内の処理を実行
    if(isGameActive)return; // isGameActiveがtrue（ゲーム中）なら進行しない

    // 各値のセット
    //score = 0;
    //quizCnt = 0;
    isGameActive = true;

    // 各ボタンと回答入力欄を活性状態へ 
    resetButton.disabled = false;
    nextButton.disabled = false;
    answerInput.disabled = false;
    
    answerInput.focus(); // 回答入力欄にフォーカス

    shufflMap(dataCodeList); // 配列内の要素をランダムに並び替え
    // console.log(dataCodeList); // →[1,2,...47]
    fillMap(quizCnt); // 都道府県の一つをランダムに赤く表示

});


// 正誤判定
answerInput.addEventListener('keypress', (e) => {
    if(!isGameActive)return; // isGameActiveがtrue（ゲーム中）なら進行しない

    if (e.key === 'Enter') { // Enterキーを押したら
        const answer = answerInput.value; // 回答欄に入力された文字列を取得
        maskAnswer = answer; // answerをグローバル化
        
        if(answer === maskName){ // 回答欄に入力された文字列が正解（name変数の値）なら
            
            // 回答欄の下に正誤コメント「正解！！」と赤く表示
            p.textContent = '正解！！';
            p.style.color = 'red';
            
            // スコアを1増やしてスコア表示を更新
            score++;
            document.getElementById('score').textContent = score;
        
        } else { // 回答欄に入力された文字列が不正解なら

            // 回答欄の下に正誤コメント「ちがうよぉ…（正答）だよぉ…」と青く表示
             p.textContent = 'ちがうよぉ...' + maskName + 'だよぉ...';
            p.style.color = 'blue';
        }

        if(quizCnt === 46){ // 最後ま問題まで回答したら
        resetGame(); // ゲーム終わり
        };

        answerInput.value = ''; // 回答入力欄をクリア
        nextButton.focus(); // 次へボタンにフォーカス
    }
 });


// 次の問題へ進行
nextButton.addEventListener('click', () => { // 次へボタンがクリックされたら
    if(!isGameActive)return; // isGameActiveがtrue（ゲーム中）なら進行しない

    quizCnt++; // 問題カウントを1増やす

    p.textContent = ''; // 正誤コメントをクリア
    fillMap(quizCnt); // 回答済みの都道府県をピンクにして次の問題の都道府県を赤く表示
    answerInput.focus(); // 回答入力欄にフォーカス

})

// 途中でゲームをやめる
resetButton.addEventListener('click', () => { // やめるボタンが押されたら
    resetGame(); // ゲーム終わり
})

dialogResultCls.addEventListener('click', () => { // 閉じるボタンが押されたら
    resultDialog.close(); // リザルトダイアログを閉じる
})


    // 使用している関数

// 都道府県をシャッフルする関数
// dataCodeList内の要素をランダムに並び替え
function shufflMap(array) {    
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // console.log(dataCodeList); // → [ランダムな順序の都道府県コード]
}


// 都道府県を赤く塗りつぶす関数
function fillMap(code){

    if(maskMap){ // maskMapに値が入っているかどうか（入っていなければ実行されない）
        if(maskName === maskAnswer){ // 一つ前に回答した都道府県が正解なら（初期値はnullなので実行されない）
            maskMap.style.fill = '#f887cd'; // 一つ前に回答した都道府県をピンク表示
        } else { // 一つ前に回答した都道府県が誤答なら
            maskMap.style.fill = '#1f3ce2'; // 一つ前に回答した都道府県を青表示
        }
    }

    const map = document.querySelector(`[data-code="${dataCodeList[code]}"]`); // dataCodeListを用いて、htmlのsvgから対応する都道府県の要素を取得
    maskMap = map;
    maskMap.style.fill = 'red'; // 取得した都道府県の要素の塗りつぶし色を赤に変更
    
    const name = maskMap.querySelector('title').textContent.split(" / ")[0]; // 取得した都道府県の要素から、title要素のテキストコンテンツ（都道府県名）を取得して、name変数に格納
    maskName = name;
    // console.log(maskName);
    // console.log(quizCnt);
}


// 都道府県をすべて初期の色に戻す関数
// dataCodeListの要素をすべて指定して緑色に塗りつぶす
function fillMapRe(){
    for(let i = 0; i < dataCodeList.length; i++){
        const map = document.querySelector(`[data-code="${dataCodeList[i]}"]`);
        map.style.fill = '#7bc96f';
    }
}

// ゲームを初期状態にする関数
function resetGame(){
    document.getElementById('rescore').textContent = score; // リザルトダイアログにスコアを表示
    resultDialog.showModal(); // リザルトダイアログを表示
    
    // 各値のリセット
    score = 0;
    quizCnt = 0;
    isGameActive = false;
    maskMap = '';
    maskName = null;

    startButton.disabled = false;
    resetButton.disabled = true;
    nextButton.disabled = true;
    answerInput.disabled = true;

    answerInput.value = '';
    p.textContent = '';

    shufflMap(dataCodeList);
    fillMapRe();
}