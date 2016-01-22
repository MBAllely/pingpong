describe ("pingpong", function() {
  it("takes input not divisible by 5 or 3 and returns the same input", function(){
    expect(pingpong(1)).to.equal(1);
  });

  it("takes input divisible by 15 and returns 'pingpong'", function() {
    expect(pingpong(15)).to.equal("pingpong");
  });

  it("takes input divisible by 5 and returns 'pong'", function() {
    expect(pingpong(5)).to.equal("pong");
  });

  it("takes input divisible by 3 and returns 'pong'", function() {
    expect(pingpong(3)).to.equal("ping");
  });
});
