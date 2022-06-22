var btnIcon = $('#btn i')

$('#btn').on('click', function(){

  $('body').toggleClass('open')

 // console.log( $('body').hasClass('open') )

  if( $('body').hasClass('open') ){
    
    btnIcon
    .removeClass('ri-menu-line')
    .addClass('ri-close-line')
  
  } else {

    btnIcon
    .removeClass('ri-close-line')
    .addClass('ri-menu-line')

  } 
})


//$('#btn')　オブジェクト化
//bodyに、openというclassを取ったりつけたりする
//コンソールにbodyにopenというclassがあるかどうかbooleanで表示
//ifもしbodyにopenというclassがある時は、#btn iのclassのri-menu-lineを削除して、ri-close-lineを加える。そうじゃない時は、逆を実行する。
//btn i を取得して、btnIconに代入する。



echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/hitomishimada/.zprofile
(ここでEnterを押す)
eval "$(/opt/homebrew/bin/brew shellenv)"
(ここでEnterを押す)