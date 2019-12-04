describe("roomba", function() {
  var Roomba = require('../../lib/roomba');

  it("Roomba cannot leave 0,0 in a 0,0 room, and cleans on the spot", function() {
    Roomba.Roomba('./spec/input_files/input5.txt');
    expect(finalResult).toBe('Final Position: 0,0. Cleaned 1 dirt pile(s)');
  });
});
