describe ("pingponger", function() {
  it("takes input not divisible by 5 or 3 and returns the same input", function(){
    expect(pingponger(1)).to.equal(1);
  });

  it("takes input divisible by 15 and returns 'pingpong'", function() {
    expect(pingponger(15)).to.equal("pingpong");
  });

  it("takes input divisible by 5 and returns 'pong'", function() {
    expect(pingponger(5)).to.equal("pong");
  });

  it("takes input divisible by 3 and returns 'pong'", function() {
    expect(pingponger(3)).to.equal("ping");
  });
});

describe("validator", function() {
  it("determines if an input number is valid", function() {
    expect(validator(-1)).to.equal(false);
  });
});

describe("arrayMaker", function() {
  it("passes true results from 'validator' and 'pingponger' and creates an array; passes each element to a new line", function() {
    expect(arrayMaker(3, true)).to.equal("1\n2\nping");
  });
});

describe("pingpong", function() {
  it("passes user input; uses validator and arrayMaker to return values", function() {
    expect(pingpong(5, true)).to.equal("1\n2\nping\n4\npong");
  });
});
