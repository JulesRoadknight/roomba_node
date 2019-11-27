describe("roomba", function() {
  var Roomba = require('../../lib/roomba');

  beforeEach(function(){
    roomba = new Roomba();
  })

  it("runs without an error", function() {
    expect(() => {roomba.go()}).not.toThrow()
  });

});
