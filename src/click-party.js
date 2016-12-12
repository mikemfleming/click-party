function runGame(){

  var oldRand = window.getComputedStyle(document.body).getPropertyValue('--randomColor');
  var oldComp = window.getComputedStyle(document.body).getPropertyValue('--compColor');

  document.querySelector('#history').innerHTML += 
    '<span style="color:' + oldRand + '">' + oldRand + '</span>' + ' '
    + '<span style="color:' + oldComp + '">' + oldComp+ '</span> ';
  // uglify doesn't like template strings :(

  var randHex = "000000".replace(/0/g,function(){
    return (~~(Math.random()*16)).toString(16);
  }).toUpperCase();
  var compHex = decToHex(0xFFFFFF - ("0x" + randHex));

  document.body.style.setProperty('--randomColor', '#' + randHex);
  document.body.style.setProperty('--compColor', compHex);
  
  document.querySelector('.hexText').innerHTML = '#' + randHex.toUpperCase() + ' : ' + compHex.toUpperCase();
  
  function decToHex ( d ) {
    var c = Number(d).toString(16);
    return "#" + ( "000000".substr( 0, 6 - c.length ) + c.toUpperCase() );
  }
}

document.addEventListener('click', runGame);
document.addEventListener('keypress', runGame);
document.querySelector('#container').addEventListener('click', runGame); // helps with mobile
