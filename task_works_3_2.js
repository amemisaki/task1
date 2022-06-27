'use strict';
let inu ={1:'短頭',2:'中頭',3:'長頭'}
let neko={1:'短毛',2:'長毛'}
let usagi={1:'立ち耳',2:'垂れ耳'}

$(function(){
  $('#bigArea').change(function(){
    let Bval =$('#bigArea').val();
    console.log(Bval)
    $('#middleArea >option').remove();
    if(Bval ==='inu'){
      addMi(inu,3);
      let tanntou =['ボストンテリア','フレンチブルドッグ','パグ','シーズー'];
      addS('1',tanntou,4);
      var tyu =['ビーグル','コーギー','柴犬'];
      addS('2',tyu,3);
      var nagai =['ボルゾイ','イタリアン・グレートハウンド','ウィペット'];
      addS('3',nagai,3)
    }else if(Bval ==='neko'){
      addMi(neko,2)
      let tanmou =['アメリカンショートヘア','コラット'];
      addS('1',tanmou,2)
      var tyumou =['メインクーン','ペルシャ']
      addS('2',tyumou,2)
    }else if(Bval ==='usagi'){
      addMi(usagi,2)
      var tatimimi=['アナウサギ','ネザーランド・ドワーフ']
      addS('1',tatimimi,2)
      var taremimi =['ホーランド・ロップ','ミニロップ']
      addS('2',taremimi,2)
    }

    function addMi(A,N){
      for(let i=1;i<=N;i++){
        $('#middleArea').append($('<option>').html(A[i]).val(i));
      }
      $('#middleArea').append('<option value="0" disable selected>選択してください</option>')
    }
      
    function addS (A,B,N){
      $('#middleArea').change(function(){
        let Mval =$('#middleArea').val();
        if(Mval ===A){
          console.log(Mval);
          for(let z=0;z<N;z++){
            $('#smallArea').append($('<option>').html(B[z]).val(z));
          }
        }
      })
    }
  })
})