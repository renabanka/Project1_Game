//variable to add points to the scoreboard. Starts at 0 and increases by 1 everytime a succulent is clicked
var points = {
  pointCounter: 0,
  addPoint: function(num) {
    this.pointCounter += num;
    $('#point-value').text(this.pointCounter);
    return;

  // detractPoints: function(num) {
  //   this.pointCounter -- num;
  //   $('#point-value').text(this.pointCounter);
  //   return;
  // }
  }
};

//variable to increase the level on the scoreboard. Starts at Level 1 and increase by 1 depending on nextLevel function conditions below
var level = {
  levelCounter: 1,
  addLevel: function(num) {
    this.levelCounter += num;
    $('#level-value').text(this.levelCounter);
    return;
  }
};
var flowers = [];


//function to get random min and max for succulent drop
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function displayResults() {
  if (level.levelCounter > 5 && points.pointCounter >=75) {
    $('.results').show();
    $('#timerResults').text();
    $('#pointsResults').text(points.pointCounter);

  }
    else {

    }
}

$('#background').hide();
$('.title').hide();
$('.game-container').hide();
$('.scoreboard').hide();
$('.results').hide();



 //function called after the "Start Game" button is clicked
$(".start-game").click(startGame);



//function for level 1
function startGame() {
// $('.instructions').hide();
$('#background').show();
$('.title').show();
$('.game-container').show();
$('.scoreboard').show();
$('.instructions').hide();
$('#background2').hide();
  var num = 10;
  while (num > 0) {
  makeSucculent();
  num--;

  setInterval(function() {
  $('.Timer').text(Math.round((new Date - start) / 1000, 0));
  }, 1000);
  }  
  
}

//timer related variable
var start = new Date();

var flowers =[];
// var location = [];

//function to check how many points player has and then increase level
 function nextLevel() {
  if (level.levelCounter < 2 && points.pointCounter >= 20) {
    level.addLevel(1);
  }
  else if (level.levelCounter < 3 && points.pointCounter >= 30) {
    level.addLevel(1);
  } 
  else if (level.levelCounter < 4 && points.pointCounter >= 40) {
    level.addLevel(1);
  } 

  else if (level.levelCounter < 5 && points.pointCounter >= 50) {
    level.addLevel(1);
  } 

  else if (level.levelCounter < 6 && points.pointCounter >= 75) {
    level.addLevel(1);
  } 
    
  else {
    }
}

//increase of levels 
 function newSucculents() {
  if (points.pointCounter < 30 && points.pointCounter > 20) {
    // startLevel2();
    makeSucculentLevel2 ();
}

  else if (points.pointCounter < 40 && points.pointCounter > 30) {
  makeSucculentLevel2 ();
  makeSucculentLevel3 ();
  }

  else if (points.pointCounter < 50 && points.pointCounter > 40) {
    makeSucculentLevel2 ();
    makeSucculentLevel3 ();
    makeSucculentLevel4 ();
  }

  else if (points.pointCounter < 75 && points.pointCounter > 50) {
    makeSucculentLevel2 ();
    makeSucculentLevel3 ();
    makeSucculentLevel4 ();
  }

  else {
    }
}


function makeSucculent() {
  //add succulents to game container
  var succulentParadise = $("<img class='paradise'>");
  succulentParadise.prop("src", "images/_0012_Succulent-Paradise.png");
  flowers.push(succulentParadise);
  $(".game-container").append(succulentParadise);
  
  //set succulent drops on x-axis referencing getRandomInt function
  var xPos = getRandomInt(0, 700);
  succulentParadise.css("left", xPos + "px");
  succulentParadise.css("top", "-30px");
  
  //set succulent drop speed referencing getRandomInt function
  var speed = getRandomInt(5000, 10000);
  
  //drop succulents in a certain way
  succulentParadise.animate({"top": "630px"}, speed, "swing", makeSucculent)//.then(succulentParadise.animate({"top":"100px"}, speed, "swing", makeSucculent));
  

  //listen to clicks and remove image once clicked by user
  succulentParadise.click(succulentClick);
  function succulentClick() {
  $(this).remove();


  
  //add a point once clicked
  points.addPoint(1);

  //check the conditions to display level name
  nextLevel();
   //check the conditions to create more succulents
  newSucculents();
  //check the conditions to display results
  displayResults();
    }  
    } 


function findLocation(bottomLine) {
  for (flow in flowers) {
    var el = flowers[flow];
    var edge = $(el).position().top;
    if (edge > bottomLine) {
      console.log('one got away');
      detractPoints(1);
      $(el).remove();
    }
  }
}

//global window.setInterval
setInterval(function(event) {
  var topOf = $('.game-container').position().top;
  var height = $('.game-container').height();
  var bottomLine = topOf + height;
  console.log('tick tock');
  findLocation(bottomLine);

}, 1000);

function detractPoints(pointsNum) {

}
