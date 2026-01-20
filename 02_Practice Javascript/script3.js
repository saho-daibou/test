document.write("■■■問１■■■"+ "<br>");
//面積 ＝ 半径 × 半径 × 円周率
//半径を引数で受け取って、円の面積を計算してreturnする関数
function circleArea(radius) {
    var pi = 3.14;
    return radius * radius * pi;
}

var radii = [5, 7, 10];
//問題文の半径を配列にまとめて管理

for (var i = 0; i < radii.length; i++) {
//配列に入っている数だけ繰り返す
    document.write(
        "半径" + radii[i] + "cmの円の面積：" +
        circleArea(radii[i]) + "cm²<br>"
    );
}

document.write("<br><br>");


document.write("■■■問２■■■"+ "<br>");
//大人料金が500円、子供料金が200円
//
function totalPrice(adult, child) {
//大人と子供の人数をそれぞれ引数で受け取り、合計金額を計算する関数
    return adult * 500 + child * 200;
}

//グループ名と大人・子供の人数を配列に
var groups = [
    //         大人,子供
    ["Aグループ", 2, 4],
    ["Bグループ", 1, 5],
    ["Cグループ", 3, 7]
];

//各グループの情報を取り出し、グループ名と人数を変数に代入
//配列の数だけ繰り返す
for (var i = 0; i < groups.length; i++) {
    var name = groups[i][0];
    var adult = groups[i][1];
    var child = groups[i][2];

    document.write(
        name + "の合計金額は、" +
        totalPrice(adult, child) +
        "円です。<br>"
    );
}

