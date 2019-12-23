var links = {
  setATagColor:function(color){

    // var aList = document.querySelectorAll('a');
    // var idx = 0;
    // while(idx < aList.length)
    // {
    //   aList[idx].style.color = color;
    //   idx = idx + 1;
    // }
    $('a').css('color', color);
  }
}

var body = {
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  },

  setBodyFontColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  }
}

function nightDayHandler(self){
  if(self.value === 'day')
  {
    //bodysetBackgroundColor('black');
    body.setBackgroundColor('black');
    //setBodyFontColor('white');
    links.setATagColor('white');
    //setColor('powderblue');
    body.setBodyFontColor('powderblue');

    self.value = 'night';

  }else{
    //setBackgroundColor('white');
    body.setBackgroundColor('white');
    //setBodyFontColor('black');
    links.setATagColor('black');
    //setColor('blue');
    body.setBodyFontColor('blue');

    self.value = 'day';
  }
}
