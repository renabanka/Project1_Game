function makeSucculentLevel2 () {
  var succulentParadise2 = $("<img class='paradise'>");
  succulentParadise2.prop("src", "images/_0028_Succulent-Paradise.png");
  $(".game-container").append(succulentParadise2);
  
  var xPos = getRandomInt(0, 700);
  succulentParadise2.css("left", xPos + "px");
  succulentParadise2.css("top", "-30px");
  

  var speed = getRandomInt(6000, 10000);
  

  succulentParadise2.animate({"top": "630px"}, speed, "swing", makeSucculent);
  

  succulentParadise2.click(succulentClick);
  function succulentClick() {
  $(this).remove();
  
  points.addPoint(2);
    }  
    }  



function makeSucculentLevel3 () {
  var succulentParadise3 = $("<img class='paradise'>");
  succulentParadise3.prop("src", "images/_0017_Succulent-Paradise.png");
  $(".game-container").append(succulentParadise3);
  

  var xPos = getRandomInt(0, 700);
  succulentParadise3.css("left", xPos + "px");
  succulentParadise3.css("top", "-30px");
  

  var speed = getRandomInt(7000, 10000);
  

  succulentParadise3.animate({"top": "630px"}, speed, "swing", makeSucculent);
  

  succulentParadise3.click(succulentClick);
  function succulentClick() {
  $(this).remove();
  

  points.addPoint(3);

    }  
    }  


  function makeSucculentLevel4 () {
  var succulentParadise4 = $("<img class='paradise'>");
  succulentParadise4.prop("src", "images/_0015_Succulent-Paradise.png");
  $(".game-container").append(succulentParadise4);
  

  var xPos = getRandomInt(0, 700);
  succulentParadise4.css("left", xPos + "px");
  succulentParadise4.css("top", "-30px");

  var speed = getRandomInt(8500, 10000);
  

  succulentParadise4.animate({"top": "630px"}, speed, "swing", makeSucculent);
  
  succulentParadise4.click(succulentClick);
  function succulentClick() {
  $(this).remove();
  
  points.addPoint(4);

    }  
    }  


  function makeSucculentLevel5 () {
  var succulentParadise5 = $("<img class='paradise'>");
  succulentParadise5.prop("src", "images/_0027_Succulent-Paradise.png");
  $(".game-container").append(succulentParadise5);
  

  var xPos = getRandomInt(0, 700);
  succulentParadise5.css("left", xPos + "px");
  succulentParadise5.css("top", "-30px");

  var speed = getRandomInt(9000, 10000);
  
  succulentParadise5.animate({"top": "630px"}, speed, "swing", makeSucculent);
  
  succulentParadise5.click(succulentClick);
  function succulentClick() {
  $(this).remove();

  points.addPoint(5);

    }  
    }  