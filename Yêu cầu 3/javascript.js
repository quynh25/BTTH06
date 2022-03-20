var images = new Array('BTTH_icons/00.gif','BTTH_icons/01.gif','BTTH_icons/02.gif','BTTH_icons/03.gif','BTTH_icons/04.gif','BTTH_icons/05.gif','BTTH_icons/06.gif','BTTH_icons/07.gif','BTTH_icons/08.gif','BTTH_icons/09.gif');

var interval = setInterval(function()
{
  var date = new Date();

  var hour = String(date.getHours());
  var minutes = String(date.getMinutes());
  var seconds = String(date.getSeconds());

  if(hour < 10)
  {
    $('#hour1').attr('src',images[0]);
    $('#hour2').attr('src',images[hour.charAt(0)]);
  }
  else
  {
    $('#hour1').attr('src',images[hour.charAt(0)]);
    $('#hour2').attr('src',images[hour.charAt(1)]);
  }
  if(minutes < 10)
  {
    $('#minutes1').attr('src',images[0]);
    $('#minutes2').attr('src',images[minutes.charAt(0)]);
  }
  else
  {
    $('#minutes1').attr('src',images[minutes.charAt(0)]);
    $('#minutes2').attr('src',images[minutes.charAt(1)]);
  }
  if(seconds < 10)
  {
    $('#seconds1').attr('src',images[0]);
    $('#seconds2').attr('src',images[seconds.charAt(0)]);
  }
  else
  {
    $('#seconds1').attr('src',images[seconds.charAt(0)]);
    $('#seconds2').attr('src',images[seconds.charAt(1)]);
  }
}, 1000);