describe("roomba", function() {
  var Roomba = require('../../lib/roomba');

  it("input.txt ends at 1,3 and cleans 1 dirt pile", function() {
    Roomba.Roomba();
    expect(finalResult).toBe('Final Position: 1,3. Cleaned 1 dirt pile(s)');
  });

  it("input3.txt goes nowhere from 1 1 and cleans nothing", function() {
    Roomba.Roomba('./spec/input_files/input_no_directions.txt');
    expect(finalResult).toBe('Final Position: 1,1. Cleaned 0 dirt pile(s)');
  });

  it("goes every direction once", function() {
    Roomba.Roomba('./spec/input_files/input3.txt');
    expect(finalResult).toBe('Final Position: 0,0. Cleaned 2 dirt pile(s)');
  });
});
