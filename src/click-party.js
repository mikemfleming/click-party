function runGame(){

  var randHex = "000000".replace(/0/g,function(){
    return (~~(Math.random()*16)).toString(16);
  });
  var compHex = decToHex(0xFFFFFF - ("0x" + randHex))

  document.body.style.setProperty('--randomColor', '#' + randHex); // uglify doesn't like template strings :(
  document.body.style.setProperty('--compColor', compHex);
  
  document.querySelector('.hexText').innerHTML = '#' + randHex.toUpperCase() + ' : ' + compHex.toUpperCase()

  console.log("This is the background hex color: " + randHex);
  console.log("This is the text color: " + compHex);
  
  function decToHex ( d ) {
    var c = Number(d).toString(16);
    return "#" + ( "000000".substr( 0, 6 - c.length ) + c.toUpperCase() );
  }
}

document.addEventListener('click', runGame)
document.addEventListener('keypress', runGame)
document.querySelector('.container').addEventListener('click', runGame) // helps with mobile
