//  TO DO:
//
//  - Translate jQuery to JavaScript
//  - Find a better way to display which hex color is which
//

//  On click...
$(document).click(runGame)
$(document).keypress(runGame)

function runGame(){
  //  Generate a randomColor and its complimentary ("opposite") by subtracting
  //  the randomColor from white. Or is it black? Needs research.
  //  Right now this just generates two random hex colors.

  var toColor = function ( d ) {
       var c = Number(d).toString(16);
       return "#" + ( "000000".substr( 0, 6 - c.length ) + c.toUpperCase() );
    }

  var randomColor = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  var compColor = toColor(0xFFFFFF - ("0x" + randomColor))

  //  Change the background to the first randomColor
  $('body').css('background-color',("#" + randomColor));
  
  //  Now that the background color is set, change the text color to its comp
  $('.invertMe').css('color', compColor)

  //  Update the hexDisplay div to have the hex name of each color
  //    Random Color : Complimentary Color
  $('.hexDisplay').html((randomColor.toUpperCase()) + ' : ' + (compColor.toUpperCase()));

  //  Just a way to document the hex colros in the console. 
  console.log("This is the background hex color: " + randomColor);
  console.log("This is the text color: " + compColor);
}