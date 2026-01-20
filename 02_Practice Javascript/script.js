//記号を定数で宣言
const kuro="★";
const shiro="☆";

//----関数群---

//線「ー」を描画する関数
function line(count) {
  let s = "";
  for (let i = 0; i < count; i++) {
    s += "─";
  }
  return s;
}

//記号を指定回数だけ連結する　
//※引数で受け取ることで★でも☆でも同じ関数で処理可能に
function repeatChar(char, count) {
  let s = "";
  for (let i = 0; i < count; i++) {
    s += char;
  }
  return s;
}

//ココカラ～ココマデの枠を共通化
//関数を引数として受け取ることで、中身の表示だけを変化させる
function printBox(contentFunc) {
  document.write("ココカラ" + line(8) + "<br>");
  contentFunc();
  document.write(line(8) + "ココマデ<br><br>");
}

//----設問----

document.write("問1の実行結果<br><br>");
//定数kuroとcount5を引数として関数repeatCharに渡すことで、★を５回繰り返す
printBox(function () {
  document.write(repeatChar(kuro, 5) + "<br>");
});


document.write("問2の実行結果<br><br>");
//初期値：０　繰り返し条件：i<2　変数の変化：i++
//★を３個表示・２回繰り返す
printBox(function () {
  for (let i = 0; i < 2; i++) {
    document.write(repeatChar(kuro, 3) + "<br>");
  }
});


document.write("問3の実行結果<br><br>");
//初期値：０　繰り返し条件：i<2
//仕組みは問２と同じ　☆を５個表示・２回繰り返す
printBox(function () {
  for (let i = 0; i < 2; i++) {
    document.write(repeatChar(shiro, 5) + "<br>");
  }
});


document.write("問4の実行結果<br><br>");
//初期値：０　繰り返し条件：i<4
//★を５個表示・４回繰り返す
printBox(function () {
  for (let i = 0; i < 4; i++) {
    document.write(repeatChar(kuro, 5) + "<br>");
  }
});


document.write("問5の実行結果<br><br>");
//初期値：０　繰り返し条件：i<4
//★を３個表示・４回繰り返す
printBox(function () {
  for (let i = 0; i < 4; i++) {
    document.write(repeatChar(kuro, 3) + "<br>");
  }
});


document.write("問6の実行結果<br><br>");
//初期値：０　繰り返し条件：i<3
  //内側のfor文　初期値：０　繰り返し条件：j<3
//二重for文を使用（入れ子）
//外側のfor文：行を３回繰り返す
  //内側のfor文：１行の中で３個表示・偶数なら☆、奇数なら★を表示
printBox(function () {
  for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j < 3; j++) {
      row += (j % 2 === 1) ? kuro : shiro;
      //2で割って余りが0ならtrue=偶数、違ったらfalse=奇数
    }
    document.write(row + "<br>");
  }
});


document.write("問7の実行結果<br><br>");
//初期値：０　繰り返し条件：i<4
  //内側のfor文　初期値：０　繰り返し条件：j<5
//仕組みは問６と同じ　４行・５列に変更
printBox(function () {
  for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 5; j++) {
      row += (j % 2 === 0) ? kuro : shiro;
    }
    document.write(row + "<br>");
  }
});


document.write("問8の実行結果<br><br>");
//初期値：１　繰り返し条件：i<=5
//repeatChar関数の引数countにiを入れることで、
//繰り返すごとに★の数を増やす
//１行目に１個の★を表示するため、初期値を１に設定
printBox(function () {
  for (let i = 1; i <= 5; i++) {
    document.write(repeatChar(kuro, i) + "<br>");
  }
});

