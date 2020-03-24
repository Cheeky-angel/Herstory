
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
  },
  setbgColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}


var Links = {
  list:function(){
    var intro = ['Herstory','Career','Skills'];
    var i = 0;
    while(i < intro.length){
    document.write('<li><a href='+intro[i]+'.html>'+intro[i]+'</a></li>');
    i = i + 1;
    }
  }
}


function nightdayoption(self){

  if(self.value === 'Night'){
    Body.setbgColor('black');
    Body.setColor('white');
    self.value = 'Day';

} else {
  Body.setbgColor('white');
  Body.setColor('black');
  self.value = 'Night';
}

}
