var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keydown(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function(){
    
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
      //console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
     });

function checkAnswer(currentLevel){
      if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function (){
            nextSequence();
            }, 1000);
        }
      }
    
      else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
    
        $("body").addClass("game-over");
        setTimeout(function (){
        $("body").removeClass("game-over"); 
          }, 2000);
        $("#level-title").text("Game over!! Press any key to restart!")
        startOver();
      };
}


function nextSequence(){
userClickedPattern = [];
level++;

   $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);  
};

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
    };

function startOver (){
  gamePattern = [];
  started = false;
  level = 0;
};


        //         if(userClickedPattern.length === currentLevel){
//           if (userClickedPattern === gamePattern) {
//             nextSequence()
//           };
//         }
//         else {console.log("wait")};
//         }
//       else {console.log("wrong")};
//       };
// // })
// $(document).keydown(function(event){
//   if($("h1:contains(\"Press A Key to Start\")")){
//   nextSquence();
//   $("h1").text("Level 0");
//   }
//  })
 
    
// $(".btn").click(function(){
//     $(this).addClass("pressed");
//     setTimeout(function(){       
//     $(this).removeClass("pressed")}, 100);
//     });

// $(document).nextsquence(function({
//     var randomNumber = Math.floor(Math.random()*4);
// }););