//Business logic


var pingpong = function(integer) { //main funciton;
  var result = validator(integer);

  return arrayMaker(integer, result);
};


var arrayMaker = function(integer, result) { //passes user's number and creates array
  if (result) {
    var results = [];
    var i = 1;
    while (i <= integer) {
      result = pingponger(i);
      results.push(result);
      i++;
    }
    return results.join("\n");
  } else {
    return "NAH";
  }
};


var validator = function(integer) { //checks to make sure input is a valid number
  if (integer < 0) {
    return false;
  } else if (integer = NaN) { //supposed to determine if input is a number BUT IT DOESN'T
    return false;
  } else {
    return true;
  }
};


var pingponger = function(integer) { //determines whether the numbers between 0 and input are divisble
    if (integer % 15 === 0) {
      return "pingpong";
    } else if (integer % 5 === 0) {
      return "pong";
    } else if (integer % 3 === 0) {
      return "ping";
    } else {
      return integer;
    }
};

//UI logic
$(document).ready(function() {
  $("form#userForm").submit(function(event) {
    var input = parseInt($("input#userInput").val());
    var result = pingpong(input);

    // result.forEach(function(integer) {
    //   $("#resultList").append("<li>" + integer + "</li>");
    // });

    $(".result").show();
    $("#output").text(result);
    event.preventDefault();
  });
});
