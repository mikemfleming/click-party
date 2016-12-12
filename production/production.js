//  TO DO:
//
//  - Translate jQuery to JavaScript
//  - Find a better way to display which hex color is which
//

//  On click...

document.addEventListener('click', runGame)
document.addEventListener('keypress', runGame)


function runGame(){

  function decToHex ( d ) {
       var c = Number(d).toString(16);
       return "#" + ( "000000".substr( 0, 6 - c.length ) + c.toUpperCase() );
    }

  var randHex = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  var compHex = decToHex(0xFFFFFF - ("0x" + randHex))

  //  Change the background to the first randHex
  console.log('reeee')
  //$('body').css('background-color',("#" + randHex));

  // blahc
  
  //  Now that the background color is set, change the text color to its comp
  //$('.invertMe').css('color', compHex)

  //  Update the hexDisplay div to have the hex name of each color
  //    Random Color : Complimentary Color
  //$('.hexDisplay').html('#' + (randHex.toUpperCase()) + ' : ' + (compHex.toUpperCase()));

  //  Just a way to document the hex colros in the console. 
  console.log("This is the background hex color: " + randHex);
  console.log("This is the text color: " + compHex);
}