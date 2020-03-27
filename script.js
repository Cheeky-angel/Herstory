
// 본문 스타일 설정 객체
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
  },
  setbgColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

// 링크 스타일 설정 객체
var Links = {
  list:function(){
    var intro = ['Herstory','Career','Skills'];
    var i = 0;
    while(i < intro.length){
    document.write('<li><a href='+intro[i]+'.html>'+intro[i]+'</a></li>');
    i = i + 1;
    }
  },
  homebtn:function(){
      document.write('<h1><a href=index.html>Cheeky Angel</a></h1>');
    }
  }


// 슬라이드 메뉴 디자인 설정 객체
var Slidemenu = {
  setbgColor:function(color){
    document.querySelector('.sidenav').style.backgroundColor = color;
  },
  setSliderOpacity:function(num){
    document.querySelector('.sidenav').style.opacity = num;
  },
  setButtonOpacity:function(num){
    document.querySelector('.slideBtn').style.opacity = num;
  },
  setButtonColor:function(color){
    document.querySelector('.slideBtn').style.color = color;
  }
}


// 야간모드, 주간모드 버튼
function nightdayoption(self){

  if(self.value === 'Night'){
    Body.setbgColor('black');
    Body.setColor('white');
    Slidemenu.setbgColor('powderblue');
    Slidemenu.setSliderOpacity(0.9);
    Slidemenu.setButtonColor('powderblue');
    Slidemenu.setButtonOpacity(1);
    self.value = 'Day';

} else {
  Body.setbgColor('white');
  Body.setColor('black');
  Slidemenu.setbgColor('red');
  Slidemenu.setSliderOpacity(0.2);
  Slidemenu.setButtonColor('red');
  Slidemenu.setButtonOpacity(0.2);
  self.value = 'Night';
}

}

// 슬라이드 메뉴
$(document).ready(function(){
  $(".slideBtn").click(function(){
    if($("#sidenav").width() == 0){
        document.getElementById("sidenav").style.width = "250px";
        document.getElementById("main").style.paddingLeft = "250px";
        document.getElementById("slidebtn").style.paddingLeft = "250px";
        document.getElementById("top").style.paddingLeft = "250px";
        document.getElementById("night_day").style.paddingLeft = "250px";

    }else{
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("main").style.paddingLeft = "0";
        document.getElementById("slidebtn").style.paddingLeft = "0";
        document.getElementById("top").style.paddingLeft = "0";
        document.getElementById("night_day").style.paddingLeft = "0px";
    }
  });
});
