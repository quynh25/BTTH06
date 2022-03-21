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

  if (hour >= 0 && hour < 12) {
    document.getElementById("m").style.display = "block";
    document.getElementById("a").style.display = "none";
    document.getElementById("e").style.display = "none";
    
  }


  if (hour >= 12 && hour < 17) {
    document.getElementById("a").style.display = "block";
    document.getElementById("m").style.display = "none";
    document.getElementById("e").style.display = "none";
  }

  if (hour >= 17 && hour <= 23) {
    document.getElementById("e").style.display = "block";
    document.getElementById("a").style.display = "none";
    document.getElementById("m").style.display = "none";
  }



})
const colorChange = document.querySelector('.colorChange')

var i=false;
setInterval(function(){ 
    i = !i
    if(i==true){
        colorChange.setAttribute('style', 'color: red ; font-size: 21px' )
    }
    else(
        colorChange.setAttribute('style', 'color: black; font-size: 18px' )
    )

},1000);