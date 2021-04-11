// 変数nameを定義し、「にんじゃわんこ」を代入してください
let name = "にんじゃわんこ";//変数宣言はletをつける

// 変数nameの値を出力してください
console.log(name);

name = "とりずきん"; //変数の再代入は型宣言無し

const language = "フランス語"//定数宣言はconst 再代入不可

console.log(`ぼくの名前は${name}です`); //バッククォーテーションで囲む


//swwith文の書き方
//条件分岐が複雑になったときif文より簡単にかける
const rank = 2;
//caseで条件によって処理を分ける
//breakを忘れずに
switch (rank) {
    case 1:
        console.log("金メダルです！");
        break;

    // rankの値が2のcaseを追加してください
    case 2:
        console.log("銀メダルです！");
        break;
    // rankの値が3のcaseを追加してください
    case 3:
        console.log("銅メダルです！");
        break;
    default://どの条件も一致しなかったときの実行文else的な
        console.log("メダルはありません")

}