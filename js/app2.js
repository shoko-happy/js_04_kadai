const newPostRef = firebase.database().ref();

$("#send").on("click", function () {

    //データを登録で送る//伝言なしの場合は空欄にする
    if(document.getElementById("dengonOut").innerHTML == "伝言："){

        document.getElementById("dengonOut").innerHTML ="";

        newPostRef.push({
        name: `${document.getElementById("namaeOut").innerHTML}`,
        no: `${document.getElementById("no").innerHTML}`,
        date: `${document.getElementById("date").innerHTML}`,     
        hantei: `${document.getElementById("hantei").innerHTML}`,
        dengon: `${document.getElementById("dengonOut").innerHTML}`

        });
    } else {

        newPostRef.push({
            name: `${document.getElementById("namaeOut").innerHTML}`,
            no: `${document.getElementById("no").innerHTML}`,
            date: `${document.getElementById("date").innerHTML}`,     
            hantei: `${document.getElementById("hantei").innerHTML}`,
            dengon: `${document.getElementById("dengonOut").innerHTML}`
        });
        
    };    

    $("#namaeOut").html("お名前：");
    $("#no").html("出席番号：");
    $("#date").html("日付：");
    $("#time").html("時間：");
    $("#time").css("background-color","");
    $("#hantei").html("セーフ/遅刻/欠席");
    $("#hantei").css("background-color","");
    $("#dengonOut").html("伝言：");

    });


       // 受信処理
    newPostRef.on("child_added", function (data) {
      //ここに保存されたデータが全て入ってくる
      // function (data)のdataにfirebaseのデータが入ってくる
      let v = data.val();

      //本日の出席
      if(v.date == date0) {
        //app.js中に定義されたmeiboの名前と一致するもののみ出席表示
        for (const no in meibo) {
            if(v.name === meibo[no]){
                //遅刻と欠席のみ表示
                if(v.hantei == "セーフ！！"){ 
                    v.hantei = "";
                    let str =`<p>${v.name}さん` + " : "  + `${v.hantei}` + "  " + `${v.dengon}</p>`;
                    $("#outputToday").append(str);
                } else {
                    let str =`<p>${v.name}さん` + " : "  + `${v.hantei}` + "  " + `${v.dengon}</p>`;
                    $("#outputToday").append(str);
                };
            };
        };
      };

        //   あかねさんのアーカイブ
        if(v.name === meibo.a12021){
            if(v.hantei == "セーフ！！"){ //セーフ！！を消す
                v.hantei = "　　";
                let str =`<p>${v.date}` + " : "  + `${v.hantei}` + "  " + `${v.dengon}</p>`;
                $("#outputArchive0").append(str);
            } else {
                let str =`<p>${v.date}` + " : "  + `${v.hantei}` + "  " + `${v.dengon}</p>`;
                $("#outputArchive0").append(str);
            };                
        };

        //   楓さんのアーカイブ
        if(v.name === meibo.a22021){
            if(v.hantei == "セーフ！！"){ 
                v.hantei = "　　";
                let str =`<p>${v.date}` + " : "  + `${v.hantei}` + "  " + `${v.dengon}</p>`;
                $("#outputArchive1").append(str);
            } else {
                let str =`<p>${v.date}` + " : "  + `${v.hantei}` + "  " + `${v.dengon}</p>`;
                $("#outputArchive1").append(str);
            };                
        };
        
        //   さくらさんのアーカイブ
        if(v.name === meibo.a32021){
            if(v.hantei == "セーフ！！"){ 
                v.hantei = "　　";
                let str =`<p>${v.date}` + " : "  + `${v.hantei}` + "  " + `${v.dengon}</p>`;
                $("#outputArchive2").append(str);
            } else {
                let str =`<p>${v.date}` + " : "  + `${v.hantei}` + "  " + `${v.dengon}</p>`;
                $("#outputArchive2").append(str);
            };                
        };

    });

