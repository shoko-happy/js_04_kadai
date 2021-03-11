const meibo = {
  a12021: "あかね",
  a22021: "楓",
  a32021: "さくら"
};

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();
var date0 = year + "年" + month + "月" + day + "日";

$(".microphone1").on("click", function(){//名前の音声入力＆学籍番号表示＆日時の取得

  SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;//音声入力
  const recognition = new SpeechRecognition();

  recognition.onresult = (event) => {
    namae = event.results[0][0].transcript;
    $("#namaeOut").html(namae);
    let name1 = 0;
    name1 = document.getElementById("namaeOut");
    
    for (const no in meibo) { //学籍番号表示//配列中に一致するものがなかったらアラートを出したい
      if(name1.innerHTML === meibo[no]){
        $("#no").html(no);
      };
    };


    $("#date").html(date0);

    var min = Math.floor(Math.random()*60); //時間の発生
    if(min < 30) {
      $("#time").html(9 + ":" + min);

      if(min > 20){ //遅刻・欠席の判定
        $("#time").css("background-color","red");
        $("#hantei").css("background-color","red");
        $("#hantei").html("欠席");       
      } else { //欠席
        $("#time").css("background-color","yellow");
        $("#hantei").css("background-color","yellow");
        $("#hantei").html("遅刻");
      };

    } else { //セーフ
      $("#time").html(8 + ":" + min);
      $("#time").css("background-color","lightgreen")
      $("#hantei").css("background-color","lightgreen")
      $("#hantei").html("セーフ！！");

    };
  }
  recognition.start();

});


$(".microphone2").on("click", function(){

  SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onresult = (event) => {
    // alert(event.results[0][0].transcript);
    $("#dengonOut").html(event.results[0][0].transcript);
  }
  
  recognition.start();
  
});


