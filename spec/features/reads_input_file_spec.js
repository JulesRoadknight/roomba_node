describe("roomba", function() {
  var Roomba = require('../../lib/roomba');

  it("reads input file without error", function() {
    expect(() => {Roomba.readInput('input.txt')}).not.toThrow()
  });

  it("throws an error when given a nonexistent file", function() {
    expect(() => {Roomba.Roomba('whatFile?.txt')}).toThrow()
  });

  it("saves input to local variables", function() {
    Roomba.readInput('input.txt');
    expect(result.length).toBeGreaterThan(2);
  });

  it("readInput to extract 16 elements from input4.txt", function() {
    Roomba.readInput('./spec/input_files/input4.txt');
    expect(result.length).toBe(16);
  });

});
