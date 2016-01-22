describe ("pingpong", function() {
  it("takes input not divisible by 5 or 3 and returns the same input", function(){
    expect(pingpong(1)).to.equal(1);
  });
})
