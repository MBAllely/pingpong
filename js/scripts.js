var pingpong = function(integer) {
  var arr = [];
  for (var i = 0; i <= integer) {
    if (i % 15 === 0) {
      arr.push("pingpong");
    } else if (i % 5 === 0) {
      arr.push("pong");
    } else if (i % 3 === 0) {
      arr.push("ping");
    } else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}


$(document).ready(function() {
  $("form#userForm").submit(function(event) {
    var integer = parseInt($("input#userInput")).val();
    var result = pingpong(integer);

    $("#output").text(result);
    event.preventDefault();
  });
});
