var pingpong = function(i) {
  // while (i = 0; i <= userInput; i++){
    if (i % 15 === 0) {
      return "pingpong";
    } else if (i % 5 === 0) {
      return "pong";
  //   } else if (i % 3 === 0) {
  //     return "ping";
    } else {
      return i;
    }
  // }
}
