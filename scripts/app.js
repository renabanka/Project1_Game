
//variable to add points to the scoreboard. Starts at 0 and increases by 1

var points = {
  pointCounter: 0,
  addPoint: function(num) {
    this.pointCounter += num;
    $('#point-value').text(this.pointCounter);
    return;
  }
};

//variable to increase the level of the scoreboard. Starts at Level 1 and increase by 1 in nextLevel function below

var level = {
  levelCounter: 1,
  addLevel: function(num) {
    this.levelCounter += num;
    $('#level-value').text(this.levelCounter);
    return;
  }
};

//function to get random min and max for succulent drop

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//function which is initiated after the "Start Game"

$(".start-game").click(startGame);

function startGame() {
  var num = 15;
  while (num > 0) {
  makeSucculent();
  setInterval(function() {
    $('.Timer').text("00:" + Math.round((new Date - start) / 1000, 0) + " Seconds");
    }, 1000);
  num--;
  }  
}

 function nextLevel() {
  if (points.pointCounter > 10 && points.pointCounter < 12) {
    level.addLevel(1);
  }
  else if (points.pointCounter > 20 && points.pointCounter < 22) {
    level.addLevel(1);
  } 

  else if (points.pointCounter > 30 && points.pointCounter < 32) {
    level.addLevel(1);
    
  } 

  else if (points.pointCounter > 40 && points.pointCounter < 42) {
    level.addLevel(1);
    
  } 

  else if (points.pointCounter > 50 && points.pointCounter < 52) {
    level.addLevel(1);
    
  } 
  else {
    console.log('this is working');
    }
}


function makeSucculent() {
  //add succulents to game container
  var succulentParadise = $("<img class='paradise'>");
  succulentParadise.prop("src", "images/_0012_Succulent-Paradise.png");
  $(".game-container").append(succulentParadise);
  
  //set succulent drops on x-axis referencing getRandomInt function
  var xPos = getRandomInt(0, 700);
  succulentParadise.css("left", xPos + "px");
  succulentParadise.css("top", "-30px");
  
  //set succulent drop speed referencing getRandomInt function
  var speed = getRandomInt(5000, 10000);
  
  //drop succulents in a certain way
  succulentParadise.animate({"top": "630px"}, speed, "swing", makeSucculent);
  

  //listen to clicks and remove image once clicked by user
  succulentParadise.click(succulentClick);
  function succulentClick() {
  $(this).remove();
  
  //add a point once clicked
  points.addPoint(1);
  nextLevel();
    }  
    }  


var start = new Date;


 


