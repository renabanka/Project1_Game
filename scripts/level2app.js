// function startLevel2() {
//   var num = 2;
//   while (num > 0) {
//   makeSucculentLevel2 ()
//   num--;
//   }  
  
// }

function makeSucculentLevel2 () {
  //add succulents to game container
  var succulentParadise2 = $("<img class='paradise'>");
  succulentParadise2.prop("src", "images/_0031_Succulent-Paradise.png");
  $(".game-container").append(succulentParadise2);
  
  //set succulent drops on x-axis referencing getRandomInt function
  var xPos = getRandomInt(0, 700);
  succulentParadise2.css("left", xPos + "px");
  succulentParadise2.css("top", "-30px");
  
  //set succulent drop speed referencing getRandomInt function
  var speed = getRandomInt(10000, 10000);
  
  //drop succulents in a certain way
  succulentParadise2.animate({"top": "630px"}, speed, "swing", makeSucculent);
  

  //listen to clicks and remove image once clicked by user
  succulentParadise2.click(succulentClick);
  function succulentClick() {
  $(this).remove();
  
  //add a point once clicked
  points.addPoint(2);
  // nextLevel();
    }  
    }  



// function startLevel3() {
//   var num = 1;
//   while (num > 0) {
//   makeSucculentLevel3 ()
//   num--;
//   }  
  
// }


function makeSucculentLevel3 () {
  //add succulents to game container
  var succulentParadise3 = $("<img class='paradise'>");
  succulentParadise3.prop("src", "images/_0017_Succulent-Paradise.png");
  $(".game-container").append(succulentParadise3);
  
  //set succulent drops on x-axis referencing getRandomInt function
  var xPos = getRandomInt(0, 700);
  succulentParadise3.css("left", xPos + "px");
  succulentParadise3.css("top", "-30px");
  
  //set succulent drop speed referencing getRandomInt function
  var speed = getRandomInt(10000, 10000);
  
  //drop succulents in a certain way
  succulentParadise3.animate({"top": "630px"}, speed, "swing", makeSucculent);
  

  //listen to clicks and remove image once clicked by user
  succulentParadise3.click(succulentClick);
  function succulentClick() {
  $(this).remove();
  
  //add a point once clicked
  points.addPoint(3);
  // nextLevel();
    }  
    }  