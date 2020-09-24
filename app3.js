// メイン部分
// var alertString;
// alertString = addString("WebCamp");

// 作成した関数を呼び出す
// alert(alertString);

// 作成した関数
// function addString(strA){
//   var addStr = "Hello " + strA;
//   return addStr;
// }

// var promptStr = prompt("何か好きな文字を入力してください。");
// alert(promptStr);

// ジャンケン
var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
// 練習１&2
// if user_hand != "グー","チョキ,"パー"
// alert("グー・チョキ・パーのいずれかを入力してください")
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert("グー・チョキ・パーのいずれかを入力して下さい");
  user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
}
var js_hand = getJShand();
var judge = winLose(user_hand, js_hand);
// 練習３
if (user_hand != null){
  alert("あなたの選んだ手は" + user_hand + "です。\nJavaScriptの選んだ手は" + js_hand + "です。\n結果は" + judge + "です。");
}else{
  alert("またチャレンジしてね")
}


function getJShand(){
  // 0～2までのランダムな整数値を生成
  var js_hand_num = Math.floor(Math.random() * 3);
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name;
}

// compare
function winLose(user,js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else if(js == "パー"){
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  }else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}